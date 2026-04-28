import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, TrendingUp, Globe } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative z-10">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                alt="Neil Kenneth Obien"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-brand-beige -rotate-6 rounded-3xl -z-0" />
          </motion.div>

          <div>
            <span className="text-brand-green uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Trusted Advisor</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">Expertise in Luxury <span className="italic font-serif">Portfolio Management</span>.</h2>
            
            <p className="text-lg text-brand-dark/70 font-light mb-8 leading-relaxed">
              Neil Kenneth Obien is a licensed real estate broker under Ayala Land International Sales, specializing in premium and investment-grade properties. He provides expert guidance to investors, OFWs, and professionals looking to secure strategic assets in the Philippines' most prime locations.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <FeatureItem 
                icon={<ShieldCheck className="text-brand-green" />} 
                title="Trusted Advisor" 
                desc="Navigating complex legal and financial landscapes with integrity." 
              />
              <FeatureItem 
                icon={<TrendingUp className="text-brand-green" />} 
                title="Investor-Focused" 
                desc="Focusing on properties with high potential for capital appreciation." 
              />
              <FeatureItem 
                icon={<Award className="text-brand-green" />} 
                title="Exclusive Inventory" 
                desc="Direct access to Ayala Land's prime residential and commercial projects." 
              />
              <FeatureItem 
                icon={<Globe className="text-brand-green" />} 
                title="International Reach" 
                desc="Seamless experience for OFWs and international property buyers." 
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs"
            >
              Learn More About My Strategy
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1">{icon}</div>
      <div>
        <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-2">{title}</h4>
        <p className="text-sm text-brand-dark/50 leading-relaxed font-light">{desc}</p>
      </div>
    </div>
  );
}
