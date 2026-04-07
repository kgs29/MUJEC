import React from "react";
import { Star, Quote } from "lucide-react";
import avis from "../assets/avis.jpeg";
import avis1 from "../assets/avis1.jpeg";
import avis2 from "../assets/avis2.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marie NGONO",
      role: "Commerçante, yaoundé",
      content: "MUJEC m'a permis de développer mon commerce à Afanayou a Meyo.NYOMO.ETOA etc. L'équipe est professionnelle et comprend les réalités des entrepreneurs camerounais. Grâce à leur accompagnement, j'ai pu obtenir un financement adapté à mes besoins.",
      rating: "4.8/5",
      image: avis
    },
    {
      id: 2,
      name: "Jean P. TCHATCHOUA",
      role: "Agriculteur, bankomo",
      content: "Le service de proximité est incroyable. Ils se déplacent pour comprendre nos besoins réels sur le terrain. Un partenaire de confiance pour tout entrepreneur sérieux.",
      rating: "4.9/5",
      image: avis2
    },
    {
      id: 3,
      name: "Alice BELLA",
      role: "Startupeuse, Yaoundé",
      content: "Une rapidité de traitement de dossier que je n'ai vue nulle part ailleurs. MUJEC est vraiment l'institution que la jeunesse attendait pour booster ses projets.",
      rating: "4.7/5",
      image: avis1
    }
  ];

  return (
    <section className="bg-white py-12 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Titre */}
        <h2 className="font-['Playfair_Display'] text-4xl md:text-[42px] font-bold text-[#0a0f1a] mb-16 text-center">
          Ce Que Disent Nos Membres
        </h2>
        
        {/* Conteneur des 3 témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] p-8 border border-gray-50 relative transition-all hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-2"
            >
              {/* Icône Quote */}
              <div className="absolute top-6 right-6 text-[#d1fae5] opacity-60">
                <Quote size={40} strokeWidth={1} />
              </div>

              <div className="relative z-10">
                {/* Badge Note */}
                <div className="inline-flex items-center gap-1.5 bg-[#0a0f1a] text-white px-3 py-1 rounded-full mb-4">
                  <Star size={11} className="fill-[#f97316] text-[#f97316]" />
                  <span className="text-xs font-bold">{testimonial.rating}</span>
                </div>

                {/* Étoiles Orange */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#f97316] text-[#f97316]" />
                  ))}
                </div>

                {/* Texte du Témoignage */}
                <p className="text-[#374151] text-sm leading-relaxed italic mb-8 line-clamp-4">
                  "{testimonial.content}"
                </p>

                {/* Profil */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0a0f1a] uppercase tracking-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;