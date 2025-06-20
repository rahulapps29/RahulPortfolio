// src/gallery/UploadPage.jsx
import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import "./UploadPage.css";

const albums = [
  { value: "me", label: "My Photos" },
  { value: "parents", label: "Parents" },
  { value: "brother", label: "Brother & Bhabhi" },
  { value: "family", label: "Family" },
];

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [album, setAlbum] = useState("me");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    setStatus("Uploading…");

    try {
      await axiosInstance.post(`/upload/${album}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setStatus("Uploaded ✔");
      setFile(null);
    } catch (err) {
      console.error(err);
      setStatus("Failed ❌");
    }
  };

  return (
    <section className="upload-page">
      <h2>Upload New Photo</h2>

      <form onSubmit={handleSubmit} className="upload-form">
        {/* Choose category */}
        <label className="select-label">
          Album&nbsp;
          <select
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            className="album-select"
          >
            {albums.map((a) => (
              <option key={a.value} value={a.value}>
                {a.label}
              </option>
            ))}
          </select>
        </label>

        {/* File picker */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button type="submit">Upload</button>
        {status && <span className="status">{status}</span>}
      </form>
    </section>
  );
};

export default UploadPage;
