import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg";

const sections = ["accueil", "services", "comptes", "apropos", "contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  /* ---------------- SCROLL EFFECT ---------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- ACTIVE SECTION ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ---------------- SCROLL SMOOTH ---------------- */
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const nav = document.querySelector("nav");
    const navHeight = nav ? nav.offsetHeight : 80;

    const top =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      navHeight -
      10;

    window.scrollTo({ top, behavior: "smooth" });
    setMenuOpen(false);
  };

  /* ---------------- NAV HEIGHT FIX ---------------- */
  useEffect(() => {
    const updateNavHeight = () => {
      const nav = document.querySelector("nav");
      const navHeight = nav ? nav.offsetHeight : 80;
      document.documentElement.style.setProperty(
        "--nav-height",
        `${navHeight + 10}px`
      );
    };

    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, [scrolled]);

  const linkClass = (id) =>
    `transition-all duration-300 text-sm md:text-base ${
      activeSection === id
        ? "text-mujec-gold font-bold"
        : "text-white hover:text-mujec-gold"
    }`;

  return (
    <>
      {/* OVERLAY MOBILE */}
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
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="MUJEC"
              className={`rounded-full border-2 border-white transition-all ${
                scrolled ? "w-10 h-10" : "w-12 h-12 sm:w-14 sm:h-14"
              }`}
            />

            <div className="text-white leading-tight hidden sm:block">
              <h1 className="font-bold text-sm md:text-base">
                MUTUELLE DES JEUNES
              </h1>
              <p className="text-xs md:text-sm">
                ENTREPRENEURS DU CAMEROUN
              </p>
            </div>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {sections.map((id) => (
              <button
                key={id}
                onClick={() => scrollToId(id)}
                className={linkClass(id)}
              >
                {id === "apropos"
                  ? "À Propos"
                  : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}

            <button
              onClick={() => scrollToId("contact")}
              className="bg-mujec-gold text-mujec-dark px-5 py-2 rounded-full font-bold hover:scale-105 transition"
            >
              Nous Contacter
            </button>
          </div>

          {/* BURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl z-50"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MENU MOBILE */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-[80%] max-w-xs bg-mujec-blue z-50 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 px-6 pt-24">
            {sections.map((id) => (
              <button
                key={id}
                onClick={() => scrollToId(id)}
                className={`${linkClass(id)} text-lg text-left`}
              >
                {id === "apropos"
                  ? "À Propos"
                  : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}

            <button
              onClick={() => scrollToId("contact")}
              className="mt-6 bg-mujec-gold text-mujec-dark py-3 rounded-full font-bold"
            >
              Nous Contacter
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;