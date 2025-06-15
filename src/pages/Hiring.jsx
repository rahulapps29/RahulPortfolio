import React from "react";
import { Link } from "react-router-dom";
import { hiringData } from "../data/hiringData";
import "./Hiring.css"; // Optional: only if you added custom styles

const Hiring = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-white px-4 py-8 md:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        🚀 We Are Hiring
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {hiringData.map((job) => (
          <div
            key={job.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
            <p className="text-sm text-gray-500 mt-2">
              {job.location} • {job.rate}
            </p>
            <p className="text-gray-700 mt-4">
              {job.description.substring(0, 120)}...
            </p>
            <Link
              to={`/hiring/${job.id}`}
              className="mt-6 inline-block text-blue-600 hover:underline font-medium transition"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-16 text-sm text-gray-500">
        Managed by <span className="text-blue-700 font-semibold">Ronin</span>
      </div>
    </div>
  );
};

export default Hiring;
