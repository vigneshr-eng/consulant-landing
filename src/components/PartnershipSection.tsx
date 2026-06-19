import React, { useState } from 'react';

// ─── Data ──────────────────────────────────────────────────────────────────
const FEATURE_CARDS = [
  {
    id: 0,
    text: 'From finding the right expertise to building long-term partnerships',
  },
  {
    id: 1,
    text: 'Bizpole Consult helps consultants and businesses grow together',
  },
  {
    id: 2,
    text: 'Quality, transparency, and convenience over anything',
  },
  {
    id: 3,
    text: 'Every interaction is designed for meaningful outcomes',
  },
];

// ─── Sub-components ─────────────────────────────────────────────────────────

function AboutBadge() {
  return (
    <div className="inline-flex items-center gap-2 border border-[#dfe4ee] rounded-full px-4 py-2 w-fit">
      <span className="text-[#2563eb] text-sm">✦</span>
      <span className="text-[#2563eb] text-sm font-medium">About</span>
      <span className="text-[#2563eb] text-sm">✦</span>
    </div>
  );
}

interface FeatureCardProps {
  text: string;
  isActive: boolean;
  onMouseEnter: () => void;
}

function FeatureCard({ text, isActive, onMouseEnter }: FeatureCardProps) {
  return (
    <div
      className="rounded-3xl p-7 flex items-center min-h-[100px] cursor-default"
      style={{
        background: isActive
          ? 'linear-gradient(to right, #4c8fff, #0066ff)'
          : '#ffffff',
        border: isActive ? '1.5px solid transparent' : '1px solid #e5e7eb',
        boxShadow: isActive
          ? '0 8px 28px rgba(38, 102, 255, 0.22)'
          : '0 1px 3px rgba(0,0,0,0.04)',
        transform: isActive ? 'scale(1.015)' : 'scale(1)',
        transition: 'box-shadow 300ms ease-in-out, transform 300ms ease-in-out',
      }}
      onMouseEnter={onMouseEnter}
    >
      <p
        className="text-[17px] leading-relaxed font-[400]"
        style={{
          color: isActive ? '#ffffff' : '#25345a',
          transition: 'color 300ms ease-in-out',
        }}
      >
        {text}
      </p>
    </div>
  );
}

interface CTAButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
}

function CTAButton({ label, variant }: CTAButtonProps) {
  const base =
    'px-10 py-4 rounded-2xl font-medium text-lg transition-colors duration-200 whitespace-nowrap';

  if (variant === 'primary') {
    return (
      <button
        className={`${base} bg-[#2647b8] hover:bg-[#1f3da0] text-white`}
      >
        {label}
      </button>
    );
  }

  return (
    <button
      className={`${base} bg-[#e8edf7] hover:bg-[#dde5f4] text-[#112047]`}
    >
      {label}
    </button>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function PartnershipSection() {
  const [activeCard, setActiveCard] = useState(1);

  const row1 = FEATURE_CARDS.slice(0, 3);
  const row2 = FEATURE_CARDS.slice(3);

  return (
    <section id="about" className="relative bg-white overflow-hidden w-full">
      {/* Decorative quotation mark */}
      <div
        className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none select-none"
        aria-hidden
        style={{ opacity: 0.035 }}
      >
        <span
          style={{
            fontSize: 480,
            fontWeight: 900,
            color: '#112047',
            lineHeight: 1,
            fontFamily: 'Georgia, "Times New Roman", serif',
            userSelect: 'none',
          }}
        >
          "
        </span>
      </div>

      {/* Inner container — matches Figma: max-w 1069px, padding 48.89px / 32.59px */}
      <div
        className="relative mx-auto flex flex-col"
        style={{
          maxWidth: 1069,
          padding: '48.89px 32.59px',
          gap: '48.89px',
          boxSizing: 'border-box',
        }}
      >
        {/* ── Top Row: heading (left) + description (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: '65.18px' }}>
          {/* Left */}
          <div className="flex flex-col gap-5">
            <AboutBadge />
            <h2
              className="font-bold text-[#112047] leading-[1.1] max-w-[520px]"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              Creating Meaningful Professional Partnerships
            </h2>
          </div>

          {/* Right — vertically centered */}
          <div className="flex lg:justify-end">
            <p
              className="max-w-[500px] text-[#66789c] lg:text-right"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: 16,
                lineHeight: '26px',
                letterSpacing: 0,
              }}
            >
              Sometimes it is very difficult to find the right consultant. It
              takes up valuable time for businesses, while some great consultants
              might struggle to reach the right clients.
            </p>
          </div>
        </div>

        {/* ── Feature Cards ── */}
        <div className="flex flex-col gap-4">
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {row1.map((card) => (
              <FeatureCard
                key={card.id}
                text={card.text}
                isActive={activeCard === card.id}
                onMouseEnter={() => setActiveCard(card.id)}
              />
            ))}
          </div>

          {/* Row 2: 1 card — occupies only the first column */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {row2.map((card) => (
              <FeatureCard
                key={card.id}
                text={card.text}
                isActive={activeCard === card.id}
                onMouseEnter={() => setActiveCard(card.id)}
              />
            ))}
            {/* Empty placeholders to maintain grid structure */}
            <div aria-hidden />
            <div aria-hidden />
          </div>
        </div>

        {/* ── Bottom Row: description (left) + CTA buttons (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <p
            className="text-[#66789c] max-w-[600px]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '26px',
              letterSpacing: 0,
            }}
          >
            Bizpole Consult integrates both of these gaps on one platform. It
            lets consultants find their clients easily, and it also helps
            businesses quickly connect with the right experts.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-end" style={{ gap: '13.04px' }}>
            <CTAButton label="For Experts →" variant="primary" />
            <CTAButton label="For Businesses →" variant="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
}
