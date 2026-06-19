import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, LogIn, UploadCloud, LayoutList, ArrowRight, Briefcase, Award, Calendar, Network, Star, ArrowLeft, CheckCircle2 } from 'lucide-react';
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

const FEATURES = [
  {
    Icon: Briefcase,
    iconBg: '#284AA3',
    iconColor: '#F3C625',
    title: 'Highlight Your Services',
    desc: 'Offer a range of services, including consultations, coaching programs, project advisory, workshops, and ongoing business support packages.',
  },
  {
    Icon: Award,
    iconBg: '#F3C625',
    iconColor: '#284AA3',
    title: 'Establish a Professional Presence',
    desc: 'Build a detailed profile highlighting your expertise, certifications, industry experience, and success stories.',
  },
  {
    Icon: Calendar,
    iconBg: '#FFF7E6',
    iconColor: '#D9A11A',
    title: 'Manage Your Schedule',
    desc: 'Set your availability, manage appointments, and avoid scheduling conflicts with integrated calendar tools.',
  },
  {
    Icon: Network,
    iconBg: '#F4EEFF',
    iconColor: '#8B5CF6',
    title: 'Expand Your Network',
    desc: 'Connect with businesses, startups, and professionals seeking expert advice and support.',
  },
  {
    Icon: Star,
    iconBg: '#FFF1F2',
    iconColor: '#EF4444',
    title: 'Grow Long-Term Partnerships',
    desc: 'Build credibility by delivering great service and earning client trust and reviews.',
  },
];

