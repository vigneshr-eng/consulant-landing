import React from 'react';

interface SectionHeaderProps {
  badge: string;
  title1: string;
  title2: string;
  description: string;
  onSeeMore?: () => void;
}

export default function SectionHeader({
  badge,
  title1,
  title2,
  description,
  onSeeMore,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
      {/* Left: badge + headings */}
      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center gap-1.5 border border-gray-200 rounded-full px-3.5 py-1 w-fit bg-white">
          <span className="text-[#284AA3] text-xs leading-none">✦</span>
          <span className="text-[#284AA3] text-[13px] font-medium tracking-wide">{badge}</span>
          <span className="text-[#284AA3] text-xs leading-none">✦</span>
        </div>
        <div className="flex flex-col leading-tight">
          <h2 className="text-[32px] font-extrabold text-[#111827] leading-[1.15]">{title1}</h2>
          <h2 className="text-[32px] font-extrabold text-[#111827] leading-[1.15]">{title2}</h2>
        </div>
      </div>

      {/* Right: description + button */}
      <div className="flex flex-col items-end gap-4 max-w-[320px]">
        <p className="text-[13.5px] text-[#6B7280] text-right leading-relaxed">{description}</p>
        <button
          onClick={onSeeMore}
          className="border border-gray-300 rounded-lg px-5 py-2 text-[13px] font-medium text-[#374151] hover:bg-gray-50 transition-colors whitespace-nowrap bg-white"
        >
          See More
        </button>
      </div>
    </div>
  );
}
