import React from 'react';
import { ThemeProvider } from './components/context/ThemeContext';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Testimonials from './components/sections/Testimonials';
import Process from './components/sections/Process';
import Contact from './components/sections/Contact';
import ParticleBackground from './components/ui/ParticleBackground';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-hidden bg-midnight text-white">
        <ParticleBackground />
        <Layout>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <Process />
          <Contact />
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;