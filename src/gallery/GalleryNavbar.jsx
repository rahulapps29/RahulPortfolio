// src/components/GalleryNavbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();

  const isActive = (to) => pathname === to;

  return (
    <nav className="g-nav">
      <div className="g-nav-container">
        {/* Brand */}
        <Link to="/gallery" className="g-brand" onClick={() => setOpen(false)}>
          Family&nbsp;Album
        </Link>

        {/* Burger (mobile) */}
        <div
          className={`burger ${open ? "toggle" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        {/* Tabs + Exit */}
        <div className={`g-tabs ${open ? "flex" : "hidden"} sm:flex`}>
          {albums.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`g-tab ${isActive(to) ? "active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}

          {/* Exit to main site */}
          <Link to="/" className="g-tab" onClick={() => setOpen(false)}>
            Exit&nbsp;↗
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default GalleryNavbar;
