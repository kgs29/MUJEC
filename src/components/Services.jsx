import React, { useEffect, useRef, useState } from "react";
import {
  Building2,
  PiggyBank,
  HandCoins,
  Smartphone,
  Users,
  ShieldCheck,
  GraduationCap,
  Landmark,
} from "lucide-react";

/* SERVICES DATA */
const services = [
  {
    icon: <Building2 size={26} />,
    title: "Comptes Bancaires",
    description:
      "Différents types de comptes adaptés à vos besoins : particuliers, associations, entreprises.",
  },
  {
    icon: <PiggyBank size={26} />,
    title: "Épargne & Placement",
    description:
      "Solutions d'épargne sécurisées avec des taux attractifs pour faire fructifier votre argent.",
  },
  {
    icon: <HandCoins size={26} />,
    title: "Microcrédits",
    description:
      "Financements adaptés au secteur informel pour développer leurs activités commerciales.",
  },
  {
    icon: <Landmark size={26} />,
    title: "Crédit Entrepreneurial",
    description:
      "Solutions de crédit dédiées aux entrepreneurs pour financer leurs projets.",
  },
  {
    icon: <GraduationCap size={26} />,
    title: "Formation Financière",
    description:
      "Éducation financière, business plan et stratégies d’investissement.",
  },
  {
    icon: <Smartphone size={26} />,
    title: "SMS Banking",
    description:
      "Suivez vos opérations en temps réel grâce aux notifications SMS sécurisées.",
  },
  {
    icon: <Users size={26} />,
    title: "Accompagnement",
    description:
      "Conseils personnalisés pour la gestion financière.",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Sécurité Garantie",
    description:
      "Vos fonds sont sécurisés dans un établissement agréé.",
  },
];

/* ANIMATION HOOK */
const useScrollReveal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const Services = () => {
  const [sectionRef, visible] = useScrollReveal();

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{ scrollMarginTop: "var(--nav-height, 80px)" }}
      className="relative bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-10 overflow-hidden"
    >
      {/* HEADER */}
      <div
        className={`max-w-4xl mx-auto text-center mb-10 sm:mb-14 md:mb-16 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="inline-block bg-mujec-blue/10 text-mujec-blue px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
          💼 NOS SERVICES
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Des Solutions Financières
          <span className="block text-mujec-blue">
            Modernes & Sécurisées
          </span>
        </h2>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Une gamme complète de services conçue pour accompagner votre
          croissance et sécuriser vos finances.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

        {services.map((service, index) => (
          <div
            key={index}
            className={`group bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 border border-gray-200 shadow-sm transition-all duration-500 md:hover:-translate-y-2 md:hover:shadow-xl ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* ICON */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-mujec-blue/10 text-mujec-blue rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-all duration-500 group-hover:scale-110">
              {service.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 md:mb-4">
              {service.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              {service.description}
            </p>

            {/* LINE EFFECT */}
            <div className="mt-4 md:mt-6 h-1 w-0 bg-mujec-blue rounded-full transition-all duration-500 md:group-hover:w-12"></div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Services;