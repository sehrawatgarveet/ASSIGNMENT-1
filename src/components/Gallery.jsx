import React, { useState, useRef } from "react";
import imgg from "../assets/imgg.jpg";

export default function Gallery() {
  const [images, setImages] = useState([imgg, imgg, imgg, imgg]);
  const [highlighted, setHighlighted] = useState(null);
  const fileRef = useRef();
  const scrollRef = useRef();

  function onAddImage(e) {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    const url = URL.createObjectURL(file);
    setImages((prev) => [...prev, url]);
    fileRef.current.value = "";
  }

  // Scroll functions
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="widget gallery-widget">
      <div className="gallery-header">
        <div className="gallery-title">Gallery</div>
        <div className="gallery-actions">
          <button className="add-btn" onClick={() => fileRef.current?.click()}>
            + ADD IMAGE
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={onAddImage}
          />
          <button className="nav-btn" onClick={scrollLeft}>
            {"<"}
          </button>
          <button className="nav-btn" onClick={scrollRight}>
            {">"}
          </button>
        </div>
      </div>

      {/* Horizontal scroll gallery */}
      <div
        className="gallery-row"
        ref={scrollRef}
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "20px",
          scrollBehavior: "smooth",
          paddingBottom: "8px",
        }}
      >
        {images.map((src, i) => (
          <div
            className="thumb"
            key={i}
            onClick={() => setHighlighted(i)}
            style={{
              flex: "0 0 30%",
              minWidth: "30%",
              maxWidth: "30%",
              border: highlighted === i ? "3px solid #FFD700" : "none",
              borderRadius: "12px",
              overflow: "hidden",
              background: "linear-gradient(180deg,#2f3336,#232629)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={src}
              alt={`img-${i}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      {/* Highlight overlay */}
      {highlighted !== null && (
        <div
          className="highlight-overlay"
          onClick={() => setHighlighted(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <img
            src={images[highlighted]}
            alt="highlighted"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      )}
    </div>
  );
}
