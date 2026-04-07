import React, { useEffect, useState } from "react";

import slide1 from "../assets/hero-bg.jpg";
import slide2 from "../assets/hero-bg-2.jpeg";
import slide3 from "../assets/hero-bg-3.jpg";
// import slide4 from "../assets/hero-bg-4.png";
import slide5 from "../assets/hero-bg-5.png";
const slides = [
  {
    image: slide1,
    text: "BIENVENUE CHEZ MUJEC MICROFINANCE",
  },
  {
    image: slide2,
    text: "NOUS CROYONS EN VOUS ET EN VOS PROJETS",
  },
  {
    image: slide3,
    text: "DES PETITS PAS VERS DE GRANDS SUCCÈS",
  },

  // {
  //   image: slide4,
  //   text: "VALORISER LE POTENTIEL LOCAL : UNE EQUIPE JEUNE, EXPERT ET ENGAGER.",
  // },

  {
    image: slide5,
    text: "VALORISER LE POTENTIEL LOCAL : UNE EQUIPE JEUNE, EXPERT ET ENGAGER.",
  },

];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="accueil"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-4 text-center">
        <h1 className="font-roboto text-roboto-lg text-white font-bold text-[20px] sm:text-[26px] md:text-[32px] leading-snug mb-6">
          {slides[current].text}
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#comptes"
            className="font-roboto text-roboto-base bg-mujec-gold text-mujec-dark px-6 py-3 rounded-full font-bold text-subtitle hover:scale-105 transition"
          >
            Ouvrir un Compte
          </a>

          <a
            href="#services"
            className="font-roboto text-roboto-base border border-white text-white px-6 py-3 rounded-full text-subtitle hover:bg-white/20 transition"
          >
            Nos Services
          </a>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${
                current === i ? "bg-mujec-gold" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
