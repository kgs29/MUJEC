import React, { useEffect, useRef, useState } from "react";
import {
  Users,
  Briefcase,
  Wallet,
  CreditCard,
  PiggyBank,
} from "lucide-react";

const accounts = [
  {
    title: "Compte Association",
    subtitle: "Pour Associations",
    price: "35 000",
    color: "blue",
    icon: Users,
    documents: [
      "Photocopie d'autorisation",
      "Statuts de l'association",
      "CNI des signataires",
      "Plan de localisation des signataires",
      "NUI des signataires",
      "PV d'autorisation d'ouverture du compte association",
      "Abonnement SMS Banking 1.000 FCFA",
      "Frais mensuel SMS Banking 500 FCFA",
      "02 photos 4x4 Par signataire" ,
    ],
  },
  {
    title: "Compte ETS/Entreprise",
    subtitle: "Pour Entreprises",
    price: "50 000",
    color: "gold",
    icon: Briefcase,
    documents: [
      "Dossier fiscal",
      "Registre de commerce",
      "CNI des signataires",
      "Plan de localisation des signataires",
      "NUI des signataires",
      "Demande d'ouverture du compte courant",
      "Abonnement SMS Banking 1.000 FCFA",
      "Frais mensuel SMS Banking 500 FCFA",
      "02 photos 4x4 Par signataire" ,
    ],
  },
  {
    title: "Compte Collecte",
    subtitle: "Le Plus Accessible",
    price: "1 000",
    color: "blue",
    icon: Wallet,
    documents: [
      "Frais de carnet 500 FCFA",
      "CNI du signataire",
      "NUI du signataire",
      "Abonnement SMS Banking 200 FCFA",
      "Frais mensuel SMS Banking 200 FCFA",
      "01 photo 4x4",
    ],
  },
  {
    title: "Compte Chèque Particulier",
    subtitle: "Pour Particuliers",
    price: "15 000",
    color: "blue",
    icon: CreditCard,
    documents: [
      "Photocopie CNI valide",
      "Plan de localisation",
      "NUI du signataire",
      "Abonnement SMS Banking 500 FCFA",
      "Frais mensuel SMS Banking 500 FCFA",
      "02 photos 4x4",
    ],
  },
  {
    title: "Compte Épargne / Bloqué",
    subtitle: "Épargne Sécurisée",
    price: "10 000",
    color: "gold",
    icon: PiggyBank,
    documents: [
      "Frais d'ouverture 0 FCFA",
      "NUI ou facture ENEO / CAMWATER",
      "Photocopie CNI valide",
      "Plan de localisation",
      "Abonnement SMS Banking 500 FCFA",
      "Frais mensuel SMS Banking 200 FCFA",
      "02 photos 4x4",
    ],
  },
  {
    title: "Compte Épargne Scolaire",
    subtitle: "Préparez l'avenir de vos enfants",
    price: "5000",
    color: "gold",
    icon: PiggyBank,
    documents: [
      "Frais d'ouverture 0 FCFA",
      "Plan de localisation",
      "NUI OU FACTURE ENEO / CAMWATER",
      "Photocopie CNI valide du parent",
      "Plan de localisation",
      "02 photos 4x4",
    ],
  },
];

/* Hook animation scroll */
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

const AccountsSection = () => {
  const [sectionRef, visible] = useScrollReveal();

  return (
    <section
      id="comptes"
      ref={sectionRef}
      className="bg-gray-50 py-2 px-4 md:px-10 scroll-mt-4"
    >
      {/* Header */}
      <div
        className={`max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-14 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-mujec-dark">
            Nos Comptes
          </h2>
          <p className="text-gray-500 mt-2">
            Choisissez le compte adapté à vos besoins
          </p>
        </div>
        <span className="bg-mujec-dark text-white px-5 py-2 rounded-full text-sm font-bold w-fit">
          6 Types de Comptes
        </span>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 px-1">
          {accounts.map((account, index) => {
            const Icon = account.icon;

            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="group bg-white p-8 rounded-3xl shadow-lg border-2 border-blue-500 flex flex-col h-full hover:shadow-2xl hover:border-blue-600 transition-all duration-300">
                  
                  {/* Badge spécial épargne scolaire */}
                  {account.title === "Compte Épargne Scolaire" && (
                    <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full mb-4 w-fit font-bold">
                      Idéal pour la rentrée scolaire
                    </span>
                  )}

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500
                    ${
                      account.color === "gold"
                        ? "bg-mujec-gold/20 text-mujec-gold"
                        : "bg-mujec-blue/10 text-mujec-blue"
                    }
                    group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {account.title}
                  </h3>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold w-fit mb-5 ${
                      account.color === "gold"
                        ? "bg-mujec-gold/20 text-mujec-gold"
                        : "bg-blue-50 text-mujec-blue"
                    }`}
                  >
                    {account.subtitle}
                  </span>

                  <div className="mb-6">
                    <p className="text-sm text-gray-500">Dépôt minimum</p>
                    <p className="text-3xl font-extrabold text-mujec-dark">
                      {account.price}{" "}
                      <span className="text-sm font-normal">FCFA</span>
                    </p>
                  </div>

                  <ul className="text-sm space-y-3 mb-8 flex-grow text-gray-600">
                    {account.documents.map((doc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✔</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-xl font-bold transition-all active:scale-95 hover:scale-105 ${
                      account.color === "gold"
                        ? "bg-mujec-gold text-mujec-dark"
                        : "bg-mujec-blue text-white"
                    }`}
                  >
                    Ouvrir ce Compte
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccountsSection;
