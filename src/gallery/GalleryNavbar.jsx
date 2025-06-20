// src/components/GalleryNavbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./GalleryNavbar.css";

const albums = [
  { to: "/gallery/all", label: "All" },
  { to: "/gallery/me", label: "My Photos" },
  { to: "/gallery/parents", label: "Parents" },
  { to: "/gallery/brother", label: "Brother & Bhabhi" },
  { to: "/gallery/family", label: "Family" },
];

const GalleryNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="g-nav bg-emerald-50">
      <div className="g-nav-container">
        {/* Brand */}
        <NavLink
          to="/gallery"
          className="g-brand"
          onClick={() => setOpen(false)}
        >
          Family&nbsp;Album
        </NavLink>

        {/* Burger (mobile) */}
        <div
          className={`burger ${open ? "toggle" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        {/* Tab links */}
        <div className={`g-tabs ${open ? "flex" : "hidden"} sm:flex`}>
          {albums.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive ? "g-tab active" : "g-tab"
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default GalleryNavbar;
