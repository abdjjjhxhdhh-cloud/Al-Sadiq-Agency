import React from 'react';
import { ArrowLeft, Moon, MapPin, CheckCircle2 } from 'lucide-react';

interface UmrahSectionProps {
  onOpenBooking: () => void;
}

export const UmrahSection: React.FC<UmrahSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="umrah"
      aria-labelledby="umrah-heading"
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        {/* Large Visual Feature Box */}
        <div
          id="umrah-hero-card"
          className="relative rounded-[28px] overflow-hidden min-h-[540px] md:min-h-[600px] flex items-center shadow-[0_16px_48px_rgba(0,0,0,0.08)] border border-black/5"
        >
          {/* Background Image: Holy Mecca with soft overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1600&auto=format&fit=crop"
              alt="المسجد الحرام وبرامج العمرة والزيارة"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            {/* Elegant double-gradient overlay: keeps it bright yet delivers high text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 rtl:from-black/85 rtl:via-black/60 rtl:to-black/30" />
          </div>

          {/* Content Over Background */}
          <div className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-20 max-w-2xl text-white">
            {/* Subtle Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 mb-6">
              <Moon size={14} className="text-[#F28A2E]" />
              <span className="text-xs md:text-sm font-medium text-white">خدمة متميزة وخاصة</span>
            </div>

            {/* Heading */}
            <h2
              id="umrah-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6"
            >
              للعمرة تفاصيلها...
              <br />
              <span className="text-white/90">ونحن نهتم بها.</span>
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-white/85 leading-relaxed mb-8 font-normal">
              برامج العمرة لدينا قد تشمل التأشيرة والسكن والنقل الدولي والنقل بين مكة والمدينة والخدمات المرتبطة بالبرنامج، لنضمن لك تجربة روحانية ميسرة تعتني بأدق التفاصيل.
            </p>

            {/* Inclusions summary (No fake dates or fixed prices) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
              <div className="flex items-center gap-2.5 text-sm text-white/90 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-white/10">
                <CheckCircle2 size={16} className="text-[#F28A2E] shrink-0" />
                <span>إصدار وتسهيل التأشيرات</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/90 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-white/10">
                <CheckCircle2 size={16} className="text-[#F28A2E] shrink-0" />
                <span>خيارات سكن بمكة والمدينة</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/90 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-white/10">
                <CheckCircle2 size={16} className="text-[#F28A2E] shrink-0" />
                <span>ترتيبات النقل البري والجوي</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/90 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-white/10">
                <CheckCircle2 size={16} className="text-[#F28A2E] shrink-0" />
                <span>متابعة وتنسيق مباشر</span>
              </div>
            </div>

            {/* Action CTA & Note */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                id="umrah-inquire-btn"
                type="button"
                className="h-[52px] px-8 rounded-full bg-[#F28A2E] hover:bg-[#e07b22] text-white font-medium text-sm md:text-base shadow-[0_4px_20px_rgba(242,138,46,0.4)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>استفسر عن برامج العمرة</span>
                <ArrowLeft size={16} />
              </button>

              <span className="text-xs text-white/70 max-w-xs leading-normal">
                الأسعار والمواعيد والتوافر قابلة للتغيير حسب الموسم وبرامج الرحلات المعتمدة.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
