// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function useFooterObserver(sectionId) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = document.getElementById(sectionId);
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [sectionId]);

  return visible;
}

export default function App() {
  const footerVisible = useFooterObserver("contato");

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer visible={footerVisible} />
    </BrowserRouter>
  );
}
