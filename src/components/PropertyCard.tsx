import { motion } from 'motion/react';
import { Heart, Maximize2, BedDouble, House } from 'lucide-react';
import { Property } from '../types';
import { cn } from '../lib/utils';

interface PropertyCardProps {
  property: Property;
  key?: string | number;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl overflow-hidden property-card-shadow transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Status Tags */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full text-brand-dark">
            {property.status}
          </span>
          <span className={cn(
            "bg-brand-green/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white",
            property.status === 'Ready for Occupancy' && "bg-brand-dark/90"
          )}>
            {property.type}
          </span>
        </div>

        {/* Favorite Icon */}
        <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-brand-dark transition-all">
          <Heart size={18} />
        </button>
      </div>

      {/* Info Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-green mb-1">
              {property.developer}
            </p>
            <h3 className="text-xl font-display font-medium text-brand-dark group-hover:text-brand-green transition-colors">
              {property.name}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1 text-brand-dark/50 text-xs mb-4">
          <House size={14} className="flex-shrink-0" />
          <span>{property.location}</span>
        </div>

        <div className="flex items-center gap-4 mb-6 border-y border-brand-dark/5 py-3">
          {property.beds && (
            <div className="flex items-center gap-1.5">
              <BedDouble size={16} className="text-brand-dark/40" />
              <span className="text-sm font-medium">{property.beds} Beds</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Maximize2 size={16} className="text-brand-dark/40" />
            <span className="text-sm font-medium">{property.sqm} sqm</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-brand-dark/40 font-bold">List Price</span>
            <span className="text-lg font-medium text-brand-dark">{property.price}</span>
          </div>
          <motion.button
            whileHover={{ x: 3 }}
            className="text-brand-dark hover:text-brand-green font-bold text-xs uppercase tracking-widest flex items-center gap-2"
          >
            Inquire
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
