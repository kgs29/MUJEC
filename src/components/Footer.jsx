import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

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
  const whatsappNumber = "237674571944";

  return (
    <footer className="relative overflow-hidden text-white mt-20">

      {/* BACKGROUND */}
      <motion.div
        aria-hidden
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-mujec-blue via-[#0f2a52] to-mujec-blue bg-[length:200%_200%]"
      />

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-16 pb-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          {/* BRAND */}
          <motion.div variants={item}>
            <h3 className="text-xl sm:text-2xl font-extrabold mb-4">
              MUJEC
            </h3>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Établissement de Microfinance – Cameroun
            </p>

            <div className="mt-4 text-xs text-white/60 space-y-2">
              <p>
                <strong>Immatriculation :</strong><br />
                COOP/GIC NO:23/215/CMR/CE/02/009
              </p>
              <p>
                <strong>NUI :</strong> M122316408475Z
              </p>
            </div>
          </motion.div>

          {/* OPÉRATIONS */}
          <motion.div variants={item}>
            <h4 className="font-bold mb-5 text-base sm:text-lg">
              Nos Opérations
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
              {[ 
                { img: orange, name: "Orange Money" },
                { img: mtn, name: "MTN MoMo" },
                { img: sara, name: "SARA Money" },
                { img: campost, name: "Campost" },
              ].map((op, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/10 hover:scale-105 transition"
                >
                  <img
                    src={op.img}
                    alt={op.name}
                    className="h-8 w-8 object-contain"
                    loading="lazy"
                  />
                  <span className="text-xs sm:text-sm font-semibold">
                    {op.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RÉSEAUX */}
          <motion.div variants={item}>
            <h4 className="font-bold mb-5 text-base sm:text-lg">
              Réseaux Sociaux
            </h4>

            <div className="flex gap-3 flex-wrap">
              <a href="#" className="social-icon hover:text-blue-500">
                <Facebook size={18} />
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon hover:text-green-500"
              >
                <FaWhatsapp size={18} />
              </a>

              <a href="#" className="social-icon hover:text-blue-600">
                <Linkedin size={18} />
              </a>

              <a href="#" className="social-icon hover:text-pink-500">
                <Instagram size={18} />
              </a>
            </div>
          </motion.div>

          {/* NEWSLETTER */}
          <motion.div variants={item}>
            <h4 className="font-bold mb-5 text-base sm:text-lg">
              Newsletter
            </h4>

            <p className="text-xs sm:text-sm text-white/70 mb-4">
              Recevez nos actualités
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 bg-white/10 border border-white/20 px-3 py-2 rounded-lg text-xs sm:text-sm outline-none focus:ring-2 focus:ring-mujec-gold"
              />

              <button className="bg-mujec-gold text-mujec-dark px-4 py-2 rounded-lg font-bold text-xs sm:text-sm hover:scale-105 transition">
                OK
              </button>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* COPYRIGHT */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-5 text-center text-xs sm:text-sm text-white/60">
          © MUJEC 2026 — Tous droits réservés
        </div>
      </div>

      {/* STYLE */}
      <style jsx>{`
        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
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
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }
      `}</style>
    </footer>
  );
};

export default Footer;