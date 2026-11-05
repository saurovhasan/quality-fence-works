'use client';

import React from 'react';
import { MapPin, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SERVICE_AREAS, COMPANY_INFO } from '@/lib/fence-data';

interface ServiceAreasProps {
  onOpenEstimate: () => void;
}

export default function ServiceAreasSection({ onOpenEstimate }: ServiceAreasProps) {
  return (
    <section id="service-areas" className="py-16 sm:py-24 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-300 bg-white text-slate-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>LOCAL COVERAGE</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-slate-900">
            PROUDLY SERVING ALL OF NORTHERN VIRGINIA
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            We are locally based in Northern VA and know every county’s building codes, frost line requirements, and neighborhood HOA architectural rules.
          </p>
        </div>

        {/* Counties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-heading font-bold text-base mb-4">
                  <MapPin className="w-5 h-5 text-blue-700" />
                </div>

                <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-slate-900 mb-2">
                  {area.county}
                </h3>

                <p className="text-xs text-slate-500 mb-4">
                  Prompt on-site estimates & full HOA compliance:
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {area.cities.map((city, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Active crews in this area</span>
              </div>
            </div>
          ))}
        </div>

        {/* Local Reassurance Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-heading text-lg sm:text-xl font-bold uppercase text-slate-900">
                Live in an HOA Community or Unsure of Your Property Boundary?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                We provide custom HOA architectural submission packets, property plat reviews, and free Miss Utility 811 marking on every single job.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenEstimate}
            className="w-full md:w-auto shrink-0 px-6 py-3 rounded-full bg-slate-900 text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
          >
            <span>SCHEDULE FREE SITE VISIT</span>
            <ArrowUpRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
