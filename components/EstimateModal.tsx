'use client';

import React, { useState, useEffect } from 'react';
import { X, Phone, CheckCircle2, Send, Shield, Calendar, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/fence-data';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    material?: string;
    footage?: number;
    height?: string;
    singleGates?: number;
    doubleGates?: number;
    estimatedMin?: number;
    estimatedMax?: number;
  } | null;
}

export default function EstimateModal({ isOpen, onClose, initialData }: EstimateModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    preferredDate: '',
    notes: '',
  });

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 my-8">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-slate-900">
              Estimate Request Received!
            </h3>

            <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
              Thank you, <strong>{formData.name}</strong>. Antonio has received your request and will call or text you at <strong>{formData.phone}</strong> shortly to confirm your free on-site consultation.
            </p>

            {initialData && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 max-w-md mx-auto text-xs text-left space-y-1 text-slate-700">
                <p className="font-bold text-slate-900 uppercase">Your Estimate Summary:</p>
                <p>• Material: {initialData.material}</p>
                <p>• Estimated Footage: {initialData.footage} Linear Feet ({initialData.height})</p>
                {initialData.estimatedMin && initialData.estimatedMax && (
                  <p className="font-semibold text-blue-700">
                    • Est. Budget Range: ${initialData.estimatedMin.toLocaleString()} - ${initialData.estimatedMax.toLocaleString()}
                  </p>
                )}
              </div>
            )}

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="px-6 py-3 rounded-full bg-amber-500 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider hover:bg-amber-400"
              >
                Call Antonio Directly: {COMPANY_INFO.phone}
              </a>
              <button
                onClick={handleClose}
                className="px-5 py-3 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              <Shield className="w-4 h-4 text-amber-500" />
              <span>Free On-Site Estimate · Zero Obligation</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-slate-900">
              Schedule Your Free On-Site Consultation
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-5">
              We visit your property in Northern Virginia, inspect elevation and boundary lines, and provide an exact written quote.
            </p>

            {/* If initialData is present from calculator */}
            {initialData && (
              <div className="mb-5 p-3.5 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-slate-800 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <strong className="text-slate-950 font-heading text-sm uppercase block">
                    Calculated Estimate: {initialData.material}
                  </strong>
                  <span>
                    {initialData.footage} ft · {initialData.height} · {initialData.singleGates} Gate(s)
                  </span>
                </div>
                {initialData.estimatedMin && initialData.estimatedMax && (
                  <div className="font-heading font-bold text-base text-blue-800">
                    ${initialData.estimatedMin.toLocaleString()} – ${initialData.estimatedMax.toLocaleString()}
                  </div>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(703) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email (for written proposal)
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    City / Neighborhood in VA
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ashburn, Fairfax, Leesburg"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Preferred Visit Day / Timeframe
                </label>
                <input
                  type="text"
                  placeholder="e.g. This Saturday morning, or Weekday after 4pm"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Additional Notes (HOA, Old Fence Tear-out, etc.)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us any details about existing fence, dogs to contain, slope, or gates..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-amber-500 text-slate-950 font-heading font-bold text-base tracking-wider uppercase hover:bg-amber-400 shadow-md transition-all flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4" />
                <span>CONFIRM FREE ON-SITE ESTIMATE</span>
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Direct Hotline:</span>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
