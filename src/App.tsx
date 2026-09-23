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
import { AGENCY_CONFIG } from './data/agencyData';

export default function App() {
  const handleOpenBooking = (service?: string, destination?: string) => {
    let msg = 'مرحبًا وكالة الصادق للسفريات والسياحة، أود الاستفسار والحجز';
    if (service && destination) {
      msg += ` بخصوص خدمة ${service} إلى ${destination}.`;
    } else if (service) {
      msg += ` بخصوص ${service}.`;
    } else if (destination) {
      msg += ` بخصوص السفر إلى ${destination}.`;
    } else {
      msg += ' وترتيبات السفر.';
    }
    const url = `https://wa.me/${AGENCY_CONFIG.phoneClean}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSelectService = (serviceTitle: string) => {
    handleOpenBooking(serviceTitle);
  };

  const handleSelectDestination = (destName: string) => {
    handleOpenBooking('تأشيرة', destName);
  };

  const handleSelectPackage = (pkgTitle: string) => {
    handleOpenBooking(pkgTitle);
  };

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] selection:bg-[#F28A2E]/20 selection:text-[#0A0A0A] flex flex-col justify-between overflow-x-hidden">
      {/* Floating Capsule Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Area following exact visual structure */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero with huge white space, bold typography & 2 large visual cards */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Services Section (6 cards grid) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 3. Visa & Destinations Section */}
        <VisaDestinationsSection onSelectDestination={handleSelectDestination} />

        {/* 4. Large Umrah Editorial Section */}
        <UmrahSection onOpenBooking={() => handleOpenBooking('عمرة')} />

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
        <FinalCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
