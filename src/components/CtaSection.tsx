import React from 'react';

interface CtaSectionProps {
  onStartTrial: () => void;
  onBookDemo: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onStartTrial, onBookDemo }) => {
  return (
    <section className="w-full py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="relative rounded-3xl bg-[#0b1c30] text-white p-8 sm:p-14 overflow-hidden text-center shadow-xl">
          {/* Subtle gradient highlights */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-tertiary-container/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#dae2fd] px-3.5 py-1 rounded-full bg-white/10 inline-block mb-6">
              Instant Deployment
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
              Ready to Stop Losing 60% of Your Website Leads?
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mb-8 leading-relaxed">
              Deploy LeadFlow.ai in less than 15 minutes. Connect your website, link your calendar, and let autonomous qualification run 24/7.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                type="button"
                onClick={onStartTrial}
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary-container text-white text-sm font-semibold hover:bg-blue-600 shadow-md transition-all cursor-pointer"
              >
                Start Your 14-Day Free Trial
              </button>
              <button
                type="button"
                onClick={onBookDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-lg bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-all border border-white/20 cursor-pointer"
              >
                Schedule 1-on-1 Product Demo
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#6ffbbe]">check</span>
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#6ffbbe]">check</span>
                15-minute setup
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#6ffbbe]">check</span>
                WhatsApp Business API ready
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#6ffbbe]">check</span>
                Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
