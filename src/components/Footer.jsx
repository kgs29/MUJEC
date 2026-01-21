import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

import orange from "../assets/orange-money.png";
import mtn from "../assets/mtn-momo.png";
import sara from "../assets/sara-money.png";

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
            <h3 className="font-extrabold text-2xl mb-4 tracking-wide">
              MUJEC
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
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
            <h4 className="font-bold mb-6 text-lg">Nos Opérations</h4>

            <div className="flex flex-col gap-4">
              {[
                { img: orange, name: "Orange Money" },
                { img: mtn, name: "MTN Mobile Money" },
                { img: sara, name: "SARA Money" },
              ].map((op, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/10 p-3 rounded-xl border border-white/10 hover:scale-[1.04] transition"
                >
                  <img
                    src={op.img}
                    alt={op.name}
                    className="h-10 w-auto object-contain"
                  />
                  <span className="text-sm font-medium text-white/90">
                    {op.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RÉSEAUX SOCIAUX */}
          <motion.div variants={item}>
            <h4 className="font-bold mb-6 text-lg">Nos Réseaux</h4>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="social-icon hover:text-blue-500"
              >
                <Facebook />
              </a>

              <a
                href="https://wa.me/2376XXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="social-icon hover:text-green-400"
              >
                <MessageCircle />
              </a>

              <a
                href="https://www.linkedin.com/company/"
                target="_blank"
                rel="noreferrer"
                className="social-icon hover:text-blue-400"
              >
                <Linkedin />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="social-icon hover:text-pink-500"
              >
                <Instagram />
              </a>
            </div>
          </motion.div>

          {/* NEWSLETTER */}
          <motion.div variants={item}>
            <h4 className="font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-sm text-white/70 mb-4">
              Recevez nos actualités et opportunités financières.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Votre email"
                className="bg-white/10 border border-white/20 px-4 py-2 rounded-xl text-sm outline-none focus:ring-2 focus:ring-mujec-gold"
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

      {/* STYLE UTILITAIRE */}
      <style>
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
          }
          .social-icon:hover {
            transform: scale(1.15);
          }
        `}
      </style>

    </footer>
  );
};

export default Footer;
