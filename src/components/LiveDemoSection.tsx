import React, { useState } from 'react';
import { Lead, IndustryPreset } from '../types';
import { INDUSTRY_PRESETS } from '../data/mockData';

interface LiveDemoSectionProps {
  onLeadCreated: (newLead: Lead) => void;
  activeLead: Lead;
  onSelectLead: (lead: Lead) => void;
}

export const LiveDemoSection: React.FC<LiveDemoSectionProps> = ({
  onLeadCreated,
  activeLead,
  onSelectLead
}) => {
  const [name, setName] = useState(activeLead.name || 'Rahul Sharma');
  const [code, setCode] = useState(activeLead.code || '+91');
  const [phone, setPhone] = useState(activeLead.phone || '98765 43210');
  const [email, setEmail] = useState(activeLead.email || 'rahul.sharma@example.com');
  const [service, setService] = useState(activeLead.service || 'Dental Consultation');
  const [message, setMessage] = useState(
    activeLead.message || 'Looking for teeth alignment consultation this Saturday morning. Mild pain on lower molar. Need urgent slot.'
  );

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisTime, setAnalysisTime] = useState('1.4s');
  const [copiedMsg, setCopiedMsg] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  // Apply a preset
  const handleApplyPreset = (preset: IndustryPreset) => {
    setName(preset.defaultLead.name);
    setPhone(preset.defaultLead.phone);
    setEmail(preset.defaultLead.email);
    setService(preset.defaultLead.service);
    setMessage(preset.defaultLead.message);
  };

  const handleSimulateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setSuccessToast(false);

    // Dynamic AI scoring calculation based on text urgency
    const textLower = (message + ' ' + service).toLowerCase();
    const isEmergency = textLower.includes('urgent') || textLower.includes('pain') || textLower.includes('emergency') || textLower.includes('asap') || textLower.includes('broken');
    const isWeekend = textLower.includes('saturday') || textLower.includes('sunday') || textLower.includes('tomorrow');

    const score = isEmergency ? 98 : isWeekend ? 94 : 89;
    const priority = isEmergency ? 'HIGH' : 'HIGH';
    const status = score >= 90 ? 'HOT' : 'WARM';

    const cleanFirstName = name.trim().split(' ')[0] || 'there';

    let targetTime = 'Flexible';
    if (textLower.includes('saturday')) targetTime = 'Saturday Morning';
    else if (textLower.includes('tomorrow')) targetTime = 'Tomorrow';
    else if (textLower.includes('today')) targetTime = 'Today / Immediate';
    else if (textLower.includes('weekend')) targetTime = 'Upcoming Weekend';

    let urgencyTag = 'General Enquiry';
    if (textLower.includes('pain') || textLower.includes('molar')) urgencyTag = 'Molar Discomfort';
    else if (textLower.includes('emergency') || textLower.includes('broken')) urgencyTag = 'Critical Emergency';
    else if (textLower.includes('urgent')) urgencyTag = 'High Priority Request';
    else if (textLower.includes('pass') || textLower.includes('trial')) urgencyTag = 'Free Pass Trial';

    let generatedWhatsapp = `Hi ${cleanFirstName}! Thanks for contacting our team regarding ${service}. `;
    if (service.includes('Dental')) {
      generatedWhatsapp += `We noticed you're looking for a consultation regarding ${urgencyTag.toLowerCase()} for ${targetTime.toLowerCase()}. Dr. Verma has a VIP slot open at 10:30 AM. Tap below to confirm your visit in 5 seconds: https://leadflow.me/b/dr-v-${cleanFirstName.toLowerCase()}`;
    } else if (service.includes('Gym')) {
      generatedWhatsapp += `Coach Maya has prepared your 3-day complimentary pass for ${targetTime.toLowerCase()}. Tap here to select your trainer intro slot: https://leadflow.me/b/fit-${cleanFirstName.toLowerCase()}`;
    } else if (service.includes('Coaching')) {
      generatedWhatsapp += `For your target score, our master batch orientation takes place this ${targetTime}. Here is your diagnostic test access: https://leadflow.me/b/prep-${cleanFirstName.toLowerCase()}`;
    } else {
      generatedWhatsapp += `Our specialist is available for ${targetTime.toLowerCase()}. Tap to lock your reservation slot: https://leadflow.me/b/book-${cleanFirstName.toLowerCase()}`;
    }

    const aiInsightText = `Lead analyzed: ${name} seeking ${service}. Detected intent: Appointment reservation with ${urgencyTag.toLowerCase()}. Target timeframe: ${targetTime}. Automated WhatsApp outreach drafted and dispatched with priority calendar link.`;

    setTimeout(() => {
      const generatedLead: Lead = {
        id: `LD-${Math.floor(8400 + Math.random() * 99)}`,
        name: name || 'Interested Prospect',
        code,
        phone,
        email,
        service,
        message,
        status,
        score,
        priority,
        followUp: isEmergency ? 'In 5 Mins' : 'In 15 Mins',
        detectedIntent: 'Appointment Booking',
        urgency: urgencyTag,
        targetTime,
        aiInsight: aiInsightText,
        whatsappMessage: generatedWhatsapp,
        createdAt: 'Just now',
        stage: 'dispatched'
      };

      setIsAnalyzing(false);
      setAnalysisTime((0.8 + Math.random() * 0.6).toFixed(1) + 's');
      onLeadCreated(generatedLead);
      onSelectLead(generatedLead);
      setSuccessToast(true);

      setTimeout(() => {
        setSuccessToast(false);
      }, 5000);
    }, 950);
  };

  const handleCopyWhatsapp = () => {
    navigator.clipboard.writeText(activeLead.whatsappMessage);
    setCopiedMsg(true);
    setTimeout(() => setCopiedMsg(false), 2000);
  };

  return (
    <section id="live-demo-interactive" className="w-full py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-semibold tracking-wider text-tertiary-container px-3 py-1 rounded-full bg-white shadow-xs border border-neutral-200/60 inline-block">
            Interactive Experience
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0b1c30] font-bold tracking-tight mt-3 mb-3">
            Test the AI Engine in Real Time
          </h2>
          <p className="text-sm sm:text-base text-[#434655]">
            Submit a simulated customer enquiry below to watch the LeadFlow AI qualification agent classify intent, evaluate score, and formulate WhatsApp automation.
          </p>
        </div>

        {/* Quick Persona Selector */}
        <div className="max-w-4xl mx-auto mb-8 bg-[#eff4ff] p-3 rounded-2xl border border-neutral-200/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-semibold text-[#0b1c30] flex items-center gap-1.5 shrink-0">
            <span className="material-symbols-outlined text-primary-container text-base">auto_fix_high</span>
            Quick Load Presets:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {INDUSTRY_PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => handleApplyPreset(preset)}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-white text-[#0b1c30] hover:bg-neutral-50 hover:border-primary-container border border-neutral-200 transition-all cursor-pointer shadow-xs flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm text-primary-container">{preset.icon}</span>
                <span>{preset.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-neutral-200/80">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-100">
              <div>
                <h3 className="text-lg font-semibold text-[#0b1c30]">Simulated Customer Lead</h3>
                <p className="text-xs text-[#434655]">Fill details as an interested customer</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-[#004ac6] font-medium bg-[#dae2fd]/50 px-2.5 py-1 rounded-full">
                Live Input
              </span>
            </div>

            <form onSubmit={handleSimulateSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#0b1c30] mb-1.5" htmlFor="demo-name">
                  Full Name
                </label>
                <input
                  id="demo-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg bg-[#eff4ff] text-[#0b1c30] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all border border-neutral-200/70"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-xs font-medium text-[#0b1c30] mb-1.5" htmlFor="demo-code">
                    Code
                  </label>
                  <select
                    id="demo-code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-10 px-2 rounded-lg bg-[#eff4ff] text-[#0b1c30] text-sm focus:bg-white focus:outline-none border border-neutral-200/70 cursor-pointer"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+971">🇦🇪 +971</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-medium text-[#0b1c30] mb-1.5" htmlFor="demo-phone">
                    Phone Number
                  </label>
                  <input
                    id="demo-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg bg-[#eff4ff] text-[#0b1c30] text-sm focus:bg-white focus:outline-none border border-neutral-200/70"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#0b1c30] mb-1.5" htmlFor="demo-email">
                  Email Address
                </label>
                <input
                  id="demo-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg bg-[#eff4ff] text-[#0b1c30] text-sm focus:bg-white focus:outline-none border border-neutral-200/70"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#0b1c30] mb-1.5" htmlFor="demo-service">
                  Service Required
                </label>
                <select
                  id="demo-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg bg-[#eff4ff] text-[#0b1c30] text-sm focus:bg-white focus:outline-none border border-neutral-200/70 cursor-pointer"
                >
                  <option value="Dental Consultation">Dental Consultation</option>
                  <option value="Gym Membership">Gym & Personal Training</option>
                  <option value="IELTS / Exam Coaching">IELTS / Exam Coaching</option>
                  <option value="Private Clinic Checkup">Private Clinic Checkup</option>
                  <option value="Commercial HVAC Service">Commercial HVAC Service</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#0b1c30] mb-1.5" htmlFor="demo-message">
                  Customer Message / Enquiry
                </label>
                <textarea
                  id="demo-message"
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded-lg bg-[#eff4ff] text-[#0b1c30] text-sm focus:bg-white focus:outline-none resize-none border border-neutral-200/70 leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={isAnalyzing}
                className="w-full h-11 rounded-lg bg-primary-container text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#004ac6] shadow-sm transition-all cursor-pointer disabled:opacity-75"
              >
                {isAnalyzing ? (
                  <>
                    <span className="material-symbols-outlined text-lg animate-spin">sync</span>
                    <span>AI Agent Analyzing Message...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-lg">bolt</span>
                    <span>Submit Enquiry & Trigger AI</span>
                  </>
                )}
              </button>

              <p className="text-xs text-center text-[#737686]">
                ⚡ AI Analyzes & Formulates Response in &lt; 2 seconds
              </p>
            </form>
          </div>

          {/* Right Column: Live Output Preview */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-neutral-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-tertiary-container animate-pulse"></span>
                  <h3 className="text-lg font-semibold text-[#0b1c30]">AI Qualification Engine Simulation</h3>
                </div>
                <span className="text-xs text-tertiary-container font-semibold bg-[#eff4ff] px-3 py-1 rounded-full border border-green-200">
                  Analyzed in {analysisTime}
                </span>
              </div>

              {/* Dynamic Intelligence Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="bg-[#eff4ff] p-3 rounded-xl border border-neutral-200/50">
                  <span className="text-xs text-[#434655] block mb-1">Classification</span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-tertiary-container bg-white px-2 py-0.5 rounded-full shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span> {activeLead.status} LEAD
                  </span>
                </div>
                <div className="bg-[#eff4ff] p-3 rounded-xl border border-neutral-200/50">
                  <span className="text-xs text-[#434655] block mb-1">Intent Score</span>
                  <span className="text-lg text-[#0b1c30] font-bold tabular-nums">
                    {activeLead.score} / 100
                  </span>
                </div>
                <div className="bg-[#eff4ff] p-3 rounded-xl border border-neutral-200/50">
                  <span className="text-xs text-[#434655] block mb-1">Priority</span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#ba1a1a] bg-[#ffdad6]/60 px-2 py-0.5 rounded-full">
                    {activeLead.priority}
                  </span>
                </div>
                <div className="bg-[#eff4ff] p-3 rounded-xl border border-neutral-200/50">
                  <span className="text-xs text-[#434655] block mb-1">Follow-up</span>
                  <span className="text-xs font-semibold text-[#004ac6]">{activeLead.followUp}</span>
                </div>
              </div>

              {/* Extracted Parameter Matrix */}
              <div className="bg-[#eff4ff] p-4 rounded-xl mb-6 space-y-2 border border-neutral-200/50">
                <div className="text-xs uppercase font-semibold text-[#434655] mb-2 flex items-center justify-between">
                  <span>Extracted Parameter Matrix</span>
                  <span className="text-[11px] text-[#007d55] font-medium">Auto Entity Extraction</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-white px-2.5 py-1 rounded-md text-[#0b1c30] font-medium shadow-xs border border-neutral-200/60">
                    👤 {activeLead.name}
                  </span>
                  <span className="bg-white px-2.5 py-1 rounded-md text-[#0b1c30] font-medium shadow-xs border border-neutral-200/60">
                    🦷 Service: {activeLead.service}
                  </span>
                  <span className="bg-white px-2.5 py-1 rounded-md text-[#0b1c30] font-medium shadow-xs border border-neutral-200/60">
                    📅 Target: {activeLead.targetTime}
                  </span>
                  <span className="bg-white px-2.5 py-1 rounded-md text-[#ba1a1a] font-medium shadow-xs border border-neutral-200/60">
                    🚨 Urgency: {activeLead.urgency}
                  </span>
                </div>
              </div>

              {/* Simulated WhatsApp Message Dispatched */}
              <div className="bg-[#e5eeff] p-4 rounded-xl mb-6 border border-blue-200">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-semibold text-tertiary-container flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">chat</span> Instant WhatsApp Outbound Dispatched
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#737686]">Sent just now</span>
                    <button
                      type="button"
                      onClick={handleCopyWhatsapp}
                      className="text-[#004ac6] hover:underline font-medium cursor-pointer"
                    >
                      {copiedMsg ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
                <div className="bg-white p-3.5 rounded-xl shadow-xs text-[#0b1c30] text-xs sm:text-sm leading-relaxed border border-neutral-200/60">
                  {activeLead.whatsappMessage}
                </div>
              </div>
            </div>

            {/* Notification Feedback Bar */}
            <div className="flex items-center justify-between bg-[#dae2fd]/40 p-3 rounded-lg text-[#0b1c30] text-xs sm:text-sm border border-[#dae2fd]">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container text-base">task_alt</span>
                <span>CRM Record updated & Doctor schedule reserved.</span>
              </span>
              <span className="text-xs text-[#004ac6] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#007d55]"></span> Synced
              </span>
            </div>

            {successToast && (
              <div className="mt-3 p-2.5 rounded-lg bg-[#007d55] text-white text-xs font-medium flex items-center justify-between animate-in fade-in slide-in-from-top duration-150">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  Lead #{activeLead.id} added to live pipeline dashboard below!
                </span>
                <span className="text-[11px] opacity-80">Synced to CRM</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
