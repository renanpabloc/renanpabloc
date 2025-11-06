// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
export default function NotFound() {
  return (
    <section
      className="section-background-green-dark flex flex-col justify-center items-center h-screen text-center relative overflow-hidden"
    >
      {/* Texto principal grande */}
      <h1
        className="text-[8rem] sm:text-[10rem] md:text-[12rem] font-extrabold uppercase tracking-tighter text-[#B4D538] brattitle-verde"
        style={{
          transform: "scaleX(1.2)",
          textShadow: "0 0 20px rgba(180, 213, 56, 0.5)",
        }}
      >
        404
      </h1>

      {/* Subtexto */}
      <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mt-4 mb-8 tracking-widest">
        Página não encontrada
      </p>

      {/* Botão de voltar */}
      <Link
        to="/"
        className="bg-[#B4D538] text-black font-bold uppercase px-8 py-3 rounded-full tracking-widest hover:bg-white transition-all duration-300"
      >
        Voltar à Home
      </Link>

      {/* Detalhe glitch no fundo */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: "url('/bg/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div><Footer />
    </section>
  );
}
