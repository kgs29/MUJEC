import { useState } from 'react'
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from "./components/Services";
import AccountsSection from './components/AccountsSection';
import ContactSection from './components/ContactSection';
import About from './components/About';
import Testimonials from './components/Testimonials';
import JoinSection from './components/JoinSection';
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return  (
    <div className="font-sans bg-white">
      <Navbar />
      <Hero />
      <Services />
      <AccountsSection />
      <About />
       <JoinSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App
