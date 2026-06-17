import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import meetingImg from "../assests/WhatsApp Image 2026-06-11 at 17.20.35.jpeg";

const SLIDER_ITEMS = [
  "Find specialists in finance, marketing, technology, legal and more.",
  "Connect with verified experts across every industry.",
  "Book your experts in just a few clicks.",
  "Your data and transactions are always safe with us.",
  "Find specialists in finance, marketing, technology, legal and more.",
  "Get automated reminders so you never miss a session.",
];

export default function HeroCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDER_ITEMS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div className="flex flex-col lg:flex-row  justify-center gap-6">
      {/* ─────────────── LEFT CARD ─────────────── */}
      <motion.div
        whileHover={{ scale: 1.012 }}
        transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-full lg:w-[507.5px] shrink-0"
        style={{ height: 406 }}
      >
        <div className="relative w-full h-full overflow-hidden rounded-[23px] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.07)]">
          {/* gradient overlay so heading is readable over image */}
          <div className="absolute inset-x-0 top-0 h-40 z-10 bg-linear-to-b from-white/90 to-transparent pointer-events-none rounded-t-[23px]" />

          {/* ── Heading ── */}
          <div className="absolute z-20" style={{ top: 10, left: 10 }}>
            <h2
              className="font-black text-[#111111] leading-[1.15]"
              style={{
                fontSize: "clamp(26px, 3.2vw, 42px)",
                letterSpacing: "-0.5px",
              }}
            >
              Get Your Meetings
            </h2>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span
                className="font-black text-[#111111] leading-none"
                style={{
                  fontSize: "clamp(26px, 3.2vw, 42px)",
                  letterSpacing: "-0.5px",
                }}
              >
                More
              </span>
              <span
                className="font-black text-[#111111] leading-none"
                style={{
                  fontSize: "clamp(26px, 3.2vw, 36px)",
                  letterSpacing: "-0.5px",
                  border: "2.5px solid #F3C625",
                  borderRadius: 100,
                  padding: "10px 16px 8px",
                }}
              >
                Effective
              </span>
            </div>
          </div>

          {/* ── Image panel — starts below heading, has its own border-radius ── */}
          <div
            className="absolute overflow-hidden"
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 23,
            }}
          >
            <img
              src={meetingImg}
              alt="Virtual consultation meeting"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 20%" }}
            />

            {/* Right badges inside image */}
            <div
              className="absolute right-3 flex flex-col gap-2.5 items-end"
              style={{ top: "64%", transform: "translateY(-50%)" }}
            >
              {["User friendly", "Virtual consultation"].map((label) => (
                <span
                  key={label}
                  className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-[#111111] whitespace-nowrap"
                  style={{
                    background: "rgba(248,248,246,0.97)",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
                    letterSpacing: "0.01em",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Bottom-left speech bubbles inside image */}
            <div className="absolute bottom-4 left-4 flex flex-col gap-1.5 items-start">
              <div
                className="bg-white py-1.5 px-4 text-sm font-semibold text-slate-900"
                style={{
                  borderRadius: "20px 20px 20px 4px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                }}
              >
                Released
              </div>
              <div
                className="bg-white py-1.5 px-4 text-sm font-semibold text-slate-900"
                style={{
                  borderRadius: "4px 20px 20px 20px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                }}
              >
                with AI Technology
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ─────────────── RIGHT CARD ─────────────── */}
      <div
        className="relative overflow-hidden flex items-center justify-center w-full lg:w-[507.5px] shrink-0"
        style={{
          height: 406,
          background: "#F3C625",
          borderRadius: 46.14,
          padding: 23.07,
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Decorative blurred circles */}
        <div
          className="absolute"
          style={{
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.12)",
            top: -60,
            right: -60,
            filter: "blur(1px)",
          }}
        />
        <div
          className="absolute"
          style={{
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            bottom: -50,
            left: -40,
            filter: "blur(1px)",
          }}
        />

        {/* Glass card */}
        <div
          className="relative flex flex-col gap-5"
          style={{
            width: "80%",
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.28)",
            borderRadius: 16,
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            padding: "28px 24px",
          }}
        >
          <p
            className="font-bold uppercase tracking-[0.18em]"
            style={{ fontSize: 10, color: "#8B6B00" }}
          >
            Everything You Need
          </p>

          <div className="relative overflow-hidden" style={{ minHeight: 84 }}>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -22 }}
                transition={{ duration: 0.48, ease: [0.4, 0, 0.2, 1] }}
                className="font-semibold text-black leading-snug absolute inset-0"
                style={{ fontSize: "clamp(15px, 1.45vw, 19px)" }}
              >
                {SLIDER_ITEMS[activeIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2">
            {SLIDER_ITEMS.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveIndex(i)}
                animate={{
                  width: i === activeIndex ? 24 : 8,
                  backgroundColor:
                    i === activeIndex ? "#ffffff" : "rgba(255,255,255,0.38)",
                }}
                transition={{ duration: 0.28 }}
                style={{
                  height: 8,
                  borderRadius: 4,
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}