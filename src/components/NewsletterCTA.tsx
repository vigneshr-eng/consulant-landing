import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => { setSubmitted(false); setEmail(''); }, 3500);
    }
  };

  return (
    <div
      className="w-full mx-auto"
      style={{
        maxWidth: 792.56,
        paddingLeft: 24.77,
        paddingRight: 24.77,
        marginTop: 80,
        marginBottom: 80,
      }}
    >
      {/* ─────────── CTA TOP BLOCK ─────────── */}
      <div className="flex flex-col items-center text-center">

        {/* Small Label */}
        <p
          className="font-bold uppercase"
          style={{ fontSize: 11, color: '#4A63E7', letterSpacing: '1.5px' }}
        >
          GET STARTED TODAY
        </p>

        {/* Main Heading */}
        <h2
          className="font-extrabold mt-3"
          style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            color: '#172554',
            lineHeight: '120%',
            maxWidth: 700,
          }}
        >
          Connecting Businesses with the Right Expertise
        </h2>

        {/* Description */}
        <p
          className="mt-4"
          style={{ fontSize: 16, color: '#64748B', maxWidth: 620, lineHeight: 1.65 }}
        >
          Bizpole Consult makes it easy for businesses and consultants to build valuable
          professional relationships and achieve their goals.
        </p>

        {/* Secondary Text */}
        <p className="mt-3" style={{ fontSize: 14, color: '#94A3B8' }}>
          Find the right expert. Book instantly. Get better outcomes.
        </p>

        {/* Button Group */}
        <div
          className="flex flex-wrap items-center justify-center gap-4"
          style={{ marginTop: 32 }}
        >
          {/* Outline button */}
          <motion.button
            whileHover={{ backgroundColor: '#4A63E7', color: '#ffffff' }}
            transition={{ duration: 0.18 }}
            className="font-semibold cursor-pointer"
            style={{
              height: 48,
              paddingLeft: 28,
              paddingRight: 28,
              borderRadius: 10,
              border: '1px solid #4A63E7',
              color: '#4A63E7',
              background: 'transparent',
              fontSize: 15,
            }}
          >
            Reach More Clients
          </motion.button>

          {/* Filled button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="font-semibold text-white cursor-pointer"
            style={{
              height: 48,
              paddingLeft: 28,
              paddingRight: 28,
              borderRadius: 10,
              background: '#3657C9',
              fontSize: 15,
              border: 'none',
            }}
          >
            Connect with Experts
          </motion.button>
        </div>

        {/* Bottom Caption */}
        <p style={{ fontSize: 12, color: '#94A3B8', marginTop: 16 }}>
          Expert Connections · Instant Scheduling · Better Outcomes
        </p>
      </div>


      {/* Bottom Divider */}
      <div
        style={{
          width: '100%',
          height: 1,
          background: '#E5E7EB',
          marginTop: 24,
        }}
      />
    </div>
  );
}
