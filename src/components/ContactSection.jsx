import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import mapImage from '../image/plan.png';

const ContactSection = () => (
  <section id="contact" className="py-12 sm:py-16 md:py-20 px-3 sm:px-6 md:px-10 space-y-12 md:space-y-20">

    {/* GRID PRINCIPAL */}
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 md:gap-12 lg:gap-20 items-start">

      {/* LEFT */}
      <div>

        <span className="inline-block text-xs sm:text-sm font-bold text-emerald-600 bg-emerald-50 px-3 sm:px-4 py-1 rounded-full mb-4">
          🎧 CONTACTEZ-NOUS
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-mujec-dark mb-4 sm:mb-6 leading-tight">
          Prêt à Ouvrir Votre Compte ?
        </h2>

        <p className="text-gray-500 text-sm sm:text-base mb-6 sm:mb-8 max-w-xl">
          Remplissez ce formulaire et notre équipe vous contactera dans les plus brefs délais...
        </p>

        {/* INFOS */}
        <div className="space-y-4 sm:space-y-6">

          {/* Adresse */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-emerald-50 text-emerald-600 rounded-lg">
              <MapPin size={18} />
            </div>
            <div>
              <p className="font-bold text-sm sm:text-base">Nos Agences</p>
              <p className="text-xs sm:text-sm text-gray-500">
                Yaoundé-Barrière (Immeuble MIWO Hotel) Cameroun
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-blue-50 text-mujec-blue rounded-lg">
              <Mail size={18} />
            </div>
            <div>
              <p className="font-bold text-sm sm:text-base">Email</p>
              <p className="text-xs sm:text-sm text-gray-500">
                mujecemf@gmail.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-blue-50 text-mujec-blue rounded-lg">
              <Phone size={18} />
            </div>
            <div>
              <p className="font-bold text-sm sm:text-base">Téléphone</p>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                (+237) 670-071-721<br />
                696-380-049 / 656137665 / 651287447
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* FORMULAIRE */}
      <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl border border-gray-100">

        <form className="space-y-4">

          <div>
            <label className="block text-xs sm:text-sm font-bold mb-2">
              Nom Complet *
            </label>
            <input
              type="text"
              placeholder="Votre nom complet"
              className="w-full p-2.5 sm:p-3 text-sm sm:text-base bg-gray-50 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-mujec-blue outline-none"
            />
          </div>

          {/* GRID INPUT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

            <div>
              <label className="block text-xs sm:text-sm font-bold mb-2">
                Email *
              </label>
              <input
                type="email"
                placeholder="votre@email.com"
                className="w-full p-2.5 sm:p-3 text-sm sm:text-base bg-gray-50 border rounded-lg sm:rounded-xl"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-bold mb-2">
                Téléphone *
              </label>
              <input
                type="text"
                placeholder="+237 XXX XXX XXX"
                className="w-full p-2.5 sm:p-3 text-sm sm:text-base bg-gray-50 border rounded-lg sm:rounded-xl"
              />
            </div>

          </div>

          <button className="w-full bg-mujec-blue text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg mt-2 sm:mt-4 transition-all hover:bg-blue-700 active:scale-95">
            Envoyer ma Demande
          </button>

        </form>

      </div>

    </div>

    {/* MAP SECTION */}
    <div className="bg-white p-4 sm:p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl border border-gray-100 overflow-hidden">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">

        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-mujec-dark">
          Plan de Localisation
        </h3>

        <span className="text-xs sm:text-sm text-gray-500 flex items-center gap-2">
          <MapPin size={14} className="text-emerald-600" />
          Yaoundé-Barrière
        </span>

      </div>

      {/* MAP */}
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">

        <img
          src={mapImage}
          alt="Localisation agence"
          className="w-full h-full object-cover"
        />

        {/* PIN */}
        <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-lg flex items-center gap-3">

          <div className="p-2 bg-red-100 text-red-600 rounded-full">
            <MapPin size={18} />
          </div>

          <div>
            <p className="text-sm font-bold">Agence MUJEC EMF</p>
            <p className="text-xs text-gray-500">Immeuble Hôtel Miwo</p>
          </div>

        </div>

      </div>

      {/* TEXTE */}
      <div className="space-y-3 text-xs sm:text-sm text-gray-500 max-w-3xl mx-auto">

        <p>
          Notre agence centrale à Yaoundé est idéalement située au cœur du quartier Barrière.
        </p>

        <p>
          Proche du Computer Center, de l'Hôpital Ngonmeda et de la Pharmacie d'Ahala.
        </p>

      </div>

    </div>

  </section>
);

export default ContactSection;