import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import avis from "../assets/avis.jpeg";
import avis1 from "../assets/avis1.jpeg";
import avis2 from "../assets/avis2.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marie NGONO",
      role: "Commerçante, yaoundé",
      content: "MUJEC m'a permis de développer mon commerce à yaoundé. L'équipe est professionnelle et comprend les réalités des entrepreneurs camerounais. Grâce à leur accompagnement, j'ai pu obtenir un financement adapté à mes besoins.",
      rating: "4.8/5",
      image: avis // Remplace par tes vraies images
    },
    {
      id: 2,
      name: "Jean P. TCHATCHOUA",
      role: "Agriculteur, bankomo",
      content: "Le service de proximité est incroyable. Ils se déplacent pour comprendre nos besoins réels sur le terrain. Un partenaire de confiance pour tout entrepreneur sérieux.",
      rating: "4.9/5",
      image: avis2 // Remplace par tes vraies images
    },
    {
      id: 3,
      name: "Alice BELLA",
      role: "Startupeuse, Yaoundé",
      content: "Une rapidité de traitement de dossier que je n'ai vue nulle part ailleurs. MUJEC est vraiment l'institution que la jeunesse attendait pour booster ses projets.",
      rating: "4.7/5",
      image: avis1 // Remplace par tes vraies images
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'avis suivant
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour revenir à l'avis précédent
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Logique de défilement automatique (Auto-play)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change toutes les 5 secondes

    return () => clearInterval(timer); // Nettoyer le timer
  }, [currentIndex]);

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Titre Serif identique à l'image */}
        <h2 className="font-['Playfair_Display'] text-[42px] font-bold text-[#0a0f1a] mb-20">
          Ce Que Disent Nos Membres
        </h2>
        
        <div className="max-w-[840px] mx-auto relative">
          {/* Carte Témoignage */}
          <div className="bg-white rounded-[40px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] p-12 md:p-16 relative border border-gray-50 text-left transition-all duration-500">
            
            {/* Icône Quote en haut à droite (couleur menthe très claire) */}
            <div className="absolute top-12 right-12 text-[#d1fae5] opacity-80">
              <Quote size={80} strokeWidth={1} />
            </div>

            <div className="relative z-10">
              {/* Badge Note */}
              <div className="inline-flex items-center gap-2 bg-[#0a0f1a] text-white px-4 py-1.5 rounded-full mb-8">
                <Star size={12} className="fill-[#f97316] text-[#f97316]" />
                <span className="text-xs font-bold tracking-wider">{testimonials[currentIndex].rating}</span>
              </div>

              {/* Étoiles Orange */}
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#f97316] text-[#f97316]" />
                ))}
              </div>

              {/* Texte du Témoignage */}
              <p className="text-[#374151] text-[19px] leading-[1.7] italic mb-12 min-h-[120px]">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Footer de la carte : Profil + Navigation */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-[#0a0f1a] uppercase tracking-tight">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>

                {/* Boutons de navigation (exactement comme l'image) */}
                <div className="flex gap-3">
                  <button 
                    onClick={prevSlide}
                    className="w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center text-[#0a0f1a] hover:bg-gray-50 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="w-12 h-12 bg-[#0a0f1a] text-white rounded-xl flex items-center justify-center hover:bg-[#1a202c] transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Pagination Dots (barre verte active) */}
              <div className="flex justify-center gap-2 mt-12">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                      currentIndex === index ? "w-8 bg-[#10b981]" : "w-2 bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;