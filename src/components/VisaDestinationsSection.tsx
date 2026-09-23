import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { DESTINATIONS_LIST } from '../data/agencyData';

interface VisaDestinationsSectionProps {
  onSelectDestination: (destName: string) => void;
}

export const VisaDestinationsSection: React.FC<VisaDestinationsSectionProps> = ({
  onSelectDestination,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'كافة الوجهات السابقة' },
    { id: 'gulf', label: 'الخليج العربي' },
    { id: 'asia', label: 'آسيا والشرق' },
    { id: 'islands', label: 'الجزر والاستجمام' },
  ];

  const filteredDestinations = DESTINATIONS_LIST.filter((dest) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'gulf') {
      return ['saudi', 'oman', 'uae', 'qatar', 'bahrain'].includes(dest.id);
    }
    if (activeFilter === 'asia') {
      return ['india'].includes(dest.id);
    }
    if (activeFilter === 'islands') {
      return ['seychelles'].includes(dest.id);
    }
    return true;
  });

  return (
    <section
      id="destinations"
      aria-labelledby="destinations-heading"
      className="py-24 md:py-32 bg-[#F5F6F7]/60 border-y border-[#E7E7E7]"
    >
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E7E7E7] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F28A2E]" />
              <span className="text-xs md:text-sm font-medium text-[#0A0A0A]">
                التأشيرات والوجهات
              </span>
            </div>
            <h2
              id="destinations-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0A0A0A] tracking-tight leading-tight mb-4"
            >
              وجهتك تبدأ من التأشيرة
            </h2>
            <p className="text-base md:text-lg text-[#555555] leading-relaxed">
              نساعدك في التعامل مع مجموعة متنوعة من أنواع التأشيرات والوجهات حسب الخدمات المتاحة لدينا.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                type="button"
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === cat.id
                    ? 'bg-[#0A0A0A] text-white shadow-sm'
                    : 'bg-white text-[#555555] hover:text-[#0A0A0A] border border-[#E7E7E7]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              id={`destination-card-${dest.id}`}
              role="button"
              tabIndex={0}
              onClick={() => onSelectDestination(dest.name)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectDestination(dest.name);
                }
              }}
              className="group relative bg-white rounded-[22px] overflow-hidden border border-[#E7E7E7] hover:border-[#1261D6]/40 focus:outline-none focus:ring-2 focus:ring-[#1261D6]/50 transition-all duration-300 hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] cursor-pointer flex flex-col"
            >
              {/* Image Container with editorial zoom */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <img
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-medium text-[#0A0A0A]">
                  {dest.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#0A0A0A] mb-1 group-hover:text-[#1261D6] transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-[#888888] font-normal mb-3">
                    {dest.nameEn}
                  </p>
                  <p className="text-xs text-[#555555] leading-relaxed line-clamp-2">
                    {dest.highlight}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0F0F0] flex items-center justify-between text-xs font-medium text-[#0A0A0A]">
                  <span className="group-hover:text-[#1261D6] transition-colors">
                    طلب تفاصيل التأشيرة
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#F5F6F7] flex items-center justify-center text-[#0A0A0A] group-hover:bg-[#1261D6] group-hover:text-white transition-colors">
                    <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
