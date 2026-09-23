import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBookDemo: () => void;
  onOpenTrial: () => void;
  onOpenWhatsAppInfo: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBookDemo,
  onOpenTrial,
  onOpenWhatsAppInfo
}) => {
  return (
    <footer className="w-full bg-white border-t border-neutral-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-100">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                alt="LeadFlow.ai Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1UTIDCclNxoI9GGaVyxF_MlW3zmivIM2nXOuScz-rxSGbM3Pyy1qMy4xFHUlevWhT5Jsd3BR28xzGThw4UN8ADlKvPUKZWqFU4d3Hsz8G5kafU7XUr5eDJ7WvPosu837lp388hU2qfa4X1sYwolKgrfE7EeFnZHjBwMOEQGy-KYRAYgVSiYzAhCLDrOOddbq747WrS1LeF2u_vKSLRljuwlwF6XuPnXLlY0SoIBx-aHVgETTXQxNNLbGvM"
              />
              <span className="text-xl font-bold tracking-tight text-[#0b1c30]">
                LeadFlow<span className="text-primary-container">.ai</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#434655] leading-relaxed max-w-sm mb-6">
              Autonomous lead qualification, instant WhatsApp triage, and booked appointment automation for clinics, gyms, and professional services.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] text-[#565e74]">
              <span className="px-2.5 py-1 rounded bg-[#eff4ff] border border-neutral-200/60 font-medium">
                GDPR Compliant
              </span>
              <span className="px-2.5 py-1 rounded bg-[#eff4ff] border border-neutral-200/60 font-medium">
                SOC2 Type II
              </span>
              <span className="px-2.5 py-1 rounded bg-[#eff4ff] border border-neutral-200/60 font-medium">
                HIPAA Ready
              </span>
              <span className="px-2.5 py-1 rounded bg-[#eff4ff] border border-neutral-200/60 font-medium">
                99.9% Uptime
              </span>
            </div>
          </div>

          {/* Col 1: Platform */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0b1c30] mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs text-[#434655]">
              <li>
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="hover:text-[#004ac6] transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('live-demo-interactive')}
                  className="hover:text-[#004ac6] transition-colors cursor-pointer"
                >
                  Live AI Qualifier
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('analytics-dashboard')}
                  className="hover:text-[#004ac6] transition-colors cursor-pointer"
                >
                  Pipeline Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('features')}
                  className="hover:text-[#004ac6] transition-colors cursor-pointer"
                >
                  Enterprise Features
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenWhatsAppInfo}
                  className="hover:text-[#004ac6] transition-colors cursor-pointer flex items-center gap-1 text-[#007d55] font-medium"
                >
                  <span>WhatsApp Cloud API</span>
                  <span className="text-[10px] bg-green-100 text-green-800 px-1 rounded">v2.4</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0b1c30] mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-[#434655]">
              <li>
                <button
                  onClick={() => onNavigate('industries')}
                  className="hover:text-[#004ac6] transition-colors cursor-pointer"
                >
                  Dental Practices
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('industries')}
                  className="hover:text-[#004ac6] transition-colors cursor-pointer"
                >
                  Private Healthcare Clinics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('industries')}
                  className="hover:text-[#004ac6] transition-colors cursor-pointer"
                >
                  Gyms & Fitness Clubs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('industries')}
                  className="hover:text-[#004ac6] transition-colors cursor-pointer"
                >
                  Coaching & Test Prep
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('industries')}
                  className="hover:text-[#004ac6] transition-colors cursor-pointer"
                >
                  Field Services & HVAC
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Actions & Governance */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0b1c30] mb-4">
              Get Started
            </h4>
            <ul className="space-y-2.5 text-xs text-[#434655]">
              <li>
                <button
                  onClick={onOpenTrial}
                  className="text-primary-container font-semibold hover:underline cursor-pointer"
                >
                  Start 14-Day Free Trial
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBookDemo}
                  className="hover:text-[#004ac6] transition-colors cursor-pointer"
                >
                  Book 1-on-1 Walkthrough
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('testimonials')}
                  className="hover:text-[#004ac6] transition-colors cursor-pointer"
                >
                  Customer Case Studies
                </button>
              </li>
              <li>
                <span className="text-neutral-400">Security & Privacy Policy</span>
              </li>
              <li>
                <span className="text-neutral-400">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737686]">
          <div>
            © {new Date().getFullYear()} LeadFlow.ai Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#007d55] animate-pulse"></span>
            <span className="text-[#0b1c30] font-medium">All Systems Operational</span>
            <span className="text-neutral-300">·</span>
            <span>Response Latency: 14ms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
