import React from 'react';
import { Phone, MessageCircle, Instagram, Facebook, Twitter, MapPin, Clock, ShieldCheck, Headphones, ArrowLeft } from 'lucide-react';
import { AGENCY_CONFIG, getWhatsAppUrl } from '../data/agencyData';

interface ContactSectionProps {
  initialService?: string;
  initialDestination?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService,
  initialDestination,
}) => {
  // Generate customized direct WhatsApp link
  let defaultMsg = 'مرحبًا وكالة الصادق للسفريات والسياحة، أود التحدث مع مستشار السفر للاستفسار وطلب تسعيرة لخدمات السفر والحجوزات.';
  if (initialService && initialDestination) {
    defaultMsg = `مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن ${initialService} إلى ${initialDestination}.`;
  } else if (initialService) {
    defaultMsg = `مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن خدمة ${initialService}.`;
  } else if (initialDestination) {
    defaultMsg = `مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار والحصول على تفاصيل وإجراءات تأشيرة السفر إلى ${initialDestination}.`;
  }

  const customWhatsAppUrl = getWhatsAppUrl(defaultMsg);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-28 bg-[#F5F6F7]/60 border-t border-[#E7E7E7]"
    >
      <div className="max-w-[1360px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E7E7E7] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F28A2E]" />
            <span className="text-xs md:text-sm font-medium text-[#0A0A0A]">تواصل مباشر واستشارة</span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0A0A0A] tracking-tight leading-tight mb-4"
          >
            تواصل معنا فورًا
          </h2>
          <p className="text-base md:text-lg text-[#555555] leading-relaxed">
            فريق وكالة الصادق للسفريات والسياحة في خدمتكم للإجابة عن كافة الاستفسارات، وإصدار التأشيرات، وترتيب الحجوزات بكل سرعة وموثوقية.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Direct WhatsApp Card (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0A0A0A] text-white rounded-[24px] p-8 md:p-12 flex flex-col justify-between shadow-sm border border-black/10">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
                  <MessageCircle size={30} />
                </div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white/90">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  خدمة عملاء متاحة
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                محادثة مباشرة عبر واتساب
              </h3>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                تحدث مع مستشار السفر في وكالة الصادق مباشرة للحصول على عروض الأسعار، متطلبات التأشيرة، تذاكر الطيران، وحجوزات العمرة دون الحاجة لملء أي نماذج.
              </p>

              {/* Service Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <ShieldCheck size={20} className="text-[#F28A2E] shrink-0" />
                  <span className="text-sm text-white/90 font-medium">تأشيرات سريعة وموثوقة</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <Headphones size={20} className="text-[#1261D6] shrink-0" />
                  <span className="text-sm text-white/90 font-medium">متابعة دقيقة طوال الرحلة</span>
                </div>
              </div>
            </div>

            {/* Direct Action Button */}
            <a
              href={customWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-main-whatsapp-btn"
              className="w-full sm:w-auto h-14 px-8 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-base transition-all duration-200 flex items-center justify-center gap-3 self-start cursor-pointer"
            >
              <span>ابدأ المحادثة عبر واتساب الآن</span>
              <ArrowLeft size={18} className="rtl:rotate-0" />
            </a>
          </div>

          {/* Contact Details & Channels (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Phone & Working Hours */}
            <div className="bg-white rounded-[24px] p-8 border border-[#E7E7E7] shadow-sm">
              <h4 className="text-lg font-semibold text-[#0A0A0A] mb-6">
                قنوات الاتصال المباشر
              </h4>

              <div className="space-y-4 text-sm">
                {/* Phone Call */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-[#F5F6F7]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#1261D6]/10 text-[#1261D6] flex items-center justify-center">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="block text-xs text-[#777777]">الاتصال الهاتفي</span>
                      <span className="text-sm font-semibold text-[#0A0A0A]">خدمة العملاء</span>
                    </div>
                  </div>
                  <a
                    href={`tel:${AGENCY_CONFIG.phoneClean}`}
                    className="font-bold text-[#1261D6] hover:underline"
                    dir="ltr"
                  >
                    {AGENCY_CONFIG.phone}
                  </a>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F5F6F7]">
                  <div className="w-9 h-9 rounded-lg bg-[#F28A2E]/10 text-[#F28A2E] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-[#777777]">أوقات العمل</span>
                    <span className="text-sm font-medium text-[#0A0A0A]">السبت — الخميس: 8:00 ص — 9:00 م</span>
                    <span className="block text-xs text-[#888888] mt-0.5">متاحون للرد على رسائل واتساب طوال اليوم</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F5F6F7]">
                  <div className="w-9 h-9 rounded-lg bg-black/5 text-[#0A0A0A] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-[#777777]">المقر الرئيسي</span>
                    <span className="text-sm font-medium text-[#0A0A0A] leading-relaxed">{AGENCY_CONFIG.address.fullText}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="bg-white rounded-[24px] p-6 border border-[#E7E7E7] shadow-sm">
              <h4 className="text-sm font-semibold text-[#0A0A0A] mb-4">
                تابعونا وتواصلوا معنا عبر المنصات
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={AGENCY_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F5F6F7] hover:bg-[#E1306C]/10 text-xs font-medium text-[#0A0A0A] hover:text-[#E1306C] border border-[#E7E7E7] transition-colors"
                >
                  <Instagram size={15} className="text-[#E1306C]" />
                  <span>{AGENCY_CONFIG.instagram}</span>
                </a>

                <a
                  href={AGENCY_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F5F6F7] hover:bg-[#1877F2]/10 text-xs font-medium text-[#0A0A0A] hover:text-[#1877F2] border border-[#E7E7E7] transition-colors"
                >
                  <Facebook size={15} className="text-[#1877F2]" />
                  <span>فيسبوك</span>
                </a>

                <a
                  href={AGENCY_CONFIG.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F5F6F7] hover:bg-black/10 text-xs font-medium text-[#0A0A0A] border border-[#E7E7E7] transition-colors"
                >
                  <Twitter size={15} className="text-[#0A0A0A]" />
                  <span>منصة X</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
