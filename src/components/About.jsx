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
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* Counter Animation */
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
          "linear-gradient(135deg, #0a1224, #050a14, #0a1224, #050a14)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 20s ease infinite",
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

      {/* NOTRE HISTOIRE */}
      <section className="pt-28 pb-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="max-w-[1000px] mx-auto text-center"
        >
          <motion.span
            variants={item}
            className="text-xs tracking-[0.3em] text-gray-400 font-bold uppercase mb-6 block"
          >
            NOTRE HISTOIRE
          </motion.span>

          <motion.div
            variants={item}
            className="w-14 h-14 mx-auto bg-[#1c2436]/70 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 shadow-lg"
            style={{ color: BLUE }}
          >
            <BookOpen size={22} />
          </motion.div>

          <motion.h2
            variants={item}
            className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
          >
            Près de 3 ans d’engagement pour l’inclusion financière
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-400 mb-6 leading-relaxed max-w-xl mx-auto"
          >
            La MUJEC est née de la vision de Mme KUIPOU née VOUFACK NGOUNE
            FLORENCE, déterminée à promouvoir l’éducation financière et
            l’inclusion des jeunes entrepreneurs camerounais exclus du système
            bancaire traditionnel.
          </motion.p>

          <motion.div
            variants={item}
            className="bg-[#1c2436]/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-sm text-blue-400 font-mono mb-6 shadow-lg max-w-sm mx-auto"
          >
            COOP/GIC N° 23/215/CMR/CE/02/009/CCA/036004/036004000 (MUJECCOOP-CA)
          </motion.div>

          <motion.p
            variants={item}
            className="text-gray-400 leading-relaxed max-w-xl mx-auto"
          >
            Lancement officiel des activités en juillet 2024 avec l’ouverture de
            l’agence d’AHALA à Yaoundé.
          </motion.p>
        </motion.div>
      </section>

      {/* ================================================= */}
      {/* TIMELINE + PHOTO DG (inchangé) */}
      {/* ================================================= */}
      <section className="pb-24 px-4">
        <div className="max-w-[900px] mx-auto relative flex flex-col md:flex-row items-start md:items-center">
          {/* Timeline */}
          <div className="relative border-l border-white/10 pl-8 space-y-12 md:w-1/2">
            {[
              { year: "2022", title: "Naissance de la Vision" },
              { year: "2023", title: "Obtention de l’Immatriculation" },
              { year: "Juillet 2024", title: "Ouverture Agence AHALA" },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-[34px] w-4 h-4 bg-blue-500 rounded-full mt-1 shadow-lg"></div>
                <h4 className="text-blue-400 text-xs font-bold mb-1">{step.year}</h4>
                <h3 className="font-bold">{step.title}</h3>
              </motion.div>
            ))}
          </div>

          {/* Photo du Directeur Général */}
          <div className="mt-12 md:mt-0 md:ml-12 md:w-1/2 flex flex-col items-center">
            <motion.img
              src={avis2}
              alt="Directeur Général"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-500 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
              viewport={{ once: true }}
            />
            <h3 className="mt-4 text-xl font-bold text-center">
              Mme KUIPOU née VOUFACK NGOUNE FLORENCE
            </h3>
            <p className="text-gray-400 text-center mt-2 text-sm">
              Directeur Générale
            </p>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* VISION & MISSION */}
      {/* ================================================= */}
      <section className="py-24 px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12"
        >
          <motion.div
            variants={item}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-[#1c2436]/70 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-lg"
          >
            <h3 className="text-blue-400 text-xs uppercase mb-4">Vision</h3>
            <h2 className="text-1xl font-bold mb-6">
              La vision de MUJEC est d'être un établissement de microfinance autonome
              et pérenne à l'horizon 2027, un EMF de 2ème catégorie à l'horizon 2030,
              et une institution bancaire à l'horizon 2035.
            </h2>
            <p className="text-gray-400">
              Construire un écosystème financier solide et durable pour chaque jeune entrepreneur.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-[#1c2436]/70 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-lg"
          >
            <h3 className="text-blue-400 text-xs uppercase mb-4">Mission</h3>
            <h2 className="text-1xl font-bold mb-6">
              Contribuer durablement à la réduction de la vulnérabilité financière
            </h2>
            <p className="text-gray-400">
              Augmenter la capacité des membres à faire face à leurs besoins financiers,
              dégager des surplus d'exploitation pour assurer la croissance de l'institution
              et offrir des services financiers de manière durable.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ================================================= */}
      {/* NOS VALEURS */}
      {/* ================================================= */}
      <section className="py-24 px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="max-w-[1200px] mx-auto text-center"
        >
          <motion.h2 variants={item} className="text-4xl font-bold mb-16">
            Nos Valeurs
          </motion.h2>

          <motion.div variants={container} className="grid md:grid-cols-5 gap-6">
            {[
              { title: "Confiance", icon: <Users size={18} /> },
              { title: "Sécurité", icon: <Shield size={18} /> },
              { title: "Croissance", icon: <TrendingUp size={18} /> },
              { title: "Excellence", icon: <Award size={18} /> },
              { title: "Proximité", icon: <MapPin size={18} /> },
            ].map((v, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="bg-[#1c2436]/70 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg"
              >
                <div className="mb-4 text-blue-400 flex justify-center">{v.icon}</div>
                <h3 className="font-bold">{v.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          {/* STATS */}
          <motion.div variants={container} className="grid md:grid-cols-3 gap-6 mt-20">
            {[
              { value: 30, label: "Années de Vision" },
              { value: 5, label: "Types de Comptes" },
              { value: 100, label: "Sécurité (%)" },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="bg-gradient-to-br from-[#121826]/70 to-[#0e1624]/70 backdrop-blur-md p-10 rounded-2xl border border-white/10 shadow-lg"
              >
                <div className="text-4xl font-bold text-blue-500 mb-2">
                  <Counter to={s.value} />+
                </div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
