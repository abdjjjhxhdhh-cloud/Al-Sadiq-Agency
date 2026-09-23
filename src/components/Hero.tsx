import React from 'react';
import { ArrowLeft, Compass, Plane, ShieldCheck } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-main-heading"
      className="relative pt-36 md:pt-44 lg:pt-48 pb-16 md:pb-24 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        {/* Centered Typography Hero */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main Hero Title - 68px to 82px on Desktop */}
          <h1
            id="hero-main-heading"
            className="text-[40px] sm:text-[54px] md:text-[68px] lg:text-[78px] xl:text-[82px] font-semibold text-[#0A0A0A] leading-[1.04] md:leading-[1.0] tracking-tight mb-6 md:mb-8"
          >
            نفتح لك الطريق
            <br />
            <span className="text-[#0A0A0A]">إلى وجهتك القادمة</span>
          </h1>

          {/* Hero Description - Max width 760px */}
          <p
            id="hero-description"
            className="text-[16px] md:text-[18px] lg:text-[19px] text-[#555555] leading-relaxed max-w-[760px] mb-8 md:mb-10 font-normal"
          >
            وكالة الصادق للسفريات والسياحة تساعدك في التأشيرات وحجوزات الطيران والفنادق والنقل وبرامج العمرة والرحلات، لتجعل التخطيط لسفرك أكثر وضوحًا وسهولة.
          </p>

          {/* Hero Action Buttons */}
          <div
            id="hero-cta-buttons"
            className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-14 md:mb-18"
          >
            <button
              onClick={onOpenBooking}
              id="hero-primary-cta"
              type="button"
              className="w-full sm:w-auto h-[50px] md:h-[54px] px-8 md:px-9 rounded-full bg-[#F28A2E] text-white text-[15px] md:text-[16px] font-medium hover:bg-[#e07b22] active:scale-[0.98] shadow-[0_4px_18px_rgba(242,138,46,0.32)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>ابدأ حجزك</span>
              <ArrowLeft size={17} className="rtl:rotate-0" />
            </button>

            <a
              href="#services"
              id="hero-secondary-cta"
              className="w-full sm:w-auto h-[50px] md:h-[54px] px-8 md:px-9 rounded-full bg-[#1261D6] hover:bg-[#0e4eb0] text-white text-[15px] md:text-[16px] font-medium shadow-[0_4px_18px_rgba(18,97,214,0.28)] transition-all duration-200 flex items-center justify-center active:scale-[0.98]"
            >
              استكشف خدماتنا
            </a>
          </div>
        </div>

        {/* Section 5: HERO VISUAL PREVIEW - Two Large Editorial Cards */}
        <div
          id="hero-visual-preview"
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-2"
        >
          {/* Card 1: Beautiful Travel Destination */}
          <a
            href="#packages"
            id="hero-card-1"
            className="group relative h-[360px] sm:h-[420px] md:h-[480px] lg:h-[540px] rounded-[22px] overflow-hidden border border-black/10 bg-[#F5F6F7] shadow-[0_8px_30px_rgba(0,0,0,0.04)] block cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1400&auto=format&fit=crop"
              alt="وجهة سفر سياحية فاخرة"
              loading="eager"
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
            />
            {/* Subtle editorial gradient overlay at the bottom for typography clarity */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 right-6 left-6 flex items-end justify-between text-white">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium mb-2 border border-white/20">
                  وجهات سياحية
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                  برامج سياحية مختارة
                </h3>
                <p className="text-sm text-white/80 mt-1">
                  رحلات استجمام وترتيبات مخصصة لأجمل المعالم
                </p>
              </div>

              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-[#F28A2E] group-hover:border-[#F28A2E] transition-colors duration-300">
                <ArrowLeft size={18} />
              </div>
            </div>
          </a>

          {/* Card 2: Travel Scene / Aviation / City / Hospitality */}
          <a
            href="#services"
            id="hero-card-2"
            className="group relative h-[360px] sm:h-[420px] md:h-[480px] lg:h-[540px] rounded-[22px] overflow-hidden border border-black/10 bg-[#F5F6F7] shadow-[0_8px_30px_rgba(0,0,0,0.04)] block cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=1200"
              alt="تنظيم حجوزات السفر والفنادق والمطارات"
              loading="eager"
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 right-6 left-6 flex items-end justify-between text-white">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium mb-2 border border-white/20">
                  حجوزات وإقامة
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                  تنسيق شامل من المطار إلى الفندق
                </h3>
                <p className="text-sm text-white/80 mt-1">
                  تأشيرات، تذاكر طيران، وحلول إقامة مريحة وموثوقة
                </p>
              </div>

              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-[#1261D6] group-hover:border-[#1261D6] transition-colors duration-300">
                <ArrowLeft size={18} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
