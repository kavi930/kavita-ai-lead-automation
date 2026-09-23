import React from 'react';
import { INDUSTRY_PRESETS } from '../data/mockData';
import { IndustryPreset } from '../types';

interface IndustriesSectionProps {
  onSelectIndustryPreset: (preset: IndustryPreset) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onSelectIndustryPreset
}) => {
  return (
    <section id="industries" className="w-full py-20 bg-[#eff4ff]/60 border-t border-b border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-semibold tracking-wider text-[#004ac6] px-3 py-1 rounded-full bg-[#dae2fd]/70 inline-block">
            Tailored Workflows
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0b1c30] font-bold tracking-tight mt-3 mb-4">
            Tailored AI Agents for Your Specific Industry
          </h2>
          <p className="text-sm sm:text-base text-[#434655]">
            LeadFlow's pre-trained vertical models come pre-equipped with domain terminology, triage prompts, and smart objection handling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRY_PRESETS.map((ind) => (
            <div
              key={ind.id}
              className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200/80 flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#eff4ff] flex items-center justify-center text-primary-container border border-neutral-200/60 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined">{ind.icon}</span>
                    </div>
                    <h3 className="text-base font-semibold text-[#0b1c30]">{ind.title}</h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#434655] mb-5 leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div>
                <div className="bg-[#eff4ff] p-3 rounded-lg text-xs text-[#434655] mb-3 border border-neutral-200/60">
                  <strong className="text-[#0b1c30] block mb-1">AI Handles:</strong>
                  <span className="italic">{ind.sampleQuery}</span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectIndustryPreset(ind)}
                  className="w-full py-2 text-xs font-semibold text-[#004ac6] bg-white hover:bg-neutral-50 rounded-lg border border-neutral-200/80 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">play_circle</span>
                  <span>Test in Live Simulator</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
