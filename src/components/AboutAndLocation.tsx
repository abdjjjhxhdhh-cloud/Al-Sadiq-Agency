import React from 'react';
import { MapPin, ExternalLink, Building2, Navigation, Phone, Clock } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

export const AboutAndLocation: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        {/* Section 12: ABOUT EDITORIAL STATEMENT */}
        <div className="max-w-4xl mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F6F7] border border-[#E7E7E7] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#1261D6]" />
            <span className="text-xs md:text-sm font-medium text-[#0A0A0A]">عن وكالة الصادق</span>
          </div>

          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold text-[#0A0A0A] tracking-tight leading-[1.12] mb-8"
          >
            الوجهة قد تكون بعيدة،
            <br />
            <span className="text-[#1261D6]">لكن ترتيب الرحلة لا يجب أن يكون معقدًا.</span>
          </h2>

          <p className="text-lg md:text-xl text-[#555555] leading-relaxed font-normal">
            وكالة الصادق للسفريات والسياحة هي وكالة سفر في المكلا تقدم خدمات مرتبطة بالتأشيرات وحجوزات السفر والفنادق والنقل وبرامج العمرة والرحلات السياحية، برؤية حديثة تهدف إلى تسهيل كل خطوة في رحلتك وتقديم رعاية مباشرة وموثوقة.
          </p>
        </div>

        {/* Section 13 & 14: LOCATION & BRANCHES */}
        <div id="location" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Headquarters Details Card (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F5F6F7]/50 rounded-[24px] p-8 md:p-12 border border-[#E7E7E7] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E7] mb-6 text-xs font-medium text-[#0A0A0A]">
                <MapPin size={13} className="text-[#F28A2E]" />
                <span>زورنا في مقرنا الرئيسي</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-[#0A0A0A] mb-4">
                المركز الرئيسي — المكلا
              </h3>

              <div className="space-y-4 my-6 text-[#444444] text-base leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white border border-[#E7E7E7] flex items-center justify-center shrink-0 mt-1">
                    <Navigation size={13} className="text-[#1261D6]" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#0A0A0A] block">العنوان الدقيق:</span>
                    <span>حضرموت — المكلا، فوه — المساكن، الشارع العام</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white border border-[#E7E7E7] flex items-center justify-center shrink-0 mt-1">
                    <Building2 size={13} className="text-[#1261D6]" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#0A0A0A] block">أقرب نقطة دالة:</span>
                    <span>بجانب مركز جامعة حضرموت لطب الأسرة</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white border border-[#E7E7E7] flex items-center justify-center shrink-0 mt-1">
                    <Phone size={13} className="text-[#1261D6]" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#0A0A0A] block">الهاتف المباشر:</span>
                    <a href={`tel:${AGENCY_CONFIG.phoneClean}`} className="hover:text-[#1261D6] font-medium" dir="ltr">
                      {AGENCY_CONFIG.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E7E7E7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <a
                href={AGENCY_CONFIG.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="google-maps-btn"
                className="h-12 px-6 rounded-full bg-[#0A0A0A] text-white hover:bg-[#1261D6] text-sm font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <span>فتح الموقع على خرائط Google</span>
                <ExternalLink size={15} />
              </a>

              <span className="text-xs text-[#777777]">
                نرحب بزيارتكم خلال ساعات الدوام الرسمية
              </span>
            </div>
          </div>

          {/* Section 14: Branches & Map Preview Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Styled Map Preview Card */}
            <div className="relative h-64 md:h-72 rounded-[24px] overflow-hidden border border-[#E7E7E7] bg-gray-100 group">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
                alt="خريطة موقع المكلا - فوه"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-5 right-5 left-5 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F28A2E] animate-ping" />
                  <span className="text-xs font-medium text-white/90">المكلا، حضرموت</span>
                </div>
                <h4 className="text-lg font-semibold text-white">
                  فوه — المساكن، الشارع العام
                </h4>
                <p className="text-xs text-white/80 mt-1">
                  بجانب مركز جامعة حضرموت لطب الأسرة
                </p>
              </div>
            </div>

            {/* Branches Card */}
            <div className="bg-white rounded-[24px] p-6 border border-[#E7E7E7] flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-semibold text-[#0A0A0A] mb-3 flex items-center gap-2">
                  <Building2 size={16} className="text-[#1261D6]" />
                  <span>فروع الوكالة</span>
                </h4>
                <div className="space-y-3 text-sm">
                  {AGENCY_CONFIG.branches.map((b) => (
                    <div
                      key={b.id}
                      className="p-3 rounded-xl bg-[#F5F6F7] border border-[#E7E7E7]/60 flex items-start justify-between gap-3"
                    >
                      <div>
                        <div className="font-medium text-[#0A0A0A]">{b.title}</div>
                        <div className="text-xs text-[#666666] mt-0.5">{b.location}</div>
                      </div>
                      <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium shrink-0 ${
                        b.id === 'main' ? 'bg-[#1261D6]/10 text-[#1261D6]' : 'bg-gray-200 text-gray-700'
                      }`}>
                        {b.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-[#888888] mt-4 pt-3 border-t border-[#F0F0F0]">
                يتم تحديث وإضافة الفروع المعتمدة رسميًا بالتنسيق المباشر مع إدارة الوكالة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
