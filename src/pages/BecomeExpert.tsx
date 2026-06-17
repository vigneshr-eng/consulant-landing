import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import expertImg from '../assests/becomeexpert.jpeg';

const PROFILE_CARDS = [
  {
    initials: 'AJ',
    name: 'Alex Johnson',
    username: '@alexj',
    color: '#284AA3',
    pos: { bottom: 48, left: 24 },
    delay: 0,
  },
  {
    initials: 'SM',
    name: 'Sarah Mitchell',
    username: '@sarahm',
    color: '#e91e8c',
    pos: { bottom: 112, left: 68 },
    delay: 0.8,
  },
  {
    initials: 'RK',
    name: 'Raj Kumar',
    username: '@rajk',
    color: '#22c55e',
    pos: { bottom: 176, left: 112 },
    delay: 1.6,
  },
];

const FAQ_DATA = [
  {
    id: 'faq1',
    question: 'How can I join Bizpole Consult as a consultant?',
    answer:
      'You can register on the platform, create your professional profile, showcase your expertise, and list the consulting services you offer. Once your profile is reviewed, you can start connecting with potential clients.',
  },
  {
    id: 'faq2',
    question: 'Can I offer multiple consulting services?',
    answer:
      'Yes. Consultants can create and manage multiple service offerings, allowing them to showcase different areas of expertise and reach a broader audience.',
  },
  {
    id: 'faq3',
    question: 'How do clients find my profile?',
    answer:
      'Your profile is discoverable through the platform\'s search and category features. Clients can find you based on your industry, skills, services, and areas of specialization.',
  },
  {
    id: 'faq4',
    question: 'Can I manage my own schedule?',
    answer:
      'Yes. Bizpole Consult allows you to set your availability and manage your consultation schedule, giving you the flexibility to work on your own terms.',
  },
  {
    id: 'faq5',
    question: 'How do I receive payments?',
    answer:
      'Payments for completed consultations are processed securely through the platform\'s integrated payment system, providing a smooth and reliable experience for both consultants and clients.',
  },
];

