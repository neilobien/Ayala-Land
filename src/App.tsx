import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterSection from './components/FilterSection';
import LocationSection from './components/LocationSection';
import FeaturedGrid from './components/FeaturedGrid';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';

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
      <FeaturedGrid 
        title="Featured Properties." 
        subtitle="Exclusive Collections" 
      />

      <LocationSection />

      {/* Categories Sections */}
      <FeaturedGrid 
        title="Condominiums." 
        subtitle="Urban Masterpieces" 
        category="Condominium"
      />
      
      <div className="bg-brand-beige/20">
        <FeaturedGrid 
          title="Residential Lots." 
          subtitle="Prime Foundations" 
          category="Residential Lot"
        />
      </div>

      <FeaturedGrid 
        title="House and Lot." 
        subtitle="Move-In Ready" 
        category="House and Lot"
      />

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
              {/* Other routes can be added here */}
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />

        {/* Floating Chat Button */}
        <motion.a
          href="https://wa.me/639163372900"
          target="_blank"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-[100] bg-brand-green text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-brand-green/90 transition-colors"
        >
          <MessageCircle size={24} />
        </motion.a>
      </div>
    </Router>
  );
}

