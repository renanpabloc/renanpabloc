// EventsScene.jsx
import React, { useEffect, useRef, useState } from "react";

export default function EventsScene() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="select-none opacity-0 transition-opacity duration-700 section-fullscreen section-background-gray-light flex flex-col items-center justify-center bg-[#B3FF5C] px-4 sm:px-6 md:px-12"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div className="container relative flex flex-col items-center justify-center">
        {/* GIF superior esquerdo */}
        <img
          src="/events/loading.gif"
          alt="Loading"
          className={`absolute top-4 left-4 w-0 sm:w-20 md:w-24 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
          style={{ transitionDelay: "0.3s" }}
        />

        {/* Imagem central */}
        <img
          src="/events/manchete2.png"
          alt="Manchete principal"
          className={`w-[80%] sm:w-[70%] md:w-[100%] max-w-[800px] h-auto transition-all duration-700 ease-out ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ transitionDelay: "0.8s" }}
          draggable="false"
        />

        {/* Texto e link abaixo da imagem + mouse.gif ao lado */}
        <div
          className={`mt-6 flex items-center justify-center gap-3 text-center transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "1.1s" }}
        >
          <p className="text-black text-lg font-semibold">
            <a
              href="https://www.diariodolitoral.com.br/sao-vicente/secretaria-de-educacao-lanca-projeto-piloto-de-educacao-financeira/166378/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-bold transition-all duration-300 hover:text-[#B3FF5C] hover:drop-shadow-[0_0_10px_#B3FF5C]"
            >
              disponível para ler aqui
            </a>
          </p>

          {/* GIF do mouse ao lado da frase */}
          <img
            src="/events/mouse.gif"
            alt="Mouse"
            className={`w-10 sm:w-12 md:w-14 transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "1.3s" }}
            draggable="false"
          />
        </div>

        {/* GIF inferior direito */}
        <img
          src="/events/shape.png"
          alt="Forma"
          className={`absolute bottom-4 right-5 w-0 sm:w-20 md:w-24 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "1.3s" }}
        />


      </div>
    </section>
  );
}
