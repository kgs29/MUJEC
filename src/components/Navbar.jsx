import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg";

const sections = ["accueil", "services", "comptes", "apropos", "contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `text-subtitle transition-all duration-300 ${
      activeSection === id
        ? "text-mujec-gold font-bold"
        : "text-white hover:text-mujec-gold"
    }`;

  return (
    <>
      {/* Overlay mobile */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-mujec-blue/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="MUJEC"
              className={`rounded-full border-2 border-white transition-all ${
                scrolled ? "w-10 h-10" : "w-14 h-14"
              }`}
            />
            <div className="text-white leading-tight hidden sm:block">
              <h1 className="font-bold text-title">
                MUTUELLE DES JEUNES
              </h1>
              <p className="text-subtitle">
                ENTREPRENEURS DU CAMEROUN
              </p>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {sections.map((id) => (
              <a key={id} href={`#${id}`} className={linkClass(id)}>
                {id === "apropos"
                  ? "À Propos"
                  : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}

            <a
              href="#contact"
              className="bg-mujec-gold text-mujec-dark px-5 py-2 rounded-full font-bold text-subtitle hover:scale-105 transition"
            >
              Nous Contacter
            </a>
          </div>

          {/* Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl z-50"
            aria-label="Menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-72 bg-mujec-blue z-50 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 px-6 pt-24">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`${linkClass(id)} text-lg`}
              >
                {id === "apropos"
                  ? "À Propos"
                  : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-6 bg-mujec-gold text-mujec-dark py-3 text-center rounded-full font-bold"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
