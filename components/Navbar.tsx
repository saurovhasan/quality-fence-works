'use client';

import React, { useState } from 'react';
import { Phone, Shield, Menu, X, ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/fence-data';

interface NavbarProps {
  onOpenEstimate: () => void;
}

export default function Navbar({ onOpenEstimate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* Top micro bar for licensed contractor credentials */}
      <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Licensed & Fully Insured Contractor</span>
            </span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="hidden sm:flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Serving All Northern Virginia & DMV</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <Clock className="w-3 h-3 text-amber-400" />
              <span>Mon-Sat: 7AM - 7PM</span>
            </span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-amber-400 hover:text-amber-300 transition-colors hidden sm:inline"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar (matching reference image: Left CTA button, Center Shield Logo, Right Phone button) */}
      <div className="bg-white border-b border-slate-200 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left Action Button (Schedule a Service) */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold tracking-wider uppercase hover:bg-slate-800 shadow-sm transition-all"
            >
              <span>SCHEDULE A SERVICE</span>
              <ArrowUpRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Center Brand Logo (Quality Fence Works LLC with Shield badge) */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-900 border-2 border-amber-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-slate-900 uppercase">
                  QUALITY FENCE
                </span>
                <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-amber-600 uppercase">
                  WORKS
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-medium text-slate-500 tracking-wider uppercase">
                LLC · FENCE · DECK · PATIO
              </span>
            </div>
          </a>

          {/* Right Phone Call Button */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full bg-amber-500 text-slate-950 font-heading font-bold text-sm sm:text-base tracking-wide hover:bg-amber-400 shadow-md hover:shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Sub Navigation Bar (Dark banner matching reference design: Home, About Us, Our Services, etc.) */}
      <nav className="hidden lg:block bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="#" className="py-3 text-amber-400 border-b-2 border-amber-400 font-semibold tracking-wide">
              Home
            </a>
            <a href="#about" className="py-3 text-slate-300 hover:text-white transition-colors tracking-wide">
              About Us
            </a>
            <a href="#services" className="py-3 text-slate-300 hover:text-white transition-colors tracking-wide">
              Our Services
            </a>
            <a href="#process" className="py-3 text-slate-300 hover:text-white transition-colors tracking-wide">
              Installation Process
            </a>
            <a href="#case-studies" className="py-3 text-slate-300 hover:text-white transition-colors tracking-wide">
              Our Projects
            </a>
            <a href="#calculator" className="py-3 text-slate-300 hover:text-white transition-colors tracking-wide">
              Cost Estimator
            </a>
            <a href="#service-areas" className="py-3 text-slate-300 hover:text-white transition-colors tracking-wide">
              Service Areas
            </a>
            <a href="#testimonials" className="py-3 text-slate-300 hover:text-white transition-colors tracking-wide">
              Reviews
            </a>
            <a href="#contact" className="py-3 text-slate-300 hover:text-white transition-colors tracking-wide">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
            <span>● Free On-Site Estimates In 24 Hours</span>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 text-white border-b border-slate-800 px-6 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3 font-medium text-sm">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg text-amber-400 bg-slate-800/60 font-semibold"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg text-slate-200 hover:bg-slate-800/40"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg text-slate-200 hover:bg-slate-800/40"
            >
              Our Services (PVC, Wood, Aluminum, Chain Link, Decks)
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg text-slate-200 hover:bg-slate-800/40"
            >
              Step-by-Step Installation Process
            </a>
            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg text-slate-200 hover:bg-slate-800/40"
            >
              Our Projects & Case Studies
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg text-slate-200 hover:bg-slate-800/40"
            >
              Fence Cost Estimator
            </a>
            <a
              href="#service-areas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg text-slate-200 hover:bg-slate-800/40"
            >
              Service Areas (Fairfax, Loudoun, Prince William)
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg text-slate-200 hover:bg-slate-800/40"
            >
              Customer Reviews
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg text-slate-200 hover:bg-slate-800/40"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimate();
              }}
              className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-heading font-bold text-center tracking-wider uppercase hover:bg-amber-400"
            >
              SCHEDULE FREE ON-SITE ESTIMATE ↗
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full py-2.5 rounded-xl bg-slate-800 text-white font-medium text-sm text-center flex items-center justify-center gap-2 hover:bg-slate-700"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Antonio: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
