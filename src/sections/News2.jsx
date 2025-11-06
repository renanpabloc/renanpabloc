// News2.jsx
import React, { useEffect, useRef, useState } from "react";

export default function News2() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const images = [
    {
      src: "/news/2.png",
      alt: "Monitor",
      mouse: "/events/mouse.gif",
      weight: "large",
      link: "https://santaportal.com.br/entretenimento/eleita-clarice-falcao-amazon-prime-video",
    },
    {
      src: "/news/3.png",
      alt: "Celular",
      mouse: "/events/mouse.gif",
      weight: "small",
      link: "https://santaportal.com.br/entretenimento/nenhum-de-nos-sesc-santos/",
    },
  ];

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
      className="select-none opacity-0 transition-opacity duration-700 section-fullscreen section-background-gray-light px-4 sm:px-6 md:px-12"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* MOBILE/TABLET */}
      <div className="block lg:hidden">
        {images.map((img, idx) => (
          <div key={idx} className="mb-10 flex flex-col items-center">
            <img
              src={img.src}
              alt={img.alt}
              draggable="false"
              className={`w-full h-auto object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]
                ${
                  img.weight === "large"
                    ? "max-h-[400px] sm:max-h-[400px] mt-10 [@media(max-width:375px)]:max-h-[240px]"
                    : "max-h-[250px] sm:max-h-[250px] [@media(max-width:375px)]:max-h-[180px]"
                }`}
            />
            <a
              href={img.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-black font-bold text-lg transition-all duration-300 hover:text-[#B3FF5C] hover:drop-shadow-[0_0_10px_#B3FF5C]"
            >
              disponível para ler aqui
            </a>
            <img
              src={img.mouse}
              alt="Scroll mouse animation"
              className="w-8 mt-2 opacity-70"
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 container mt-4">
        {images.map((img, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center">
            <img
              src={img.src}
              alt={img.alt}
              draggable="false"
              className={`w-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)] ${
                img.weight === "large" ? "h-[500px]" : "h-[500px]"
              }`}
            />
            <a
              href={img.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-black font-bold text-lg transition-all duration-300 hover:text-[#B3FF5C] hover:drop-shadow-[0_0_10px_#B3FF5C]"
            >
              disponível para ler aqui
            </a>
            <img
              src={img.mouse}
              alt="Scroll mouse animation"
              className="w-10 mt-2 opacity-70"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
