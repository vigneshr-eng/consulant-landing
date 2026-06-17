import React from 'react';

interface ExpertCardProps {
  image?: string;
  discount: string;
  dealOfDay?: boolean;
  title: string;
  rating: number;
  reviews: number;
  currentPrice: string;
  oldPrice: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="13" height="13" viewBox="0 0 24 24">
          <path
            fill={star <= rating ? '#F59E0B' : '#D1D5DB'}
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
      ))}
    </div>
  );
}

function ImagePlaceholder() {
  return (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C4C4C4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    </div>
  );
}

export default function ExpertCard({
  image,
  discount,
  dealOfDay,
  title,
  rating,
  reviews,
  currentPrice,
  oldPrice,
}: ExpertCardProps) {
  return (
    <div
      className="flex flex-col bg-white rounded-xl overflow-hidden"
      style={{ border: '1px solid #F0F0F0', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
    >
      {/* Image */}
      <div className="relative" style={{ height: 175 }}>
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <ImagePlaceholder />
        )}

        {/* Discount badge */}
        <span
          className="absolute top-2 left-2 text-white text-[10px] font-bold px-1.5 py-0.5 rounded"
          style={{ backgroundColor: '#EF4444' }}
        >
          {discount}
        </span>

        {/* Deal of the Day badge */}
        {dealOfDay && (
          <span
            className="absolute top-2 right-2 text-[#1A1A1A] text-[9px] font-bold px-2 py-0.5 rounded"
            style={{ backgroundColor: '#F3C625' }}
          >
            Deal of the Day
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col gap-2 p-3 flex-1">
        <p
          className="text-[13px] font-semibold leading-snug"
          style={{ color: '#1A1A2E', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
        >
          {title}
        </p>

        <div className="flex items-center gap-1.5">
          <StarRating rating={rating} />
          <span className="text-[11px] text-[#9CA3AF]">({reviews.toLocaleString()})</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[16px] font-bold text-[#111827]">{currentPrice}</span>
          <span className="text-[12px] text-[#9CA3AF] line-through">{oldPrice}</span>
        </div>

        <button
          className="w-full py-2 rounded-lg text-[13px] font-semibold text-white transition-colors mt-auto"
          style={{ backgroundColor: '#284AA3' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1f3da0')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#284AA3')}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
