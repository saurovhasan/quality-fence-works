'use client';

import React, { useState } from 'react';
import { Calculator, ArrowUpRight, CheckCircle2, Shield, Info, DollarSign } from 'lucide-react';

interface CostCalculatorProps {
  onEstimateLocked: (details: {
    material: string;
    footage: number;
    height: string;
    singleGates: number;
    doubleGates: number;
    estimatedMin: number;
    estimatedMax: number;
  }) => void;
}

interface MaterialOption {
  id: string;
  name: string;
  baseMin: number;
  baseMax: number;
  popular?: boolean;
  desc: string;
}

const MATERIALS: MaterialOption[] = [
  {
    id: 'vinyl',
    name: 'PVC & Vinyl Privacy',
    baseMin: 34,
    baseMax: 46,
    popular: true,
    desc: 'Heavy-duty virgin vinyl, zero maintenance, lifetime durability.',
  },
  {
    id: 'wood',
    name: 'Treated Wood Privacy',
    baseMin: 28,
    baseMax: 38,
    popular: true,
    desc: 'Classic #1 pressure-treated pine or cedar, custom on-site raking.',
  },
  {
    id: 'aluminum',
    name: 'Black Ornamental Aluminum',
    baseMin: 40,
    baseMax: 54,
    popular: false,
    desc: 'Rust-proof powder coat, pool code compliant, modern estate elegance.',
  },
  {
    id: 'chainlink',
    name: 'Black Vinyl Chain Link',
    baseMin: 20,
    baseMax: 29,
    popular: false,
    desc: 'Budget-friendly pet security, durable galvanized steel core.',
  },
  {
    id: 'splitrail',
    name: 'Split Rail with Wire Mesh',
    baseMin: 23,
    baseMax: 32,
    popular: false,
    desc: 'Rustic Virginia equestrian look with protective welded wire backing.',
  },
];

