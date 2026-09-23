import React from 'react';
import { ArrowLeft, FileText, Plane, Building, Car, Moon, Compass } from 'lucide-react';
import { SERVICES_LIST } from '../data/agencyData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string, customMessage?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceMessage = (id: string, title: string) => {
    switch (id) {
      case 'visas':
        return 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن استخراج وتسهيل إجراءات التأشيرات والمستندات المطلوبة.';
      case 'flights':
        return 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن حجز تذاكر طيران ومعرفة أفضل العروض ومسارات الرحلات.';
      case 'hotels':
        return 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن حجوزات الفنادق وخيارات الإقامة المتاحة.';
      case 'transport':
        return 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن خدمات النقل الدولي والمحلي وترتيبات التنقل.';
      case 'umrah':
        return 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن برامج وتفاصيل رحلات العمرة والزيارة (تأشيرات، سكن، ونقل).';
      case 'tours':
        return 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن البرامج والرحلات السياحية المنظمة والموسمية.';
      default:
        return `مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن خدمة ${title}.`;
    }
  };

  // Map icons for subtle visual association
  const getIcon = (id: string) => {
    switch (id) {
      case 'visas':
        return <FileText size={22} className="text-[#1261D6]" />;
      case 'flights':
        return <Plane size={22} className="text-[#1261D6]" />;
      case 'hotels':
        return <Building size={22} className="text-[#1261D6]" />;
      case 'transport':
        return <Car size={22} className="text-[#1261D6]" />;
      case 'umrah':
        return <Moon size={22} className="text-[#1261D6]" />;
      case 'tours':
        return <Compass size={22} className="text-[#1261D6]" />;
      default:
        return <Compass size={22} className="text-[#1261D6]" />;
    }
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F6F7] border border-[#E7E7E7] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#1261D6]" />
            <span className="text-xs md:text-sm font-medium text-[#0A0A0A]">خدماتنا المتكاملة</span>
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0A0A0A] tracking-tight leading-tight mb-5"
          >
            كل ما تحتاجه لرحلتك، في مكان واحد.
          </h2>
          <p className="text-base md:text-lg text-[#555555] leading-relaxed">
            من تجهيز التأشيرة إلى حجز الرحلة والسكن والنقل، نوفر لك خدمات سفر متكاملة بحسب وجهتك واحتياجاتك.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div
          id="services-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES_LIST.map((service) => {
            const customMsg = getServiceMessage(service.id, service.title);
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                role="button"
                tabIndex={0}
                onClick={() => onSelectService(service.title, customMsg)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectService(service.title, customMsg);
                  }
                }}
                className="group relative bg-white border border-[#E7E7E7] hover:border-[#1261D6]/40 focus:outline-none focus:ring-2 focus:ring-[#1261D6]/50 rounded-[20px] p-8 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(18,97,214,0.06)] cursor-pointer flex flex-col justify-between"
              >
              <div>
                {/* Top Row: Number & Subtle Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[17px] font-semibold text-[#F28A2E] tracking-wider">
                    {service.number}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#F5F6F7] flex items-center justify-center group-hover:bg-[#1261D6]/10 transition-colors duration-200">
                    {getIcon(service.id)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[22px] md:text-[24px] font-semibold text-[#0A0A0A] mb-3 group-hover:text-[#1261D6] transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#555555] text-[15px] leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Key Features bullet list */}
                <ul className="space-y-2 mb-8 pt-4 border-t border-[#F0F0F0]">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="text-xs md:text-sm text-[#666666] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1261D6]/70" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Row: CTA & Animated Arrow */}
              <div className="pt-4 border-t border-[#F0F0F0] flex items-center justify-between text-sm font-medium text-[#0A0A0A]">
                <span className="group-hover:text-[#1261D6] transition-colors duration-200">
                  طلب الخدمة والاستفسار
                </span>
                <div className="w-9 h-9 rounded-full bg-[#F5F6F7] flex items-center justify-center text-[#0A0A0A] group-hover:bg-[#1261D6] group-hover:text-white transition-all duration-200">
                  <ArrowLeft
                    size={16}
                    className="transition-transform duration-200 group-hover:-translate-x-1.5"
                  />
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};
