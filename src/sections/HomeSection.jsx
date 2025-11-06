// src/sections/HomeSection.jsx
export default function HomeSection() {
  return (
    <section
      id="home"
      className="opacity-0 transition-opacity duration-700 section-fullscreen section-background-green-dark flex flex-col justify-center items-center px-4 sm:px-6 md:px-12"
    >
      <div className="container flex flex-col items-start">
        {/* Texto pequeno no início */}
        <span className="text-4xl sm:text-5xl uppercase mb-30 tracking-widest text-white w-full text-left">
          PORTFÓLIO
        </span>

        {/* Imagem central gigante e responsiva */}
        <div
          className="brattitle-verde flex items-center justify-center w-full"
          style={{
            transform: "scaleX(1.4) scaleY(1.5)",
          }}
        >
          <img
            src="/home/logo.svg"
            alt="Logo Home"
            className="
              object-contain
              w-full
              max-w-[90%]
              max-h-[10vh]
              sm:max-w-[80%]
              sm:max-h-[45vh]
              md:max-w-[75%]
              md:max-h-full
              lg:max-w-[1050px]
              lg:max-h-[65vh]
              xl:max-w-[1050px]
              xl:max-h-[65vh]
            "
          />
        </div>

        {/* Texto pequeno horizontal */}
        <p className="text-lg sm:text-2xl lg:text-4xl text-white mt-30 w-full flex justify-between tracking-wide">
          <span>COMUNICAÇÃO</span>
          <span>EM</span>
          <span>MOVIMENTO</span>
        </p>
      </div>
    </section>
  );
}
