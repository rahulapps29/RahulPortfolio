// src/pages/gallery/GalleryLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import GalleryNavbar from "./GalleryNavbar";

const GalleryLayout = () => (
  <div className="gallery-shell">
    <GalleryNavbar />
    <main className="gallery-content">
      <Outlet />
    </main>
  </div>
);

export default GalleryLayout;
