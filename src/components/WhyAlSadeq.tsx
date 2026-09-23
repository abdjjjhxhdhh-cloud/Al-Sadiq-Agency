import React from 'react';
import { WHY_US_ITEMS } from '../data/agencyData';

export const WhyAlSadeq: React.FC = () => {
  return (
    <section
      id="why-us"
      aria-labelledby="why-heading"
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F6F7] border border-[#E7E7E7] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F28A2E]" />
            <span className="text-xs md:text-sm font-medium text-[#0A0A0A]">معايير العمل</span>
          </div>
          <h2
            id="why-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0A0A0A] tracking-tight leading-tight mb-4"
          >
            لماذا يبدأ كثير من المسافرين من هنا؟
          </h2>
          <p className="text-base md:text-lg text-[#555555] leading-relaxed">
            نركز على وضوح الإجراءات، وتوفير خيارات عملية ومتكاملة تجعل تجربة السفر منظمة ومريحة.
          </p>
        </div>

        {/* 4 Cards Grid with Minimal Border & Refined Spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_ITEMS.map((item) => (
            <div
              key={item.number}
              className="group bg-[#F5F6F7]/50 hover:bg-white rounded-[22px] p-8 border border-[#E7E7E7] hover:border-[#1261D6]/30 transition-all duration-300 hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)] flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-semibold text-[#F28A2E] tracking-tight block mb-6">
                  {item.number}
                </span>
                <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3 group-hover:text-[#1261D6] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#555555] text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E7E7E7]/60">
                <div className="w-8 h-1 rounded-full bg-[#1261D6]/20 group-hover:bg-[#1261D6] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
