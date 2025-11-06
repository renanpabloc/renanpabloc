import React, { useEffect, useRef } from "react";

export default function SkillsSection() {
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
      id="competências"
      ref={sectionRef}
      aria-labelledby="competencias-title"
      className="section-background-green-dark opacity-0 transition-opacity duration-700 section-fullscreen"
      style={{
        backgroundColor: "#0A0A0A",
        color: "#D6FF1A",
      }}
    >
      {/* ===== CONTAINER ===== */}
      <div className="container pb-16 md:pb-24 lg:pb-28">
        {/* ===== TÍTULO ===== */}
        <h2
          id="competencias-title"
          className="
            text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5vw]
            font-extrabold uppercase text-[#D6FF1A]
            mt-28 sm:mt-32 lg:mt-20 lg:mb-30 md:mb-24
            max-[480px]:mt-24 max-[480px]:text-[12vw]
            sm:mb-5
          "
          style={{
            fontFamily: "Impact, sans-serif",
            lineHeight: "0.0",
          }}
        >
          COMPETÊNCIAS
        </h2>

        {/* ===== GRID ===== */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3
            gap-0 sm:gap-8 md:gap-10 lg:gap-12
            mt-12
          "
          role="list"
        >
          {/* === CARD 1 === */}
          <article
            role="region"
            aria-labelledby="card-skills"
            tabIndex={0}
            className="
              w-full relative rounded-[20px] border border-[#D6FF1A]/20
              bg-[rgba(255,255,255,0.02)]
              flex flex-col justify-start overflow-hidden
              transition-transform duration-300 hover:scale-[1.02]
              hover:border-[#D6FF1A]/60
            "
          >
            <div className="bg-[#D6FF1A] px-5 max-[480px]:py-1 py-3 rounded-b-2xl">
              <h3
                id="card-skills"
                className="text-black font-bold text-sm sm:text-base tracking-wide text-center"
              >
                SKILLS
              </h3>
            </div>

            <div className="p-6 text-gray-200 text-sm sm:text-base leading-relaxed space-y-3">
              <ul className="lg:space-y-2">
                <li>Redação jornalística</li>
                <li>Storytelling e copywriting</li>
                <li>Planejamento de conteúdo</li>
                <li>Comunicação institucional</li>
                <li>SEO, UX Writing e otimização de texto</li>
                <li>Roteiro e adaptação de textos</li>
              </ul>
            </div>
          </article>

          {/* === CARD 2 === */}
          <article
            role="region"
            aria-labelledby="card-softwares"
            tabIndex={0}
            className="
              w-full relative rounded-[20px] border border-[#D6FF1A]/20
              bg-[rgba(255,255,255,0.02)]
              flex flex-col justify-start overflow-hidden
              transition-transform duration-300 hover:scale-[1.02]
              hover:border-[#D6FF1A]/60
            "
          >
            <div className="bg-[#D6FF1A] px-5 max-[480px]:py-1 py-3 rounded-b-2xl">
              <h3
                id="card-softwares"
                className="text-black font-bold text-sm sm:text-base tracking-wide text-center"
              >
                SOFTWARES
              </h3>
            </div>

            <div className="p-6 text-gray-200 text-sm sm:text-base leading-relaxed space-y-3">
              <ul className="lg:space-y-2">
                <li>WordPress</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>InDesign</li>
                <li>Canva</li>
                <li>Google Workspace</li>
              </ul>
            </div>
          </article>

          {/* === CARD 3 === */}
          <article
            role="region"
            aria-labelledby="card-plataformas"
            tabIndex={0}
            className="
              w-full relative rounded-[20px] border border-[#D6FF1A]/20
              bg-[rgba(255,255,255,0.02)]
              flex flex-col justify-start overflow-hidden
              transition-transform duration-300 hover:scale-[1.02]
              hover:border-[#D6FF1A]/60
            "
          >
            <div className="bg-[#D6FF1A] px-5 max-[480px]:py-1 py-3 rounded-b-2xl">
              <h3
                id="card-plataformas"
                className="text-black font-bold text-sm sm:text-base tracking-wide text-center"
              >
                PLATAFORMAS
              </h3>
            </div>

            <div className="p-6 max-[480px]:p-4 text-gray-200 text-sm sm:text-base leading-relaxed">
              <div className="flex flex-row sm:flex-col gap-6 max-[480px]:gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-[#D6FF1A] mb-1">Canais:</p>
                  <ul className="lg:list-disc lg:list-inside">
                    <li>Sites</li>
                    <li>Blogs</li>
                    <li>Jornais</li>
                  </ul>
                </div>

                <div className="flex-1">
                  <p className="font-semibold text-[#D6FF1A] mb-1">Redes sociais:</p>
                  <ul className="lg:list-disc lg:list-inside">
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>LinkedIn</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}