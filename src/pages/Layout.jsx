import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-2 px-0.3 bg-gray-50">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
