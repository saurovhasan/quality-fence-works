'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/fence-data';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    fenceType: 'PVC & Vinyl Privacy',
    linearFootage: '150 - 250 ft',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contractor Contact & Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-300 bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-slate-900 leading-[1.1]">
              SCHEDULE YOUR FREE ON-SITE ESTIMATE
            </h2>

            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Have questions about your property line, need an HOA spec sheet, or ready to get exact pricing? Contact Antonio directly. We respond promptly and provide itemized, honest proposals.
            </p>

            {/* Direct Contact Cards */}
            <div className="mt-8 space-y-4 w-full">
              {/* Phone Card */}
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-center gap-4 hover:bg-amber-100/80 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 fill-slate-950" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">
                    Call or Text Directly
                  </span>
                  <span className="font-heading font-bold text-xl sm:text-2xl text-slate-900">
                    {COMPANY_INFO.phone}
                  </span>
                  <p className="text-[11px] text-amber-800">
                    Free instant estimates & consultation
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-4 hover:bg-slate-100 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Direct Email
                  </span>
                  <span className="font-semibold text-sm sm:text-base text-slate-900 break-all">
                    {COMPANY_INFO.email}
                  </span>
                  <p className="text-[11px] text-slate-500">
                    Send plat drawings & HOA guidelines
                  </p>
                </div>
              </a>

              {/* Hours & Location */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                  <span><strong>Hours:</strong> Mon - Sat: 7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                  <span><strong>Service Area:</strong> Northern Virginia & Greater DMV</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                  <span><strong>Credentials:</strong> Fully Licensed & Insured Contractor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Free Estimate Submission Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-slate-900">
                  Estimate Request Received!
                </h3>
                <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Antonio will review your project details and reach out at <strong>{formData.phone}</strong> within a few hours to confirm your free on-site visit.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="px-6 py-3 rounded-full bg-amber-500 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider hover:bg-amber-400"
                  >
                    Need Urgent Service? Call {COMPANY_INFO.phone}
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        city: '',
                        fenceType: 'PVC & Vinyl Privacy',
                        linearFootage: '150 - 250 ft',
                        notes: '',
                      });
                    }}
                    className="text-xs text-slate-500 hover:text-slate-900 underline"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-slate-900">
                    Request Your Free On-Site Quote
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out the form below. Zero deposit required to meet on-site.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(703) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      City / Neighborhood in VA
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ashburn, Fairfax, Manassas"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Fence / Project Type
                    </label>
                    <select
                      value={formData.fenceType}
                      onChange={(e) => setFormData({ ...formData, fenceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    >
                      <option>PVC & Vinyl Privacy</option>
                      <option>Pressure-Treated Wood Privacy</option>
                      <option>Cedar Board-on-Board</option>
                      <option>Black Ornamental Aluminum</option>
                      <option>Black Vinyl Chain Link</option>
                      <option>Split Rail & Pet Wire</option>
                      <option>Custom Deck & Stairs</option>
                      <option>Fence Repair / Post Replacement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Approximate Length
                    </label>
                    <select
                      value={formData.linearFootage}
                      onChange={(e) => setFormData({ ...formData, linearFootage: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    >
                      <option>Under 100 Linear Feet</option>
                      <option>100 - 200 Linear Feet (Average Yard)</option>
                      <option>200 - 350 Linear Feet</option>
                      <option>350+ Linear Feet (Large Property)</option>
                      <option>Repair / Gate Only</option>
                      <option>Unsure / Need On-Site Measurement</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Project Notes & Special Requests (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about existing fence removal, HOA requirements, slope conditions, gates needed, or preferred visit days..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-amber-500 text-slate-950 font-heading font-bold text-base tracking-wider uppercase hover:bg-amber-400 shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>REQUEST FREE ON-SITE ESTIMATE</span>
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  🔒 We respect your privacy. No spam. You will be contacted directly by Antonio.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
