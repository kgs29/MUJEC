import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // Assure-toi que react-icons est installé

import orange from "../assets/orange-money.png";
import mtn from "../assets/mtn-momo.png";
import sara from "../assets/sara-money.png";
import campost from "../assets/campost.jpg";

/* Animations */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer = () => {
  // Numéro WhatsApp avec l'indicatif pays (237 pour le Cameroun)
  const whatsappNumber = "237674571944";

  return (
    <footer className="relative overflow-hidden text-white">

      {/* FOND ANIMÉ SUBTIL */}
      <motion.div
        aria-hidden
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-mujec-blue via-[#0f2a52] to-mujec-blue bg-[length:200%_200%]"
      />

      {/* CONTENU */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 pt-20 pb-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <motion.div variants={item}>
            <h3 className="font-roboto text-2xl font-extrabold mb-4 tracking-wide text-white">
              MUJEC
            </h3>
            <p className="font-roboto text-sm text-white/70 leading-relaxed">
              Établissement de Microfinance de 1ère Catégorie – Cameroun
              <br />
              <span className="block mt-4">
                <strong>Immatriculation :</strong><br />
                COOP/GIC NO:23/215/CMR/CE/02/009/CCA/036004
              </span>
              <span className="block mt-2">
                <strong>NUI :</strong> M122316408475Z
              </span>
            </p>
          </motion.div>

          {/* OPÉRATIONS */}
          <motion.div variants={item}>
            <h4 className="font-roboto font-bold mb-6 text-lg text-white">Nos Opérations</h4>
            <div className="flex flex-col gap-4">
              {[
                { img: orange, name: "Orange Money" },
                { img: mtn, name: "MTN Mobile Money" },
                { img: sara, name: "SARA Money" },
                { img: campost, name: "Campost", desc: "Impôts, Frais Scolaires, etc." },
              ].map((op, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/10 p-3 rounded-xl border border-white/10 hover:scale-[1.04] transition group"
                >
                  <img src={op.img} alt={op.name} className="h-10 w-auto object-contain rounded-md" />
                  <div className="flex flex-col">
                    <span className="font-roboto text-sm font-bold text-white">{op.name}</span>
                    {op.desc && <span className="text-[10px] text-white/60 leading-tight">{op.desc}</span>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RÉSEAUX SOCIAUX */}
          <motion.div variants={item}>
            <h4 className="font-roboto font-bold mb-6 text-lg text-white">Nos Réseaux</h4>
            <div className="flex flex-wrap gap-4">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/p/MUJEC-COOP-CA-61571822634008/" 
                target="_blank" rel="noopener noreferrer" 
                className="social-icon hover:text-blue-500"
              >
                <Facebook size={20} />
              </a>
              
              {/* WhatsApp Mis à jour */}
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Bonjour MUJEC, j'aimerais avoir des informations sur vos services.`}
                target="_blank" rel="noopener noreferrer" 
                className="social-icon hover:text-green-500"
              >
                <FaWhatsapp size={22} />
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/mujec-emf-144056379/"
                target="_blank" rel="noopener noreferrer" 
                className="social-icon hover:text-blue-600"
              >
                <Linkedin size={20} />
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/p/DP0qg2jD8Gj/" 
                target="_blank" rel="noopener noreferrer" 
                className="social-icon hover:text-pink-500"
              >
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* NEWSLETTER */}
          <motion.div variants={item}>
            <h4 className="font-roboto font-bold mb-6 text-lg text-white">Newsletter</h4>
            <p className="font-roboto text-sm text-white/70 mb-4">
              Recevez nos actualités et opportunités financières.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Votre email"
                className="bg-white/10 border border-white/20 px-4 py-2 rounded-xl text-sm outline-none focus:ring-2 focus:ring-mujec-gold text-white"
              />
              <button className="bg-mujec-gold text-mujec-dark py-2 rounded-xl font-bold text-sm hover:scale-105 transition">
                S’inscrire
              </button>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* COPYRIGHT */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 py-6 text-center text-sm text-white/60">
          © MUJEC 2026 — Tous droits réservés
        </div>
      </div>

      <style jsx>
        {`
          .social-icon {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all .3s ease;
            color: white;
          }
          .social-icon:hover {
            transform: scale(1.15);
            background: rgba(255,255,255,0.2);
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;