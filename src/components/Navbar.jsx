import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg";

const sections = ["accueil", "services", "comptes", "apropos", "contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `transition-colors duration-300 ${
      activeSection === id
        ? "text-mujec-gold font-bold"
        : "text-white hover:text-mujec-gold"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-mujec-blue/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="MUJEC"
          className={`rounded-full border-2 border-white object-cover transition-all duration-300 ${
            scrolled ? "w-12 h-12" : "w-16 h-16"
          }`}
        />
        <div className="text-white">
          <h1 className="font-extrabold text-lg leading-none">
            MUTUELLE DES JEUNES
          </h1>
          <p className="text-sm font-semibold">
            ENTREPRENEURS DU CAMEROUN
          </p>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#accueil" className={linkClass("accueil")}>Accueil</a>
        <a href="#services" className={linkClass("services")}>Services</a>
        <a href="#comptes" className={linkClass("comptes")}>Comptes</a>
        <a href="#apropos" className={linkClass("apropos")}>À Propos</a>

        <a
          href="#contact"
          className="bg-mujec-gold text-mujec-dark px-6 py-2 rounded-full font-bold hover:scale-105 transition"
        >
          Nous Contacter
        </a>
      </div>

      {/* Mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white text-2xl"
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      <div
        className={`fixed inset-0 bg-mujec-blue/95 backdrop-blur-md flex flex-col items-center justify-center gap-6 md:hidden transition-all duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setMenuOpen(false)}
            className={linkClass(id)}
          >
            {id === "apropos"
              ? "À Propos"
              : id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
