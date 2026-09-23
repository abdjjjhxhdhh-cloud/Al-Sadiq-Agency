import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpLeft, Plane } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface NavbarProps {
  onOpenBooking: (serviceType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current section for active indicator
      const sections = ['services', 'destinations', 'umrah', 'packages', 'about', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero', id: 'hero' },
    { label: 'خدماتنا', href: '#services', id: 'services' },
    { label: 'الوجهات', href: '#destinations', id: 'destinations' },
    { label: 'العمرة', href: '#umrah', id: 'umrah' },
    { label: 'الرحلات', href: '#packages', id: 'packages' },
    { label: 'عن الصادق', href: '#about', id: 'about' },
    { label: 'تواصل معنا', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        id="navbar-container"
        className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 md:px-6 pt-5 pointer-events-none transition-all duration-300"
      >
        <nav
          id="main-nav-capsule"
          aria-label="التنقل الرئيسي"
          className={`pointer-events-auto w-full max-w-[1360px] h-[68px] md:h-[76px] bg-[#0A0A0A]/70 backdrop-blur-xl backdrop-saturate-150 text-white rounded-[40px] px-4 md:px-7 flex items-center justify-between shadow-[0_12px_36px_rgba(0,0,0,0.25)] border border-white/15 transition-all duration-300 ${
            scrolled ? 'bg-[#0A0A0A]/85 backdrop-blur-2xl shadow-[0_16px_44px_rgba(0,0,0,0.35)] border-white/20' : ''
          }`}
        >
          {/* Logo Mark */}
          <a
            href="#hero"
            id="brand-logo"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="وكالة الصادق للسفريات والسياحة"
          >
            <div
              id="brand-mark-icon"
              className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F28A2E] border border-white/15 group-hover:border-[#F28A2E]/60 group-hover:bg-white/15 transition-all duration-300"
            >
              <Plane size={20} className="-rotate-45 text-[#F28A2E]" />
            </div>
            <div className="flex flex-col text-right">
              <span className="text-[17px] md:text-[19px] font-semibold tracking-tight text-white leading-none">
                {AGENCY_CONFIG.shortName}
              </span>
              <span className="text-[10px] md:text-[11px] font-normal text-white/60 tracking-normal mt-1 leading-none">
                {AGENCY_CONFIG.subTitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div id="desktop-nav-links" className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  className={`relative text-[13.5px] font-normal px-3.5 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white font-medium bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-1 right-1/2 translate-x-1/2 w-1 h-1 rounded-full bg-[#F28A2E]"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action Buttons Desktop */}
          <div id="nav-actions-desktop" className="hidden sm:flex items-center gap-2.5">
            <a
              href="#services"
              id="nav-services-btn"
              className="h-10 md:h-11 px-5 text-[13px] md:text-[14px] font-medium text-white bg-[#1261D6] hover:bg-[#0f52b5] rounded-full transition-all duration-200 flex items-center justify-center whitespace-nowrap shadow-sm"
            >
              عرض خدماتنا
            </a>

            <button
              onClick={() => onOpenBooking()}
              id="nav-book-now-btn"
              type="button"
              className="h-10 md:h-11 px-6 text-[13px] md:text-[14px] font-medium text-white bg-[#F28A2E] hover:bg-[#e07b22] active:scale-[0.98] rounded-full shadow-[0_2px_12px_rgba(242,138,46,0.35)] transition-all duration-200 flex items-center justify-center whitespace-nowrap cursor-pointer"
            >
              احجز الآن
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              type="button"
              id="mobile-nav-book-btn"
              className="h-9 px-4 text-xs font-medium text-white bg-[#F28A2E] rounded-full flex items-center justify-center"
            >
              احجز الآن
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              type="button"
              aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
              className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center focus:outline-none"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md pt-28 px-6 flex flex-col justify-between pb-8 sm:hidden animate-fade-in"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-white/90 hover:text-[#F28A2E] py-3 border-b border-white/10 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpLeft size={18} className="text-white/40" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              type="button"
              className="w-full h-12 bg-[#F28A2E] text-white font-medium rounded-full text-center flex items-center justify-center text-sm shadow-md"
            >
              احجز الآن
            </button>
            <a
              href={AGENCY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-12 bg-white/10 text-white font-medium rounded-full text-center flex items-center justify-center text-sm"
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      )}
    </>
  );
};
