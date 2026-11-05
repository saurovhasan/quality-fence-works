'use client';

import React from 'react';
import { Phone, ArrowUpRight, CheckCircle2, Star, ShieldCheck, Award } from 'lucide-react';
import Image from 'next/image';
import { COMPANY_INFO } from '@/lib/fence-data';

interface HeroSectionProps {
  onOpenEstimate: () => void;
}

export default function HeroSection({ onOpenEstimate }: HeroSectionProps) {
  return (
    <section className="relative w-full bg-slate-900 overflow-hidden">
      {/* Deep Royal Contractor Blue Hero Background with Angled Bottom Chevron Cut */}
      <div className="relative bg-gradient-to-b from-blue-700 via-blue-800 to-blue-900 text-white pt-10 sm:pt-16 pb-24 sm:pb-36 px-4 sm:px-8 hero-chevron-bottom">
        {/* Subtle geometric grid background pattern for contractor feel */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center z-10">
          {/* Top Rating Badges Row (Google 4.9, Angi 4.8, Facebook 4.9) */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8 text-xs sm:text-sm">
            {/* Google Rating */}
            <div className="flex items-center gap-2 bg-blue-950/40 backdrop-blur-xs border border-white/15 px-3 py-1.5 rounded-full">
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center font-bold text-xs text-blue-600 shadow-xs">
                G
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-white ml-1">4.9 Rating</span>
              </div>
            </div>

            {/* HomeAdvisor / BBB Rating */}
            <div className="flex items-center gap-2 bg-blue-950/40 backdrop-blur-xs border border-white/15 px-3 py-1.5 rounded-full">
              <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center font-bold text-xs text-slate-950 shadow-xs">
                ★
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-white ml-1">4.8 Rating</span>
              </div>
            </div>

            {/* Facebook Rating */}
            <div className="flex items-center gap-2 bg-blue-950/40 backdrop-blur-xs border border-white/15 px-3 py-1.5 rounded-full">
              <div className="w-5 h-5 rounded-full bg-[#1877F2] flex items-center justify-center font-bold text-xs text-white shadow-xs">
                f
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-white ml-1">4.9 Rating</span>
              </div>
            </div>
          </div>

          {/* Main Headline (Bold, uppercase condensed as in reference design) */}
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase max-w-4xl leading-[1.05] drop-shadow-md">
            PREMIUM FENCE & DECK SOLUTIONS FOR NORTHERN VIRGINIA HOMES AND BUSINESSES
          </h1>

          {/* Subheading / Value Proposition */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl font-normal leading-relaxed">
            Locally owned & operated by Antonio. Specializing in durable PVC/vinyl privacy, custom cedar wood, rust-proof ornamental aluminum, chain link, and outdoor decks built to last.
          </p>

          {/* Trust Checkmarks Row */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-blue-50">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Licensed & Fully Insured</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>100% Free On-Site Estimates</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Family Owned & Operated</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Expert Craftsmanship Guarantee</span>
            </span>
          </div>

          {/* Dual Action Buttons matching reference design */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenEstimate}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-slate-950 font-heading font-bold text-base sm:text-lg tracking-wider uppercase hover:bg-amber-400 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>GET FREE ESTIMATE</span>
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-slate-900 font-heading font-bold text-base sm:text-lg tracking-wider hover:bg-slate-100 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-5 h-5 fill-slate-900 text-slate-900" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Craftsman Image Section (Framed right underneath the angled blue chevron) */}
      <div className="relative -mt-16 sm:-mt-24 max-w-5xl mx-auto px-4 sm:px-8 z-20">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white bg-white group">
          <div className="relative aspect-16/9 sm:aspect-16/9 w-full overflow-hidden">
            <Image
              src="/assets/images/fence_craftsman_hero_1793907982555.jpg"
              alt="Quality Fence Works LLC professional fence installer building a fence in Northern Virginia"
              fill
              priority
              className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            {/* Subtle bottom gradient for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

            {/* Corner Contractor Trust Badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3 bg-slate-900/90 backdrop-blur-md text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl border border-white/20 shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-heading font-bold text-sm sm:text-base uppercase tracking-wider text-white">
                  REAL QUALITY FENCE WORKS LLC
                </p>
                <p className="text-xs text-amber-300">
                  Northern Virginia · Free Estimates: (703) 856-5215
                </p>
              </div>
            </div>

            {/* Top Right Quick Service Badge */}
            <div className="hidden sm:flex absolute top-4 right-4 items-center gap-2 bg-white/95 backdrop-blur-md text-slate-900 px-4 py-2 rounded-full font-semibold text-xs shadow-md">
              <Award className="w-4 h-4 text-amber-500" />
              <span>100% Quality & Code Compliance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
