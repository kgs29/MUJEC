import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
 import mapImage from '../image/plan.png'; 

const ContactSection = () => (
  <section id="contact" className="py-20 px-6 sm:px-10 space-y-16 lg:space-y-24">
    {/* Grille de texte et formulaire */}
    <div className="grid md:grid-cols-[2.5fr_1.5fr] gap-12 lg:gap-24 items-start">
      <div>
        <span className="font-roboto text-roboto-base text-emerald-500 bg-emerald-50 px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">🎧 CONTACTEZ-NOUS</span>
        <h2 className="font-roboto text-roboto-lg text-4xl sm:text-5xl font-bold text-mujec-dark mb-6">Prêt à Ouvrir Votre Compte ?</h2>
        <p className="font-roboto text-roboto-base text-gray-500 mb-8">Remplissez ce formulaire et notre équipe vous contactera dans les plus brefs délais...</p>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg"><MapPin size={20} /></div>
            <div><p className="font-roboto text-roboto-md font-bold">Nos Agences</p><p className="font-roboto text-roboto-base text-sm text-gray-500">Yaoundé-Barrière (Immeuble MIWO Hotel) Cameroun</p></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-mujec-blue rounded-lg"><Mail size={20} /></div>
            <div><p className="font-roboto text-roboto-md font-bold">Email</p><p className="font-roboto text-roboto-base text-sm text-gray-500">mujecemf@gmail.com</p></div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-mujec-blue rounded-lg"><Phone size={20} /></div>
            <div><p className="font-roboto text-roboto-md font-bold">Téléphone</p><p className="font-roboto text-roboto-base text-sm text-gray-500">(+237) 670-071-721/696-380-049/656137665/651287447</p></div>
          </div>

        </div>
      </div>

      <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
        <form className="space-y-4">
          <div>
            <label className="font-roboto text-roboto-md block text-sm font-bold mb-2">Nom Complet *</label>
            <input type="text" placeholder="Votre nom complet" className="font-roboto text-roboto-base w-full p-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-mujec-blue outline-none" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-roboto text-roboto-md block text-sm font-bold mb-2">Email *</label>
              <input type="email" placeholder="votre@email.com" className="font-roboto text-roboto-base w-full p-3 bg-gray-50 border rounded-xl" />
            </div>
            <div>
              <label className="font-roboto text-roboto-md block text-sm font-bold mb-2">Téléphone *</label>
              <input type="text" placeholder="+237 XXX XXX XXX" className="font-roboto text-roboto-base w-full p-3 bg-gray-50 border rounded-xl" />
            </div>
          </div>
          <button className="font-roboto text-roboto-base w-full bg-mujec-blue text-white py-4 rounded-xl font-bold text-lg mt-4">
            Envoyer ma Demande
          </button>
        </form>
      </div>
    </div>

    {/* Plan de localisation - Panneau autonome */}
    <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <h3 className="font-roboto text-roboto-lg text-3xl font-bold text-mujec-dark">Plan de Localisation : Notre Agence à Yaoundé</h3>
        <span className="font-roboto text-roboto-base text-sm text-gray-500 flex items-center gap-2 flex-shrink-0">
          <MapPin size={16} className="text-emerald-600" />
          Yaoundé-Barrière
        </span>
      </div>

      <div className="relative aspect-[16/9] border-2 border-dashed border-gray-100 rounded-3xl overflow-hidden mb-8">
        {/* Utilisation de l'image de la carte originale avec des marges négatives pour masquer l'UI de Google Maps */}
        <div className="absolute inset-0 w-[110%] h-[110%] top-[-5%] left-[-5%]">
          <img 
            src={mapImage} 
            alt="Plan de localisation de l'agence Yaoundé-Barrière" 
            className="w-full h-full object-cover scale-[1.05]" 
          />
          {/* Overlay stylisé pour l'Hôtel Miwo (notre emplacement) */}
          <div className="absolute top-[67%] left-[61%] translate-x-[-50%] translate-y-[-50%] p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center gap-3">
            <div className="p-2.5 bg-red-100 text-red-600 rounded-full flex-shrink-0">
              <MapPin size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-roboto text-roboto-md font-bold text-lg">Agence MUJEC EMF</p>
              <p className="font-roboto text-roboto-base text-sm text-gray-500">Immeuble Hôtel Miwo</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="font-roboto text-roboto-base text-gray-500">
          Notre agence centrale à Yaoundé est idéalement située au cœur du quartier Barrière, au sein de l'immeuble Hôtel Miwo. Ce point de repère bien connu nous permet de vous offrir une accessibilité maximale.
        </p>
        <p className="font-roboto text-roboto-base text-gray-500">
          Comme vous pouvez le voir sur la carte satellite, nous sommes à proximité de plusieurs infrastructures clés telles que le Computer Center, l'Hôpital Ngonmeda, et la Pharmacie d'Ahala. Venez nous rendre visite pour tous vos besoins de microfinance.
        </p>
      </div>
    </div>
  </section>
);

export default ContactSection;