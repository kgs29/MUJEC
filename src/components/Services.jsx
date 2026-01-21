import React from "react";
import {
  Building2,
  PiggyBank,
  HandCoins,
  Smartphone,
  Users,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: <Building2 size={28} />,
    title: "Comptes Bancaires",
    description:
      "Différents types de comptes adaptés à vos besoins : particuliers, associations, entreprises.",
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    icon: <PiggyBank size={28} />,
    title: "Épargne & Placement",
    description:
      "Solutions d'épargne sécurisées avec des taux attractifs pour faire fructifier votre argent.",
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
  {
    icon: <HandCoins size={28} />,
    title: "Microcrédits",
    description:
      "Financements adaptés aux entrepreneurs pour développer leurs activités commerciales.",
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    icon: <Smartphone size={28} />,
    title: "SMS Banking",
    description:
      "Suivez vos opérations en temps réel grâce à notre service de notifications SMS.",
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
  {
    icon: <Users size={28} />,
    title: "Accompagnement",
    description:
      "Conseils personnalisés pour la gestion financière de votre entreprise ou association.",
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Sécurité Garantie",
    description:
      "Vos fonds sont sécurisés dans un établissement agréé et réglementé.",
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
];

const Services = () => {
  return (
    <section
  id="services"
  className="bg-gray-50 scroll-mt-20 py-20 px-6 md:px-10"
>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold mb-6">
          💙 NOS SERVICES
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Des Solutions Financières <br className="hidden md:block" />
          Adaptées à Vos Besoins
        </h2>

        <p className="text-gray-600 text-base md:text-lg">
          MUJEC vous accompagne avec une gamme complète de services financiers
          pour particuliers, associations et entreprises.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-md
              transition-all
              duration-300
              ease-out
              hover:shadow-xl
              hover:-translate-y-2
            "
          >
            <div
              className={`
                w-14 h-14
                ${service.bg}
                ${service.color}
                rounded-2xl
                flex
                items-center
                justify-center
                mb-6
                transition-transform
                duration-300
                group-hover:scale-110
              `}
            >
              {service.icon}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {service.title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
