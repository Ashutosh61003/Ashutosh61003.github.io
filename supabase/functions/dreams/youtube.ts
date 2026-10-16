export function parseResource(value: string) {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error("Enter a valid YouTube URL.");
  }
  if (
    ![
      "youtube.com",
      "www.youtube.com",
      "m.youtube.com",
      "youtu.be",
      "www.youtu.be",
    ].includes(url.hostname)
  )
    throw new Error("Use a YouTube video or playlist link.");
  const playlist = url.searchParams.get("list");
  if (playlist && /^[\w-]{10,100}$/.test(playlist))
    return { kind: "playlist", id: playlist };
  const id = url.hostname.endsWith("youtu.be")
    ? url.pathname.slice(1)
    : url.searchParams.get("v") ||
      url.pathname.match(/^\/(?:shorts|embed|live)\/([\w-]+)/)?.[1];
  if (!id || !/^[\w-]{11}$/.test(id))
    throw new Error("That YouTube link is not supported.");
  return { kind: "video", id };
}
export function isoSeconds(value: string): number | null {
  const m = value?.match(
    /^P(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$/,
  );
  if (!m) return null;
  return (
    Number(m[1] || 0) * 86400 +
    Number(m[2] || 0) * 3600 +
    Number(m[3] || 0) * 60 +
    Number(m[4] || 0)
  );
}
export async function fetchMetadata(
  resource: { kind: string; id: string },
  key: string,
  fetcher = fetch,
) {
  async function get(path: string, params: Record<string, string>) {
    const url = new URL(`https://www.googleapis.com/youtube/v3/${path}`);
    Object.entries({ ...params, key }).forEach(([name, value]) =>
      url.searchParams.set(name, value),
    );
    const response = await fetcher(url, { signal: AbortSignal.timeout(15000) });
    const result = await response.json();
    if (!response.ok)
      throw new Error(
        "YouTube details are unavailable. Try again later or enter minutes manually.",
      );
    return result;
  }
  let title = "",
    ids: string[] = [];
  if (resource.kind === "playlist") {
    const info = await get("playlists", { part: "snippet", id: resource.id });
    if (!info.items?.length)
      throw new Error("This playlist is private or unavailable.");
    title = info.items[0].snippet.title;
    let pageToken = "";
    do {
      const page = await get("playlistItems", {
        part: "contentDetails",
        playlistId: resource.id,
        maxResults: "50",
        ...(pageToken ? { pageToken } : {}),
      });
      ids.push(
        ...(page.items || []).map((item: any) => item.contentDetails.videoId),
      );
      pageToken = page.nextPageToken || "";
      if (pageToken && ids.length >= 10000)
        throw new Error(
          "This playlist is too large to calculate. Enter its duration manually.",
        );
    } while (pageToken);
  } else ids = [resource.id];
  const found = new Map<string, any>();
  const unique = [...new Set(ids)];
  for (let i = 0; i < unique.length; i += 50) {
    const result = await get("videos", {
      part: "contentDetails,snippet,liveStreamingDetails",
      id: unique.slice(i, i + 50).join(","),
    });
    for (const video of result.items || []) found.set(video.id, video);
  }
  const videos = ids.map((id) => {
    const video = found.get(id);
    const seconds =
      video?.snippet?.liveBroadcastContent === "live" ||
      video?.snippet?.liveBroadcastContent === "upcoming"
        ? null
        : isoSeconds(video?.contentDetails?.duration);
    return { id, seconds, title: video?.snippet?.title || "Unavailable video" };
  });
  if (resource.kind === "video" && !found.size)
    throw new Error("This video is private or unavailable.");
  title ||= found.get(resource.id)?.snippet?.title || "YouTube video";
  const known = videos.filter((v) => v.seconds !== null);
  return {
    ...resource,
    title,
    videos,
    seconds: known.length
      ? known.reduce((sum, v) => sum + (v.seconds || 0), 0)
      : videos.length
        ? null
        : 0,
    partial: known.length !== videos.length,
    fetchedAt: new Date().toISOString(),
  };
}
