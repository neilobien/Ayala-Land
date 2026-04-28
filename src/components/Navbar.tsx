import { motion } from 'motion/react';
import { Search, MapPin, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex flex-col cursor-pointer" 
          onClick={() => navigate('/')}
        >
          <span className="text-xl font-bold font-display uppercase tracking-wider">Neil Kenneth Obien</span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-green/80 -mt-1">Licensed Real Estate Broker</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink label="Home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          <NavLink label="Location" onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })} />
          <NavLink label="Condominiums" onClick={() => document.getElementById('condominiums')?.scrollIntoView({ behavior: 'smooth' })} />
          <NavLink label="Residential Lot" onClick={() => document.getElementById('lots')?.scrollIntoView({ behavior: 'smooth' })} />
          <NavLink label="House and Lot" onClick={() => document.getElementById('house-and-lot')?.scrollIntoView({ behavior: 'smooth' })} />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-brand-dark text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-brand-dark/90 transition-colors"
        >
          Book a Consultation
        </motion.button>
      </div>
    </nav>
  );
}

function NavLink({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-sm font-medium text-brand-dark/70 hover:text-brand-dark transition-colors relative group"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-green transition-all group-hover:w-full" />
    </button>
  );
}
