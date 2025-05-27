import React from "react";
import { useParams, Link } from "react-router-dom";
import { hiringData } from "../data/hiringData";
import "./HiringDetail.css"; // Import the dedicated CSS

const HiringDetail = () => {
  const { jobId } = useParams();
  const job = hiringData.find((j) => j.id === jobId);

  if (!job) return <p className="p-8 text-red-600">Job not found.</p>;

  return (
    <div className="job-detail-container">
      <div className="job-detail-content">
        <h1 className="job-detail-title">{job.title}</h1>
        <p className="job-detail-meta">
          <strong>Location:</strong> {job.location}
        </p>
        <p className="job-detail-meta">
          <strong>Rate:</strong> {job.rate}
        </p>

        <hr className="job-divider" />

        <div className="job-detail-description">
          {job.fullDescription.split("\n").map((line, index) => (
            <p key={index}>{line.trim()}</p>
          ))}
        </div>

        <Link to="/hiring" className="back-link">
          ← Back to All Openings
        </Link>

        <p className="manager-credit">
          Managed by <span className="manager-name">Ronin</span>
        </p>
      </div>
    </div>
  );
};

export default HiringDetail;
