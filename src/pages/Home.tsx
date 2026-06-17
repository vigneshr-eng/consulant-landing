import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Plus, Minus, CheckCircle2 } from 'lucide-react';
import ExpertCarousel from '../components/ExpertCarousel';
import PartnershipSection from '../components/PartnershipSection';
import HeroCards from '../components/HeroCards';
import WhyChooseSection from '../components/WhyChooseSection';
import NewsletterCTA from '../components/NewsletterCTA';
import ContactSection from '../components/ContactSection';
import meetingPhoto from '../assests/meeting.jpeg';

function WhiteboardIllustration() {
  return (
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-md p-2 flex flex-col gap-1.5"
      style={{ width: 220, marginRight: -20 }}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-[8px] font-semibold text-slate-700">Artboard</span>
        <div className="w-5 h-5 bg-slate-50 border border-slate-200 rounded-sm flex items-center justify-center">
          <span className="text-[6px] text-slate-500">⛶</span>
        </div>
      </div>
      <svg width="100%" height="100" viewBox="0 0 196 100" fill="none">
        <rect x="40" y="10" width="76" height="76" rx="38" fill="#f3c625" opacity="0.3" />
        <circle cx="78" cy="48" r="28" fill="#f3c625" opacity="0.5" />
        <path d="M10 60 C30 20, 60 80, 90 40 C110 20, 130 60, 155 30" stroke="#e91e8c" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="78" cy="48" r="12" fill="#f3c625" />
        <circle cx="73" cy="45" r="2" fill="#0D1B35" />
        <circle cx="83" cy="45" r="2" fill="#0D1B35" />
        <path d="M73 52 Q78 56 83 52" stroke="#0D1B35" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <rect x="118" y="4" width="46" height="14" rx="7" fill="#e91e8c" />
        <text x="141" y="14" textAnchor="middle" fill="white" fontSize="6.5" fontFamily="sans-serif">Know Fast</text>
        <rect x="60" y="76" width="38" height="12" rx="6" fill="#0D1B35" />
        <text x="79" y="85" textAnchor="middle" fill="white" fontSize="6" fontFamily="sans-serif">Back Book</text>
        <rect x="118" y="36" width="6" height="6" rx="1" fill="#e91e8c" opacity="0.8" />
        <text x="130" y="50" fill="#e91e8c" fontSize="7" fontFamily="sans-serif">Navia Fon</text>
        <rect x="118" y="60" width="6" height="6" rx="1" fill="#284AA3" opacity="0.8" />
        <text x="130" y="74" fill="#284AA3" fontSize="7" fontFamily="sans-serif">Jack Bron</text>
      </svg>
    </div>
  );
}

