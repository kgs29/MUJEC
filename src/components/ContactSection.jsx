import React from 'react';

const ContactSection = () => (
  <section id="contact" className="py-20 px-10 grid md:grid-cols-2 gap-16 items-start">
    <div>
      <span className="text-emerald-500 bg-emerald-50 px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">🎧 CONTACTEZ-NOUS</span>
      <h2 className="text-5xl font-bold text-mujec-dark mb-6">Prêt à Ouvrir Votre Compte ?</h2>
      <p className="text-gray-500 mb-8">Remplissez ce formulaire et notre équipe vous contactera dans les plus brefs délais...</p>
      
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">📍</div>
          <div><p className="font-bold">Nos Agences</p><p className="text-sm text-gray-500">Yaoundé-Barrière (Immeuble MIWO Hotel) Cameroun</p></div>
        </div>
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-mujec-blue rounded-lg">✉️</div>
          <div><p className="font-bold">Email</p><p className="text-sm text-gray-500">mujecemf@gmail.com</p></div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-mujec-blue rounded-lg">✉️</div>
          <div><p className="font-bold"></p><p className="text-sm text-gray-500">(+237) 670-071-721/696-380-049</p></div>
        </div>

      </div>
    </div>

    <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-bold mb-2">Nom Complet *</label>
          <input type="text" placeholder="Votre nom complet" className="w-full p-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-mujec-blue outline-none" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold mb-2">Email *</label>
            <input type="email" placeholder="votre@email.com" className="w-full p-3 bg-gray-50 border rounded-xl" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Téléphone *</label>
            <input type="text" placeholder="+237 XXX XXX XXX" className="w-full p-3 bg-gray-50 border rounded-xl" />
          </div>
        </div>
        <button className="w-full bg-mujec-blue text-white py-4 rounded-xl font-bold text-lg mt-4">
          Envoyer ma Demande
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection;
