import { useState, useRef, useEffect } from 'react';

const FEATURES = [
  {
    title: 'Trusted Consulting Network',
    description:
      'We carefully verify every consultant to help businesses connect with trusted and qualified experts.',
  },
  {
    title: 'Instant Expert Booking',
    description:
      'Check consultant availability in real time and book appointments easily, without the hassle of endless emails or scheduling conflicts.',
  },
  {
    title: 'Secure Networking Platform',
    description:
      'Keep your information safe with secure transactions, verified consultant profiles, and trusted communication tools.',
  },
  {
    title: 'Reach Global Networks',
    description:
      'Connect with trusted professionals across different industries, specialisations, and locations, all from one platform.',
  },
  {
    title: 'Custom Consultation Experience',
    description:
      'From one-time consultations and project support to coaching, strategic advisory, and long-term partnerships.',
  },
  {
    title: 'Created for Success',
    description:
      'From finding the right expertise to building long-term partnerships, Bizpole Consult helps consultants and businesses grow together.',
  },
];

const CARD_H = 260;
const CARD_GAP = 20;
const CARD_UNIT = CARD_H + CARD_GAP;
const CONTAINER_H = 760;
const centerOffset = (i: number) => (CONTAINER_H - CARD_H) / 2 - i * CARD_UNIT;
const COOLDOWN = 520;

interface Props {
  id?: string;
}

export default function WhyChooseSection({ id }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const activeIdxRef = useRef(0);
  const cooldownRef = useRef(false);
  const lockedScrollY = useRef<number | null>(null);

  /* ── Detect desktop (≥1024 px) ── */
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    activeIdxRef.current = activeIdx;
  }, [activeIdx]);

  /* ── Scroll-lock carousel — desktop only ── */
  useEffect(() => {
    if (!isDesktop) return;

    const section = sectionRef.current;
    if (!section) return;

    const NAVBAR = 70;
    const initRect = section.getBoundingClientRect();
    let prevTopBelowNavbar = initRect.top > NAVBAR;
    let prevPastSection = initRect.bottom < window.innerHeight;

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
      const topBelowNavbar = rect.top > NAVBAR;
      const pastSection = rect.bottom < window.innerHeight;

      if (!topBelowNavbar && prevTopBelowNavbar) {
        setActiveIdx(0);
        activeIdxRef.current = 0;
        lockBody(window.scrollY);
      }
      if (!pastSection && prevPastSection) {
        setActiveIdx(FEATURES.length - 1);
        activeIdxRef.current = FEATURES.length - 1;
        lockBody(window.scrollY);
      }

      prevTopBelowNavbar = topBelowNavbar;
      prevPastSection = pastSection;
    };

    const handleWheel = (e: WheelEvent) => {
      if (lockedScrollY.current === null) return;
      if (cooldownRef.current) return;

      if (e.deltaY > 0) {
        if (activeIdxRef.current < FEATURES.length - 1) {
          cooldownRef.current = true;
          setActiveIdx((i) => {
            const n = i + 1;
            activeIdxRef.current = n;
            return n;
          });
          setTimeout(() => { cooldownRef.current = false; }, COOLDOWN);
        } else {
          unlockBody();
        }
      } else if (e.deltaY < 0) {
        if (activeIdxRef.current > 0) {
          cooldownRef.current = true;
          setActiveIdx((i) => {
            const n = i - 1;
            activeIdxRef.current = n;
            return n;
          });
          setTimeout(() => { cooldownRef.current = false; }, COOLDOWN);
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
  }, [isDesktop]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="w-full"
      style={{ background: '#284AA3' }}
    >
      <div
        className="mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10 items-start lg:items-center"
        style={{
          maxWidth: 1200,
          padding: 'clamp(28px, 5vw, 80px) clamp(16px, 4vw, 50px)',
        }}
      >
      {/* ── Left panel ── */}
      <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-95 shrink-0">
        <div className="flex flex-col gap-4 lg:gap-5">
          <span
            className="self-start inline-flex items-center gap-2 font-medium px-3 py-1.5 text-black text-xs sm:text-sm"
            style={{ background: '#f3c625', border: '0.84px solid #525252', borderRadius: 10 }}
          >
            ✦ WHY CHOOSE BIZPOLE CONSULT ✦
          </span>
          <h2
            className="font-display font-black text-white leading-tight"
            style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}
          >
            Better Solutions Start with the{' '}
            <span className="block sm:inline">Right Consultation</span>
          </h2>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.7 }}>
          Packed with essential features — from instant meeting launch, smart screen sharing,
          to collaborative tools that keep your team in sync.
        </p>
      </div>

      {/* ── Right ── */}
      {isDesktop ? (
        /* ── Desktop: scroll-lock carousel ── */
        <div className="flex-1 relative overflow-hidden" style={{ height: CONTAINER_H }}>
          <div
            className="absolute inset-x-0 top-0 z-10 pointer-events-none"
            style={{ height: 90, background: 'linear-gradient(to bottom, #284AA3 0%, transparent 100%)' }}
          />
          <div
            className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
            style={{ height: 90, background: 'linear-gradient(to top, #284AA3 0%, transparent 100%)' }}
          />
          <div
            style={{
              transform: `translateY(${centerOffset(activeIdx)}px)`,
              transition: 'transform 0.52s cubic-bezier(0.33, 1, 0.68, 1)',
            }}
          >
            {FEATURES.map((feat, i) => {
              const dist = Math.abs(i - activeIdx);
              const opacity = dist === 0 ? 1 : dist === 1 ? 0.45 : 0.2;
              const scale = dist === 0 ? 1 : dist === 1 ? 0.95 : 0.9;
              return (
                <div
                  key={i}
                  className="relative flex items-end justify-between overflow-hidden"
                  style={{
                    height: CARD_H,
                    marginBottom: i < FEATURES.length - 1 ? CARD_GAP : 0,
                    background: '#F3C625',
                    border: '0.84px solid #525252',
                    borderRadius: 17,
                    padding: 20,
                    opacity,
                    transform: `scale(${scale})`,
                    transformOrigin: 'center center',
                    transition: 'opacity 0.52s ease, transform 0.52s ease',
                  }}
                >
                  <div className="z-10" style={{ maxWidth: '65%' }}>
                    <h3 className="font-semibold text-black text-base leading-snug">{feat.title}</h3>
                    <p className="text-sm mt-1.5 leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                      {feat.description}
                    </p>
                  </div>
                  <span
                    className="absolute top-4 right-5 font-black text-black/10"
                    style={{ fontSize: 64, lineHeight: 1, userSelect: 'none' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* ── Mobile / Tablet: static 2-col grid ── */
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {FEATURES.map((feat, i) => (
            <div
              key={i}
              className="relative overflow-hidden flex flex-col justify-end"
              style={{
                background: '#F3C625',
                border: '0.84px solid #525252',
                borderRadius: 17,
                padding: 18,
                minHeight: 160,
              }}
            >
              <span
                className="absolute top-3 right-4 font-black text-black/10"
                style={{ fontSize: 52, lineHeight: 1, userSelect: 'none' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="z-10">
                <h3 className="font-semibold text-black text-sm leading-snug">{feat.title}</h3>
                <p className="text-xs mt-1 leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </section>
  );
}
