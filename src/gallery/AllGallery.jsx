// src/pages/gallery/AllGallery.jsx
import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { albumMeta, albumKeys } from "../data/galleryMeta";
import "./AllGallery.css";

const AllGallery = () => {
  const [albums, setAlbums] = useState({});

  useEffect(() => {
    Promise.all(albumKeys.map((key) => axiosInstance.get(`/images/${key}`)))
      .then((responses) => {
        const data = {};
        responses.forEach((res, idx) => {
          const key = albumKeys[idx];
          data[key] = res.data.images || [];
        });
        setAlbums(data);
      })
      .catch(() => setAlbums({}));
  }, []);

  return (
    <section className="album">
      <h1 className="hero-title">All Memories</h1>

      {albumKeys.map((key) => (
        <div key={key} style={{ marginBottom: "2rem" }}>
          <h2>{albumMeta[key]?.title}</h2>
          <p className="gallery-subtitle">{albumMeta[key]?.subtitle}</p>

          <div className="grid">
            {(albums[key] || []).map((src, i) => (
              <figure key={src} className="card">
                <a
                  href={`https://billback.orbe.in${src}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={`https://billback.orbe.in${src}`}
                    alt={`${key}-${i}`}
                    loading="lazy"
                  />
                </a>
              </figure>
            ))}
            {(!albums[key] || albums[key].length === 0) && (
              <p className="empty">No photos yet.</p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default AllGallery;
