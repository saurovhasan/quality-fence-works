'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Phone, CheckCircle2 } from 'lucide-react';
import { INSTALLATION_STEPS, COMPANY_INFO } from '@/lib/fence-data';

interface InstallationProcessSectionProps {
  onOpenEstimate: () => void;
}

export default function InstallationProcessSection({
  onOpenEstimate,
}: InstallationProcessSectionProps) {
  return (
    <section id="process" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline, subtext, TALK TO A SPECIALIST button, and installation photo */}
          <div className="lg:col-span-6 flex flex-col items-start lg:sticky lg:top-28">
            {/* Tag / Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-300 bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>HOW IT WORKS</span>
            </div>

            {/* Heading matching reference mockup */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-slate-900 leading-[1.1]">
              STEP-BY-STEP FENCE INSTALLATION PROCESS
            </h2>

            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
              We make the fence buying and construction process seamless and worry-free. From checking your property stakes to deep concrete post footings, we treat your home like our own.
            </p>

            {/* CTA Button matching reference mockup */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenEstimate}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-500 text-slate-950 font-heading font-bold text-sm tracking-wider uppercase hover:bg-amber-400 shadow-md hover:shadow-lg transition-all"
              >
                <span>TALK TO A SPECIALIST</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-950"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Installation Process Photo matching reference mockup */}
            <div className="mt-8 w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3 relative bg-slate-100">
              <Image
                src="/assets/images/fence_installation_process_1793908025426.jpg"
                alt="Quality Fence Works crew setting plumb wooden fence post in concrete footing"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 550px"
              />
              <div className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10">
                Precision spirit-level plumb alignment on every post
              </div>
            </div>
          </div>

          {/* Right Column: Step-by-Step sequence with amber STEP 01 badges */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {INSTALLATION_STEPS.map((item, index) => (
              <div
                key={index}
                className="relative bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-slate-300 transition-all group"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  {/* Step Amber Pill Tag */}
                  <span className="inline-block px-3 py-1 rounded-md bg-amber-500 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider">
                    {item.step}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    Step {index + 1} of 5
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors mt-2">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>

                {/* Key Detail Highlight */}
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
