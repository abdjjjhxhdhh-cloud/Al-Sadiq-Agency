import React from 'react';
import { MapPin, MessageCircle, Instagram, Facebook, Twitter, ArrowUp, Plane } from 'lucide-react';
import { AGENCY_CONFIG, getWhatsAppUrl } from '../data/agencyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'الخدمات', href: '#services' },
    { label: 'التأشيرات', href: '#destinations' },
    { label: 'العمرة', href: '#umrah' },
    { label: 'الرحلات', href: '#packages' },
    { label: 'عن الوكالة', href: '#about' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#050505] text-white border-t border-white/10 pt-20 pb-12">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-[#F28A2E] border border-white/15">
                  <Plane size={22} className="-rotate-45 text-[#F28A2E]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white tracking-tight">
                    {AGENCY_CONFIG.shortName}
                  </h3>
                  <p className="text-xs text-white/60">
                    {AGENCY_CONFIG.subTitle}
                  </p>
                </div>
              </div>

              <p className="text-[#888888] text-sm leading-relaxed max-w-sm mb-6 font-normal">
                خدمات سفر وتأشيرات وحجوزات وبرامج سياحية من المكلا إلى وجهات متعددة، وفق إجراءات دقيقة ورعاية مستمرة.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={getWhatsAppUrl('مرحبًا وكالة الصادق للسفريات والسياحة، يسعدني التواصل معكم للاستفسار عن خدمات السفر المتوفرة.')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="واتساب"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={AGENCY_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="انستغرام"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <Instagram size={18} />
              </a>
              <a
                href={AGENCY_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="فيسبوك"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <Facebook size={18} />
              </a>
              <a
                href={AGENCY_CONFIG.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="منصة إكس"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <Twitter size={18} />
              </a>
              <a
                href={AGENCY_CONFIG.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="خرائط جوجل"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links (4 Cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">
              روابط سريعة
            </h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {footerLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-white/65 hover:text-white transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Location & Contact Info (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">
              الموقع والتواصل
            </h4>
            <div className="space-y-3 text-xs md:text-sm text-white/65 leading-relaxed">
              <p className="text-white/90 font-medium">
                {AGENCY_CONFIG.address.city}، {AGENCY_CONFIG.address.governorate}
              </p>
              <p>{AGENCY_CONFIG.address.area}، {AGENCY_CONFIG.address.street}</p>
              <p>{AGENCY_CONFIG.address.landmark}</p>
              <p className="pt-2">
                <a
                  href={`tel:${AGENCY_CONFIG.phoneClean}`}
                  className="text-white hover:text-[#F28A2E] font-medium"
                  dir="ltr"
                >
                  {AGENCY_CONFIG.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <p>© 2026 وكالة الصادق للسفريات والسياحة. جميع الحقوق محفوظة.</p>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
          >
            <span>العودة إلى الأعلى</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
