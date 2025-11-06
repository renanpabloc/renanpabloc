// src/sections/ContactSection.jsx
import React, { useEffect, useRef } from "react";
import Footer from "../components/Footer";

export default function ContactSection() {
  const sectionRef = useRef(null);

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

  return (
    <section
      id="contato"
      ref={sectionRef}
      aria-labelledby="contato-title"
      className="section-background-green-dark opacity-0 transition-opacity duration-700 section-fullscreen relative flex flex-col items-center"
      style={{
        backgroundColor: "#0A0A0A",
        color: "#D6FF1A",
        justifyContent: "flex-start",
        paddingTop: "10vh",
      }}
    >
      <div className="container w-full">
        {/* ===== TÍTULO ===== */}
        <h2
          id="contato-title"
          className="
            text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[7vw] xl:text-[6vw]
            font-extrabold uppercase text-[#D6FF1A]
            text-start
            mb-12 sm:mb-16
          "
          style={{
            fontFamily: "Impact, sans-serif",
            lineHeight: "0.85",
            letterSpacing: "-0.03em",
          }}
        >
          ENTRE EM CONTATO
        </h2>

        {/* ===== CONTATOS ===== */}
        <div
          className="
            flex flex-col sm:flex-row sm:gap-16 md:gap-24
            items-start sm:items-end
            text-left
            text-base sm:text-lg md:text-xl font-semibold
            space-y-6 sm:space-y-0
          "
        >
          {/* WhatsApp */}
          <div className="flex flex-col">
            <span className="text-[#D6FF1A] font-bold text-lg sm:text-xl">WhatsApp</span>
            <a
              href="https://api.whatsapp.com/send/?phone=13988487244&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white hover:text-[#D6FF1A] transition-colors"
            >
              (13) 98848-7244
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col">
            <span className="text-[#D6FF1A] font-bold text-lg sm:text-xl">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/renan-pablo-a03641138/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white hover:text-[#D6FF1A] transition-colors"
            >
              Renan Pablo
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <span className="text-[#D6FF1A] font-bold text-lg sm:text-xl">E-mail</span>
            <a
              href="mailto:renan218_@hotmail.com"
              className="underline text-white hover:text-[#D6FF1A] transition-colors"
            >
              renan218_@hotmail.com
            </a>
          </div>
        </div>
      </div>

      {/* ===== ÍCONE INFERIOR ESQUERDO ===== */}
      <div className="absolute bottom-20  container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#D6FF1A"
          className="w-20 h-20 sm:w-24 sm:h-24 "
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 7L7 17m0 0h10M7 17V7" />
        </svg>
      </div>

      <Footer />
    </section>
  );
}
