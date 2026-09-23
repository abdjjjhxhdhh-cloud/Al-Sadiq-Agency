/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { VisaDestinationsSection } from './components/VisaDestinationsSection';
import { UmrahSection } from './components/UmrahSection';
import { PackagesSection } from './components/PackagesSection';
import { WhyAlSadeq } from './components/WhyAlSadeq';
import { HowItWorks } from './components/HowItWorks';
import { AboutAndLocation } from './components/AboutAndLocation';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AGENCY_CONFIG, getWhatsAppUrl } from './data/agencyData';

export default function App() {
  const handleOpenBooking = (customMessage?: string) => {
    const msg = customMessage || 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار وحجز ترتيبات السفر.';
    const url = getWhatsAppUrl(msg);
    try {
      const newWin = window.open(url, '_blank', 'noopener,noreferrer');
      if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
        window.location.href = url;
      }
    } catch {
      window.location.href = url;
    }
  };

  const handleSelectService = (serviceTitle: string, customMessage?: string) => {
    const msg = customMessage || `مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن خدمة ${serviceTitle} والحصول على التفاصيل المتاحة.`;
    handleOpenBooking(msg);
  };

  const handleSelectDestination = (destName: string) => {
    const msg = `مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار والحصول على تفاصيل وإجراءات تأشيرة السفر إلى ${destName} والمتطلبات الحالية.`;
    handleOpenBooking(msg);
  };

  const handleSelectPackage = (pkgTitle: string, customMessage?: string) => {
    const msg = customMessage || `مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار عن تفاصيل وحجوزات برامج ${pkgTitle}.`;
    handleOpenBooking(msg);
  };

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] selection:bg-[#F28A2E]/20 selection:text-[#0A0A0A] flex flex-col justify-between overflow-x-hidden">
      {/* Floating Capsule Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Area following exact visual structure */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero with huge white space, bold typography & 2 large visual cards */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Services Section (6 cards grid) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 3. Visa & Destinations Section */}
        <VisaDestinationsSection onSelectDestination={handleSelectDestination} />

        {/* 4. Large Umrah Editorial Section */}
        <UmrahSection onOpenBooking={() => handleOpenBooking('مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار والحصول على تفاصيل أكثر عن برامج العمرة والزيارة المتاحة (التأشيرات، خيارات السكن، وترتيبات النقل).')} />

        {/* 5. Travel Packages (3 large cards) */}
        <PackagesSection onSelectPackage={handleSelectPackage} />

        {/* 6. Why Al-Sadeq (Grounded value points) */}
        <WhyAlSadeq />

        {/* 7. How It Works (Timeline) */}
        <HowItWorks />

        {/* 8. About & Location (Headquarters, Google Maps, Branches) */}
        <AboutAndLocation />

        {/* 9. Direct Contact & WhatsApp Consultation */}
        <ContactSection />

        {/* 10. Large Dark Final CTA */}
        <FinalCTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
