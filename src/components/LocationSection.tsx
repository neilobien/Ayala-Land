import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { LOCATIONS } from '../constants';

export default function LocationSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-brand-green uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Strategic Destinations</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium">Primed for Growth.</h2>
          </div>
          <p className="max-w-md text-brand-dark/60 font-light leading-relaxed">
            Discover Ayala Land developments in the most coveted addresses in the Philippines. 
            From bustling business districts to tranquil vacation homes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {LOCATIONS.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-6 left-6 flex flex-col">
                <span className="text-white font-display text-2xl font-medium">{location.name}</span>
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    className="flex justify-between w-full"
                  >
                     <span className="text-white/60 text-[10px] uppercase tracking-widest font-bold flex items-center gap-1 group-hover:text-white transition-colors">
                      View Listings <ArrowUpRight size={12} />
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
