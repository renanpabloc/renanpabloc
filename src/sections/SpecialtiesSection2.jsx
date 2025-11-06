import React, { useEffect, useRef, useState } from "react";

export default function SpecialtiesSection2() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [typedText, setTypedText] = useState(["", "", "", "", "", ""]);

  const lines = [
    "MEU PROCESSO UNE",
    "OBSERVAÇÃO, PESQUISA E",
    "SENSIBILIDADE ESTÉTICA",
    "PARA TRANSFORMAR CONCEITOS",
    "EM EXPERIÊNCIAS VISUAIS",
    "POR MEIO DAS PALAVRAS."
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

  useEffect(() => {
    if (!visible) return;

    let lineIndex = 0;
    let charIndex = 0;
    const newTyped = [...typedText];

    const typeInterval = setInterval(() => {
      if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
          newTyped[lineIndex] += lines[lineIndex][charIndex];
          setTypedText([...newTyped]);
          charIndex++;
        } else {
          lineIndex++;
          charIndex = 0;
          setCurrentLine(lineIndex);
        }
      } else {
        clearInterval(typeInterval);
      }
    }, 35); // velocidade ajustada: 35ms por caractere

    return () => clearInterval(typeInterval);
  }, [visible]);

  return (
    <section
      id="especializações2"
      ref={sectionRef}
      aria-labelledby="processo-title"
      className="select-none opacity-0 transition-opacity duration-700 section-fullscreen section-background-gray-light flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 md:px-12"
      style={{
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="container max-w-6xl text-center px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-start text-left space-y-10">
          <div className="w-14 h-14 sm:w-16 sm:h-16 mb-6">
            <img
              src="/specialties/www.svg"
              alt="Ícone de globo"
              className="w-full h-full object-contain"
              draggable="false"
            />
          </div>

          <div
            id="processo-title"
            className="
              text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3.5vw]
              font-extrabold uppercase leading-tight tracking-tight text-black
              whitespace-pre-line
            "
            style={{
              fontFamily: "Arial Black, Impact, sans-serif",
              lineHeight: "1.15",
            }}
          >
            {typedText.map((line, i) => (
              <p
                key={i}
                className={
                  i === 0 || i === 5
                    ? "underline decoration-black"
                    : "font-black"
                }
              >
                {line}
                {i === currentLine && visible && (
                  <span className="animate-pulse">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
