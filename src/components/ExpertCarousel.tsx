import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import ExpertCard from './ExpertCard';

const EXPERT_CARDS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&auto=format&fit=crop&q=80',
    discount: '50% OFF',
    dealOfDay: true,
    title: 'Business Strategy Consultation - 60 mins',
    rating: 4,
    reviews: 1254,
    currentPrice: '₹299',
    oldPrice: '₹499',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&auto=format&fit=crop&q=80',
    discount: '40% OFF',
    dealOfDay: false,
    title: 'Financial Planning Package - 3 Sessions',
    rating: 4,
    reviews: 189,
    currentPrice: '₹1,499',
    oldPrice: '₹2,499',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&auto=format&fit=crop&q=80',
    discount: '40% OFF',
    dealOfDay: false,
    title: 'Tax Advisory - Annual Package',
    rating: 4,
    reviews: 158,
    currentPrice: '₹2,999',
    oldPrice: '₹6,000',
  },
  {
    id: 4,
    image: undefined,
    discount: '44% OFF',
    dealOfDay: false,
    title: 'Marketing Strategy Session - 90 mins',
    rating: 4,
    reviews: 89,
    currentPrice: '₹449',
    oldPrice: '₹799',
  },
];

const TOTAL_PAGES = 3;

function TrendingUpIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#EF4444"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default function ExpertCarousel() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section
      className="bg-white w-full"
      style={{
        borderRadius: '11.37px',
        padding: '56.84px 37.89px',
        maxWidth: 1198,
        margin: '0 auto',
        boxSizing: 'border-box',
      }}
    >
      <div className="flex flex-col" style={{ gap: '28px' }}>
        {/* Section header: badge + titles + description + see more */}
        <SectionHeader
          badge="Explore"
          title1="Experts"
          title2="Use Our Platform"
          description="Top Experts use our platform for reliable streaming, intuitive setup, strong engagement tools, and a seamless experience every time."
        />

        {/* Today's Deals label */}
        <div className="flex items-center gap-2">
          <TrendingUpIcon />
          <span className="text-[14px] font-bold text-[#111827]">Today's Deals</span>
        </div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '21.16px' }}
        >
          {EXPERT_CARDS.map((card) => (
            <ExpertCard
              key={card.id}
              image={card.image}
              discount={card.discount}
              dealOfDay={card.dealOfDay}
              title={card.title}
              rating={card.rating}
              reviews={card.reviews}
              currentPrice={card.currentPrice}
              oldPrice={card.oldPrice}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3 pt-2">
          {/* Prev */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
            className="flex items-center justify-center rounded-full transition-opacity hover:opacity-80"
            style={{ width: 36, height: 36, backgroundColor: '#284AA3', flexShrink: 0 }}
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                aria-label={`Page ${i + 1}`}
                style={{
                  width: i === currentPage ? 10 : 8,
                  height: i === currentPage ? 10 : 8,
                  borderRadius: '50%',
                  backgroundColor: i === currentPage ? '#284AA3' : '#D1D5DB',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(TOTAL_PAGES - 1, p + 1))}
            className="flex items-center justify-center rounded-full transition-opacity hover:opacity-80"
            style={{ width: 36, height: 36, backgroundColor: '#284AA3', flexShrink: 0 }}
            aria-label="Next"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
