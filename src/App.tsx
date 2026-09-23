import React, { useState } from 'react';
import { Lead, LiveFeedItem, IndustryPreset } from './types';
import { INITIAL_LEADS, INITIAL_FEED } from './data/mockData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { LiveDemoSection } from './components/LiveDemoSection';
import { DashboardSection } from './components/DashboardSection';
import { FeaturesSection } from './components/FeaturesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ChatTranscriptModal } from './components/ChatTranscriptModal';
import { BookDemoModal } from './components/BookDemoModal';
import { TrialModal } from './components/TrialModal';
import { WhatsAppInfoModal } from './components/WhatsAppInfoModal';

export const App: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [activeLead, setActiveLead] = useState<Lead>(INITIAL_LEADS[0]);
  const [feed, setFeed] = useState<LiveFeedItem[]>(INITIAL_FEED);
  const [currentOrg, setCurrentOrg] = useState<string>('Apex Dental');
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Modals state
  const [transcriptLead, setTranscriptLead] = useState<Lead | null>(null);
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [isWhatsAppInfoOpen, setIsWhatsAppInfoOpen] = useState(false);

  // When a new simulated lead is generated
  const handleLeadCreated = (newLead: Lead) => {
    setLeads((prev) => [newLead, ...prev]);
    setActiveLead(newLead);

    // Also add to the real-time automation feed
    const newFeedItem: LiveFeedItem = {
      id: `feed-${Date.now()}`,
      title: `${newLead.name} qualified for ${newLead.service.split(' ')[0]}`,
      meta: `Score: ${newLead.score} · WhatsApp Dispatched · Just now`,
      icon: 'auto_awesome',
      iconColor: 'text-tertiary-container',
      timestamp: 'Just now'
    };
    setFeed((prev) => [newFeedItem, ...prev.slice(0, 5)]);
  };

  // When an industry preset is clicked from the Industries section
  const handleSelectIndustryPreset = (preset: IndustryPreset) => {
    const matchedLead = leads.find((l) => l.service === preset.defaultLead.service);
    if (matchedLead) {
      setActiveLead(matchedLead);
    }
    const element = document.getElementById('live-demo-interactive');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Slot approved in dashboard
  const handleApproveSlot = (lead: Lead) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === lead.id ? { ...l, stage: 'booked' } : l))
    );
    const feedItem: LiveFeedItem = {
      id: `feed-approve-${Date.now()}`,
      title: `${lead.name} slot confirmed on calendar`,
      meta: 'Confirmed by Front Desk · Just now',
      icon: 'event_available',
      iconColor: 'text-tertiary-container',
      timestamp: 'Just now'
    };
    setFeed((prev) => [feedItem, ...prev.slice(0, 5)]);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      {/* Header */}
      <Header
        onOpenBookDemo={() => setIsBookDemoOpen(true)}
        onOpenTrial={() => setIsTrialOpen(true)}
        onOpenWhatsAppInfo={() => setIsWhatsAppInfoOpen(true)}
        currentOrg={currentOrg}
        onSelectOrg={(org) => setCurrentOrg(org)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-28">
        {/* Hero Section */}
        <HeroSection
          onTryLiveDemo={() => handleNavigate('live-demo-interactive')}
          onSeeHowItWorks={() => handleNavigate('how-it-works')}
        />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Interactive Live Demo Section */}
        <LiveDemoSection
          activeLead={activeLead}
          onLeadCreated={handleLeadCreated}
          onSelectLead={(l) => setActiveLead(l)}
        />

        {/* Executive Control & Pipeline Dashboard Section */}
        <DashboardSection
          leads={leads}
          activeLead={activeLead}
          onSelectLead={(l) => setActiveLead(l)}
          feed={feed}
          onOpenChatTranscript={(l) => setTranscriptLead(l)}
          onApproveSlot={handleApproveSlot}
        />

        {/* Enterprise Architecture Features */}
        <FeaturesSection />

        {/* Tailored Industry AI Agents */}
        <IndustriesSection onSelectIndustryPreset={handleSelectIndustryPreset} />

        {/* Validated ROI Testimonials */}
        <TestimonialsSection />

        {/* High Converting Final CTA */}
        <CtaSection
          onStartTrial={() => setIsTrialOpen(true)}
          onBookDemo={() => setIsBookDemoOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBookDemo={() => setIsBookDemoOpen(true)}
        onOpenTrial={() => setIsTrialOpen(true)}
        onOpenWhatsAppInfo={() => setIsWhatsAppInfoOpen(true)}
      />

      {/* Interactive Modals */}
      <ChatTranscriptModal
        lead={transcriptLead}
        onClose={() => setTranscriptLead(null)}
      />

      <BookDemoModal
        isOpen={isBookDemoOpen}
        onClose={() => setIsBookDemoOpen(false)}
      />

      <TrialModal
        isOpen={isTrialOpen}
        onClose={() => setIsTrialOpen(false)}
        onTrialStarted={(name) => setCurrentOrg(name)}
      />

      <WhatsAppInfoModal
        isOpen={isWhatsAppInfoOpen}
        onClose={() => setIsWhatsAppInfoOpen(false)}
        onTrySimulator={() => handleNavigate('live-demo-interactive')}
      />
    </div>
  );
};

export default App;
