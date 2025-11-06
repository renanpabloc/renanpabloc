// Post.jsx
import React, { useEffect, useRef, useState } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

export default function Post() {
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [current] = useState(0);

  const posts = [
    { src: "/news/post-1.png", alt: "Post 1" },
    { src: "/news/post-2.png", alt: "Post 2" },
    { src: "/news/post-3.png", alt: "Post 3" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add("opacity-100");
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  const desktopImage = { src: "/news/desktop.png", alt: "Posts" };

  const openGalleryAt = (index) => {
    galleryRef.current?.instance?.openGallery(index);
  };

  return (
    <section
      ref={sectionRef}
      id="posts"
      aria-labelledby="posts-title"
      className="section-background-green-dark opacity-0 transition-opacity duration-700 section-fullscreen flex flex-col lg:flex-row items-center justify-center relative px-4 sm:px-6 md:px-12"
      style={{
        backgroundColor: "#0A0A0A",
        color: "#D6FF1A",
      }}
    >
      {/* ===== TÍTULO ===== */}
      <div className="flex-1 flex justify-center items-center text-center lg:text-left">
        <h2
          id="posts-title"
          className="
            text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5vw]
            font-extrabold uppercase text-[#D6FF1A]
            mt-28 sm:mt-32 lg:mt-38 lg:mb-0 md:mb-24
            max-[480px]:mt-24 max-[480px]:text-[12vw]
          "
          style={{
            fontFamily: "Impact, sans-serif",
            lineHeight: "0.0",
          }}
        >
          POSTS
        </h2>
      </div>

      {/* ===== GALERIA ===== */}
      <div className="flex-1 flex justify-center items-center relative w-full">
        {/* DESKTOP */}
        <div className="hidden lg:flex justify-center items-center w-full h-auto">
          <LightGallery
            plugins={[lgZoom, lgThumbnail]}
            mode="lg-fade"
            elementClassNames="w-full flex justify-center"
          >
            <a href={desktopImage.src}>
              <img
                src={desktopImage.src}
                alt={desktopImage.alt}
                draggable="false"
                className="
                  object-contain
                  w-full max-w-[1520px] mb-30
                  drop-shadow-[0_10px_15px_rgba(0,0,0,0.6)]
                  cursor-pointer
                  transition-transform duration-300 
                "
              />
            </a>
          </LightGallery>
        </div>

        {/* MOBILE / TABLET */}
        <div className="mb-40 flex lg:hidden justify-center items-center relative w-full">
          <LightGallery
            onInit={(ref) => (galleryRef.current = ref)}
            plugins={[lgZoom, lgThumbnail]}
            mode="lg-fade"
            dynamic
            dynamicEl={posts.map((img) => ({
              src: img.src,
              thumb: img.src,
            }))}
          />

          <div className="relative w-full flex justify-center items-center">
            {posts.map((img, index) => {
              const position = (index - current + posts.length) % posts.length;
              let transform = "";
              let opacity = 1;
              let zIndex = 1;

              if (position === 0) {
                transform = "translateX(0) scale(1)";
                zIndex = 3;
              } else if (position === 1) {
                transform = "translateX(40%) scale(0.8)";
                zIndex = 2;
                opacity = 0.7;
              } else {
                transform = "translateX(-40%) scale(0.8)";
                zIndex = 2;
                opacity = 0.7;
              }

              return (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  draggable="false"
                  onClick={() => openGalleryAt(index)}
                  className="absolute w-[70%] sm:w-[60%] md:w-[55%] max-w-[400px] transition-all duration-700 ease-in-out drop-shadow-[0_8px_15px_rgba(0,0,0,0.6)] rounded-xl cursor-pointer"
                  style={{
                    transform,
                    opacity,
                    zIndex,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== RODAPÉ ===== */}
      <div className="absolute bottom-4 mb-10 left-0 w-full text-center text-xs sm:text-sm font-medium text-[#D6FF1A]">
        *Trabalho realizado durante minha atuação na{" "}
        <a
          href="https://summercomunicacao.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D6FF1A] hover:opacity-70 transition-opacity no-underline"
          style={{ textDecoration: "none" }}
        >
          Summer Comunicação
        </a>
      </div>
    </section>
  );
}
