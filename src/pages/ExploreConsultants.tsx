import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users, BarChart3, Calendar, Lightbulb, TrendingUp,
  ArrowLeft, ArrowRight, Search, Clock, Inbox, ArrowRight as ArrowRightIcon,
  ChevronLeft, ChevronRight, ImageIcon, Star, ChevronDown,
} from 'lucide-react';
import businessImg from '../assests/business-removebg-preview.png';

/* ══════════════════════════════════════
   DATA
══════════════════════════════════════ */

const FEATURES = [
  { Icon: Users,     iconBg: '#284AA3', iconColor: '#F3C625', title: 'Reach Trusted Professionals',        desc: 'Explore a network of certified consultants with industry expertise.' },
  { Icon: BarChart3, iconBg: '#F3C625', iconColor: '#284AA3', title: 'Compare Expert Services & Experience', desc: 'Compare profiles, services, expertise, and client reviews before choosing the right consultant.' },
  { Icon: Calendar,  iconBg: '#FFF7E6', iconColor: '#D9A11A', title: 'Instant Appointment Booking',          desc: 'Schedule meetings instantly through the platform with live availability.' },
  { Icon: Lightbulb, iconBg: '#F4EEFF', iconColor: '#8B5CF6', title: 'Get Expert Insights',                  desc: 'Gain expert guidance with practical solutions focused on your business goals.' },
  { Icon: TrendingUp,iconBg: '#FFF1F2', iconColor: '#EF4444', title: 'Get Better Results',                   desc: 'Make decisions with expert guidance that drives measurable outcomes.' },
];

const STEPS = [
  { num: '01', Icon: Search, iconBg: '#EEF2FF', iconColor: '#284AA3', title: 'Find Expert',   desc: 'Discover Verified Consultants by Specialty or Industry',      numRight: false },
  { num: '02', Icon: Clock,  iconBg: '#FFF7E6', iconColor: '#D9A11A', title: 'Book Service',  desc: 'Schedule Sessions with Real-Time Availability',               numRight: true  },
  { num: '03', Icon: Inbox,  iconBg: '#F4EEFF', iconColor: '#8B5CF6', title: 'Get Results',   desc: 'Receive Actionable Insights and Professional Guidance',        numRight: false },
];

const CATEGORIES = [
  'Strategy & Planning', 'Marketing & Branding', 'Sales & Revenue',
  'Product & Innovation', 'Finance & Funding', 'Accounting & Taxes',
  'Operations & Scaling', 'Technology & Digital', 'Legal & Compliance',
  'People & Culture', 'Data & Analytics', 'AI & Automation', 'Business Motivation',
];

const SERVICES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&auto=format&fit=crop&q=80',
    discount: '50% OFF',
    badge: 'Deal of the Day',
    title: 'Business Strategy Consultation',
    duration: '60 mins',
    rating: 4,
    reviews: 1234,
    price: 299,
    originalPrice: 599,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&auto=format&fit=crop&q=80',
    discount: '40% OFF',
    badge: null,
    title: 'Financial Planning Package - 3 Sessions',
    duration: null,
    rating: 4,
    reviews: 1380,
    price: 1499,
    originalPrice: 2499,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&auto=format&fit=crop&q=80',
    discount: '40% OFF',
    badge: null,
    title: 'Tax Advisory - Annual Package',
    duration: null,
    rating: 4,
    reviews: 1980,
    price: 2999,
    originalPrice: 4999,
  },
  {
    id: 4,
    image: null,
    discount: '44% OFF',
    badge: null,
    title: 'Marketing Strategy Session - 90 min',
    duration: null,
    rating: 4,
    reviews: 390,
    price: 449,
    originalPrice: 799,
  },
];

/* ══════════════════════════════════════
   SUB-COMPONENTS
══════════════════════════════════════ */

function CategoryChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        borderRadius: 999,
        padding: '6px 14px',
        fontSize: 12,
        fontWeight: 500,
        fontFamily: "'Inter', sans-serif",
        border: '1.5px solid #284AA3',
        background: active ? '#284AA3' : '#fff',
        color: active ? '#fff' : '#284AA3',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        lineHeight: '18px',
      }}
    >
      {label}
    </button>
  );
}

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={13}
          fill={s <= rating ? '#FBBF24' : 'none'}
          color={s <= rating ? '#FBBF24' : '#D1D5DB'}
          strokeWidth={1.5}
        />
      ))}
      <span style={{ fontSize: 12, color: '#6B7280', marginLeft: 2 }}>
        ({reviews.toLocaleString('en-IN')})
      </span>
    </div>
  );
}

