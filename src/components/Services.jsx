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
    icon: <Building2 size={30} />,
    title: "Comptes Bancaires",
    description:
      "Différents types de comptes adaptés à vos besoins : particuliers, associations, entreprises.",
  },
  {
    icon: <PiggyBank size={30} />,
    title: "Épargne & Placement",
    description:
      "Solutions d'épargne sécurisées avec des taux attractifs pour faire fructifier votre argent.",
  },
  {
    icon: <HandCoins size={30} />,
    title: "Microcrédits",
    description:
      "Financements adaptés au secteur informel pour développer leurs activités commerciales.",
  },
  {
    icon: <Landmark size={30} />,
    title: "Crédit Entrepreneurial",
    description:
      "Solutions de crédit dédiées aux entrepreneurs (BTP, prestataires, commerçants, PME...) pour financer leurs projets.",
  },
  {
    icon: <GraduationCap size={30} />,
    title: "Formation Financière",
    description:
      "Éducation financière, business plan, gestion budgétaire et stratégies d’investissement.",
  },
  {
    icon: <Smartphone size={30} />,
    title: "SMS Banking",
    description:
      "Suivez vos opérations en temps réel grâce aux notifications SMS sécurisées.",
  },
  {
    icon: <Users size={30} />,
    title: "Accompagnement",
    description:
      "Conseils personnalisés pour la gestion financière de votre entreprise ou association.",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Sécurité Garantie",
    description:
      "Vos fonds sont sécurisés dans un établissement agréé et réglementé.",
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
      { threshold: 0.2 }
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
      className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-10 overflow-hidden"
    >
      {/* HEADER */}
      <div
        className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="inline-block bg-mujec-blue/10 text-mujec-blue px-6 py-2 rounded-full text-sm font-semibold mb-6">
          💼 NOS SERVICES
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Des Solutions Financières
          <span className="block text-mujec-blue">
            Modernes & Sécurisées
          </span>
        </h2>

        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Une gamme complète de services conçue pour accompagner votre
          croissance et sécuriser vos finances.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group bg-white rounded-3xl p-8 border border-gray-200 shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-mujec-blue/20 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            {/* ICON */}
            <div className="w-16 h-16 bg-mujec-blue/10 text-mujec-blue rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.35)]">
              {service.icon}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {service.title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {service.description}
            </p>

            {/* Ligne animée premium */}
            <div className="mt-6 h-1 w-0 bg-mujec-blue rounded-full transition-all duration-500 group-hover:w-12"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
