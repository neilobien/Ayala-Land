import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterSection from './components/FilterSection';
import LocationSection from './components/LocationSection';
import FeaturedGrid from './components/FeaturedGrid';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import { motion, AnimatePresence } from 'motion/react';

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <FilterSection />
      
      {/* Property Listings Grid */}
      <div id="properties">
        <FeaturedGrid 
          title="Featured Properties." 
          subtitle="Exclusive Collections" 
        />
      </div>

      <div id="location">
        <LocationSection />
      </div>

      {/* Categories Sections */}
      <div id="condominiums">
        <FeaturedGrid 
          title="Condominiums." 
          subtitle="Urban Masterpieces" 
          category="Condominium"
        />
      </div>
      
      <div id="lots" className="bg-brand-beige/20">
        <FeaturedGrid 
          title="Residential Lots." 
          subtitle="Prime Foundations" 
          category="Residential Lot"
        />
      </div>

      <div id="house-and-lot">
        <FeaturedGrid 
          title="House and Lot." 
          subtitle="Move-In Ready" 
          category="House and Lot"
        />
      </div>

      <AboutSection />
      <ContactSection />
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
}

