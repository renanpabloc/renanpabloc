import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function AboutSection() {
  return (
    <section
      id="sobremim"
      className="select-none opacity-0 transition-opacity duration-700 section-fullscreen section-background-gray-light flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 md:px-12"
    >
      <div className="container flex flex-col lg:flex-row items-start justify-between w-full gap-10 lg:gap-20">
        {/* Coluna Esquerda - Texto principal e título */}
        <div className="lg:mt-20 flex-1 flex flex-col justify-center text-black px-2 sm:px-4 md:px-6 lg:px-12 order-2 lg:order-1">
{/* Div com os parágrafos */}
<div className="order-2 lg:order-1">
  {/* Textos completos - aparecem em telas acima de 414px */}
  <p className="max-[414px]:hidden text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-1 sm:mb-0 lg:mb-6">
    Sou Bacharel em Comunicação Social com habilitação em Jornalismo
    pela Universidade Santa Cecília (Unisanta).
  </p>
  <p className="max-[414px]:hidden text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-1 sm:mb-0 lg:mb-6">
    Minha formação me permite atuar em múltiplos campos da comunicação,
    com destaque para a redação jornalística, comunicação institucional
    e redação publicitária.
  </p>
  <p className="max-[414px]:hidden text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-1 sm:mb-0 lg:mb-6">
    O meu trabalho se baseia na produção textual adaptada a diferentes
    públicos, objetivos e canais.
  </p>
  <p className="max-[414px]:hidden text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-10">
    Busco transformar informação em narrativa, e narrativa em
    experiência.
  </p>

  {/* Versão resumida - apenas para iPhones pequenos (até 414px de largura) */}
  <p className="hidden max-[414px]:block text-base leading-relaxed mb-10">
    Sou jornalista formado pela Unisanta, com experiência em redação,
    comunicação institucional e publicidade. Produzo textos adaptados a
    diferentes públicos e transformo informação em narrativa com propósito.
  </p>
</div>



          {/* Título com efeito de digitação */}
          <h1 className="brattitle-cinza mb-3 lg:mt-20 mt-0 sm:mt-0 text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] font-black tracking-tight order-1 lg:order-2">
            <Typewriter
              words={["SOBRE MIM", "QUEM SOU EU", "RENAN POR RENAN"]}
              loop={0} // 0 = infinito
              cursor
              cursorStyle="_"
              typeSpeed={120}
              deleteSpeed={80}
              delaySpeed={1500}
            />
          </h1>
        </div>

        {/* Coluna Direita - Imagem e box branco */}
        <div className="flex-1 flex flex-col items-center justify-center relative mt-10 lg:mt-0 px-2 sm:px-4 md:px-6 lg:px-8 order-1 lg:order-2 self-center md:self-center lg:self-auto">
          <div className="relative max-[480px]:w-[320px] w-[320px] sm:w-[384px] md:w-[384px] lg:w-[448px] xl:w-[448px] max-w-full h-[240px] sm:h-[280px] md:h-[280px] lg:h-auto xl:h-auto">
            <picture>
              <source media="(max-width: 1023px)" srcSet="/about/renan-sm.webp" />
              <img
                src="/about/renan.webp"
                alt="Renan"
                className="rounded-tl-3xl shadow-md object-cover object-top w-full h-full"
              />
            </picture>
            <div className="absolute top-0 right-[-30px] sm:right-[-35px] md:right-[-40px] w-12 sm:w-14 md:w-16 h-full lg:h-[1300px] bg-[repeating-linear-gradient(45deg,black,black_10px,transparent_10px,transparent_20px)]"></div>
          </div>

          <div className="bg-white rounded-b-2xl p-4 sm:p-5 md:p-6 lg:p-7 mt-0 max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md text-black shadow-md relative">
            <h2 className="font-bold underline text-base sm:text-lg md:text-lg lg:text-lg mb-3">
              Meu nome é Renan,
            </h2>
            <p className="mb-2 text-sm sm:text-base md:text-base lg:text-base">
              Comunicação é o ponto de contato entre o humano e o tecnológico.
            </p>
            <p className="mb-2 text-sm sm:text-base md:text-base lg:text-base">
              Escrevo para traduzir, conectar e transformar.
            </p>
            <p className="text-sm sm:text-base md:text-base lg:text-base">
              Cada texto é um código e cada código, uma forma de expressão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
