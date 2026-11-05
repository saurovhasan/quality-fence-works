'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, ArrowUpRight, Phone, Award, Shield, ThumbsUp } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/fence-data';

interface AboutSectionProps {
  onOpenEstimate: () => void;
}

export default function AboutSection({ onOpenEstimate }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Craftsman photo with dark 25+ Years Experience Badge overlay */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3 sm:aspect-4/3 w-full bg-slate-100">
              <Image
                src="/assets/images/fence_carpenter_about_1793908006576.jpg"
                alt="Quality Fence Works LLC skilled craftsman staining and finishing a cedar fence"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 600px"
              />

              {/* Overlay Stat Badge matching reference mockup (25+ Years of Fence Service Done Right) */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-slate-950/95 text-white p-4 sm:p-6 rounded-2xl shadow-2xl border border-slate-700/80 max-w-[210px] backdrop-blur-md">
                <div className="font-heading text-4xl sm:text-5xl font-bold text-amber-400 tracking-tight leading-none mb-1">
                  15+
                </div>
                <div className="font-heading text-base sm:text-lg font-bold uppercase tracking-wide leading-tight text-white">
                  Years of Fence & Deck Craft Done Right
                </div>
                <div className="mt-2 pt-2 border-t border-slate-800 text-[11px] text-slate-300 font-medium">
                  Thousands of linear feet installed in Northern VA
                </div>
              </div>

              {/* Bottom Right Quality Seal */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200 shadow-md flex items-center gap-2">
                <ThumbsUp className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  100% Guaranteed Work
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Value Propositions matching reference design */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Tag / Kicker Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-300 bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>ABOUT US</span>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-slate-900 leading-[1.1]">
              YOUR LOCAL EXPERTS IN PROFESSIONAL FENCING
            </h2>

            {/* Body Prose */}
            <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed">
              Quality Fence Works LLC is dedicated to delivering high-caliber fencing, deck construction, and outdoor solutions for residential and commercial property owners throughout Northern Virginia.
            </p>

            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Founded and managed by Antonio, our approach is human-centric and transparent. No high-pressure sales reps and no outsourced sub-crews. We inspect your property, verify your local HOA and utility boundaries, and build every post with structural integrity and clean craftsmanship.
            </p>

            {/* Feature Checkmarks matching reference mockup */}
            <div className="mt-6 sm:mt-8 space-y-3.5 w-full">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 fill-amber-500 text-slate-950 stroke-[3]" />
                </div>
                <div>
                  <span className="font-heading font-bold text-slate-900 text-sm sm:text-base uppercase tracking-wide">
                    DURABLE MATERIALS BUILT FOR VIRGINIA WEATHER
                  </span>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Heavy-duty vinyl UV protection and #1 grade treated lumber that resists rot, humidity, and winter frost heave.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 fill-amber-500 text-slate-950 stroke-[3]" />
                </div>
                <div>
                  <span className="font-heading font-bold text-slate-900 text-sm sm:text-base uppercase tracking-wide">
                    CUSTOM FENCE INSTALLATION AND BEST DESIGN
                  </span>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Tailored solutions for tricky hillside slopes, pet containment, swimming pool code safety, and custom privacy gates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 fill-amber-500 text-slate-950 stroke-[3]" />
                </div>
                <div>
                  <span className="font-heading font-bold text-slate-900 text-sm sm:text-base uppercase tracking-wide">
                    SKILLED & EXPERIENCED FENCE CONTRACTORS
                  </span>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Precision post-hole boring, plumb laser leveling, and clean daily job-site cleanup with zero lawn destruction.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 fill-amber-500 text-slate-950 stroke-[3]" />
                </div>
                <div>
                  <span className="font-heading font-bold text-slate-900 text-sm sm:text-base uppercase tracking-wide">
                    HOA APPLICATION & MISS UTILITY (811) ASSISTANCE
                  </span>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    We handle underground utility markings and provide accurate architectural review drawings for fast approval.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenEstimate}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-amber-500 text-slate-950 font-heading font-bold text-base tracking-wider uppercase hover:bg-amber-400 shadow-md hover:shadow-lg transition-all"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-900" />
                <span>Call Antonio Direct: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
