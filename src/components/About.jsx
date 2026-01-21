import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  TrendingUp,
  Award,
  Users,
  MapPin,
  ArrowRight,
} from "lucide-react";

const BLUE = "#3b82f6";

/* Animations */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
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

const About = () => {
  return (
    <div className="w-full bg-[#050a14] overflow-hidden">

      {/* SECTION : HERO + VALEURS + STATS */}
      <section className="pt-24 pb-24 px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="max-w-[1200px] mx-auto text-center"
        >
          {/* Label */}
          <motion.span
            variants={item}
            className="text-[10px] tracking-[0.3em] text-gray-400 font-bold uppercase mb-6 block"
          >
            NOS VALEURS
          </motion.span>

          {/* Title */}
          <motion.h1
            variants={item}
            className="font-serif-title text-4xl md:text-[56px] text-white leading-[1.15] mb-10"
          >
            Construire l’Avenir Financier <br />
            des Jeunes Entrepreneurs Camerounais
          </motion.h1>

          {/* CTA */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-20"
          >
            <button className="bg-white text-[#050a14] px-8 py-3 rounded-full font-bold text-sm hover:scale-105 transition">
              Notre Mission
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-white/10 transition">
              Nous Contacter
            </button>
          </motion.div>

          {/* VALEURS */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {[
              { title: "Confiance", desc: "Nous bâtissons des Relations durables basées sur la transparence et l'intégrité.", icon: <Users size={16} /> },
              { title: "Sécurité", desc: "Vos fonds sont protégés dans un établissement agréé et réglementé.", icon: <Shield size={16} /> },
              { title: "Croissance", desc: "Nous accompagnons votre développement financier avec des solutions adaptées.", icon: <TrendingUp size={16} /> },
              { title: "Excellence", desc: "Un service de qualité pour répondre à toutes vos attentes financières.", icon: <Award size={16} /> },
              { title: "Proximité", desc: "Une équipe à votre écoute qui comprend les réalités camerounaises.", icon: <MapPin size={16} /> },
            ].map((v, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{
                  y: -8,
                  boxShadow: `0 20px 40px rgba(59,130,246,0.15)`,
                }}
                className="bg-[#121826] p-6 rounded-2xl border border-white/5 text-left transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="w-9 h-9 bg-[#1c2436] rounded-xl flex items-center justify-center text-[${BLUE}] mb-4"
                  style={{ color: BLUE }}
                >
                  {v.icon}
                </motion.div>

                <h3 className="text-white text-sm font-bold mb-2">
                  {v.title}
                </h3>
                <p className="text-gray-400 text-[12px] leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* STATS */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14 max-w-[900px] mx-auto"
          >
            {[
              { value: "1ère", label: "Catégorie Agréée" },
              { value: "5", label: "Types de Comptes" },
              { value: "100%", label: "Sécurisé" },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="bg-[#121826] rounded-2xl py-8 border border-white/5"
              >
                <div className="text-3xl font-bold mb-1" style={{ color: BLUE }}>
                  {s.value}
                </div>
                <div className="text-gray-400 text-xs font-medium">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA IMAGE */}
      <section className="relative h-[500px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-[#0a1224]/80"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-[1200px] mx-auto px-6 text-white flex flex-col md:flex-row justify-between items-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold lowercase leading-tight mb-8 md:mb-0">
            rejoignez mujec <br /> aujourd’hui
          </h2>

          <button className="bg-white text-black px-7 py-3 rounded-full font-bold flex items-center gap-3 hover:gap-5 transition-all">
            Ouvrir un Compte
            <span className="bg-black text-white rounded-full p-1">
              <ArrowRight size={14} />
            </span>
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
