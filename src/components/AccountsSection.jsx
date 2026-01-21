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
      "02 photos 4x4",
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
      "02 photos 4x4",
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
      "Abonnement SMS Banking 1.000 FCFA",
      "Frais mensuel SMS Banking 500 FCFA",
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
      "Abonnement SMS Banking 1.000 FCFA",
      "Frais mensuel SMS Banking 500 FCFA",
      "02 photos 4x4",
    ],
  },
  {
    title: "Compte Épargne / Bloqué",
    subtitle: "Épargne Sécurisée",
    price: "5 000",
    color: "gold",
    icon: PiggyBank,
    documents: [
      "Frais d'ouverture 0 FCFA",
      "NUI ou facture ENEO / CAMWATER",
      "Photocopie CNI valide",
      "Plan de localisation",
      "Abonnement SMS Banking 1.000 FCFA",
      "Frais mensuel SMS Banking 500 FCFA",
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
      className="bg-gray-50 py-20 px-4 md:px-10 scroll-mt-24"
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
          5 Types de Comptes
        </span>
      </div>

      {/* Horizontal scroll */}
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-6 md:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-1">
          {accounts.map((account, index) => {
            const Icon = account.icon;

            return (
              <div
                key={index}
                className={`min-w-[85%] sm:min-w-[340px] md:min-w-[360px] snap-center transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="group bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-300">
                  
                  {/* ICON PREMIUM */}
                  <div
                    className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500
                    ${
                      account.color === "gold"
                        ? "bg-mujec-gold/20 text-mujec-gold group-hover:shadow-[0_0_25px_rgba(234,179,8,0.35)]"
                        : "bg-mujec-blue/10 text-mujec-blue group-hover:shadow-[0_0_25px_rgba(37,99,235,0.35)]"
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

                  {/* Price */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-500">Dépôt minimum</p>
                    <p className="text-3xl font-extrabold text-mujec-dark">
                      {account.price}{" "}
                      <span className="text-sm font-normal">FCFA</span>
                    </p>
                  </div>

                  {/* Documents */}
                  <ul className="text-sm space-y-3 mb-8 flex-grow text-gray-600">
                    {account.documents.map((doc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✔</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
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

        <p className="text-center text-sm text-gray-400 mt-4">
          ← Faites défiler horizontalement pour voir tous les comptes →
        </p>
      </div>
    </section>
  );
};

export default AccountsSection;
