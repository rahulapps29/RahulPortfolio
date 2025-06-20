import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";
import "./Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);

  /* fetch on mount */
  useEffect(() => {
    axiosInstance
      .get("/images")
      .then((res) => setImages(res.data.images || []))
      .catch(() => setImages([]));
  }, []);

  return (
    <section className="proposal-page">
      <header className="hero">
        <h1>Our Journey in Pictures</h1>
        <p className="subtitle">
          A curated album of memories for our future together.
        </p>
      </header>

      <div className="gallery">
        {images.length ? (
          images.map((img, i) => (
            <figure key={i} className="gallery-item">
              <a
                href={`https://billback.orbe.in${img}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`https://billback.orbe.in${img}`}
                  alt={`Memory ${i + 1}`}
                  loading="lazy"
                />
              </a>
            </figure>
          ))
        ) : (
          <p className="empty-msg">No photos yet.</p>
        )}
      </div>
    </section>
  );
};

export default Gallery;
