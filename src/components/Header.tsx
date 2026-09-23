import React, { useState } from 'react';

interface HeaderProps {
  onOpenBookDemo: () => void;
  onOpenTrial: () => void;
  onOpenWhatsAppInfo: () => void;
  currentOrg: string;
  onSelectOrg: (org: string) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBookDemo,
  onOpenTrial,
  onOpenWhatsAppInfo,
  currentOrg,
  onSelectOrg,
  activeSection,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [orgDropdownOpen, setOrgDropdownOpen] = useState(false);

  const orgs = [
    { name: 'Apex Dental', badge: 'Dental Clinic', icon: 'dentistry' },
    { name: 'Pulse Athletic Club', badge: 'Fitness Center', icon: 'fitness_center' },
    { name: 'Elevate Tutoring', badge: 'Education', icon: 'school' },
    { name: 'CarePlus Multi-Specialty', badge: 'Medical', icon: 'local_hospital' }
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Top Banner */}
      <div className="w-full bg-[#dae2fd]/70 text-[#0b1c30] py-2 px-4 sm:px-8 text-center text-xs sm:text-[13px] font-medium flex items-center justify-center gap-2 border-b border-[#dae2fd]">
        <span className="text-primary-container font-semibold leading-none text-base">⚡</span>
        <span className="truncate max-w-xl">
          New: Instant WhatsApp Business API Integration with multi-agent qualification.
        </span>
        <button
          onClick={onOpenWhatsAppInfo}
          className="text-[#004ac6] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer shrink-0"
        >
          Learn more →
        </button>
      </div>

