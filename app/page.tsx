'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import InstallationProcessSection from '@/components/InstallationProcessSection';
import PortfolioSection from '@/components/PortfolioSection';
import CostCalculator from '@/components/CostCalculator';
import ServiceAreasSection from '@/components/ServiceAreasSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import EstimateModal from '@/components/EstimateModal';
import ServiceDetailModal from '@/components/ServiceDetailModal';
import { ServiceItem, COMPANY_INFO } from '@/lib/fence-data';
import { Phone } from 'lucide-react';

export default function Home() {
  const [estimateModalOpen, setEstimateModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [estimateDetails, setEstimateDetails] = useState<{
    material?: string;
    footage?: number;
    height?: string;
    singleGates?: number;
    doubleGates?: number;
    estimatedMin?: number;
    estimatedMax?: number;
  } | null>(null);

  const handleOpenEstimate = (prefillData?: any) => {
    if (prefillData && prefillData.material) {
      setEstimateDetails(prefillData);
    } else {
      setEstimateDetails(null);
    }
    setEstimateModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleCalculatorLockIn = (data: any) => {
    setEstimateDetails(data);
    setEstimateModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Navigation matching reference design */}
      <Navbar onOpenEstimate={() => handleOpenEstimate()} />

      {/* Hero Section matching reference design: deep blue, stars, condensed heading, dual CTAs, angled chevron cut, craftsman image */}
      <HeroSection onOpenEstimate={() => handleOpenEstimate()} />

      {/* About Us section matching reference design: 15+ years badge, craftsman photo, bullet checks, GET A FREE QUOTE */}
      <AboutSection onOpenEstimate={() => handleOpenEstimate()} />

      {/* Services Section matching reference design: 3x2 grid, photos, icons, LEARN MORE, BOOK SERVICE NEAR YOU */}
      <ServicesSection
        onSelectService={handleSelectService}
        onOpenEstimate={() => handleOpenEstimate()}
      />

      {/* Step-by-Step Installation Process matching reference design: left headline, photo, right STEP 01-05 sequence */}
      <InstallationProcessSection onOpenEstimate={() => handleOpenEstimate()} />

      {/* Portfolio / Real Projects Case Studies matching reference design dark section */}
      <PortfolioSection onOpenEstimate={() => handleOpenEstimate()} />

      {/* Interactive Turnkey Cost Calculator */}
      <CostCalculator onEstimateLocked={handleCalculatorLockIn} />

      {/* Service Areas (Fairfax, Loudoun, Prince William, etc.) */}
      <ServiceAreasSection onOpenEstimate={() => handleOpenEstimate()} />

      {/* Customer Testimonials & Reviews */}
      <TestimonialsSection />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Contact & Free Estimate Form Section */}
      <ContactSection />

      {/* Footer with credentials & Threads profile */}
      <Footer onOpenEstimate={() => handleOpenEstimate()} />

      {/* Floating Call Button on Mobile */}
      <div className="fixed bottom-4 right-4 z-40 sm:hidden">
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-amber-500 text-slate-950 font-heading font-bold text-sm shadow-2xl border-2 border-slate-950/20 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 fill-slate-950" />
          <span>Call: {COMPANY_INFO.phone}</span>
        </a>
      </div>

      {/* Estimate Modal */}
      <EstimateModal
        isOpen={estimateModalOpen}
        onClose={() => setEstimateModalOpen(false)}
        initialData={estimateDetails}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenEstimate={() => handleOpenEstimate()}
      />
    </main>
  );
}
