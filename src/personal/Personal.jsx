import React from "react";
import { Routes, Route } from "react-router-dom";
import { PersonalProvider } from "./hooks";
import { Shell } from "./Shared";
import {
  FrontPage,
  AboutPage,
  CollectionPage,
  DetailPage,
  ConnectPage,
  NotFound,
} from "./Public";
import Admin from "./Admin";
import Messages from "./Messages";
import { SpacePage, SpacesPage } from "./Spaces";
import "./personal.css";
export default function Personal() {
  return (
    <PersonalProvider>
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<FrontPage />} />
          <Route path="about" element={<AboutPage />} />
          {["opinions", "beliefs", "projects", "story"].map((type) => (
            <React.Fragment key={type}>
              <Route path={type} element={<CollectionPage type={type} />} />
              <Route
                path={`${type}/:id`}
                element={<DetailPage type={type} />}
              />
            </React.Fragment>
          ))}
          <Route path="connect" element={<ConnectPage />} />
          <Route path="messages" element={<Messages />} />
          <Route path="spaces" element={<SpacesPage />} />
          <Route path="spaces/:id" element={<SpacePage />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </PersonalProvider>
  );
}
