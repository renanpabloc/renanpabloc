import { useEffect } from "react";
import HomeSection from "../sections/HomeSection";
import AboutSection from "../sections/AboutSection";
import SpecialtiesSection from "../sections/SpecialtiesSection";
import SpecialtiesSection2 from "../sections/SpecialtiesSection2";
import SkillsSection from "../sections/SkillsSection";
import News1 from "../sections/News1";
import News2 from "../sections/News2";
import Posts from "../sections/Posts";
import Carousel from "../sections/Carousel";
import Events from "../sections/Events";
import News3 from "../sections/News3";

import ContactSection from "../sections/ContactSection";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 } // 50% da seção visível para ativar
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Momentum scroll suave
  useEffect(() => {
    let isScrolling = false;

    const handleWheel = (e) => {
      if (isScrolling) return;

      e.preventDefault();

      const delta = e.deltaY;
      const sections = Array.from(document.querySelectorAll("section"));
      const currentIndex = sections.findIndex((sec) => {
        const rect = sec.getBoundingClientRect();
        return rect.top >= -10 && rect.top <= 10;
      });

      if (delta > 0 && currentIndex < sections.length - 1) {
        isScrolling = true;
        sections[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
        setTimeout(() => (isScrolling = false), 900); // tempo de aterrissagem
      } else if (delta < 0 && currentIndex > 0) {
        isScrolling = true;
        sections[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
        setTimeout(() => (isScrolling = false), 900);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <main>
      <HomeSection />
      <AboutSection />
      <SpecialtiesSection />
      <SpecialtiesSection2 />
      <SkillsSection />
      <News1 />
      <News2 />
      <Posts />
      <Carousel />
      <Events />
      <News3 />
      <ContactSection />
    </main>
  );
}
