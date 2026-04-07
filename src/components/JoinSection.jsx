import React from 'react';
import { ArrowRight } from 'lucide-react';
import slide8 from "../assets/hero-bg4.jpg";

const JoinSection = () => {
  return (
    <section className="relative h-[600px] w-full flex items-center overflow-hidden">
      {/* 1. Image de fond avec overlay sombre pour la lisibilité */}
      <div className="absolute inset-0 z-0">
        <img 
          src={slide8}
          alt="Bureaux Mujec" 
          className="h-full w-full object-cover"
        />
        {/* Overlay dégradé pour correspondre à l'aspect tamisé de l'image */}
        <div className="absolute inset-0 bg-[#0a1120]/80 md:bg-gradient-to-r md:from-[#0a1120]/95 md:to-[#0a1120]/60"></div>
      </div>

      {/* 2. Contenu de la section */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-8 md:px-16">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          
          {/* Bloc de Gauche : Titre et CTA */}
          <div className="max-w-2xl">
            <h2 className="font-roboto text-roboto-lg mb-10 text-[56px] font-bold leading-[0.95] text-white md:text-[160px] tracking-tighter lowercase">
              rejoignez mujec <br /> aujourd'hui
            </h2>
            
            <button className="font-roboto text-roboto-base group flex items-center gap-4 rounded-full bg-white px-8 py-5 text-lg font-bold text-black transition-transform hover:scale-105">
              Ouvrir un Compte
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a1120] text-white transition-transform group-hover:translate-x-1">
                <ArrowRight size={20} />
              </span>
            </button>
          </div>

          {/* Bloc de Droite : Texte de confiance */}
          <div className="text-left md:text-right pb-4">
            <p className="font-roboto text-roboto-base text-4xl font-light leading-tight text-white md:text-5xl">
              Plus de <span className="font-bold text-[#facc15] text-5xl md:text-6xl">2 000</span> entrepreneurs nous font confiance
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default JoinSection;