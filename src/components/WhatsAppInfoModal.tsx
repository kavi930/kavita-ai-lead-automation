import React from 'react';

interface WhatsAppInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTrySimulator: () => void;
}

export const WhatsAppInfoModal: React.FC<WhatsAppInfoModalProps> = ({
  isOpen,
  onClose,
  onTrySimulator
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 p-6 sm:p-8">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-green-100 text-[#007d55] flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">chat</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0b1c30]">WhatsApp Business Cloud API</h3>
              <p className="text-xs text-neutral-500">Official Meta Direct Integration</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg text-neutral-600">close</span>
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#434655] leading-relaxed">
          <p>
            LeadFlow.ai connects directly with Meta's official WhatsApp Business Cloud API to deliver ultra-fast lead responses without third-party delay or phone number suspensions.
          </p>

          <div className="bg-[#eff4ff] p-4 rounded-xl space-y-2 border border-neutral-200/70">
            <div className="font-semibold text-[#0b1c30] text-xs uppercase tracking-wider mb-1">
              Core Capabilities
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="material-symbols-outlined text-green-600 text-base">check_circle</span>
              <span><strong>Sub-15s Response Time:</strong> Engages prospective buyers while they are still on your website.</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="material-symbols-outlined text-green-600 text-base">check_circle</span>
              <span><strong>Interactive Calendar Buttons:</strong> Prospects can book or reschedule with a single tap inside WhatsApp.</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="material-symbols-outlined text-green-600 text-base">check_circle</span>
              <span><strong>Multi-Agent Fallback:</strong> Seamless handoff to human front desk when high-touch consultation is required.</span>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <span className="material-symbols-outlined text-green-600 text-base">check_circle</span>
              <span><strong>Automated Smart Nudges:</strong> Gentle reminders at 15m, 2h, and 24h intervals for unbooked leads.</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-neutral-500">Includes 2,500 complimentary conversations</span>
            <button
              type="button"
              onClick={() => {
                onClose();
                onTrySimulator();
              }}
              className="px-4 py-2 bg-primary-container text-white text-xs font-semibold rounded-lg hover:bg-blue-600 transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Test In Simulator</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
