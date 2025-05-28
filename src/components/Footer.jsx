import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-100 py-8">
      <div className="align-element">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="flex items-center gap-0">
              <img
                src="/images/logo/Rahul.png"
                alt="Rahul Luthra Logo"
                className="logo-image no-gap"
              />
              <span className="text-emerald-600 text-xl font-bold leading-none">
                ahul&nbsp;Luthra
              </span>
            </Link>
            <p className="text-emerald-800 text-sm">
              © {currentYear} All rights reserved
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-emerald-700 font-bold mb-2">Quick Links</h3>
            <div className="flex flex-col items-center md:items-start gap-1">
              <Link
                to="/about"
                className="text-emerald-800 hover:text-emerald-600 transition"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="text-emerald-800 hover:text-emerald-600 transition"
              >
                Projects
              </Link>
              <Link
                to="/skills"
                className="text-emerald-800 hover:text-emerald-600 transition"
              >
                Skills
              </Link>
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-emerald-700 font-bold mb-2">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/rahulapps29"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-800 hover:text-emerald-600 text-xl transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/rahulluthra21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-800 hover:text-emerald-600 text-xl transition"
              >
                <FaLinkedin />
              </a>
              {/* <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-800 hover:text-emerald-600 text-xl transition"
              >
                <FaTwitter />
              </a> */}
              <a
                href="mailto:rahulluthra21@gmail.com"
                className="text-emerald-800 hover:text-emerald-600 text-xl transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Attribution (optional) */}
        <div className="mt-8 text-center text-emerald-700 text-xs">
          <p>Built with React and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
