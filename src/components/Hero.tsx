import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
          alt="Premium Property"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block text-brand-beige uppercase tracking-[0.3em] text-xs font-bold mb-6">
            Ayala Land International Sales Inc.
          </span>
          <h1 className="text-6xl md:text-8xl font-display text-white mb-6 font-medium">
            Prime Properties. <br />
            <span className="italic font-serif text-brand-beige">Strategic</span> Investments.
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 font-light leading-relaxed">
            Licensed Real Estate Broker and Associate Regional Manager at Ayala Land International Sales. 
            A Fortune 500 awardee helping investors secure prime, high-growth properties.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ x: 5 }}
              onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-brand-dark px-8 py-4 rounded-full font-medium flex items-center gap-3"
            >
              Browse Properties <ArrowRight size={18} />
            </motion.button>
            <motion.a
              href="tel:+639163372900"
              whileHover={{ scale: 1.02 }}
              className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-medium backdrop-blur-sm flex items-center gap-3 hover:bg-white/10 transition-colors"
            >
              Call +639163372900
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-green text-white px-8 py-4 rounded-full font-medium flex items-center gap-3 hover:bg-brand-green/90 transition-colors"
            >
              Send Inquiry
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-10 bottom-0 top-0 w-px bg-white/10 hidden lg:block" />
      <div className="absolute right-10 bottom-0 top-0 w-px bg-white/10 hidden lg:block" />
    </section>
  );
}
