import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Magie from './pages/Magie';
import Potentiel from './pages/Potentiel';
import ProjetMagique from './pages/ProjetMagique';
import ProjetDetail from './pages/ProjetDetail';
import CompleteHistory from './pages/histoire-complete';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative min-h-screen overflow-hidden bg-midnight text-white">
          <ParticleBackground />
          <Routes>
            <Route path="/magie" element={<Magie />} />
            <Route path="/potentiel" element={<Potentiel />} />
            <Route path="/projet-magique" element={<ProjetMagique />} />
            <Route path="/histoire" element={<CompleteHistory />} />
            <Route path="/projet/:id" element={<ProjetDetail />} />
            <Route path="/" element={
              <Layout>
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Testimonials />
                <Process />
                <Contact />
              </Layout>
            } />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;