      {/* Main Navbar */}
      <div className="h-20 bg-white/95 backdrop-blur-xl border-b border-neutral-100">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6 lg:gap-10">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('hero')}
              className="flex items-center gap-2.5 text-left cursor-pointer focus:outline-none"
            >
              <img
                alt="LeadFlow.ai Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1UTIDCclNxoI9GGaVyxF_MlW3zmivIM2nXOuScz-rxSGbM3Pyy1qMy4xFHUlevWhT5Jsd3BR28xzGThw4UN8ADlKvPUKZWqFU4d3Hsz8G5kafU7XUr5eDJ7WvPosu837lp388hU2qfa4X1sYwolKgrfE7EeFnZHjBwMOEQGy-KYRAYgVSiYzAhCLDrOOddbq747WrS1LeF2u_vKSLRljuwlwF6XuPnXLlY0SoIBx-aHVgETTXQxNNLbGvM"
              />
              <span className="text-xl font-bold tracking-tight text-[#0b1c30]">
                LeadFlow<span className="text-primary-container">.ai</span>
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6 text-[13px] font-medium">
              <button
                onClick={() => handleNavClick('how-it-works')}
                className={`transition-colors cursor-pointer py-1 ${
                  activeSection === 'how-it-works'
                    ? 'text-[#004ac6] font-semibold'
                    : 'text-[#434655] hover:text-[#0b1c30]'
                }`}
              >
                How It Works
              </button>
              <button
                onClick={() => handleNavClick('live-demo-interactive')}
                className={`transition-colors cursor-pointer py-1 ${
                  activeSection === 'live-demo-interactive'
                    ? 'text-[#004ac6] font-semibold'
                    : 'text-[#434655] hover:text-[#0b1c30]'
                }`}
              >
                Live Demo
              </button>
              <button
                onClick={() => handleNavClick('analytics-dashboard')}
                className={`transition-colors cursor-pointer py-1 ${
                  activeSection === 'analytics-dashboard'
                    ? 'text-[#004ac6] font-semibold'
                    : 'text-[#434655] hover:text-[#0b1c30]'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => handleNavClick('features')}
                className={`transition-colors cursor-pointer py-1 ${
                  activeSection === 'features'
                    ? 'text-[#004ac6] font-semibold'
                    : 'text-[#434655] hover:text-[#0b1c30]'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => handleNavClick('industries')}
                className={`transition-colors cursor-pointer py-1 ${
                  activeSection === 'industries'
                    ? 'text-[#004ac6] font-semibold'
                    : 'text-[#434655] hover:text-[#0b1c30]'
                }`}
              >
                Industries
              </button>
              <button
                onClick={() => handleNavClick('testimonials')}
                className={`transition-colors cursor-pointer py-1 ${
                  activeSection === 'testimonials'
                    ? 'text-[#004ac6] font-semibold'
                    : 'text-[#434655] hover:text-[#0b1c30]'
                }`}
              >
                Testimonials
              </button>
            </nav>
          </div>

          {/* Right Action Zone */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBookDemo}
              className="hidden sm:inline-flex items-center justify-center h-10 px-4 rounded-lg bg-white text-[#0b1c30] text-[13px] font-medium hover:bg-neutral-50 transition-colors border border-neutral-200/80 shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] cursor-pointer"
            >
              Book Demo
            </button>
            <button
              onClick={onOpenTrial}
              className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-primary-container text-white text-[13px] font-semibold hover:bg-[#004ac6] transition-all shadow-[0_4px_12px_rgba(37,99,235,0.24)] cursor-pointer"
            >
              Start Free Trial
            </button>

            {/* Profile Avatar / Org Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOrgDropdownOpen(!orgDropdownOpen)}
                className="w-9 h-9 rounded-full bg-[#004ac6] flex items-center justify-center shrink-0 cursor-pointer text-white hover:opacity-95 transition-opacity ring-2 ring-primary-container/20"
                title={`Active Workspace: ${currentOrg}`}
              >
                <span className="material-symbols-outlined text-[18px]">person</span>
              </button>

              {orgDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-neutral-200 p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-2 border-b border-neutral-100">
                    <p className="text-xs font-semibold text-[#0b1c30]">Active Workspace</p>
                    <p className="text-[11px] text-neutral-500">Switch clinic or business profile</p>
                  </div>
                  <div className="py-1 space-y-0.5">
                    {orgs.map((org) => (
                      <button
                        key={org.name}
                        onClick={() => {
                          onSelectOrg(org.name);
                          setOrgDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                          currentOrg === org.name
                            ? 'bg-[#eff4ff] text-[#004ac6] font-semibold'
                            : 'hover:bg-neutral-50 text-[#0b1c30]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-base text-[#004ac6]">
                            {org.icon}
                          </span>
                          <div>
                            <div>{org.name}</div>
                            <div className="text-[10px] text-neutral-400 font-normal">{org.badge}</div>
                          </div>
                        </div>
                        {currentOrg === org.name && (
                          <span className="material-symbols-outlined text-sm text-[#007d55]">check</span>
                        )}
                      </button>
                    ))}
                  </div>
                  <div className="pt-2 mt-1 border-t border-neutral-100 px-3 py-1 flex items-center justify-between text-[11px] text-neutral-500">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#007d55] animate-pulse"></span> Agent Ready
                    </span>
                    <button
                      onClick={() => {
                        setOrgDropdownOpen(false);
                        onOpenTrial();
                      }}
                      className="text-primary-container font-semibold hover:underline"
                    >
                      + Add New
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 cursor-pointer"
            >
              <span className="material-symbols-outlined">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-neutral-200 px-6 py-4 shadow-lg flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('how-it-works')}
              className="text-left text-sm font-medium text-neutral-700 py-1.5 hover:text-primary-container"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('live-demo-interactive')}
              className="text-left text-sm font-medium text-neutral-700 py-1.5 hover:text-primary-container"
            >
              Live Demo
            </button>
            <button
              onClick={() => handleNavClick('analytics-dashboard')}
              className="text-left text-sm font-medium text-neutral-700 py-1.5 hover:text-primary-container"
            >
              Dashboard
            </button>
            <button
              onClick={() => handleNavClick('features')}
              className="text-left text-sm font-medium text-neutral-700 py-1.5 hover:text-primary-container"
            >
              Features
            </button>
            <button
              onClick={() => handleNavClick('industries')}
              className="text-left text-sm font-medium text-neutral-700 py-1.5 hover:text-primary-container"
            >
              Industries
            </button>
            <button
              onClick={() => handleNavClick('testimonials')}
              className="text-left text-sm font-medium text-neutral-700 py-1.5 hover:text-primary-container"
            >
              Testimonials
            </button>
            <div className="pt-2 border-t border-neutral-100 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookDemo();
                }}
                className="flex-1 py-2 text-center text-xs font-semibold rounded-lg border border-neutral-300"
              >
                Book Demo
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrial();
                }}
                className="flex-1 py-2 text-center text-xs font-semibold rounded-lg bg-primary-container text-white"
              >
                Free Trial
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
