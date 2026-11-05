'use client';

import React from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  ShieldCheck,
  TreePine,
  Layers,
  Wrench,
  Hammer,
  Maximize2,
  Check,
} from 'lucide-react';
import { SERVICES, ServiceItem } from '@/lib/fence-data';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenEstimate: () => void;
}

export default function ServicesSection({
  onSelectService,
  onOpenEstimate,
}: ServicesSectionProps) {
  // Service category icons
  const getIcon = (id: string) => {
    switch (id) {
      case 'vinyl-fence':
        return <Layers className="w-5 h-5 text-amber-500" />;
      case 'wood-fence':
        return <TreePine className="w-5 h-5 text-amber-500" />;
      case 'aluminum-fence':
        return <ShieldCheck className="w-5 h-5 text-amber-500" />;
      case 'chain-link':
        return <Maximize2 className="w-5 h-5 text-amber-500" />;
      case 'decks-patios':
        return <Hammer className="w-5 h-5 text-amber-500" />;
      case 'fence-repairs':
      default:
        return <Wrench className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-100/70 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header matching reference mockup */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-300 bg-white text-slate-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>SERVICES WE PROVIDE</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-slate-900">
            PROFESSIONAL FENCE & OUTDOOR SERVICES
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            From complete perimeter installations to emergency post repairs and custom backyard decks, Quality Fence Works LLC builds with superior materials and time-tested structural techniques.
          </p>
        </div>

        {/* 6 Services Grid (3x2 layout as in reference design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Card Photo */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Popular or Specialty Badge */}
                {service.popular && (
                  <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                    Most Popular
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Icon & Title Row */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                      {getIcon(service.id)}
                    </div>
                    <div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-amber-700 font-medium">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Body description */}
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Top Features */}
                  <div className="space-y-1.5 mb-5 border-t border-slate-100 pt-3">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button: LEARN MORE ↗ matching reference mockup */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    {service.lifespan}
                  </span>
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-slate-900 uppercase tracking-wider hover:text-amber-600 transition-colors group/btn py-1"
                  >
                    <span>LEARN MORE</span>
                    <ArrowUpRight className="w-4 h-4 text-amber-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button: BOOK SERVICE NEAR YOU ↗ matching reference mockup */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            onClick={onOpenEstimate}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-slate-950 font-heading font-bold text-base tracking-wider uppercase hover:bg-amber-400 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <span>BOOK SERVICE NEAR YOU</span>
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </button>
          <p className="mt-2 text-xs text-slate-500">
            Free on-site consultation across Fairfax, Loudoun & Prince William counties
          </p>
        </div>
      </div>
    </section>
  );
}
