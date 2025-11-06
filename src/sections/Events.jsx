import React from "react";

export default function Events() {

  const description =
    "Ao longo da minha trajetória, desenvolvi habilidades práticas, capacidade de adaptação e de trabalho em equipe, contribuindo para o crescimento das organizações em que atuei.";

  return (
    <section
      id="eventos"
      className="select-none opacity-0 transition-opacity duration-700 section-fullscreen section-background-gray-light flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 md:px-12 bg-[#B3FF5C]"
    >
      <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-16">
        {/* Coluna Esquerda */}
        <div className="flex flex-col mt-20">
          {/* Título com fonte igual ao exemplo */}
<div
  id="processo-title"
  className="
    text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[4.5vw]
    font-extrabold uppercase leading-tight tracking-tight text-black
    whitespace-pre-line origin-left
    scale-y-[1.6] mb-15
  "
  style={{
    fontFamily: "'Haettenschweiler', 'Impact', sans-serif",
    lineHeight: "0.8",
    letterSpacing: "0.10em",
  }}
>
  {/* MOBILE: 1 linha */}
  <span className="block sm:hidden">
    COBERTURA DE EVENTOS
  </span>

  {/* DESKTOP: 2 linhas */}
  <span className="hidden sm:block">
    COBERTURA{"\n"}DE EVENTOS
  </span>
</div>


          {/* Card Manchete + Faixa */}
          <div className="border-4 border-black rounded-[50px] overflow-hidden shadow-lg bg-white">
            <img
              src="/events/manchete.png"
              alt="Manchete"
              className="w-full h-[210px] md:h-[410px] sm:h-[410px] object-cover object-top"
            />
            <div className="bg-[#E8F48C] border-t-4 border-black py-1 lg:px-6 lg:py-4">
              <h3 className="text-sm lg:text-3xl font-bold text-black text-center">
                ELABORAÇÕES DE RELEASES
              </h3>
            </div>
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="flex flex-col gap-8">
          {/* Card Renan + Descrição */}
          <div className="lg:mt-12 border-4 border-black rounded-3xl overflow-hidden shadow-lg bg-white">
            <img
              src="/events/renan.png"
              alt="Renan"
              className="h-auto w-full  object-cover"
            />
            <div className="bg-[#E8F48C] border-t-4 border-black p-2 lg:p-8">
              <p className="text-sm leading-relaxed text-black text-justify">
                {description}
              </p>
            </div>
          </div>

          {/* Logo (imagem shape) */}
          <div className="flex justify-end">
            <img
              src="/events/shape.png"
              alt="Shape"
              className="lg:w-32 lg:h-32 w-12 object-contain lg:mt-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
