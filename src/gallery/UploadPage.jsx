// src/gallery/UploadPage.jsx
import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";
import "./UploadPage.css";

const API_ORIGIN = "https://billback.orbe.in"; // same as baseURL

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
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const res = await axiosInstance.get(`/images/${album}`);
      const fullUrls = (res.data.images || []).map(
        (imgPath) => `${API_ORIGIN}${imgPath}`
      );
      setImages(fullUrls);
    } catch (err) {
      console.error("Failed to fetch images", err);
      setImages([]);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [album]);

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
      fetchImages();
    } catch (err) {
      console.error("Upload failed", err);
      setStatus("Failed ❌");
    }
  };

  const handleDelete = async (imgUrl) => {
    const filename = imgUrl.substring(imgUrl.lastIndexOf("/") + 1);
    if (!window.confirm(`Delete ${filename}?`)) return;

    try {
      await axiosInstance.delete(`/images/${album}/${filename}`);
      setImages((prev) => prev.filter((img) => img !== imgUrl));
    } catch (err) {
      console.error("Delete failed", err);
      alert("Unable to delete file");
    }
  };

  return (
    <section className="upload-page">
      <h2>Upload New Photo</h2>

      <form onSubmit={handleSubmit} className="upload-form">
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

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button type="submit">Upload</button>
        {status && <span className="status">{status}</span>}
      </form>

      <div className="gallery-preview">
        {images.map((imgUrl) => (
          <div className="img-item" key={imgUrl}>
            <img src={imgUrl} alt="Uploaded" />
            <button className="delete-btn" onClick={() => handleDelete(imgUrl)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UploadPage;
