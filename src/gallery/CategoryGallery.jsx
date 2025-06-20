// src/pages/gallery/CategoryGallery.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { albumMeta } from "../data/galleryMeta";
import "./CategoryGallery.css";

const CategoryGallery = () => {
  const { category } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!category) return;
    axiosInstance
      .get(`/images/${category}`)
      .then((r) => setImages(r.data.images || []))
      .catch(() => setImages([]));
  }, [category]);

  const { title, subtitle } = albumMeta[category] || {};

  return (
    <section className="album">
      <h1 className="hero-title">{title || "Gallery"}</h1>
      {subtitle && <p className="gallery-subtitle">{subtitle}</p>}

      <div className="grid">
        {images.length ? (
          images.map((src, i) => (
            <figure key={i} className="card">
              <a
                href={`https://billback.orbe.in${src}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`https://billback.orbe.in${src}`}
                  alt={`${category}-${i}`}
                  loading="lazy"
                />
              </a>
            </figure>
          ))
        ) : (
          <p className="empty">No photos yet.</p>
        )}
      </div>
    </section>
  );
};

export default CategoryGallery;
