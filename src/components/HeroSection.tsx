import React, { useState } from 'react';

interface HeroSectionProps {
  onTryLiveDemo: () => void;
  onSeeHowItWorks: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onTryLiveDemo,
  onSeeHowItWorks
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);

  const steps = [
    {
      num: '01',
      title: 'Website Enquiry',
      desc: 'Omnichannel intake',
      tag: 'Captured Instantly',
      tagColor: 'text-[#004ac6]',
      dotColor: 'bg-[#2563eb]',
      icon: 'language',
      iconBoxBg: 'text-primary-container',
      details: 'Connects to Web forms, Google Business, Facebook Lead Ads, and website chatbot widgets within < 200ms.'
    },
    {
      num: '02',
      title: 'AI Qualification',
      desc: 'Intent & urgency scoring',
      tag: 'Intent: 98% Acc',
      tagColor: 'text-[#007d55]',
      dotColor: 'bg-[#007d55]',
      icon: 'auto_awesome',
      iconBoxBg: 'text-tertiary-container',
      details: 'NLP agent evaluates customer message urgency, classifies budget brackets, and predicts booking likelihood.'
    },
    {
      num: '03',
      title: 'WhatsApp + Email',
      desc: 'Instant booking link',
      tag: 'Response < 15s',
      tagColor: 'text-[#004ac6]',
      dotColor: 'bg-[#2563eb]',
      icon: 'chat',
      iconBoxBg: 'text-primary-container',
      details: 'Dispatches personalized interactive WhatsApp buttons with one-click slot reservations directly into calendars.'
    },
    {
      num: '04',
      title: 'Lead Management',
      desc: 'CRM sync & priority tags',
      tag: 'Live Pipeline',
      tagColor: 'text-[#565e74]',
      dotColor: 'bg-[#565e74]',
      icon: 'view_kanban',
      iconBoxBg: 'text-secondary',
      details: 'Syncs lead dossier to HubSpot, Salesforce, or LeadFlow CRM. Notifies on-call staff with full intent brief.'
    },
    {
      num: '05',
      title: 'Auto Follow-up',
      desc: 'Smart multi-touch nudges',
      tag: 'Zero Drop-off',
      tagColor: 'text-[#007d55]',
      dotColor: 'bg-[#007d55]',
      icon: 'event_available',
      iconBoxBg: 'text-tertiary-container',
      details: 'Autonomous multi-touch cadence follows up at 15m, 2h, and 24h intervals with personalized objection handling.'
    }
  ];

  return (
    <section id="hero" className="relative w-full pt-8 pb-16 md:py-20 overflow-hidden bg-surface">
      {/* Ambient blurred background blobs */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-24 w-[28rem] h-[28rem] bg-[#dae2fd]/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Centered Hero Copy */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-neutral-200/60 mb-6">
            <div className="flex text-amber-500 text-xs">
              <span className="material-symbols-outlined text-sm leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="material-symbols-outlined text-sm leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="material-symbols-outlined text-sm leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="material-symbols-outlined text-sm leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="material-symbols-outlined text-sm leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
            </div>
            <span className="text-xs sm:text-[13px] text-[#0b1c30] font-semibold">
              Rated 4.9/5 by 600+ Local Businesses & Clinics
            </span>
            <span className="material-symbols-outlined text-tertiary-container text-base leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] md:leading-[1.15] text-[#0b1c30] font-bold tracking-tight mb-6">
            Turn Every Enquiry Into a Qualified Lead —{' '}
            <span className="text-primary-container">Automatically</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-[#434655] max-w-2xl mb-8 leading-relaxed">
            Capture enquiries, qualify leads with AI, respond instantly, and automate WhatsApp and email follow-ups before competitors even check their inbox.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
            <button
              onClick={onTryLiveDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-lg bg-primary-container text-white text-sm font-semibold shadow-md hover:bg-[#004ac6] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">play_arrow</span>
              <span>Try Live Demo</span>
            </button>
            <button
              onClick={onSeeHowItWorks}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-lg bg-white text-[#0b1c30] text-sm font-medium shadow-sm hover:bg-neutral-50 transition-all border border-neutral-200/80 cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg text-secondary">smart_display</span>
              <span>See How It Works</span>
            </button>
          </div>

          {/* Social Proof Trust Bar */}
          <div className="w-full pt-2">
            <p className="text-[11px] uppercase tracking-wider text-[#737686] font-semibold mb-6">
              Trusted by fast-growing clinics, gyms & academies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[#434655] text-sm opacity-85">
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-[#0b1c30]">
                <span className="material-symbols-outlined text-primary-container text-lg">dentistry</span> Apex Dental
              </div>
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-[#0b1c30]">
                <span className="material-symbols-outlined text-tertiary-container text-lg">fitness_center</span> Pulse Fitness
              </div>
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-[#0b1c30]">
                <span className="material-symbols-outlined text-[#004ac6] text-lg">school</span> Elevate Tutoring
              </div>
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-[#0b1c30]">
                <span className="material-symbols-outlined text-[#ba1a1a] text-lg">local_hospital</span> CarePlus Clinic
              </div>
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-[#0b1c30]">
                <span className="material-symbols-outlined text-secondary text-lg">psychology</span> Summit Academy
              </div>
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-[#0b1c30]">
                <span className="material-symbols-outlined text-[#006242] text-lg">cleaning_services</span> ProClean Solutions
              </div>
            </div>
          </div>
        </div>

        {/* VISUAL FLOW INTERACTIVE PIPELINE BAR */}
        <div className="mt-14 w-full bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-neutral-200/70">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-neutral-100 gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-tertiary-container animate-pulse"></span>
              <span className="text-sm font-semibold text-[#0b1c30]">Automated Engine Workflow</span>
              <span className="text-xs text-neutral-400 font-normal hidden md:inline">· Click any step to inspect pipeline details</span>
            </div>
            <span className="text-xs text-[#434655] bg-[#eff4ff] px-3 py-1 rounded-full font-medium self-start sm:self-auto">
              End-to-End Pipeline &lt; 30 Seconds
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                onClick={() => setActiveStepIndex(activeStepIndex === idx ? null : idx)}
                className={`group bg-[#eff4ff] p-4 rounded-xl flex flex-col justify-between transition-all cursor-pointer border ${
                  activeStepIndex === idx
                    ? 'border-primary-container ring-2 ring-primary-container/20 bg-[#e5eeff] -translate-y-1'
                    : 'border-transparent hover:-translate-y-0.5 hover:border-neutral-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-8 h-8 rounded-lg bg-white flex items-center justify-center ${step.iconBoxBg} shadow-xs`}>
                    <span className="material-symbols-outlined text-lg">{step.icon}</span>
                  </div>
                  <span className="text-xs text-[#737686] font-semibold">{step.num}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0b1c30] mb-0.5">{step.title}</div>
                  <p className="text-xs text-[#434655]">{step.desc}</p>
                </div>
                <div className={`mt-4 pt-2 flex items-center gap-1.5 text-xs ${step.tagColor} font-medium border-t border-neutral-200/50`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${step.dotColor}`}></span> {step.tag}
                </div>
              </div>
            ))}
          </div>

          {/* Expanded Step Detail Box when clicked */}
          {activeStepIndex !== null && (
            <div className="mt-4 p-4 rounded-xl bg-[#f8f9ff] border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in duration-150">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container text-xl mt-0.5">info</span>
                <div>
                  <div className="text-xs font-bold text-[#0b1c30]">
                    Step {steps[activeStepIndex].num}: {steps[activeStepIndex].title} Logic
                  </div>
                  <p className="text-xs text-[#434655] mt-0.5">{steps[activeStepIndex].details}</p>
                </div>
              </div>
              <button
                onClick={() => setActiveStepIndex(null)}
                className="text-xs text-neutral-500 hover:text-neutral-800 underline shrink-0 cursor-pointer self-end sm:self-center"
              >
                Close details
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
