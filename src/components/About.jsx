'use client'

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import avis2 from "../assets/avis2.png";
import {
  Shield,
  TrendingUp,
  Award,
  Users,
  MapPin,
  BookOpen,
} from "lucide-react";

const BLUE = "#3b82f6";

/* Animations */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* Counter */
const Counter = ({ from = 0, to, duration = 2000 }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = from;
    const increment = (to - from) / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        start = to;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [from, to, duration]);

  return <span>{count}</span>;
};

const About = () => {
  return (
    <div
      id="apropos"
      className="w-full relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(135deg, #0a1224, #050a14, #0a1224)",
        backgroundSize: "300% 300%",
        animation: "gradientMove 18s ease infinite",
      }}
    >
      <style>
        {`
          @keyframes gradientMove {
            0% {background-position:0% 50%;}
            50% {background-position:100% 50%;}
            100% {background-position:0% 50%;}
          }
        `}
      </style>

      {/* ================= HISTOIRE ================= */}
      <section className="pt-24 sm:pt-28 pb-16 sm:pb-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            variants={item}
            className="text-[10px] sm:text-xs tracking-[0.25em] text-gray-400 font-bold uppercase mb-5 block"
          >
            NOTRE HISTOIRE
          </motion.span>

          <motion.div
            variants={item}
            className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-[#1c2436]/70 rounded-2xl flex items-center justify-center mb-6"
            style={{ color: BLUE }}
          >
            <BookOpen size={20} />
          </motion.div>

          <motion.h2
            variants={item}
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Près de 3 ans d’engagement pour l’inclusion financière
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-400 text-sm sm:text-base mb-6 max-w-xl mx-auto"
          >
            La MUJEC est née de la vision de Mme KUIPOU née VOUFACK NGOUNE
            FLORENCE, déterminée à promouvoir l’éducation financière et
            l’inclusion des jeunes entrepreneurs camerounais.
          </motion.p>

          <motion.div
            variants={item}
            className="bg-[#1c2436]/70 border border-white/10 rounded-xl p-4 text-xs text-blue-400 font-mono mb-6"
          >
            COOP/GIC N° 23/215/CMR/CE/02/009/CCA
          </motion.div>
        </motion.div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">

          {/* Timeline */}
          <div className="w-full md:w-1/2 relative border-l border-white/10 pl-6 space-y-10">
            {[
              { year: "2022", title: "Naissance de la Vision" },
              { year: "2023", title: "Immatriculation" },
              { year: "2024", title: "Ouverture Agence AHALA" },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-2 w-3 h-3 bg-blue-500 rounded-full"></div>
                <p className="text-blue-400 text-xs">{step.year}</p>
                <h3 className="font-bold text-sm sm:text-base">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Image DG */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <motion.img
              src={avis2}
              alt="DG"
              className="w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover border-4 border-blue-500 shadow-xl"
              whileHover={{ scale: 1.05 }}
            />

            <h3 className="mt-4 text-lg sm:text-xl font-bold text-center">
              Mme KUIPOU FLORENCE
            </h3>
            <p className="text-gray-400 text-sm text-center">
              Directeur Générale
            </p>
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          {[{
            title: "Vision",
            text: "Devenir une institution financière majeure à l’horizon 2035."
          },{
            title: "Mission",
            text: "Réduire la vulnérabilité financière des populations."
          }].map((card,i)=>(
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-[#1c2436]/70 p-6 sm:p-10 rounded-2xl border border-white/10"
            >
              <h3 className="text-blue-400 text-xs mb-2 uppercase">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                {card.text}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= VALEURS ================= */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12">
            Nos Valeurs
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { title: "Confiance", icon: <Users size={18} /> },
              { title: "Sécurité", icon: <Shield size={18} /> },
              { title: "Croissance", icon: <TrendingUp size={18} /> },
              { title: "Excellence", icon: <Award size={18} /> },
              { title: "Proximité", icon: <MapPin size={18} /> },
            ].map((v, i) => (
              <div
                key={i}
                className="bg-[#1c2436]/70 p-5 rounded-xl border border-white/10 hover:scale-105 transition"
              >
                <div className="text-blue-400 mb-2 flex justify-center">
                  {v.icon}
                </div>
                <p className="text-sm">{v.title}</p>
              </div>
            ))}
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {[
              { value: 30, label: "Années Vision" },
              { value: 5, label: "Comptes" },
              { value: 100, label: "Sécurité %" },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-[#121826]/70 p-6 rounded-xl border border-white/10"
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-500">
                  <Counter to={s.value} />+
                </div>
                <p className="text-xs text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;