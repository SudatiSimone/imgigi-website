'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-xl transition
      ${open
        ? 'bg-brand-white border border-brand-sand/70 shadow-md'
        : 'bg-brand-white border border-brand-sand/40'}`}
    >
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-brand-black">{question}</span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 text-brand-rust transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="faq-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-5 md:px-6 pb-5 text-brand-black/80 border-t border-brand-sand/40"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
