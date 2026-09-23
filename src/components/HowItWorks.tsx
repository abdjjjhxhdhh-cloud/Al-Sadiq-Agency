import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/agencyData';

export const HowItWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="py-24 md:py-32 bg-[#F5F6F7]/60 border-t border-[#E7E7E7]"
    >
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E7E7E7] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F28A2E]" />
            <span className="text-xs md:text-sm font-medium text-[#0A0A0A]">خطوات واضحة</span>
          </div>
          <h2
            id="how-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0A0A0A] tracking-tight leading-tight mb-4"
          >
            كيف تبدأ رحلتك معنا؟
          </h2>
          <p className="text-base md:text-lg text-[#555555] leading-relaxed">
            أربع خطوات مباشرة تضمن لك وضوح الإجراءات وسرعة الترتيب من البداية وحتى الوصول.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Subtle Orange Accent Line for Desktop */}
          <div
            className="hidden lg:block absolute top-[28px] right-[40px] left-[40px] h-[2px] bg-gradient-to-l from-[#F28A2E]/20 via-[#F28A2E] to-[#F28A2E]/20 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="relative flex flex-col items-start bg-white lg:bg-transparent p-6 lg:p-0 rounded-[20px] lg:rounded-none border border-[#E7E7E7] lg:border-none shadow-sm lg:shadow-none"
              >
                {/* Step Circle with Orange Highlight */}
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#F28A2E] text-[#0A0A0A] font-semibold text-lg flex items-center justify-center mb-6 shadow-sm">
                  {step.number}
                </div>

                <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2.5">
                  {step.title}
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