export default function CostCalculator({ onEstimateLocked }: CostCalculatorProps) {
  const [selectedMaterial, setSelectedMaterial] = useState<string>('vinyl');
  const [footage, setFootage] = useState<number>(180);
  const [height, setHeight] = useState<string>('6ft');
  const [singleGates, setSingleGates] = useState<number>(1);
  const [doubleGates, setDoubleGates] = useState<number>(0);
  const [slope, setSlope] = useState<string>('gentle');

  const activeMaterial =
    MATERIALS.find((m) => m.id === selectedMaterial) || MATERIALS[0];

  // Height multiplier
  const heightMultiplier = height === '6ft' ? 1.0 : height === '5ft' ? 0.92 : 0.85;

  // Slope adjustment per foot
  const slopeAdjustment = slope === 'steep' ? 5 : slope === 'moderate' ? 2.5 : 0;

  // Gate costs
  const singleGateCost = 280;
  const doubleGateCost = 650;

  // Calculate ranges
  const baseRateMin = (activeMaterial.baseMin + slopeAdjustment) * heightMultiplier;
  const baseRateMax = (activeMaterial.baseMax + slopeAdjustment) * heightMultiplier;

  const fenceCostMin = Math.round(footage * baseRateMin);
  const fenceCostMax = Math.round(footage * baseRateMax);

  const gatesCost = singleGates * singleGateCost + doubleGates * doubleGateCost;

  const totalMin = fenceCostMin + gatesCost;
  const totalMax = fenceCostMax + Math.round(gatesCost * 1.15);

  const handleLockIn = () => {
    onEstimateLocked({
      material: activeMaterial.name,
      footage,
      height,
      singleGates,
      doubleGates,
      estimatedMin: totalMin,
      estimatedMax: totalMax,
    });
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-300 bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-500" />
            <span>INSTANT FENCE PRICING ESTIMATOR</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-slate-900">
            CALCULATE YOUR PROJECT ESTIMATE
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Get an instant, transparent ballpark cost for materials and professional turnkey installation in Northern Virginia. Lock in your numbers to schedule your official on-site verification.
          </p>
        </div>

        {/* Calculator Interactive Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-7 shadow-xs">
            {/* Step 1: Select Material */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                1. Select Fence Material & Style
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {MATERIALS.map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => setSelectedMaterial(mat.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedMaterial === mat.id
                        ? 'border-amber-500 bg-white ring-2 ring-amber-500/20 shadow-sm'
                        : 'border-slate-200 bg-white/70 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-bold text-sm uppercase text-slate-900">
                        {mat.name}
                      </span>
                      {mat.popular && (
                        <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded">
                          POPULAR
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                      {mat.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Linear Footage Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  2. Approximate Linear Footage
                </label>
                <div className="flex items-center gap-1 font-heading text-lg font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                  <span>{footage}</span>
                  <span className="text-xs font-normal text-slate-500">Linear Feet</span>
                </div>
              </div>

              <input
                type="range"
                min="50"
                max="450"
                step="5"
                value={footage}
                onChange={(e) => setFootage(parseInt(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />

              <div className="flex justify-between text-[11px] text-slate-600 mt-1.5 font-medium">
                <span>50 ft (Townhome Patio)</span>
                <span>180 ft (Standard 1/4 Acre Yard)</span>
                <span>350+ ft (Large Lot)</span>
              </div>
            </div>

            {/* Step 3: Height & Slope */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Height */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  3. Fence Height
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['4ft', '5ft', '6ft'].map((h) => (
                    <button
                      key={h}
                      onClick={() => setHeight(h)}
                      className={`py-2 rounded-lg text-xs font-bold transition-all border ${
                        height === h
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {h} {h === '6ft' ? '(Privacy)' : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* Terrain Slope */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  4. Yard Terrain Slope
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'gentle', label: 'Flat / Level' },
                    { id: 'moderate', label: 'Mild Slope' },
                    { id: 'steep', label: 'Steep Hill' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSlope(s.id)}
                      className={`py-2 rounded-lg text-xs font-bold transition-all border ${
                        slope === s.id
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 4: Number of Gates */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                5. Access Gates
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Single Walk Gate */}
                <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">
                      Single Walk Gate (4ft)
                    </span>
                    <span className="text-[10px] text-slate-500">
                      Standard mower/pedestrian access
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSingleGates(Math.max(0, singleGates - 1))}
                      className="w-7 h-7 rounded-md bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="font-heading font-bold text-base w-4 text-center">
                      {singleGates}
                    </span>
                    <button
                      onClick={() => setSingleGates(singleGates + 1)}
                      className="w-7 h-7 rounded-md bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Double Drive Gate */}
                <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">
                      Double Drive Gate (10-12ft)
                    </span>
                    <span className="text-[10px] text-slate-500">
                      Riding mower or trailer access
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setDoubleGates(Math.max(0, doubleGates - 1))}
                      className="w-7 h-7 rounded-md bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="font-heading font-bold text-base w-4 text-center">
                      {doubleGates}
                    </span>
                    <button
                      onClick={() => setDoubleGates(doubleGates + 1)}
                      className="w-7 h-7 rounded-md bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Summary Card Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Estimated Turnkey Total
                </span>
                <span className="text-xs text-slate-400">
                  Materials + Labor Included
                </span>
              </div>

              {/* Price Range Display */}
              <div className="mt-6 mb-6">
                <p className="text-xs text-slate-400 mb-1">
                  Estimated Total Range (Installed):
                </p>
                <div className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  ${totalMin.toLocaleString()} – ${totalMax.toLocaleString()}
                </div>
                <p className="text-xs text-amber-300/90 mt-1">
                  Average ~${Math.round((totalMin + totalMax) / (2 * footage))}/linear ft installed turnkey
                </p>
              </div>

              {/* Itemized Specification Breakdown */}
              <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Selected Material:</span>
                  <strong className="text-white">{activeMaterial.name}</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Perimeter Length:</span>
                  <strong className="text-white">{footage} Linear Feet</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Fence Height:</span>
                  <strong className="text-white">{height}</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Gates Included:</span>
                  <strong className="text-white">
                    {singleGates} Walk Gate{singleGates !== 1 ? 's' : ''}
                    {doubleGates > 0 ? `, ${doubleGates} Double Gate` : ''}
                  </strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Post Footings:</span>
                  <strong className="text-emerald-400">High-Strength Concrete (Included)</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Utility 811 Marking:</span>
                  <strong className="text-emerald-400">Free On Every Job</strong>
                </div>
              </div>

              {/* Reassurance notes */}
              <div className="mt-6 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-2.5 text-xs text-slate-300">
                <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Exact on-site pricing is confirmed after walking property line stakes and verifying underground utilities. No surprises or hidden fees.
                </span>
              </div>
            </div>

            {/* Lock In Button */}
            <div className="mt-8 pt-4 border-t border-slate-800">
              <button
                onClick={handleLockIn}
                className="w-full py-4 rounded-full bg-amber-500 text-slate-950 font-heading font-bold text-base tracking-wider uppercase hover:bg-amber-400 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <span>LOCK IN THIS ESTIMATE & BOOK VISIT</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </button>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                Zero obligation · Antonio will call or text to confirm within hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
