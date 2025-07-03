import React, { useState } from 'react';
import { Calculator } from 'phosphor-react';

interface ROICalculatorProps {
  className?: string;
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ className = '' }) => {
  const [visitors, setVisitors] = useState(1000);
  const [currentRate, setCurrentRate] = useState(2);
  const [customerValue, setCustomerValue] = useState(2500);
  const [targetRate, setTargetRate] = useState(5);

  // Calculations
  const currentLeads = Math.round((visitors * currentRate) / 100);
  const currentRevenue = currentLeads * customerValue;
  const targetLeads = Math.round((visitors * targetRate) / 100);
  const targetRevenue = targetLeads * customerValue;
  const monthlyIncrease = targetRevenue - currentRevenue;
  const yearlyIncrease = monthlyIncrease * 12;
  const roi = currentRevenue > 0 ? ((monthlyIncrease / 3000) * 100).toFixed(1) : 0; // Assuming $3k investment

  return (
    <div className={`card max-w-2xl mx-auto ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-xl bg-brand-500/10 border border-brand-500/20">
          <Calculator className="h-6 w-6 text-brand-400" weight="bold" />
        </div>
        <h3 className="text-2xl font-bold text-neutral-100">Website ROI Calculator</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Controls */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-neutral-300 mb-3">
              Monthly Visitors: {visitors.toLocaleString()}
            </label>
            <input
              type="range"
              min="100"
              max="10000"
              step="100"
              value={visitors}
              onChange={(e) => setVisitors(Number(e.target.value))}
              className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-neutral-500 mt-1">
              <span>100</span>
              <span>10,000</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-neutral-300 mb-3">
              Current Conversion: {currentRate}%
            </label>
            <input
              type="range"
              min="0.5"
              max="10"
              step="0.1"
              value={currentRate}
              onChange={(e) => setCurrentRate(Number(e.target.value))}
              className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-neutral-500 mt-1">
              <span>0.5%</span>
              <span>10%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-neutral-300 mb-3">
              Customer Value: ${customerValue.toLocaleString()}
            </label>
            <input
              type="range"
              min="500"
              max="10000"
              step="100"
              value={customerValue}
              onChange={(e) => setCustomerValue(Number(e.target.value))}
              className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-neutral-500 mt-1">
              <span>$500</span>
              <span>$10,000</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-neutral-300 mb-3">
              Target Conversion: {targetRate}%
            </label>
            <input
              type="range"
              min="2"
              max="15"
              step="0.1"
              value={targetRate}
              onChange={(e) => setTargetRate(Number(e.target.value))}
              className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-neutral-500 mt-1">
              <span>2%</span>
              <span>15%</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700/50">
            <h4 className="text-sm font-semibold text-neutral-400 mb-2">Current Performance</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-300">Leads/month:</span>
                <span className="font-bold text-neutral-100">{currentLeads}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-300">Revenue/month:</span>
                <span className="font-bold text-neutral-100">${currentRevenue.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-500/10 to-accent-500/10 p-4 rounded-xl border border-brand-500/30">
            <h4 className="text-sm font-semibold text-brand-300 mb-2">With Optimization</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-300">Leads/month:</span>
                <span className="font-bold gradient-text">{targetLeads}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-300">Revenue/month:</span>
                <span className="font-bold gradient-text">${targetRevenue.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-4 rounded-xl border border-green-500/30">
            <h4 className="text-sm font-semibold text-green-300 mb-2">Revenue Increase</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-300">Monthly:</span>
                <span className="font-bold text-green-400">+${monthlyIncrease.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-300">Yearly:</span>
                <span className="font-bold text-green-400">+${yearlyIncrease.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-t border-green-500/20 pt-2">
                <span className="text-neutral-300">ROI:</span>
                <span className="font-bold text-green-400">{roi}x return</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-neutral-900/40 rounded-xl border border-neutral-800/50">
        <p className="text-neutral-400 text-xs leading-relaxed">
          * Calculations based on done-for-you web design, development, SEO, and copywriting services. 
          Results may vary based on industry, market conditions, and implementation.
        </p>
      </div>
    </div>
  );
};

export default ROICalculator;