export default function BecomeExpert() {
  const [openFaq, setOpenFaq] = useState<string>('faq1');

  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#fff' }}>

      {/* ── Hero Section ── */}
      <div
        className="mx-auto flex flex-col lg:flex-row items-center"
        style={{
          maxWidth: 1200,
          gap: 60,
          paddingTop: 'clamp(48px, 6vw, 80px)',
          paddingBottom: 'clamp(48px, 6vw, 80px)',
          paddingLeft: 'clamp(16px, 3vw, 24px)',
          paddingRight: 'clamp(16px, 3vw, 24px)',
        }}
      >
        {/* LEFT — Image Card */}
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.33, 1, 0.68, 1] }}
          className="relative shrink-0 w-full"
          style={{ maxWidth: 590, height: 420, borderRadius: 32, overflow: 'hidden' }}
        >
          <motion.img
            src={expertImg}
            alt="Become an Expert"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
            style={{ display: 'block' }}
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)',
            }}
          />

          {PROFILE_CARDS.map((card, i) => (
            <motion.div
              key={i}
              className="absolute flex items-center bg-white"
              style={{
                borderRadius: 999,
                padding: '8px 14px',
                gap: 10,
                bottom: card.pos.bottom,
                left: card.pos.left,
                zIndex: 10 + i,
                boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: card.delay,
                ease: 'easeInOut',
              }}
            >
              <div
                className="flex items-center justify-center text-white font-bold shrink-0"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: card.color,
                  fontSize: 13,
                }}
              >
                {card.initials}
              </div>
              <div style={{ lineHeight: 1.3 }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#111827', margin: 0 }}>
                  {card.name}
                </p>
                <p style={{ fontSize: 12, color: '#64748B', margin: 0 }}>{card.username}</p>
              </div>
            </motion.div>
          ))}

          <motion.div
            style={{
              position: 'absolute',
              background: '#F3C625',
              color: '#111827',
              fontWeight: 700,
              fontSize: 13,
              padding: '10px 24px',
              borderRadius: 999,
              transform: 'rotate(-35deg)',
              bottom: 140,
              right: -12,
              zIndex: 20,
              whiteSpace: 'nowrap',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              userSelect: 'none',
            }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            Increase Appointments
          </motion.div>
        </motion.div>

        {/* RIGHT — Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.33, 1, 0.68, 1] }}
          className="flex flex-col items-start gap-6 flex-1 text-left"
          style={{ maxWidth: 590 }}
        >
          <span
            className="inline-flex items-center font-semibold"
            style={{
              background: 'white',
              border: '1px solid #E2E8F0',
              borderRadius: 999,
              padding: '8px 16px',
              fontSize: 12,
              color: '#284AA3',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            }}
          >
            ✧ Become Explore ✧
          </span>

          <h1
            style={{
              fontFamily: "'Inter', 'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: '1.25',
              letterSpacing: 0,
              color: '#284AA3',
              margin: 0,
            }}
          >
            Expand Your Business and Connect More Clients
          </h1>

          <p
            style={{
              fontSize: 16,
              lineHeight: '28px',
              color: '#475569',
              maxWidth: 520,
              margin: 0,
            }}
          >
            Bizpole Consult helps consultants build trust, attract new clients, and manage
            their services in the most efficient way possible.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#1e3a8a' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 20 }}
            style={{
              background: '#284AA3',
              color: '#fff',
              borderRadius: 999,
              height: 48,
              paddingLeft: 28,
              paddingRight: 28,
              fontSize: 15,
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(40,74,163,0.35)',
            }}
          >
            Register Now
          </motion.button>
        </motion.div>
      </div>

      {/* ── FAQ Section ── */}
      <div
        className="mx-auto"
        style={{
          maxWidth: 1200,
          paddingTop: 'clamp(40px, 6vw, 80px)',
          paddingBottom: 'clamp(40px, 6vw, 80px)',
          paddingLeft: 'clamp(16px, 3vw, 24px)',
          paddingRight: 'clamp(16px, 3vw, 24px)',
        }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <h2
            className="font-display font-black text-slate-900"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.2, marginBottom: 12 }}
          >
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: 16, color: '#64748B', lineHeight: '26px' }}>
            Find answers to common questions about using Bizpole Consult.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3 max-w-2xl mx-auto">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openFaq === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="overflow-hidden"
                style={{
                  border: '1px solid #E2E8F0',
                  borderRadius: 12,
                  background: isOpen ? '#284AA3' : '#fff',
                  transition: 'background 0.3s ease',
                }}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? '' : item.id)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none"
                  style={{ gap: 12 }}
                >
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: isOpen ? '#fff' : '#1E293B',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      size={18}
                      style={{ color: isOpen ? '#fff' : '#64748B' }}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                      className="overflow-hidden"
                    >
                      <p
                        className="px-6 pb-5"
                        style={{
                          fontSize: 14,
                          lineHeight: '24px',
                          color: 'rgba(255,255,255,0.82)',
                          margin: 0,
                        }}
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div
        className="w-full"
        style={{ background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mx-auto text-center flex flex-col items-center gap-6"
          style={{
            maxWidth: 680,
            paddingTop: 'clamp(48px, 6vw, 80px)',
            paddingBottom: 'clamp(48px, 6vw, 80px)',
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          <h2
            style={{
              fontFamily: "'Inter', 'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              lineHeight: 1.25,
              color: '#0F172A',
              margin: 0,
            }}
          >
            Ready to Grow Your Consulting Practice?
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: '28px',
              color: '#64748B',
              maxWidth: 520,
              margin: 0,
            }}
          >
            Whether you're a business looking for guidance or a consultant looking to grow,
            Bizpole Consult helps you build valuable professional relationships.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#1e3a8a' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 320, damping: 20 }}
              style={{
                background: '#284AA3',
                color: '#fff',
                borderRadius: 999,
                height: 48,
                paddingLeft: 24,
                paddingRight: 24,
                fontSize: 15,
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(40,74,163,0.28)',
              }}
            >
              Reach More Clients
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#284AA3', color: '#284AA3' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 320, damping: 20 }}
              style={{
                background: 'transparent',
                color: '#0F172A',
                borderRadius: 999,
                height: 48,
                paddingLeft: 24,
                paddingRight: 24,
                fontSize: 15,
                fontWeight: 600,
                border: '1.5px solid #CBD5E1',
                cursor: 'pointer',
              }}
            >
              I'm a Business →
            </motion.button>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
