import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Facebook, Linkedin, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20 border-b border-white/10">
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-8">
              <span className="text-xl font-bold font-display uppercase tracking-wider">Neil Kenneth Obien</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-beige/60 -mt-1">Licensed Real Estate Broker</span>
            </div>
            <p className="text-white/50 text-sm font-light leading-relaxed mb-8 max-w-md">
              Associate Regional Manager at Ayala Land International Sales. Fortune 500 awardee specialized in high-growth property investments in the Philippines.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-white/60 text-sm font-light">
                <Mail size={16} /> <a href="mailto:obien.neil@ayalaland-intl.com" className="hover:text-white transition-colors">obien.neil@ayalaland-intl.com</a>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm font-light">
                <Phone size={16} /> <a href="tel:+639163372900" className="hover:text-white transition-colors">+63 916 337 2900</a>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm font-light">
                <MapPin size={16} /> <span>23F 6750 Office Tower, Ayala Avenue, Makati City</span>
              </div>
            </div>
            <div className="flex gap-4">
              <SocialLink icon={<Facebook size={18} />} />
              <SocialLink icon={<Instagram size={18} />} />
              <SocialLink icon={<Linkedin size={18} />} />
              <SocialLink icon={<MessageCircle size={18} />} />
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest mb-8 text-brand-beige">Services</h4>
            <ul className="space-y-4">
              <FooterLink label="Property Advisory" />
              <FooterLink label="Portfolio Management" />
              <FooterLink label="Strategic Investments" />
              <FooterLink label="International Sales" />
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest mb-8 text-brand-beige">Newsletter</h4>
            <p className="text-white/50 text-sm font-light leading-relaxed mb-6">
              Receive updates on new project launches and exclusive inventory.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-brand-beige transition-all"
              />
              <button className="absolute right-2 top-1.5 bg-white text-brand-dark p-1.5 rounded-full hover:bg-brand-beige transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">
            © 2024 Neil Kenneth Obien. All Rights Reserved. PRC License No. XXXX
          </p>
          <div className="flex gap-8">
            <button className="text-white/30 text-[10px] uppercase tracking-widest font-bold hover:text-white transition-colors">Privacy Policy</button>
            <button className="text-white/30 text-[10px] uppercase tracking-widest font-bold hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:border-white hover:text-white transition-all">
      {icon}
    </button>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <li>
      <button className="text-white/50 text-sm hover:text-white transition-colors font-light">
        {label}
      </button>
    </li>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}
