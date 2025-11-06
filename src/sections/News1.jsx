// News1.jsx
import React, { useEffect, useRef, useState } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

// Estilos do LightGallery
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

export default function News1() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Lista de imagens
  const images = [
    { src: "/news/1.png", alt: "Notícia 1", width: 1080, height: 720 },
  ];

  // Fade-in quando entra na viewport
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="select-none opacity-0 transition-opacity duration-700 section-fullscreen section-background-gray-light flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 md:px-12"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* TEXTO */}
      <div className="flex-1 flex flex-col justify-center items-start mb-8 lg:mb-0 lg:mr-8 relative z-10">
        <h2
          className="
            text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] xl:text-[9vw]
            font-extrabold uppercase leading-tight tracking-tight text-black
            whitespace-pre
          "
          style={{ fontFamily: "Arial Black, Impact, sans-serif" }}
        >
          REPÓRTER
          WEB
        </h2>
      </div>

      {/* IMAGEM / GALERIA */}
      <div className="flex-1 flex justify-center items-center relative lg:-mt-32 z-20 w-full">
        {/* MOBILE/TABLET */}
        <div className="block lg:hidden w-full">
          <LightGallery
            plugins={[lgZoom, lgThumbnail]}
            mode="lg-fade"
            elementClassNames="custom-lightgallery"
          >
            {images.map((img, idx) => (
              <a key={idx} href={img.src}>
                <img
                  src={img.src}
                  alt={img.alt}
                  draggable="false"
                  className="
                    w-full
                    h-auto
                    object-contain
                    mb-4
                    drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]
                    cursor-pointer
                  "
                />
              </a>
            ))}
          </LightGallery>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex justify-center items-center w-full">
          <img
            src={images[0].src}
            alt={images[0].alt}
            draggable="false"
            className="
              object-contain 
              w-full max-w-[1050px] xl:max-w-[1080px]
              max-h-[65vh] mb-20
              drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]
            "
          />
        </div>
      </div>
    </section>
  );
}
