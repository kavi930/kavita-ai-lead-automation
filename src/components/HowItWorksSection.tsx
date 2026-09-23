import React from 'react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: 'Step 01',
      title: 'Capture Omnichannel Enquiries',
      description: 'Connect contact forms, website live widgets, Google Business profiles, and direct inbound WhatsApp chats into one unified stream.',
      icon: 'hub',
      iconBoxBg: 'bg-[#dce9ff] text-primary-container',
      metricLabel: 'Intake latency',
      metricValue: 'Sub-second',
      metricColor: 'text-[#0b1c30]'
    },
    {
      step: 'Step 02',
      title: 'Instant AI Agent Qualification',
      description: 'The NLP agent immediately parses customer message history, identifies requested service, validates geographic fit, and measures buying readiness.',
      icon: 'neurology',
      iconBoxBg: 'bg-[#dae2fd] text-[#004ac6]',
      metricLabel: 'Accuracy metric',
      metricValue: '98.4% Precision',
      metricColor: 'text-[#007d55]'
    },
    {
      step: 'Step 03',
      title: 'Multi-Channel Instant Response',
      description: 'Dispatches tailored WhatsApp messages, SMS notifications, and emails with one-click direct appointment reservation slots within 30 seconds.',
      icon: 'send',
      iconBoxBg: 'bg-[#e5eeff] text-[#007d55]',
      metricLabel: 'WhatsApp speed',
      metricValue: '< 15 seconds',
      metricColor: 'text-[#007d55]'
    },
    {
      step: 'Step 04',
      title: 'CRM Sync & Smart Nudge Cadence',
      description: "Automatically logs to your CRM, notifies staff, and initiates polite follow-up reminder cadences if the user doesn't book immediately.",
      icon: 'sync_alt',
      iconBoxBg: 'bg-[#dce9ff] text-[#0b1c30]',
      metricLabel: 'Follow-up recovery',
      metricValue: '+34% conversion',
      metricColor: 'text-primary-container'
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-20 bg-[#eff4ff]/60 border-t border-b border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-semibold tracking-wider text-[#004ac6] px-3 py-1 rounded-full bg-[#dae2fd]/70 inline-block">
            Seamless Automation
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0b1c30] font-bold tracking-tight mt-3 mb-4">
            From First Click to Booked Appointment in 4 Steps
          </h2>
          <p className="text-sm sm:text-base text-[#434655]">
            LeadFlow.ai replaces clunky delayed manual callbacks with high-speed autonomous agent intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200/70 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl ${item.iconBoxBg} flex items-center justify-center mb-6`}>
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <div className="text-xs text-[#004ac6] font-semibold tracking-wide uppercase mb-1">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-[#0b1c30] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#434655] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="bg-[#eff4ff] p-3 rounded-lg flex items-center justify-between text-[#434655] text-xs">
                <span>{item.metricLabel}</span>
                <span className={`font-semibold ${item.metricColor}`}>{item.metricValue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
