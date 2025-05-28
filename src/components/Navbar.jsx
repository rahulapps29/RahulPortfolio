import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../data";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-emerald-100 navbar">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 justify-between">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="text-3xl font-bold flex items-center"
          >
            <span className="flex items-center gap-0">
              <img
                src="/images/logo/Rahul_nbg.png"
                alt="Rahul Luthra Logo"
                className="logo-image no-gap"
              />
              <span className="text-emerald-600 leading-none">
                ahul&nbsp;Luthra
              </span>
            </span>
          </Link>

          {/* Burger icon (visible only on small screens) */}
          <div
            className={`burger sm:hidden ${menuOpen ? "toggle" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>

        {/* Nav Links */}
        <div
          className={`nav-links flex-col sm:flex-row sm:flex gap-x-3 ${
            menuOpen ? "flex" : "hidden"
          } sm:!flex`}
        >
          {links.map(({ id, href, text }) => (
            <Link
              key={id}
              to={href}
              onClick={handleLinkClick}
              className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300 py-2 sm:py-0"
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