function ServiceCard({ card }: { card: typeof SERVICES[0] }) {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #E5E7EB',
        borderRadius: 12,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 0',
        minWidth: 0,
      }}
    >
      {/* Image area */}
      <div style={{ position: 'relative', height: 148, background: '#F3F4F6', flexShrink: 0 }}>
        {card.image ? (
          <img
            src={card.image}
            alt={card.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ImageIcon size={40} color="#D1D5DB" strokeWidth={1.5} />
          </div>
        )}

        {/* Discount badge */}
        <span
          style={{
            position: 'absolute',
            top: 8,
            left: 8,
            background: '#EF4444',
            color: '#fff',
            fontSize: 10,
            fontWeight: 700,
            padding: '3px 7px',
            borderRadius: 4,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {card.discount}
        </span>

        {/* Deal of the Day badge */}
        {card.badge && (
          <span
            style={{
              position: 'absolute',
              top: 8,
              right: 8,
              background: '#F59E0B',
              color: '#fff',
              fontSize: 9,
              fontWeight: 700,
              padding: '3px 7px',
              borderRadius: 4,
              fontFamily: "'Inter', sans-serif",
              whiteSpace: 'nowrap',
            }}
          >
            {card.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            color: '#111827',
            margin: 0,
            lineHeight: '18px',
          }}
        >
          {card.title}
          {card.duration && (
            <span style={{ fontWeight: 400, color: '#6B7280' }}> - {card.duration}</span>
          )}
        </p>

        <StarRating rating={card.rating} reviews={card.reviews} />

        {/* Price */}
        <div className="flex items-center gap-2 mt-auto">
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              color: '#111827',
            }}
          >
            ₹{card.price.toLocaleString('en-IN')}
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              color: '#9CA3AF',
              textDecoration: 'line-through',
            }}
          >
            ₹{card.originalPrice.toLocaleString('en-IN')}
          </span>
        </div>

        {/* Book Now */}
        <button
          style={{
            width: '100%',
            background: '#284AA3',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '9px 0',
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
            cursor: 'pointer',
            marginTop: 4,
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

function PaginationControls() {
  return (
    <div className="flex items-center justify-center gap-3 mt-8">
      <button
        style={{
          width: 36, height: 36, borderRadius: '50%',
          background: '#284AA3', border: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <ChevronLeft size={18} color="#fff" strokeWidth={2.5} />
      </button>

      <div className="flex items-center gap-2">
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#284AA3' }} />
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#D1D5DB' }} />
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#D1D5DB' }} />
      </div>

      <button
        style={{
          width: 36, height: 36, borderRadius: '50%',
          background: '#284AA3', border: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <ChevronRight size={18} color="#fff" strokeWidth={2.5} />
      </button>
    </div>
  );
}

/* ══════════════════════════════════════
   FAQ DATA
══════════════════════════════════════ */
const FAQ_BUSINESS = [
  {
    id: 'b1',
    question: 'How do I find the right consultant for my business?',
    answer: 'You can browse consultant profiles based on industry, expertise, skills, and services offered. Detailed profiles, experience, and client information help you choose the consultant that best matches your business needs.',
  },
  {
    id: 'b2',
    question: 'Can I connect with consultants from different industries?',
    answer: 'Yes. Bizpole Consult brings together professionals from a wide range of industries, allowing you to connect with experts in business strategy, finance, technology, marketing, legal, HR, and many other domains.',
  },
  {
    id: 'b3',
    question: 'How do I book a consultation?',
    answer: 'Simply explore consultant profiles, select the expert you want to work with, and request a consultation through the platform. You can choose a suitable time based on the consultant\'s availability.',
  },
  {
    id: 'b4',
    question: 'Can I receive consultations remotely?',
    answer: 'Yes. Bizpole Consult supports remote consultations, making it easy to connect with experts from anywhere through virtual meetings and online collaboration.',
  },
  {
    id: 'b5',
    question: 'Are consultant profiles verified?',
    answer: 'Yes. We aim to maintain a trusted network by reviewing consultant profiles and credentials, helping businesses connect with qualified professionals.',
  },
];

/* ══════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════ */
export default function ExploreConsultants() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('Strategy & Planning');
  const [openFaq, setOpenFaq] = useState<string>('b1');

  const scrollCarousel = (dir: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const amount = carouselRef.current.offsetWidth / 2 + 16;
    carouselRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <div className="w-full overflow-x-hidden" style={{ background: '#fff' }}>

      {/* ═══════════════════════════════
          HERO
      ═══════════════════════════════ */}
      <div className="w-full" style={{ background: '#ffffff' }}>
        <div
          className="mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14"
          style={{ maxWidth: 1200, padding: 'clamp(40px, 6vw, 80px) clamp(24px, 4vw, 56px)' }}
        >
          <div className="flex-1 flex flex-col gap-6 w-full">
            <div className="inline-flex items-center gap-2 w-fit" style={{ background: '#EEF4FF', borderRadius: 999, padding: '7px 18px', border: '1px solid #C7D9FF' }}>
              <span style={{ color: '#0065FD', fontSize: 11 }}>✦</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: '#0065FD' }}>For Businesses</span>
              <span style={{ color: '#0065FD', fontSize: 11 }}>✦</span>
            </div>
            <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: '60px', letterSpacing: '0px', color: '#284AA3', margin: 0 }}>
              Get Expert Guidance at Every Stage of Growth
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: '28px', color: '#000000', margin: 0, maxWidth: 480 }}>
              Businesses often face complex challenges. Bizpole Consult helps you access experts who can solve problems and drive growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <button style={{ background: '#3673FF', color: '#fff', borderRadius: 999, padding: '13px 28px', border: 'none', fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>Register Now</button>
              <button style={{ background: 'transparent', color: '#0065FD', borderRadius: 999, padding: '13px 28px', border: '1.5px solid #284AA3', fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 500, cursor: 'pointer' }}>Connect with Experts</button>
            </div>
          </div>
          <div className="w-full lg:flex-1 flex items-center justify-center" style={{ maxWidth: 560 }}>
            <img src={businessImg} alt="Business consultation" style={{ width: '100%', height: 'auto', borderRadius: 24, objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════
          WHAT YOU GET — carousel
      ═══════════════════════════════ */}
      <style>{`.carousel-no-scrollbar::-webkit-scrollbar{display:none}`}</style>
      <div className="w-full" style={{ background: '#fff', paddingTop: 100, paddingBottom: 100 }}>
        <div className="mx-auto" style={{ maxWidth: 1280, paddingLeft: 24, paddingRight: 24 }}>
          <p className="text-center" style={{ fontSize: 14, fontWeight: 700, letterSpacing: '2px', color: '#3B82F6', textTransform: 'uppercase', marginBottom: 0 }}>WHAT YOU GET</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4" style={{ marginTop: 20, marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Volkhov, serif', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 45px)', lineHeight: '100%', textTransform: 'capitalize', color: '#162447', margin: 0, maxWidth: 600 }}>
              Expert Guidance, Simplified
            </h2>
            <div className="flex items-center gap-3 shrink-0">
              <motion.button onClick={() => scrollCarousel('left')} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }} style={{ width: 52, height: 52, borderRadius: '50%', background: '#F3F4F6', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ArrowLeft size={22} color="#284AA3" strokeWidth={2.2} />
              </motion.button>
              <motion.button onClick={() => scrollCarousel('right')} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }} style={{ width: 52, height: 52, borderRadius: '50%', background: '#284AA3', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ArrowRight size={22} color="#fff" strokeWidth={2.2} />
              </motion.button>
            </div>
          </div>
          <div ref={carouselRef} className="carousel-no-scrollbar" style={{ display: 'flex', gap: 32, overflowX: 'auto', scrollSnapType: 'x mandatory', scrollbarWidth: 'none', paddingBottom: 8 }}>
            {FEATURES.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: i * 0.08 }} whileHover={{ y: -8, transition: { duration: 0.22 } }}
                style={{ flex: '0 0 auto', width: 'clamp(280px, calc(50% - 16px), 580px)', scrollSnapAlign: 'start', background: '#fff', border: '1px solid #EAEAEA', borderRadius: 24, padding: 32, minHeight: 340, display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300, damping: 18 }} style={{ width: 64, height: 64, borderRadius: 16, background: feature.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  <feature.Icon size={28} color={feature.iconColor} strokeWidth={2} />
                </motion.div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: '#162447', marginBottom: 12, lineHeight: 1.3 }}>{feature.title}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: '#64748B', margin: 0 }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════
          EASY AND FAST — steps
      ═══════════════════════════════ */}
      <div className="w-full" style={{ background: 'linear-gradient(135deg, #ffffff 45%, #EEF4FF 100%)', paddingTop: 'clamp(48px, 6vw, 80px)', paddingBottom: 'clamp(48px, 6vw, 80px)' }}>
        <div className="mx-auto flex flex-col lg:flex-row items-center gap-12" style={{ maxWidth: 1200, paddingLeft: 'clamp(16px, 3vw, 48px)', paddingRight: 'clamp(16px, 3vw, 48px)' }}>
          <div className="flex-1 flex flex-col gap-0 w-full">
            <p style={{ fontSize: 14, fontWeight: 500, color: '#94A3B8', marginBottom: 12, letterSpacing: '0.02em' }}>Easy and Fast</p>
            <h2 style={{ fontFamily: "'Inter', 'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.2, color: '#0D1B35', marginBottom: 40 }}>
              Connect With Leading Experts And<br className="hidden sm:block" /> Innovators In Our Vibrant Network.
            </h2>
            <div className="flex flex-col gap-5">
              {STEPS.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex items-center" style={{ flexDirection: step.numRight ? 'row-reverse' : 'row', gap: 12 }}>
                  <span className="font-black select-none shrink-0" style={{ fontSize: 'clamp(72px, 9vw, 104px)', lineHeight: 1, color: '#CBD5E1', width: 'clamp(88px, 11vw, 116px)', textAlign: step.numRight ? 'right' : 'left', letterSpacing: '-3px' }}>{step.num}</span>
                  <div className="flex items-center gap-4 bg-white" style={{ flex: 1, borderRadius: 16, padding: '20px 22px', boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}>
                    <div className="shrink-0 flex items-center justify-center" style={{ width: 48, height: 48, borderRadius: '50%', background: step.iconBg }}>
                      <step.Icon size={22} color={step.iconColor} strokeWidth={2} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 21.6, fontWeight: 500, lineHeight: 1.2, color: '#284AA3', marginBottom: 6 }}>{step.title}</p>
                      <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14.4, fontWeight: 400, lineHeight: 1.5, color: '#5E6282' }}>{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.button whileHover={{ scale: 1.04, backgroundColor: '#0D1B35' }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex items-center gap-2 mt-10 self-start" style={{ background: '#284AA3', color: '#fff', borderRadius: 10, padding: '14px 28px', fontSize: 15, fontWeight: 600, border: 'none', cursor: 'pointer' }}>
              Register as Consultant
              <ArrowRightIcon size={17} strokeWidth={2.2} />
            </motion.button>
          </div>
          <div className="hidden lg:flex shrink-0 items-center justify-center relative" style={{ width: 380, height: 380 }}>
            <div className="absolute" style={{ width: 340, height: 340, borderRadius: '50%', background: '#F1F5F9', top: 20, left: 20 }} />
            <div className="absolute" style={{ width: 14, height: 14, borderRadius: '50%', background: '#94A3B8', left: 8, top: '44%' }} />
            <svg width="260" height="280" viewBox="0 0 260 280" fill="none" className="relative z-10">
              <circle cx="88" cy="44" r="26" fill="#CBD5E1" stroke="#0D1B35" strokeWidth="7" />
              <rect x="52" y="82" width="72" height="120" rx="14" fill="#CBD5E1" stroke="#0D1B35" strokeWidth="7" />
              <circle cx="185" cy="34" r="22" fill="#94A3B8" stroke="#0D1B35" strokeWidth="7" />
              <rect x="152" y="68" width="66" height="108" rx="12" fill="#94A3B8" stroke="#0D1B35" strokeWidth="7" />
              <rect x="148" y="148" width="72" height="52" rx="10" fill="#3B82F6" stroke="#0D1B35" strokeWidth="6" />
              <polygon points="220,158 246,148 246,208 220,196" fill="#3B82F6" stroke="#0D1B35" strokeWidth="6" strokeLinejoin="round" />
              <rect x="68" y="210" width="130" height="52" rx="10" fill="#ffffff" stroke="#CBD5E1" strokeWidth="3" />
              <rect x="80" y="222" width="60" height="8" rx="4" fill="#CBD5E1" />
              <rect x="80" y="238" width="40" height="6" rx="3" fill="#E2E8F0" />
            </svg>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════
          TOP EXPERTS
      ═══════════════════════════════ */}
      <div className="w-full" style={{ background: '#ffffff', paddingTop: 'clamp(48px, 6vw, 80px)', paddingBottom: 'clamp(48px, 6vw, 80px)' }}>
        <div className="mx-auto" style={{ maxWidth: 1200, paddingLeft: 'clamp(16px, 3vw, 40px)', paddingRight: 'clamp(16px, 3vw, 40px)' }}>

          {/* Heading */}
          <h2 className="text-center" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', color: '#111827', margin: '0 0 8px 0', lineHeight: '1.25' }}>
            Our{' '}
            <span style={{ color: '#284AA3', fontWeight: 800 }}>Top Experts</span>
            , Handpicked for You
          </h2>
          <p className="text-center" style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: '#6B7280', margin: '0 0 24px 0', lineHeight: '22px' }}>
            Connect with verified consultants in the area your business needs most.
          </p>

          {/* Category chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
            {CATEGORIES.map((cat) => (
              <CategoryChip
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </div>

          {/* More details — right aligned */}
          <div className="flex justify-end" style={{ marginBottom: 24 }}>
            <button
              style={{
                background: '#162447',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '9px 18px',
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
                cursor: 'pointer',
              }}
            >
              More details
            </button>
          </div>

          {/* Service cards — 4 columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 16,
            }}
            className="sm:grid-cols-2 lg:grid-cols-4"
          >
            {SERVICES.map((card) => (
              <ServiceCard key={card.id} card={card} />
            ))}
          </div>

          {/* Pagination */}
          <PaginationControls />

        </div>
      </div>

      {/* ═══════════════════════════════
          FAQ
      ═══════════════════════════════ */}
      <div className="w-full" style={{ background: '#ffffff', paddingTop: 'clamp(48px, 6vw, 80px)', paddingBottom: 'clamp(48px, 6vw, 80px)' }}>
        <div className="mx-auto" style={{ maxWidth: 860, paddingLeft: 'clamp(16px, 3vw, 24px)', paddingRight: 'clamp(16px, 3vw, 24px)' }}>

          {/* Heading */}
          <div className="text-center" style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(28px, 4vw, 40px)',
                lineHeight: '1.2',
                color: '#111827',
                margin: 0,
              }}
            >
              Frequently Asked<br />Questions
            </h2>
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {FAQ_BUSINESS.map((item) => {
              const isOpen = openFaq === item.id;
              return (
                <div key={item.id}>
                  {/* Question box */}
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
                          fontFamily: "'Inter', sans-serif",
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

                  {/* Answer box — independent, no blue border */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
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
                              fontFamily: "'Inter', sans-serif",
                            }}
                          >
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════
          BOTTOM CTA
      ═══════════════════════════════ */}
      <div
        className="w-full"
        style={{ background: '#F1F5FF', borderTop: '1px solid #E2E8F0' }}
      >
        <div
          className="mx-auto text-center flex flex-col items-center gap-5"
          style={{
            maxWidth: 600,
            paddingTop: 'clamp(40px, 5vw, 64px)',
            paddingBottom: 'clamp(40px, 5vw, 64px)',
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(22px, 3vw, 30px)',
              lineHeight: '1.3',
              color: '#0F172A',
              margin: 0,
            }}
          >
            Build Meaningful Professional Connections
          </h2>

          <p
            style={{
              fontSize: 14,
              lineHeight: '22px',
              color: '#64748B',
              maxWidth: 460,
              margin: 0,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Whether you're a business looking for guidance or a consultant looking to grow,
            Bizpole Consult helps you build valuable professional relationships.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              style={{
                background: '#284AA3',
                color: '#fff',
                borderRadius: 999,
                height: 46,
                paddingLeft: 24,
                paddingRight: 24,
                fontSize: 14,
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Connect with Experts
            </button>

            <button
              style={{
                background: '#fff',
                color: '#0F172A',
                borderRadius: 999,
                height: 46,
                paddingLeft: 24,
                paddingRight: 24,
                fontSize: 14,
                fontWeight: 500,
                border: '1.5px solid #CBD5E1',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              I'm a Expert →
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
