/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mujec-blue': '#0544BC', // Bleu principal visible sur les images
        'mujec-gold': '#FFCC00', // Jaune Or pour les boutons d'action
        'mujec-dark': '#111827', // Pour les sections sombres (À propos)
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      fontSize: {
        title: "17px",
        subtitle: "15px",
    },
  },
  },
  plugins: [],
}