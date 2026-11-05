'use client';

import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/fence-data';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-300 bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>REAL HOMEOWNER REVIEWS</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-slate-900">
            TRUSTED BY FAMILIES ACROSS NORTHERN VA
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Read what your neighbors in Ashburn, Fairfax, Leesburg, and Alexandria say about our timeliness, craftsmanship, and transparent pricing.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between relative group"
            >
              <div>
                {/* Header row: stars & verified */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  {t.verified && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Verified Homeowner</span>
                    </span>
                  )}
                </div>

                {/* Service Tag */}
                <span className="inline-block text-xs font-bold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded mb-3">
                  {t.service}
                </span>

                {/* Review Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-base font-bold uppercase tracking-tight text-slate-900">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-500">{t.location}</p>
                </div>
                <span className="text-xs text-slate-400">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-slate-600 text-xs sm:text-sm font-semibold">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-amber-500" />
            <span>Over 1,200+ Fence Projects Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-amber-500" />
            <span>4.9 / 5.0 Average Customer Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-amber-500" />
            <span>Zero Deposit To Schedule On-Site Estimate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
