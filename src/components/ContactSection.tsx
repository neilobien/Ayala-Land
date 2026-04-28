import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-brand-green uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Personal Consultation</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium mb-8">Let's Secure Your Next <span className="italic font-serif">Prime</span> Asset.</h2>
            
            <p className="text-lg text-brand-dark/70 font-light mb-12 leading-relaxed">
              Whether you're looking for a primary residence, a vacation home, or a high-yield investment, 
              provide your details below and I'll send you curated recommendations.
            </p>

            <div className="space-y-6">
              <ContactInfo icon={<Mail size={20} />} label="Email Address" value="obien.neil@ayalaland-intl.com" />
              <ContactInfo icon={<Phone size={20} />} label="Direct Line" value="+63 916 337 2900" />
              <ContactInfo icon={<MapPin size={20} />} label="Business Address" value="Ayala Land International Sales, Makati City" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-brand-dark/5"
          >
            <form 
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());
                
                try {
                  const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                  });
                  if (response.ok) {
                    alert('Thank you. Neil will contact you shortly.');
                    form.reset();
                  }
                } catch (error) {
                  console.error('Failed to send lead:', error);
                }
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <InputGroup name="fullName" label="Full Name" placeholder="e.g. Juan De La Cruz" required />
                <InputGroup name="email" label="Email Address" placeholder="e.g. juan@example.com" required />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <InputGroup name="phone" label="Phone Number" placeholder="e.g. +63 916 123 4567" required />
                <InputGroup name="budget" label="Budget Range" placeholder="e.g. 10M - 25M PHP" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <InputGroup name="location" label="Preferred Location" placeholder="e.g. Makati, BGC, Nuvali" />
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-brand-dark/40">Property Type</label>
                  <select name="propertyType" className="w-full bg-brand-beige/30 border border-brand-dark/5 rounded-full px-6 py-3 focus:outline-none focus:ring-1 focus:ring-brand-green transition-all text-sm appearance-none">
                    <option value="Condominium">Condominium</option>
                    <option value="Residential Lot">Residential Lot</option>
                    <option value="House and Lot">House and Lot</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-brand-dark/40">Message</label>
                <textarea 
                  name="message"
                  className="w-full bg-brand-beige/30 border border-brand-dark/5 rounded-2xl p-4 min-h-[120px] focus:outline-none focus:ring-1 focus:ring-brand-green transition-all"
                  placeholder="How can I help with your property needs?"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-dark text-white py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand-dark/90 transition-all group">
                Get Property Recommendations <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-green shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase font-bold tracking-widest text-brand-dark/40">{label}</p>
        <p className="font-medium text-brand-dark">{value}</p>
      </div>
    </div>
  );
}

function InputGroup({ label, placeholder, name, required }: { label: string; placeholder: string; name: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] uppercase font-bold tracking-widest text-brand-dark/40">{label}</label>
      <input 
        name={name}
        required={required}
        type="text" 
        placeholder={placeholder}
        className="w-full bg-brand-beige/30 border border-brand-dark/5 rounded-full px-6 py-3 focus:outline-none focus:ring-1 focus:ring-brand-green transition-all"
      />
    </div>
  );
}
