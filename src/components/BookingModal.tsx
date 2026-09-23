import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { AGENCY_CONFIG, SERVICE_OPTIONS } from '../data/agencyData';
import { BookingFormState } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialDestination?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialDestination,
}) => {
  const [formData, setFormData] = useState<BookingFormState>({
    fullName: '',
    phone: '',
    destination: initialDestination || '',
    serviceType: initialService || 'visa',
    travelDate: '',
    passengersCount: '1',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      // Find matching value or default
      const matched = SERVICE_OPTIONS.find((s) => s.label === initialService || s.value === initialService);
      setFormData((prev) => ({ ...prev, serviceType: matched ? matched.value : 'general' }));
    }
    if (initialDestination) {
      setFormData((prev) => ({ ...prev, destination: initialDestination }));
    }
  }, [initialService, initialDestination]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceLabel =
      SERVICE_OPTIONS.find((s) => s.value === formData.serviceType)?.label || formData.serviceType;
    const waText = encodeURIComponent(
      `مرحبًا وكالة الصادق للسفريات والسياحة،\nأود طلب حجز/استفسار:\n- الاسم: ${formData.fullName}\n- رقم الهاتف: ${formData.phone}\n- نوع الخدمة: ${serviceLabel}\n- الوجهة: ${formData.destination || 'غير محددة'}\n- التاريخ التقريبي: ${formData.travelDate || 'غير محدد'}\n- عدد المسافرين: ${formData.passengersCount}\n- الملاحظات: ${formData.message || 'لا يوجد'}`
    );

    const waLink = `https://wa.me/${AGENCY_CONFIG.phoneClean}?text=${waText}`;
    setSubmitted(true);
    window.open(waLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-[26px] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-[#E7E7E7] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="إغلاق"
          className="absolute top-6 left-6 w-9 h-9 rounded-full bg-[#F5F6F7] hover:bg-[#eaeaea] text-[#0A0A0A] flex items-center justify-center transition-colors"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#1261D6]/10 text-[#1261D6] flex items-center justify-center mb-5">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-semibold text-[#0A0A0A] mb-2">
              طلبك في طريقه إلينا
            </h3>
            <p className="text-[#555555] text-sm max-w-sm mb-6 leading-relaxed">
              تم تحويل رسالتك إلى محادثة واتساب الرسمية لوكالة الصادق للبدء في مراجعة الترتيبات مع الفريق المختص.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="h-11 px-7 rounded-full bg-[#0A0A0A] text-white text-sm font-medium hover:bg-[#1261D6] transition-colors"
            >
              تم
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 pr-2">
              <span className="text-xs font-semibold text-[#F28A2E] block mb-1">
                وكالة الصادق للسفريات والسياحة
              </span>
              <h3 className="text-2xl font-semibold text-[#0A0A0A] tracking-tight">
                ابدأ حجزك أو استفسارك
              </h3>
              <p className="text-xs md:text-sm text-[#666666] mt-1">
                املأ البيانات وسيتواصل معك موظف الحجوزات فورًا
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-right">
              <div>
                <label className="block text-xs font-semibold text-[#0A0A0A] mb-1.5">
                  الاسم الكامل *
                </label>
                <input
                  type="text"
                  required
                  placeholder="اسمك الكريم"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl border border-[#E7E7E7] bg-[#F5F6F7]/50 text-sm focus:outline-none focus:border-[#1261D6] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#0A0A0A] mb-1.5">
                    رقم الهاتف / واتساب *
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    placeholder="+967 7..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#E7E7E7] bg-[#F5F6F7]/50 text-sm text-right focus:outline-none focus:border-[#1261D6] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0A0A0A] mb-1.5">
                    نوع الخدمة
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#E7E7E7] bg-[#F5F6F7]/50 text-sm focus:outline-none focus:border-[#1261D6] focus:bg-white"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#0A0A0A] mb-1.5">
                    الوجهة
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: السعودية، عُمان، الإمارات..."
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#E7E7E7] bg-[#F5F6F7]/50 text-sm focus:outline-none focus:border-[#1261D6] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0A0A0A] mb-1.5">
                    عدد المسافرين
                  </label>
                  <select
                    value={formData.passengersCount}
                    onChange={(e) => setFormData({ ...formData, passengersCount: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#E7E7E7] bg-[#F5F6F7]/50 text-sm focus:outline-none focus:border-[#1261D6] focus:bg-white"
                  >
                    <option value="1">مسافر واحد</option>
                    <option value="2">مسافران (2)</option>
                    <option value="3-5">عائلة صغيرة (3-5)</option>
                    <option value="6+">مجموعة (6+)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0A0A0A] mb-1.5">
                  تفاصيل إضافية (اختياري)
                </label>
                <textarea
                  rows={3}
                  placeholder="أي ملاحظات حول تاريخ السفر أو مستوى الفندق..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-xl border border-[#E7E7E7] bg-[#F5F6F7]/50 text-sm focus:outline-none focus:border-[#1261D6] focus:bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-full bg-[#F28A2E] hover:bg-[#e07b22] text-white font-medium text-sm shadow-[0_4px_16px_rgba(242,138,46,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>إرسال الطلب والتواصل</span>
                <Send size={15} className="rtl:rotate-180" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
