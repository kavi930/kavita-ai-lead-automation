import React from 'react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="w-full py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-semibold tracking-wider text-tertiary-container px-3 py-1 rounded-full bg-white shadow-xs border border-neutral-200/60 inline-block">
            Validated ROI
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0b1c30] font-bold tracking-tight mt-3 mb-4">
            Validated ROI Across 600+ Commercial Deployments
          </h2>
          <p className="text-sm sm:text-base text-[#434655]">
            See how practice owners and marketing leaders eliminated missed leads and surged monthly revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-neutral-200/80 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500 text-xs">
                    <span className="material-symbols-outlined text-base leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    <span className="material-symbols-outlined text-base leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    <span className="material-symbols-outlined text-base leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    <span className="material-symbols-outlined text-base leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    <span className="material-symbols-outlined text-base leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#007d55] bg-[#eff4ff] px-2.5 py-0.5 rounded-full border border-green-200">
                    {t.highlight}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#434655] italic mb-6 leading-relaxed">
                  {t.quote}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-neutral-200"
                />
                <div>
                  <h4 className="text-sm font-semibold text-[#0b1c30]">{t.name}</h4>
                  <p className="text-xs text-[#737686]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
