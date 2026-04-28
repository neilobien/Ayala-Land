import { motion } from 'motion/react';
import { PROPERTIES } from '../constants';
import PropertyCard from './PropertyCard';
import { ArrowRight } from 'lucide-react';

interface FeaturedGridProps {
  title: string;
  subtitle?: string;
  category?: string;
}

export default function FeaturedGrid({ title, subtitle, category }: FeaturedGridProps) {
  const filteredProperties = category 
    ? PROPERTIES.filter(p => p.type === category)
    : PROPERTIES;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            {subtitle && <span className="text-brand-green uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">{subtitle}</span>}
            <h2 className="text-4xl md:text-5xl font-display font-medium">{title}</h2>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="text-brand-dark font-bold text-xs uppercase tracking-widest flex items-center gap-2 border-b border-brand-dark pb-1"
          >
            View All Collections <ArrowRight size={14} />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.slice(0, 6).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
