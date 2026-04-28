import { motion } from 'motion/react';
import { Filter, ChevronDown } from 'lucide-react';

export default function FilterSection() {
  return (
    <section className="py-12 bg-brand-beige/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <FilterButton label="Location" value="All Locations" />
            <FilterButton label="Property Type" value="All Types" />
            <FilterButton label="Budget" value="Any Budget" />
            <FilterButton label="Status" value="Any Status" />
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-brand-dark/40 uppercase tracking-widest font-bold text-[10px]">Sort by:</span>
            <button className="font-medium flex items-center gap-1"> Newest First <ChevronDown size={14} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterButton({ label, value }: { label: string; value: string }) {
  return (
    <button className="bg-white border border-brand-dark/5 px-6 py-3 rounded-full flex flex-col items-start min-w-[160px] hover:border-brand-dark/20 transition-all text-left group">
      <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-dark/40 mb-0.5 group-hover:text-brand-green transition-colors">
        {label}
      </span>
      <div className="flex items-center justify-between w-full">
        <span className="text-sm font-medium text-brand-dark">{value}</span>
        <ChevronDown size={14} className="text-brand-dark/40" />
      </div>
    </button>
  );
}
