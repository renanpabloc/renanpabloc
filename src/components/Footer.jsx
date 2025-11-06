// components/Footer.jsx
export default function Footer({ visible }) {
  return (
    <footer
      className={`fixed bottom-0 left-0 w-full z-40 backdrop-blur-md bg-gray-900/40 transition-all duration-500 ease-in-out ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-20 px-6">
        <div className="flex items-center">
          <img src="/home/logo-prata.png" alt="Logo Home" className="object-contain w-auto h-12 sm:h-7 md:h-8 lg:h-8" />
        </div>
        <div className="text-gray-300 text-sm">© {new Date().getFullYear()} RP. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