export default function BecomeExpert() {
  const [openFaq, setOpenFaq] = useState<string>('faq1');
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [otpEmail, setOtpEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpSending, setOtpSending] = useState(false);

  const scrollCarousel = (dir: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const amount = carouselRef.current.offsetWidth / 2 + 16;
    carouselRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

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
            onClick={() => setShowRegisterModal(true)}
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

      {/* ── Built to Help Section ── */}
      <div className="w-full" style={{ background: '#fff' }}>
        <div
          className="mx-auto"
          style={{
            maxWidth: 1200,
            padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)',
          }}
        >
          {/* Heading */}
       <h2
  className="text-center text-[#3673FF] mb-5"
  style={{
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    fontSize: '43.13px',
    lineHeight: '57.6px',
    letterSpacing: '-1.25px',
  }}
>
  Built to Help Consultants Succeed
</h2>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 20,
              lineHeight: '26px',
              letterSpacing: 0,
              color: '#1E293B',
              marginBottom: 40,
              maxWidth: 860,
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
            }}
          >
            From visibility to secure payments, every feature is designed to help you focus on what you
            do best — delivering exceptional consulting services.
          </p>

          {/* 2-column checklist */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5"
            style={{ maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}
          >
            {[
              'Increase Visibility',
              'Receive Secure Payments',
              'Manage Appointments Easily',
              'Scale Your Consulting Business',
              'Build Professional Credibility',
              'Grow Revenue Opportunities',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2
                  size={24}
                  className="shrink-0"
                  style={{ color: '#fff' }}
                  fill="#284AA3"
                  strokeWidth={2}
                />
                <span style={{ fontSize: 16, color: '#1E293B', fontWeight: 500 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
   <motion.button
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
  style={{
    display: 'block',
    margin: '0 auto',
    height: 48,
    paddingLeft: 44,
    paddingRight: 44,
    border: '1px solid #E5E7EB',
    borderRadius: 999,
    background: '#fff',
    color: '#284AA3',
    fontWeight: 500,
    fontSize: 15,
    cursor: 'pointer',
  }}
>
  Reach More Businesses
</motion.button>
      </div>

      {/* ── What You Get Section ── */}
      <style>{`.carousel-no-scrollbar::-webkit-scrollbar{display:none}`}</style>
      <div className="w-full" style={{ background: '#fff', paddingTop: 100, paddingBottom: 100 }}>
        <div className="mx-auto" style={{ maxWidth: 1280, paddingLeft: 24, paddingRight: 24 }}>

          {/* Reach More Clients button */}
          <div className="flex justify-center mb-8">
       
          </div>

          {/* Section label */}
          <p
            className="text-center"
            style={{ fontSize: 14, fontWeight: 700, letterSpacing: '2px', color: '#3B82F6', textTransform: 'uppercase', marginBottom: 0 }}
          >
            WHAT YOU GET
          </p>

          {/* Heading row + nav buttons */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4" style={{ marginTop: 20, marginBottom: 48 }}>
<h2
  style={{
    fontFamily: 'Volkhov, serif',
    fontWeight: 700,
    fontSize: 'clamp(32px, 4vw, 45px)',
    lineHeight: '100%',
    letterSpacing: '0',
    textTransform: 'capitalize',
    color: '#162447',
    margin: 0,
    maxWidth: 600,
  }}
>
  Everything You Need to Grow Your Practice
</h2>

            {/* ← → buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <motion.button
                onClick={() => scrollCarousel('left')}
                whileHover={{ scale: 1.08, backgroundColor: '#E5E7EB' }}
                whileTap={{ scale: 0.92 }}
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  background: '#F3F4F6',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ArrowLeft size={22} color="#284AA3" strokeWidth={2.2} />
              </motion.button>

              <motion.button
                onClick={() => scrollCarousel('right')}
                whileHover={{ scale: 1.08, backgroundColor: '#284AA3' }}
                whileTap={{ scale: 0.92 }}
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  background: '#284AA3',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ArrowRight size={22} color="#fff" strokeWidth={2.2} />
              </motion.button>
            </div>
          </div>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="carousel-no-scrollbar"
            style={{
              display: 'flex',
              gap: 32,
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingBottom: 8,
            }}
          >
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -8, transition: { duration: 0.22 } }}
                style={{
                  flex: '0 0 auto',
                  width: 'clamp(280px, calc(50% - 16px), 580px)',
                  scrollSnapAlign: 'start',
                  background: '#fff',
                  border: '1px solid #EAEAEA',
                  borderRadius: 24,
                  padding: 32,
                  minHeight: 340,
                  display: 'flex',
                  flexDirection: 'column',
                  boxSizing: 'border-box',
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: feature.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 24,
                    flexShrink: 0,
                  }}
                >
                  <feature.Icon size={28} color={feature.iconColor} strokeWidth={2} />
                </motion.div>

                <h3 style={{ fontSize: 22, fontWeight: 700, color: '#162447', marginBottom: 12, lineHeight: 1.3 }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: '#64748B', margin: 0 }}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Grow Your Practice Section ── */}
      <div
        className="w-full"
        style={{
          background: 'linear-gradient(135deg, #ffffff 45%, #EEF4FF 100%)',
          paddingTop: 'clamp(48px, 6vw, 80px)',
          paddingBottom: 'clamp(48px, 6vw, 80px)',
        }}
      >
        <div
          className="mx-auto flex flex-col lg:flex-row items-center gap-12"
          style={{ maxWidth: 1200, paddingLeft: 'clamp(16px, 3vw, 48px)', paddingRight: 'clamp(16px, 3vw, 48px)' }}
        >
          {/* ── LEFT: Steps ── */}
          <div className="flex-1 flex flex-col gap-0 w-full">
            {/* Label */}
            <p style={{ fontSize: 14, fontWeight: 500, color: '#94A3B8', marginBottom: 12, letterSpacing: '0.02em' }}>
              Easy and Fast
            </p>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "'Inter', 'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 48px)',
                lineHeight: 1.2,
                color: '#0D1B35',
                marginBottom: 40,
              }}
            >
              Grow Your Practice With Our<br className="hidden sm:block" /> Professional Ecosystem
            </h2>

            {/* Step cards */}
            <div className="flex flex-col gap-5">
              {[
                {
                  num: '01',
                  Icon: LogIn,
                  iconBg: '#EEF0FF',
                  iconColor: '#6366F1',
                  title: 'Register',
                  desc: 'Create Your Professional Profile in Under 5 Minutes',
                  numRight: false,
                },
                {
                  num: '02',
                  Icon: UploadCloud,
                  iconBg: '#FFF7ED',
                  iconColor: '#F59E0B',
                  title: 'Get Verified',
                  desc: 'Complete Our Secure Verification for Credibility',
                  numRight: true,
                },
                {
                  num: '03',
                  Icon: LayoutList,
                  iconBg: '#FDF4FF',
                  iconColor: '#D946EF',
                  title: 'Build Profile',
                  desc: 'Showcase Expertise, Services, and Success Stories',
                  numRight: false,
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex items-center"
                  style={{ flexDirection: step.numRight ? 'row-reverse' : 'row', gap: 12 }}
                >
                  {/* Number column — fixed width */}
                  <span
                    className="font-black select-none pointer-events-none shrink-0"
                    style={{
                      fontSize: 'clamp(72px, 9vw, 104px)',
                      lineHeight: 1,
                      color: '#CBD5E1',
                      width: 'clamp(88px, 11vw, 116px)',
                      textAlign: step.numRight ? 'right' : 'left',
                      letterSpacing: '-3px',
                    }}
                  >
                    {step.num}
                  </span>

                  {/* Card — fills remaining width */}
                  <div
                    className="flex items-center gap-4 bg-white"
                    style={{
                      flex: 1,
                      borderRadius: 16,
                      padding: '20px 22px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                    }}
                  >
                    <div
                      className="shrink-0 flex items-center justify-center"
                      style={{ width: 48, height: 48, borderRadius: '50%', background: step.iconBg }}
                    >
                      <step.Icon size={22} color={step.iconColor} strokeWidth={2} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 21.6, fontWeight: 500, lineHeight: 1.2, letterSpacing: 0, color: '#284AA3', marginBottom: 6 }}>
                        {step.title}
                      </p>
                      <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14.4, fontWeight: 400, lineHeight: 1.5, letterSpacing: 0, color: '#5E6282' }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA button */}
            <motion.button
              onClick={() => setShowRegisterModal(true)}
              whileHover={{ scale: 1.04, backgroundColor: '#0D1B35' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex items-center gap-2 mt-10 self-start"
              style={{
                background: '#284AA3',
                color: '#fff',
                borderRadius: 10,
                padding: '14px 28px',
                fontSize: 15,
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '0.01em',
              }}
            >
              Register as Consultant
              <ArrowRight size={17} strokeWidth={2.2} />
            </motion.button>
          </div>

          {/* ── RIGHT: Illustration ── */}
          <div className="hidden lg:flex shrink-0 items-center justify-center relative" style={{ width: 380, height: 380 }}>
            {/* Gray circle background */}
            <div
              className="absolute"
              style={{ width: 340, height: 340, borderRadius: '50%', background: '#F1F5F9', top: 20, left: 20 }}
            />
            {/* Small dot */}
            <div
              className="absolute"
              style={{ width: 14, height: 14, borderRadius: '50%', background: '#94A3B8', left: 8, top: '44%' }}
            />
            {/* SVG illustration: two consultant figures */}
            <svg
              width="260"
              height="280"
              viewBox="0 0 260 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10"
            >
              {/* Person 1 — left figure (gray) */}
              <circle cx="88" cy="44" r="26" fill="#CBD5E1" stroke="#0D1B35" strokeWidth="7" />
              <rect x="52" y="82" width="72" height="120" rx="14" fill="#CBD5E1" stroke="#0D1B35" strokeWidth="7" />
              {/* Person 2 — right figure (with camera) */}
              <circle cx="185" cy="34" r="22" fill="#94A3B8" stroke="#0D1B35" strokeWidth="7" />
              <rect x="152" y="68" width="66" height="108" rx="12" fill="#94A3B8" stroke="#0D1B35" strokeWidth="7" />
              {/* Camera / video icon on person 2 */}
              <rect x="148" y="148" width="72" height="52" rx="10" fill="#3B82F6" stroke="#0D1B35" strokeWidth="6" />
              <polygon points="220,158 246,148 246,208 220,196" fill="#3B82F6" stroke="#0D1B35" strokeWidth="6" strokeLinejoin="round" />
              {/* Screen/card between them */}
              <rect x="68" y="210" width="130" height="52" rx="10" fill="#ffffff" stroke="#CBD5E1" strokeWidth="3" />
              <rect x="80" y="222" width="60" height="8" rx="4" fill="#CBD5E1" />
              <rect x="80" y="238" width="40" height="6" rx="3" fill="#E2E8F0" />
            </svg>
          </div>
        </div>
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
              >
                {/* ── Question box ── */}
                <div
                  style={{
                    borderRadius: 12,
                    border: isOpen ? '1px solid #005BC5' : '1px solid #E2E8F0',
                    background: isOpen
                      ? 'linear-gradient(72.66deg, #5FA9FF -29.66%, #284AA3 93.82%)'
                      : '#fff',
                    transition: 'background 0.3s ease, border-color 0.3s ease',
                    overflow: 'hidden',
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
                      <ChevronDown size={18} style={{ color: isOpen ? '#fff' : '#64748B' }} />
                    </motion.div>
                  </button>
                </div>

                {/* ── Answer box — independent styling, no blue border ── */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                      className="overflow-hidden"
                      style={{ marginTop: 8 }}
                    >
                      <div
                        style={{
                          borderRadius: 12,
                          border: '1px solid #E2E8F0',
                          background: '#fff',
                          padding: '16px 24px',
                        }}
                      >
                        <p
                          style={{
                            fontSize: 14,
                            lineHeight: '24px',
                            color: '#475569',
                            margin: 0,
                          }}
                        >
                          {item.answer}
                        </p>
                      </div>
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

      {/* ── Register Modal ── */}
      {createPortal(
        <AnimatePresence>
          {showRegisterModal && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => { setShowRegisterModal(false); setOtpSent(false); setOtpEmail(''); }}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'rgba(0,0,0,0.45)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '16px',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ type: 'spring', stiffness: 340, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#fff',
                borderRadius: 20,
                padding: 'clamp(28px, 5vw, 40px)',
                width: '100%',
                maxWidth: 420,
                boxShadow: '0 24px 60px rgba(0,0,0,0.18)',
                position: 'relative',
              }}
            >
              {/* Close button */}
              <button
                onClick={() => { setShowRegisterModal(false); setOtpSent(false); setOtpEmail(''); }}
                style={{
                  position: 'absolute', top: 16, right: 16,
                  width: 32, height: 32, borderRadius: '50%',
                  background: '#F1F5F9', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#64748B', fontSize: 18, lineHeight: 1,
                }}
              >
                ✕
              </button>

              {/* Heading */}
              <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 22, color: '#1E293B', marginBottom: 6 }}>
                  Join Bizpole Consult
                </h2>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, color: '#64748B' }}>
                  Start your consulting journey from today
                </p>
              </div>

              {!otpSent ? (
                <>
                  {/* Email input */}
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>
                      Email id
                    </label>
                    <input
                      type="email"
                      value={otpEmail}
                      onChange={(e) => setOtpEmail(e.target.value)}
                      placeholder="Enter your email"
                      style={{
                        width: '100%', boxSizing: 'border-box',
                        border: '1px solid #E2E8F0', borderRadius: 10,
                        padding: '12px 14px', fontSize: 14,
                        color: '#1E293B', background: '#F8FAFC',
                        outline: 'none', fontFamily: "'Manrope', sans-serif",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#284AA3')}
                      onBlur={(e) => (e.target.style.borderColor = '#E2E8F0')}
                    />
                  </div>

                  {/* Send Code button */}
                  <motion.button
                    onClick={async () => {
                      if (!otpEmail) return;
                      setOtpSending(true);
                      await new Promise((r) => setTimeout(r, 1000));
                      setOtpSending(false);
                      setOtpSent(true);
                    }}
                    whileHover={otpSending ? {} : { opacity: 0.9 }}
                    whileTap={otpSending ? {} : { scale: 0.97 }}
                    disabled={otpSending || !otpEmail}
                    style={{
                      width: '100%', height: 48, borderRadius: 10,
                      background: '#284AA3', color: '#fff',
                      fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 15,
                      border: 'none', cursor: otpSending || !otpEmail ? 'not-allowed' : 'pointer',
                      opacity: otpSending || !otpEmail ? 0.65 : 1,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                      boxShadow: '0 4px 14px rgba(40,74,163,0.30)',
                    }}
                  >
                    {otpSending && (
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="32" strokeDashoffset="10" />
                      </svg>
                    )}
                    {otpSending ? 'Sending…' : 'Send Code'}
                  </motion.button>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ textAlign: 'center', padding: '12px 0' }}
                >
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="#284AA3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 16, color: '#1E293B', marginBottom: 6 }}>Code Sent!</p>
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, color: '#64748B' }}>
                    We've sent an OTP to <strong>{otpEmail}</strong>.<br />Please check your inbox.
                  </p>
                </motion.div>
              )}

              {/* Footer */}
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, color: '#94A3B8', textAlign: 'center', marginTop: 20 }}>
                Already have an account?{' '}
                <span style={{ color: '#F59E0B', fontWeight: 600, cursor: 'pointer' }}>Sign in</span>
              </p>
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </div>
  );
}
