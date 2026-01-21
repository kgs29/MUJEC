import React, { useEffect, useState } from "react";

// Images
import slide0 from "../assets/hero-bg-3.jpg";
import slide1 from "../assets/hero-bg.jpg";
import slide2 from "../assets/hero-bg-2.jpeg";
import slide3 from "../assets/hero-bg-6.jpg";

const slides = [
   {
    image: slide1,
    description: "BIENVENUE CHEZ MUJEC MICROFINANCE.",
  },
  {
    image: slide0,
    badge: "🛡️ Établissement Agréé 1ère Catégorie",
    description: "NOUS CROYONS EN VOUS ET EN VOS PROJETS.",
  },
  {
    image: slide2,
    badge: "💰 Solutions de Financement",
    description:
      "REJOIGNEZ LA MICROFINANCE QUI VOUS ACCOMPAGNE DANS TOUS VOS PROJETS.",
  },
  {
    image: slide3,
    badge: "🤝 Proximité & Sécurité",
    description: "DES PETIT PAS VERS DES GRANDS SUCCES.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="accueil"
      className="
        relative
        w-full
        h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        pt-20
      "
    >
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Contenu */}
      <div className="relative z-20 max-w-4xl text-center px-6 md:px-10">
        <span className="bg-white/20 border border-white/30 px-4 py-1 rounded-full text-xs sm:text-sm mb-6 inline-block text-white backdrop-blur-sm">
          {slides[currentSlide].badge}
        </span>

        <p
          className="
            text-white
            font-bold
            tracking-wide
            text-lg
            sm:text-xl
            md:text-2xl
            lg:text-3xl
            mb-8
          "
        >
          {slides[currentSlide].description}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            className="
              bg-mujec-gold
              text-mujec-dark
              px-6
              py-3
              rounded-full
              font-semibold
              text-sm
              sm:text-base
              shadow-lg
              hover:scale-105
              transition-all
            "
          >
            Ouvrir un Compte
          </button>

          <button
            onClick={() =>
              document
                .getElementById("comptes")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="
              border
              border-white/60
              text-white
              px-6
              py-3
              rounded-full
              font-medium
              text-sm
              sm:text-base
              backdrop-blur-sm
              hover:bg-white/20
              hover:scale-105
              transition-all
            "
          >
            Nos Services
          </button>
        </div>

        {/* Indicateurs */}
        <div className="flex justify-center gap-3 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-mujec-gold scale-125"
                  : "bg-white/40"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
