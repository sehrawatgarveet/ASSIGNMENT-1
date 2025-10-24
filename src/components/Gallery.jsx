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
        <div className="bg-[#171717] px-7 py-3  rounded-[20px] font-semibold text-[18px]">Gallery</div>
        <div className="gallery-actions">
          <button className="font-semibold text-[14px] text-white  rounded-full py-3 px-4 "
            style={{
              boxShadow: `
                inset 0 2px 4px rgba(255, 255, 255, 0.2),  /* your inset white shadow */
                8px 8px 8px rgba(0, 0, 0, 0.5),             /* your normal shadow */
                 -4px -3px 7px rgba(255, 255, 255, 0.3) 
                `,
            }}
          onClick={() => fileRef.current?.click()}>
            + ADD IMAGE
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={onAddImage}
          />
          <button className="nav-btn active:scale-95 active:!bg-gradient-to-b from-[#5b6c84] to-[#2e343d] transition-transform duration-150" onClick={scrollLeft}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#fff" d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z" /></svg>
          </button>
          <button className="nav-btn active:scale-95 active:!bg-gradient-to-b from-[#5b6c84] to-[#2e343d] transition-transform duration-150" onClick={scrollRight}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#fff" d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" /></svg>
          </button>
        </div>
      </div>

      {/* Horizontal scroll gallery */}
      <div
        className="gallery-row py-[25px]"
        ref={scrollRef}
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "20px",
          scrollBehavior: "smooth",
          paddingBottom: "8px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
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
