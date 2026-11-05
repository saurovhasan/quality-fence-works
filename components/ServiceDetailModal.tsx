'use client';

import React from 'react';
import Image from 'next/image';
import { X, CheckCircle2, ShieldCheck, Clock, ArrowUpRight, Phone } from 'lucide-react';
import { ServiceItem, COMPANY_INFO } from '@/lib/fence-data';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenEstimate: () => void;
}

export default function ServiceDetailModal({
  service,
  onClose,
  onOpenEstimate,
}: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-slate-200 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors shadow-md"
          aria-label="Close service modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-16/9 w-full bg-slate-900">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-slate-950/80 px-2.5 py-1 rounded-md border border-white/10 inline-block mb-1">
              Quality Fence Works LLC
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200">{service.tagline}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {service.description}
          </p>

          {/* Quick Specs Badges */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-500 block">
                  Warranty Protection
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  {service.warranty}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-500 block">
                  Expected Lifespan
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  {service.lifespan}
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Features List */}
          <div>
            <h4 className="font-heading text-base font-bold uppercase tracking-wider text-slate-900 mb-3">
              What Is Included In Every Installation:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="text-xs font-semibold text-slate-700 hover:text-slate-950 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>Questions? Call Antonio: {COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenEstimate();
              }}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-amber-500 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider hover:bg-amber-400 shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>GET FREE QUOTE ON THIS STYLE</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
