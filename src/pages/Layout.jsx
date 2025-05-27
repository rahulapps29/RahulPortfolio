import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-4 bg-gray-50">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
