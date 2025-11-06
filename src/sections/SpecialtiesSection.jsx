import React, { useEffect, useRef } from "react";


export default function SpecialtiesSection() {
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
      id="especializações"
      ref={sectionRef}
      aria-labelledby="especializacoes-title"
      className="section-background-green-dark opacity-0 transition-opacity duration-700 section-fullscreen"
      style={{
        backgroundColor: "#0A0A0A",
        color: "#D6FF1A",
      }}
    >
      {/* ===== CONTAINER RESPONSIVO ===== */}
      <div className="container pb-16 md:pb-24 lg:pb-28">
        {/* ===== TÍTULO ===== */}
        <h2
          id="especializacoes-title"
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
          ESPECIALIZAÇÕES
        </h2>


        {/* ===== GRID DE CARDS ===== */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-0 sm:gap-8 md:gap-10 lg:gap-12
            mt-12
          "
          role="list"
        >
          {/* === CARD 1 === */}
          <article
            role="region"
            aria-labelledby="card-jornalismo"
            tabIndex={0}
            className="
              w-full relative rounded-[20px] border border-[#D6FF1A]/20
              bg-[rgba(255,255,255,0.02)]
              flex flex-col justify-start overflow-hidden
              transition-transform duration-300 hover:scale-[1.02]
              hover:border-[#D6FF1A]/60
            "
          >
            <div className="bg-[#D6FF1A] px-5 py-3 rounded-b-2xl">
              <h3
                id="card-jornalismo"
                className="text-black font-bold text-sm sm:text-base tracking-wide text-center"
              >
                JORNALISMO
              </h3>
            </div>


            <div className="p-6 max-[480px]:p-4 text-gray-200 text-sm sm:text-base leading-relaxed space-y-3 max-[480px]:space-y-2">
              <p>
                Apuração, pesquisa, entrevistas e produção textual para portais
                de entretenimento e cultura.
              </p>
              <p>Aplicação de SEO, redação web e domínio de CMS (WordPress).</p>
            </div>
          </article>


          {/* === CARD 2 === */}
          <article
            role="region"
            aria-labelledby="card-comunicacao"
            tabIndex={0}
            className="
              w-full relative rounded-[20px] border border-[#D6FF1A]/20
              bg-[rgba(255,255,255,0.02)]
              flex flex-col justify-start overflow-hidden
              transition-transform duration-300 hover:scale-[1.02]
              hover:border-[#D6FF1A]/60
            "
          >
            <div className="bg-[#D6FF1A] px-5 py-3 rounded-b-[2xl]">
              <h3
                id="card-comunicacao"
                className="text-black font-bold text-sm sm:text-base tracking-wide text-center"
              >
                COMUNICAÇÃO INSTITUCIONAL
              </h3>
            </div>


            <div className="p-6 max-[480px]:p-4 text-gray-200 text-sm sm:text-base leading-relaxed space-y-3 max-[480px]:space-y-2">
              <p>
                Experiência em assessoria de comunicação pública: gestão de
                redes, atendimento à imprensa e comunicação interna.
              </p>
              <p>Construção de imagem institucional com clareza e propósito.</p>
            </div>
          </article>


          {/* === CARD 3 === */}
          <article
            role="region"
            aria-labelledby="card-redacao"
            tabIndex={0}
            className="
              w-full relative rounded-[20px] border border-[#D6FF1A]/20
              bg-[rgba(255,255,255,0.02)]
              flex flex-col justify-start overflow-hidden
              transition-transform duration-300 hover:scale-[1.02]
              hover:border-[#D6FF1A]/60
            "
          >
            <div className="bg-[#D6FF1A] px-5 py-3 rounded-b-2xl">
              <h3
                id="card-redacao"
                className="text-black font-bold text-sm sm:text-base tracking-wide text-center"
              >
                REDAÇÃO PUBLICITÁRIA
              </h3>
            </div>


            <div className="p-6 max-[480px]:p-4 text-gray-200 text-sm sm:text-base leading-relaxed space-y-3 max-[480px]:space-y-2">
              <p>
                Criação de conteúdo para marcas nos segmentos de hotelaria,
                saúde, estética e varejo.
              </p>
              <p>
                Produção de textos para redes sociais, sites, campanhas e email
                marketing.
              </p>
              <p>Foco em identidade, público e voz de marca.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}


