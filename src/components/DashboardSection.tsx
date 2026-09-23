import React, { useState } from 'react';
import { Lead, LiveFeedItem } from '../types';

interface DashboardSectionProps {
  leads: Lead[];
  activeLead: Lead;
  onSelectLead: (lead: Lead) => void;
  feed: LiveFeedItem[];
  onOpenChatTranscript: (lead: Lead) => void;
  onApproveSlot: (lead: Lead) => void;
}

export const DashboardSection: React.FC<DashboardSectionProps> = ({
  leads,
  activeLead,
  onSelectLead,
  feed,
  onOpenChatTranscript,
  onApproveSlot
}) => {
  const [viewMode, setViewMode] = useState<'dossier' | 'pipeline'>('dossier');
  const [slotApproved, setSlotApproved] = useState(false);
  const [exportToast, setExportToast] = useState(false);

  const handleApprove = () => {
    setSlotApproved(true);
    onApproveSlot(activeLead);
    setTimeout(() => setSlotApproved(false), 3500);
  };

  const handleExportCRM = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(activeLead, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `Lead_${activeLead.id}_${activeLead.name.replace(/\s+/g, '_')}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    setExportToast(true);
    setTimeout(() => setExportToast(false), 2500);
  };

  // Get initials
  const initials = activeLead.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const stages = [
    { key: 'inbound', label: 'Inbound Captured', count: leads.filter((l) => l.stage === 'inbound').length },
    { key: 'qualified', label: 'AI Qualified', count: leads.filter((l) => l.stage === 'qualified').length },
    { key: 'dispatched', label: 'WhatsApp Sent', count: leads.filter((l) => l.stage === 'dispatched').length },
    { key: 'booked', label: 'Booked', count: leads.filter((l) => l.stage === 'booked').length }
  ];

  return (
    <section id="analytics-dashboard" className="w-full py-20 bg-[#eff4ff]/60 border-t border-b border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-semibold tracking-wider text-[#004ac6] px-3 py-1 rounded-full bg-[#dae2fd]/70 inline-block">
            Executive Control
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0b1c30] font-bold tracking-tight mt-3 mb-4">
            AI Lead Dossier & Real-Time Pipeline Dashboard
          </h2>
          <p className="text-sm sm:text-base text-[#434655]">
            Complete end-to-end visibility. Every prospect categorized, scored, and nudged without adding administrative overhead.
          </p>
        </div>

        {/* 4 High Impact Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {/* Metric 1 */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-neutral-200/70 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between text-[#434655] mb-2">
              <span className="text-xs font-medium">New Leads</span>
              <span className="material-symbols-outlined text-primary-container text-xl">person_add</span>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-[#0b1c30] tabular-nums">1,284</span>
              <span className="text-xs text-[#007d55] font-semibold">+24% wk</span>
            </div>
            <p className="text-xs text-[#737686]">Omnichannel capture volume</p>
          </div>

          {/* Metric 2 */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-neutral-200/70 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between text-[#434655] mb-2">
              <span className="text-xs font-medium">AI Qualified</span>
              <span className="material-symbols-outlined text-tertiary-container text-xl">smart_toy</span>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-[#0b1c30] tabular-nums">1,142</span>
              <span className="text-xs text-[#007d55] font-semibold">88.9% rate</span>
            </div>
            <p className="text-xs text-[#737686]">Processed fully autonomously</p>
          </div>

          {/* Metric 3 */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-neutral-200/70 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between text-[#434655] mb-2">
              <span className="text-xs font-medium">Hot Leads</span>
              <span className="material-symbols-outlined text-[#ba1a1a] text-xl">local_fire_department</span>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-[#0b1c30] tabular-nums">438</span>
              <span className="text-xs text-[#ba1a1a] font-semibold">High Intent</span>
            </div>
            <p className="text-xs text-[#737686]">Ready to buy & book slots</p>
          </div>

          {/* Metric 4 */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-neutral-200/70 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between text-[#434655] mb-2">
              <span className="text-xs font-medium">Appointments</span>
              <span className="material-symbols-outlined text-primary-container text-xl">calendar_month</span>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-[#0b1c30] tabular-nums">312</span>
              <span className="text-xs text-[#004ac6] font-semibold">Via WhatsApp</span>
            </div>
            <p className="text-xs text-[#737686]">Confirmed on live calendars</p>
          </div>
        </div>

        {/* View Switcher Controls */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-neutral-200 shadow-xs">
            <button
              onClick={() => setViewMode('dossier')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'dossier'
                  ? 'bg-primary-container text-white shadow-xs'
                  : 'text-[#434655] hover:text-[#0b1c30]'
              }`}
            >
              <span className="material-symbols-outlined text-sm">badge</span>
              Lead Dossier View
            </button>
            <button
              onClick={() => setViewMode('pipeline')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'pipeline'
                  ? 'bg-primary-container text-white shadow-xs'
                  : 'text-[#434655] hover:text-[#0b1c30]'
              }`}
            >
              <span className="material-symbols-outlined text-sm">view_kanban</span>
              Pipeline Kanban Board
            </button>
          </div>

          <div className="text-xs text-neutral-500 hidden sm:flex items-center gap-2">
            <span>Recent Leads ({leads.length}):</span>
            <div className="flex items-center gap-1">
              {leads.slice(0, 4).map((l) => (
                <button
                  key={l.id}
                  onClick={() => onSelectLead(l)}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium border cursor-pointer ${
                    activeLead.id === l.id
                      ? 'bg-[#dce9ff] text-[#004ac6] border-blue-300 font-semibold'
                      : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'
                  }`}
                >
                  {l.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dossier & Activity Split OR Kanban */}
        {viewMode === 'dossier' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Lead Dossier Card */}
            <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-neutral-200/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-neutral-100 gap-3">
                <div>
                  <div className="text-xs uppercase font-semibold text-[#004ac6]">
                    Lead Dossier #{activeLead.id}
                  </div>
                  <h3 className="text-lg font-semibold text-[#0b1c30]">
                    Real-Time AI Classification Record
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e5eeff] text-xs text-[#007d55] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#007d55] animate-ping"></span> Live Agent Active
                  </span>
                </div>
              </div>

              {/* Lead Demographics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-[#eff4ff] p-3.5 rounded-xl border border-neutral-200/60">
                  <span className="text-xs text-[#737686] block mb-1 font-medium">Lead Name</span>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#0b1c30]">
                    <div className="w-6 h-6 rounded-full bg-primary-container text-white flex items-center justify-center text-xs font-semibold">
                      {initials}
                    </div>
                    <span className="truncate">{activeLead.name}</span>
                  </div>
                </div>

                <div className="bg-[#eff4ff] p-3.5 rounded-xl border border-neutral-200/60">
                  <span className="text-xs text-[#737686] block mb-1 font-medium">Service Requested</span>
                  <div className="text-sm font-semibold text-[#0b1c30] flex items-center gap-1.5 truncate">
                    <span className="material-symbols-outlined text-[#004ac6] text-base">dentistry</span>
                    <span className="truncate">{activeLead.service}</span>
                  </div>
                </div>

                <div className="bg-[#eff4ff] p-3.5 rounded-xl border border-neutral-200/60">
                  <span className="text-xs text-[#737686] block mb-1 font-medium">Detected Intent</span>
                  <div className="text-sm font-semibold text-[#0b1c30] flex items-center gap-1.5 truncate">
                    <span className="material-symbols-outlined text-tertiary-container text-base">target</span>
                    <span>{activeLead.detectedIntent}</span>
                  </div>
                </div>

                <div className="bg-[#eff4ff] p-3.5 rounded-xl border border-neutral-200/60">
                  <span className="text-xs text-[#737686] block mb-1 font-medium">Lead Status</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white text-xs text-tertiary-container font-bold shadow-xs border border-neutral-200/60">
                    🔥 {activeLead.status} LEAD
                  </span>
                </div>

                <div className="bg-[#eff4ff] p-3.5 rounded-xl border border-neutral-200/60">
                  <span className="text-xs text-[#737686] block mb-1 font-medium">Priority Level</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ffdad6] text-[#ba1a1a] text-xs font-bold">
                    {activeLead.priority} PRIORITY
                  </span>
                </div>

                <div className="bg-[#eff4ff] p-3.5 rounded-xl border border-neutral-200/60">
                  <span className="text-xs text-[#737686] block mb-1 font-medium">Follow-up Cadence</span>
                  <span className="inline-flex items-center gap-1 text-xs text-amber-700 font-semibold">
                    <span className="material-symbols-outlined text-sm">schedule</span> Sched. {activeLead.followUp}
                  </span>
                </div>
              </div>

              {/* AI Extracted Insights Box */}
              <div className="bg-[#dae2fd]/30 p-4 rounded-xl mb-6 border border-blue-200/80">
                <div className="flex items-center gap-2 mb-2 text-[#004ac6] text-sm font-semibold">
                  <span className="material-symbols-outlined text-base">psychology</span>
                  <span>AI Synthesized Intelligence</span>
                </div>
                <p className="text-xs sm:text-sm text-[#0b1c30] leading-relaxed">
                  "{activeLead.aiInsight}"
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleApprove}
                  className={`h-10 px-4 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
                    slotApproved
                      ? 'bg-[#007d55] text-white'
                      : 'bg-primary-container text-white hover:bg-[#004ac6]'
                  }`}
                >
                  <span className="material-symbols-outlined text-base">
                    {slotApproved ? 'check' : 'check_circle'}
                  </span>
                  {slotApproved ? 'WhatsApp Slot Approved & Synced!' : 'Approve WhatsApp Slot'}
                </button>

                <button
                  onClick={() => onOpenChatTranscript(activeLead)}
                  className="h-10 px-4 rounded-lg bg-[#eff4ff] text-[#0b1c30] text-xs sm:text-sm font-medium hover:bg-[#dce9ff] transition-all flex items-center gap-1.5 border border-neutral-200/70 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">visibility</span>
                  View Chat Transcript
                </button>

                <button
                  onClick={handleExportCRM}
                  className="h-10 px-4 rounded-lg bg-[#eff4ff] text-[#0b1c30] text-xs sm:text-sm font-medium hover:bg-[#dce9ff] transition-all flex items-center gap-1.5 border border-neutral-200/70 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">cloud_upload</span>
                  {exportToast ? 'Exported JSON!' : 'Export to CRM'}
                </button>
              </div>
            </div>

            {/* Live Activity Stream */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-neutral-200/80">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
                <h3 className="text-base font-semibold text-[#0b1c30]">Live Automation Feed</h3>
                <span className="w-2 h-2 rounded-full bg-tertiary-container animate-ping"></span>
              </div>

              <div className="space-y-4">
                {feed.map((item) => (
                  <div key={item.id} className="flex gap-3 items-start pb-3 border-b border-neutral-100 last:border-0">
                    <div className="w-8 h-8 rounded-full bg-[#eff4ff] flex items-center justify-center shrink-0 text-primary-container border border-neutral-200/60">
                      <span className="material-symbols-outlined text-sm">{item.icon}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-[#0b1c30] truncate">{item.title}</p>
                      <p className="text-[11px] text-[#737686] mt-0.5">{item.meta}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 bg-[#eff4ff] p-3.5 rounded-xl text-center border border-neutral-200/60">
                <span className="text-xs text-[#004ac6] font-semibold flex items-center justify-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#007d55] animate-pulse"></span>
                  99.8% Agent Uptime Active
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* Kanban Board View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {stages.map((stage) => {
              const stageLeads = leads.filter((l) => l.stage === stage.key);
              return (
                <div key={stage.key} className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-200/80 flex flex-col">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-100">
                    <span className="text-xs font-bold text-[#0b1c30]">{stage.label}</span>
                    <span className="text-xs bg-[#eff4ff] text-[#004ac6] font-semibold px-2 py-0.5 rounded-full">
                      {stageLeads.length}
                    </span>
                  </div>
                  <div className="space-y-3 min-h-[220px]">
                    {stageLeads.map((l) => (
                      <div
                        key={l.id}
                        onClick={() => onSelectLead(l)}
                        className={`p-3.5 rounded-xl border text-xs transition-all cursor-pointer ${
                          activeLead.id === l.id
                            ? 'bg-[#eff4ff] border-primary-container ring-1 ring-primary-container/20'
                            : 'bg-neutral-50/70 border-neutral-200/70 hover:bg-white hover:shadow-xs'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-semibold text-[#0b1c30] truncate">{l.name}</span>
                          <span className="text-[10px] font-bold text-[#007d55] bg-green-50 px-1.5 py-0.5 rounded">
                            {l.score}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-500 truncate mb-2">{l.service}</p>
                        <div className="flex items-center justify-between pt-1 border-t border-neutral-200/50 text-[10px] text-neutral-400">
                          <span>#{l.id}</span>
                          <span className="text-primary-container font-medium">Inspect →</span>
                        </div>
                      </div>
                    ))}
                    {stageLeads.length === 0 && (
                      <div className="h-32 border-2 border-dashed border-neutral-200 rounded-xl flex items-center justify-center text-xs text-neutral-400">
                        No leads in stage
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
