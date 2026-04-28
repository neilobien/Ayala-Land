import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone, X } from 'lucide-react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = React.useState(false);

  const contactOptions = [
    {
      icon: <Phone size={20} />,
      label: 'Call',
      value: '+639163372900',
      href: 'tel:+639163372900',
      color: 'bg-brand-dark',
    },
    {
      icon: <MessageCircle size={20} />,
      label: 'WhatsApp',
      value: 'WhatsApp',
      href: 'https://wa.me/639163372900',
      color: 'bg-green-600',
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="flex flex-col gap-3"
          >
            {contactOptions.map((option, idx) => (
              <motion.a
                key={idx}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`${option.color} text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3 whitespace-nowrap`}
              >
                {option.icon}
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-70 leading-none mb-1">{option.label}</span>
                  <span className="text-sm font-medium leading-none">{option.value}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-brand-green text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-brand-green/90 transition-colors"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
}
