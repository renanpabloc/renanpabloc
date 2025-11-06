import { useState, useRef, useEffect } from "react";

export default function Header() {
  const sections = ["home", "sobre mim", "especializações", "competências", "contato"];
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;
    const buffer = 20;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY - lastScrollY.current > buffer && currentScrollY > 50) {
            if (!isHidden) setIsHidden(true);
          } else if (lastScrollY.current - currentScrollY > buffer) {
            if (isHidden) setIsHidden(false);
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHidden]);

  useEffect(() => {
    if (menuRef.current) setMenuHeight(menuRef.current.scrollHeight);
  }, [menuRef, isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gray-900/40 transition-transform duration-500 ease-in-out
        ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-20 px-6">
        {/* Logo */}
        <div className="flex items-center justify-center">
          {/* <a href="#home" className="block">
            <img
              src="/home/logo-home.png"
              alt="Logo"
              className="object-contain w-auto h-10 sm:h-12 md:h-14 lg:h-16"
              style={{ transform: "scaleX(1.2) scaleY(1.3)" }}
            />
          </a> */}
        </div>

        {/* Desktop nav */}
        <ul className="hidden lg:flex gap-8 text-white font-medium">
          {sections.map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec.toLowerCase().replace(/\s/g, "")}`}
                className="hover:text-gray-300 transition-colors duration-300"
              >
                {sec}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger (mobile/tablet) */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-1 w-6 bg-white rounded transform transition duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-6 bg-white rounded my-1 transition duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-6 bg-white rounded transform transition duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out bg-gray-900/50 backdrop-blur-md"
        style={{
          maxHeight: isOpen ? `${menuHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <nav ref={menuRef} className="flex flex-col py-4 px-6">
          {sections.map((sec, idx) => (
            <div key={sec} className="flex flex-col">
              <a
                href={`#${sec.toLowerCase().replace(/\s/g, "")}`}
                className="text-white font-medium hover:text-gray-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                {sec}
              </a>
              {idx !== sections.length - 1 && <div className="border-t border-white/30 my-1"></div>}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