function ChatIllustration() {
  return (
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-md"
      style={{ width: 210, marginRight: -20 }}
    >
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-semibold text-slate-900">Chat</span>
          <span className="text-slate-400 text-[10px]">⋮</span>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="bg-slate-100 rounded-bl-xl rounded-br-xl rounded-tr-xl p-2 w-[80%]">
            <div className="flex justify-between text-[7px] text-slate-400 mb-0.5">
              <span>Navia Fon</span><span>10:00AM</span>
            </div>
            <p className="text-[7.5px] text-slate-700">Hey, is the illustration for the landing page done?</p>
          </div>
          <div className="bg-slate-100 rounded-bl-xl rounded-br-xl rounded-tr-xl p-2 w-[85%]">
            <div className="flex justify-between text-[7px] text-slate-400 mb-0.5">
              <span>Jack Bron</span><span>10:00AM</span>
            </div>
            <p className="text-[7.5px] text-slate-700">I just checked—it's almost done</p>
          </div>
          <div className="bg-[#284AA3] rounded-tl-xl rounded-bl-xl rounded-br-xl p-2 w-[85%] self-end">
            <div className="flex justify-between text-[7px] text-blue-200 mb-0.5">
              <span>You</span><span>10:00AM</span>
            </div>
            <p className="text-[7.5px] text-white">Do you think it'll be finished by noon?</p>
          </div>
        </div>
        <div className="mt-2 bg-slate-100 rounded-lg flex items-center justify-between px-2 py-1.5">
          <span className="text-[8px] text-slate-400">Write Message</span>
          <div className="w-5 h-5 bg-slate-900 rounded-md flex items-center justify-center">
            <span className="text-white text-[7px]">↑</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReminderIllustration() {
  return (
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-slate-100 rounded-xl shadow-md p-3"
      style={{ width: 205, marginRight: -20 }}
    >
      <p className="text-[8px] font-medium text-slate-800 mb-2">
        You have <span className="text-[#284AA3] font-bold">4</span> meetings today!
      </p>
      <div className="flex flex-col gap-1.5">
        {[
          { title: 'Meeting with Google', time: '09:30 AM → 11:30 AM', active: true },
          { title: 'Meeting with Microsoft', time: '13:30 PM → 14:30 PM', active: false },
          { title: 'Meeting with Google', time: '09:30 AM → 11:30 AM', active: false },
        ].map((m, i) => (
          <div key={i} className="bg-white rounded-xl p-2 flex items-center justify-between">
            <div>
              <p className="text-[8px] font-semibold text-slate-800 whitespace-nowrap">{m.title}</p>
              <p className="text-[7px] text-slate-500">{m.time}</p>
            </div>
            <div
              className="rounded-md px-2 py-0.5 text-[6.5px] font-semibold text-white shrink-0 ml-1"
              style={{ background: m.active ? '#284AA3' : '#dfdfdf' }}
            >
              Join
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const SOLUTIONS = [
  { id: 'trusted',   title: 'Verification & Credential Validation' },
  { id: 'booking',   title: 'Email Notifications & Remainders' },
  { id: 'secure',    title: 'Smart appointment Scheduling' },
  { id: 'custom',    title: 'Secure Payment Processing' },
  { id: 'time',      title: 'Multi-time zone scheduling' },
  { id: 'calendar',  title: 'Calendar synchronization' },
];

const FEATURES = [
  {
    title: 'Verification & Credential Validation',
    desc: 'Draw ideas together using real-time collaborative whiteboard.',
    illustration: <WhiteboardIllustration />,
  },
  {
    title: 'Calendar Synchronization',
    desc: 'Send messages, share files, and chat in meetings.',
    illustration: <ChatIllustration />,
  },
  {
    title: 'Remindereee',
    desc: 'Set up a new meeting and get your meeting link',
    illustration: <ReminderIllustration />,
  },
];

const FAQ_DATA = [
  {
    id: 'q1',
    question: 'Is the platform free to use?',
    answer: 'We offer a free plan to try our product but if you want to access more features or increase credits you can upgrade to our paid plans.',
  },
  {
    id: 'q2',
    question: 'How do I join a video conference?',
    answer: 'Simply click the video icon in any chat window to start or join a video conference. No additional setup is required.',
  },
  {
    id: 'q3',
    question: 'How can I contact support?',
    answer: 'You can reach our support team through the in-app chat widget available 24/7.',
  },
  {
    id: 'q4',
    question: 'Can I integrate with other tools?',
    answer: 'Yes, we offer API integration to embed video conferencing into your existing workflows. Full documentation is available in our developer portal.',
  },
];

export default function Home() {
  const [heroEmail, setHeroEmail] = useState('');
  const [heroSuccess, setHeroSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('trusted');
  const [scrollingTab, setScrollingTab] = useState<string | null>(null);
  const [scrollDir, setScrollDir] = useState<'down' | 'up'>('down');
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const current = SOLUTIONS.find((s) => s.id === activeTab) || SOLUTIONS[0];

  const sectionRef = useRef<HTMLElement>(null);
  const activeTabRef = useRef(activeTab);
  const scrollingTabRef = useRef(scrollingTab);
  const lockedScrollY = useRef<number | null>(null);

  useEffect(() => {
    activeTabRef.current = activeTab;
  }, [activeTab]);

  useEffect(() => {
    scrollingTabRef.current = scrollingTab;
  }, [scrollingTab]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const NAVBAR = 70;
    let prevAbove = section.getBoundingClientRect().top > NAVBAR;

    const lockBody = (y: number) => {
      lockedScrollY.current = y;
      const sbw = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${sbw}px`;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${y}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
    };

    const unlockBody = () => {
      const y = lockedScrollY.current ?? 0;
      lockedScrollY.current = null;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.paddingRight = '';
      window.scrollTo(0, y);
    };

    const handleScroll = () => {
      if (lockedScrollY.current !== null) return;
      const rect = section.getBoundingClientRect();
      const above = rect.top > NAVBAR;

      if (!above && prevAbove) {
        lockBody(window.scrollY);
      } else if (above && !prevAbove) {
        const lastId = SOLUTIONS[SOLUTIONS.length - 1].id;
        setActiveTab(lastId);
        activeTabRef.current = lastId;
        lockBody(window.scrollY);
      }

      prevAbove = above;
    };

    const handleWheel = (e: WheelEvent) => {
      if (lockedScrollY.current === null) return;
      if (scrollingTabRef.current !== null) return;

      const currentIdx = SOLUTIONS.findIndex((s) => s.id === activeTabRef.current);

      if (e.deltaY > 0) {
        if (currentIdx < SOLUTIONS.length - 1) {
          const nextIdx = currentIdx + 1;
          setScrollDir('down');
          setScrollingTab(activeTabRef.current);
          scrollingTabRef.current = activeTabRef.current;
          setTimeout(() => {
            setScrollingTab(null);
            scrollingTabRef.current = null;
            setActiveTab(SOLUTIONS[nextIdx].id);
          }, 350);
        } else {
          unlockBody();
        }
      } else if (e.deltaY < 0) {
        if (currentIdx > 0) {
          const prevIdx = currentIdx - 1;
          setScrollDir('up');
          setScrollingTab(activeTabRef.current);
          scrollingTabRef.current = activeTabRef.current;
          setTimeout(() => {
            setScrollingTab(null);
            scrollingTabRef.current = null;
            setActiveTab(SOLUTIONS[prevIdx].id);
          }, 350);
        } else {
          unlockBody();
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      if (lockedScrollY.current !== null) unlockBody();
    };
  }, []);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroEmail.trim()) {
      setHeroSuccess(true);
      setTimeout(() => { setHeroSuccess(false); setHeroEmail(''); }, 3500);
    }
  };

  return (
    <>
      <style>{`
        @keyframes slide-out-up {
          0%   { transform: translateY(0);     opacity: 1; }
          100% { transform: translateY(-120%); opacity: 0; }
        }
        @keyframes slide-out-down {
          0%   { transform: translateY(0);    opacity: 1; }
          100% { transform: translateY(120%); opacity: 0; }
        }
        @keyframes slide-in-from-bottom {
          0%   { transform: translateY(120%);  opacity: 0; }
          100% { transform: translateY(0);     opacity: 1; }
        }
        @keyframes slide-in-from-top {
          0%   { transform: translateY(-120%); opacity: 0; }
          100% { transform: translateY(0);     opacity: 1; }
        }
      `}</style>

      <div className="w-full overflow-x-hidden" style={{ backgroundColor: '#ffffff' }}>

        {/* Block 1 */}
        <div className="max-w-[1200px] mx-auto px-6 pt-8 flex flex-col gap-10">

          {/* EMAIL BAR */}
          <div className="flex justify-center">
            <form onSubmit={handleHeroSubmit} className="relative w-full max-w-md">
              <div
                className="flex items-center gap-2 pl-6 pr-1.5 py-1.5 rounded-full"
                style={{ background: '#f6f6f4', border: '1px solid rgba(0,0,0,0.2)' }}
              >
                <input
                  type="email"
                  required
                  value={heroEmail}
                  onChange={(e) => setHeroEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent text-sm text-black placeholder-black/50 focus:outline-none min-w-0"
                />
                <button
                  type="submit"
                  className="rounded-full p-2.5 shrink-0 transition-opacity hover:opacity-80"
                  style={{ background: '#284AA3' }}
                >
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </button>
              </div>
              <AnimatePresence>
                {heroSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-14 left-1/2 -translate-x-1/2 bg-slate-900 text-amber-300 text-[10px] uppercase font-bold tracking-widest py-1.5 px-3 rounded-lg shadow-lg z-20 flex items-center gap-1 whitespace-nowrap"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Subscribed!
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* HERO */}
          <section>
            <HeroCards />
          </section>

          <PartnershipSection />
        </div>

        {/* Why Choose */}
        <div className="pt-10">
          <WhyChooseSection id="features" />
        </div>

        {/* Block 2 */}
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-10 pt-10 pb-4">

          {/* FLEXIBLE SOLUTIONS */}
          <section
            ref={sectionRef}
            className="flex flex-col lg:flex-row items-start gap-8 py-6"
          >
            {/* Left — tabs */}
            <div className="lg:w-[400px] shrink-0 flex flex-col gap-8">
              <h2
                className="font-display font-black text-slate-900 leading-tight"
                style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}
              >
                Flexible solutions <br />for all your needs
              </h2>

              <div className="flex gap-4">
                <div className="flex flex-col">
                  {SOLUTIONS.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveTab(s.id)}
                      className="flex"
                      style={{ height: 58 }}
                      aria-label={s.title}
                    >
                      <div
                        className="w-1.5 h-full rounded-full transition-colors duration-300"
                        style={{
                          background: activeTab === s.id ? '#284AA3' : 'rgba(0,0,0,0.15)',
                        }}
                      />
                    </button>
                  ))}
                </div>

                <div className="flex flex-col">
                  {SOLUTIONS.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveTab(s.id)}
                      className="text-left h-[58px] flex items-center focus:outline-none"
                      style={{
                        overflow: 'hidden',
                        maxWidth: 280,
                        color: activeTab === s.id ? '#0f172a' : 'rgba(0,0,0,0.45)',
                        fontWeight: activeTab === s.id ? 700 : 500,
                      }}
                    >
                      <span
                        key={scrollingTab === s.id ? `out-${s.id}` : activeTab === s.id ? `in-${s.id}` : s.id}
                        style={{
                          display: 'inline-block',
                          fontSize: '1rem',
                          whiteSpace: 'nowrap',
                          animation:
                            scrollingTab === s.id
                              ? scrollDir === 'down'
                                ? 'slide-out-up 0.35s ease forwards'
                                : 'slide-out-down 0.35s ease forwards'
                              : activeTab === s.id
                              ? scrollDir === 'down'
                                ? 'slide-in-from-bottom 0.35s ease forwards'
                                : 'slide-in-from-top 0.35s ease forwards'
                              : 'none',
                        }}
                      >
                        {s.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — meeting panel */}
            <div
              className="flex-1 overflow-hidden"
              style={{ borderRadius: 22, minHeight: 520 }}
            >
              <img
                src={meetingPhoto}
                alt="Meeting"
                className="w-full h-full object-cover"
                style={{ borderRadius: 22, display: 'block' }}
              />
            </div>
          </section>

          <ExpertCarousel />

    

        </div>

        <NewsletterCTA />
        <ContactSection />

      </div>
    </>
  );
}