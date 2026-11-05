'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Maximize2, Ruler, CheckCircle2, X } from 'lucide-react';
import { PROJECTS, ProjectCaseStudy } from '@/lib/fence-data';

interface PortfolioSectionProps {
  onOpenEstimate: () => void;
}

export default function PortfolioSection({ onOpenEstimate }: PortfolioSectionProps) {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  const categories = [
    'All',
    'Vinyl / PVC',
    'Wood Privacy',
    'Aluminum & Ornamental',
    'Chain Link',
    'Farm & Decks',
  ];

  const filteredProjects =
    activeTab === 'All'
      ? PROJECTS
      : PROJECTS.filter((proj) => proj.category === activeTab);

  return (
    <section id="case-studies" className="py-20 sm:py-28 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header matching reference mockup dark theme */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-700 bg-slate-900 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>REAL PROJECTS, REAL RESULTS</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            OUR FENCE INSTALLATION CASE STUDIES
          </h2>

          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Browse authentic local fence builds completed by Quality Fence Works LLC across Northern Virginia. Every project is built to the highest architectural standards.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                activeTab === cat
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                {/* Linear Footage Badge */}
                <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5 text-amber-400" />
                  <span>{project.linearFeet}</span>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-950/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-amber-400" />
                </div>

                {/* Location at bottom of photo */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-amber-300 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-white mt-1 group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Turnaround: {project.duration}</span>
                  <span className="text-amber-400 font-bold group-hover:underline">
                    View Specs & Photos →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Estimate Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-900/60 to-slate-900 border border-blue-800/40 text-center max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
            Want A Similar Quality Fence Built On Your Property?
          </h3>
          <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto">
            Antonio will come to your home, measure the exact linear footage, and provide an accurate written proposal with no sales pressure.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenEstimate}
              className="px-8 py-3.5 rounded-full bg-amber-500 text-slate-950 font-heading font-bold text-sm tracking-wider uppercase hover:bg-amber-400 shadow-md"
            >
              REQUEST YOUR FREE ESTIMATE
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox / Case Study Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 text-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative my-8">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* High-res Image Preview */}
            <div className="relative aspect-16/10 w-full bg-black">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-md bg-amber-500 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {selectedProject.location}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Ruler className="w-3.5 h-3.5 text-amber-400" />
                  {selectedProject.linearFeet}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white mt-1">
                {selectedProject.title}
              </h3>

              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Highlights */}
              <div className="mt-5 pt-4 border-t border-slate-800">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                  Key Construction Specs & Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Project Duration: <strong className="text-white">{selectedProject.duration}</strong>
                </span>

                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenEstimate();
                  }}
                  className="px-6 py-2.5 rounded-full bg-amber-500 text-slate-950 font-heading font-bold text-xs tracking-wider uppercase hover:bg-amber-400"
                >
                  GET QUOTE FOR THIS STYLE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
