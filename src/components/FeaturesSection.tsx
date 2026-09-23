import React from 'react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'AI Lead Qualification',
      badge: 'NLP Driven',
      badgeColor: 'text-[#004ac6]',
      icon: 'neurology',
      iconBoxBg: 'bg-[#dae2fd] text-[#004ac6]',
      description: 'Natural language analysis scores urgency, estimated budget, service match, and intent readiness within milliseconds of submission.',
      check: 'Zero manual data filtering needed'
    },
    {
      title: 'Instant WhatsApp Response',
      badge: '< 15 Seconds',
      badgeColor: 'text-[#007d55]',
      icon: 'mark_chat_unread',
      iconBoxBg: 'bg-[#eff4ff] text-[#007d55]',
      description: 'Engage high-intent prospects immediately on their preferred messaging application while their purchase interest is at its absolute peak.',
      check: 'Official WhatsApp Business API'
    },
    {
      title: 'Automated Email Follow-up',
      badge: 'Drip Engine',
      badgeColor: 'text-[#004ac6]',
      icon: 'forward_to_inbox',
      iconBoxBg: 'bg-[#dce9ff] text-primary-container',
      description: 'Intelligent multi-touch email drip sequences that trigger based on customer actions, opens, and specific service categories.',
      check: 'Custom templates & merge tags'
    },
    {
      title: 'Lead Tracking & Attribution',
      badge: 'Full Journey',
      badgeColor: 'text-[#565e74]',
      icon: 'route',
      iconBoxBg: 'bg-[#e5eeff] text-secondary',
      description: 'Real-time attribution tracking source, UTM campaigns, organic referrers, and lifecycle stages without complex tag managers.',
      check: 'End-to-end ROI transparency'
    },
    {
      title: 'Appointment Automation',
      badge: '2-Way Sync',
      badgeColor: 'text-[#007d55]',
      icon: 'event_available',
      iconBoxBg: 'bg-[#dae2fd] text-[#007d55]',
      description: 'Direct real-time two-way synchronization with Google Calendar, Outlook 365, Calendly, and specialized clinic software.',
      check: 'Zero double-booking conflicts'
    },
    {
      title: '24/7 Enquiry Handling',
      badge: 'Always Active',
      badgeColor: 'text-[#004ac6]',
      icon: 'nightlight',
      iconBoxBg: 'bg-[#dce9ff] text-[#0b1c30]',
      description: 'Never drop a late-night or weekend lead again. The autonomous agent works around the clock to capture and qualify prospective clients.',
      check: 'Over 60% of leads arrive off-hours'
    }
  ];

  return (
    <section id="features" className="w-full py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-semibold tracking-wider text-[#004ac6] px-3 py-1 rounded-full bg-[#dae2fd]/70 inline-block">
            Enterprise Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0b1c30] font-bold tracking-tight mt-3 mb-4">
            Engineered for Conversion, Not Just Contact Forms
          </h2>
          <p className="text-sm sm:text-base text-[#434655]">
            LeadFlow.ai replaces slow humans and rigid form builders with high-velocity conversational intelligence that accelerates sales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200/80 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl ${feat.iconBoxBg} flex items-center justify-center mb-5`}>
                  <span className="material-symbols-outlined text-2xl">{feat.icon}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-[#0b1c30]">{feat.title}</h3>
                  <span className={`text-xs font-semibold ${feat.badgeColor}`}>{feat.badge}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#434655] leading-relaxed mb-5">
                  {feat.description}
                </p>
              </div>

              <div className="text-xs text-tertiary-container font-medium flex items-center gap-1.5 pt-3 border-t border-neutral-100">
                <span className="material-symbols-outlined text-sm">check</span>
                <span>{feat.check}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
