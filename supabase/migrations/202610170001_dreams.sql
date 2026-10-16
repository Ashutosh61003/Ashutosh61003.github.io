-- All browser access goes through the Dreams function. No direct client writes.
create table public.dreams_workspace (
  id integer primary key check (id = 1),
  revision integer not null default 0,
  data jsonb not null default '{"goals":[],"steps":[],"pinnedStepId":null}'::jsonb,
  updated_at timestamptz not null default now()
);
insert into public.dreams_workspace (id) values (1) on conflict do nothing;
alter table public.dreams_workspace enable row level security;
revoke all on public.dreams_workspace from anon, authenticated;

create table public.dreams_metadata (
  resource_key text primary key,
  data jsonb not null,
  fetched_at timestamptz not null default now()
);
alter table public.dreams_metadata enable row level security;
revoke all on public.dreams_metadata from anon, authenticated;

create table public.dreams_rate_limits (
  bucket text primary key,
  attempts integer not null default 1,
  expires_at timestamptz not null
);
alter table public.dreams_rate_limits enable row level security;
revoke all on public.dreams_rate_limits from anon, authenticated;

create function public.dreams_take_attempt(p_bucket text, p_limit integer, p_seconds integer)
returns boolean language plpgsql security definer set search_path = public as $$
declare count integer;
begin
  insert into dreams_rate_limits(bucket, attempts, expires_at)
  values (p_bucket, 1, now() + make_interval(secs => p_seconds))
  on conflict (bucket) do update set
    attempts = case when dreams_rate_limits.expires_at <= now() then 1 else dreams_rate_limits.attempts + 1 end,
    expires_at = case when dreams_rate_limits.expires_at <= now() then now() + make_interval(secs => p_seconds) else dreams_rate_limits.expires_at end
  returning attempts into count;
  delete from dreams_rate_limits where expires_at < now() - interval '1 day';
  return count <= p_limit;
end; $$;
revoke all on function public.dreams_take_attempt(text, integer, integer) from public, anon, authenticated;
grant execute on function public.dreams_take_attempt(text, integer, integer) to service_role;
