'use client';

import React from 'react';
import { Shield, Phone, Mail, MapPin, Clock, ArrowUpRight, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/fence-data';

interface FooterProps {
  onOpenEstimate: () => void;
}

export default function Footer({ onOpenEstimate }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      {/* Top Banner CTA Strip */}
      <div className="bg-blue-800 py-6 px-4 sm:px-8 border-b border-blue-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
              Ready To Secure & Beautify Your Northern Virginia Property?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100">
              Get an accurate, free on-site estimate from Antonio with zero pressure.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenEstimate}
              className="px-6 py-3 rounded-full bg-amber-500 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider hover:bg-amber-400 shadow-md transition-all"
            >
              REQUEST FREE ESTIMATE ↗
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-6 py-3 rounded-full bg-white text-slate-900 font-heading font-bold text-xs tracking-wider hover:bg-slate-100 transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 fill-slate-900" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border-2 border-amber-400 flex items-center justify-center">
                <Shield className="w-6 h-6 text-amber-400" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-heading text-xl font-bold uppercase text-white">
                    QUALITY FENCE
                  </span>
                  <span className="font-heading text-xl font-bold uppercase text-amber-400">
                    WORKS
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 tracking-wider uppercase">
                  LLC · FENCE · DECK · PATIO
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Northern Virginia’s trusted fence, deck, and patio contractor. Handcrafted wooden privacy, low-maintenance PVC, ornamental aluminum, and chain link fencing built with structural integrity.
            </p>

            <div className="pt-2">
              <span className="text-xs text-slate-400 block mb-1">Follow On Social / Threads:</span>
              <a
                href={COMPANY_INFO.threadsProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-amber-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <span>Threads: {COMPANY_INFO.threadsHandle}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-amber-400">
              Fence & Outdoor Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  • PVC & Vinyl Privacy Fencing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  • Custom Wood & Board-on-Board Fences
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  • Black Ornamental Aluminum Fencing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  • Chain Link & Pet Enclosures
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  • Split Rail & Farm Wire Backing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  • Custom Wood & Composite Decks
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  • Fence Post Replacement & Storm Repairs
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-amber-400">
              Service Areas
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Fairfax County, VA</li>
              <li>Loudoun County, VA</li>
              <li>Prince William County, VA</li>
              <li>Ashburn & Leesburg</li>
              <li>Fairfax & Reston</li>
              <li>Manassas & Woodbridge</li>
              <li>Alexandria & Arlington</li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-amber-400">
              Contact Information
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-heading font-bold text-sm tracking-wide">
                  {COMPANY_INFO.phone}
                </span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-start gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Credentials */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Quality Fence Works LLC. All rights reserved. Registered, Licensed & Fully Insured in Virginia.
          </p>

          <div className="flex items-center gap-6">
            <span>• Free On-Site Estimates</span>
            <span>• 100% Workmanship Guarantee</span>
            <span>• HOA Spec Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
