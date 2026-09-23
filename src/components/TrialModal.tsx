import React, { useState } from 'react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTrialStarted?: (company: string) => void;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose, onTrialStarted }) => {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [bizName, setBizName] = useState('');
  const [category, setCategory] = useState('Dental & Healthcare');
  const [channels, setChannels] = useState<string[]>(['WhatsApp Business API', 'Website Form Webhook']);
  const [calendar, setCalendar] = useState('Google Calendar');
  const [success, setSuccess] = useState(false);

  const toggleChannel = (ch: string) => {
    if (channels.includes(ch)) {
      setChannels(channels.filter(c => c !== ch));
    } else {
      setChannels([...channels, ch]);
    }
  };

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    if (onTrialStarted && bizName.trim()) {
      onTrialStarted(bizName.trim());
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 p-6 sm:p-8">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
          <div>
            <span className="text-xs uppercase font-semibold text-tertiary-container">
              14-Day Free Trial Setup
            </span>
            <h3 className="text-xl font-bold text-[#0b1c30]">Start Without a Credit Card</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg text-neutral-600">close</span>
          </button>
        </div>

        {/* Progress Steps */}
        {!success && (
          <div className="flex items-center justify-between mb-6">
            <div className={`flex items-center gap-2 text-xs font-semibold ${step >= 1 ? 'text-[#004ac6]' : 'text-neutral-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-primary-container text-white' : 'bg-neutral-200'}`}>1</span>
              <span>Profile</span>
            </div>
            <div className="w-8 h-0.5 bg-neutral-200"></div>
            <div className={`flex items-center gap-2 text-xs font-semibold ${step >= 2 ? 'text-[#004ac6]' : 'text-neutral-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-primary-container text-white' : 'bg-neutral-200'}`}>2</span>
              <span>Channels</span>
            </div>
            <div className="w-8 h-0.5 bg-neutral-200"></div>
            <div className={`flex items-center gap-2 text-xs font-semibold ${step >= 3 ? 'text-[#004ac6]' : 'text-neutral-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-primary-container text-white' : 'bg-neutral-200'}`}>3</span>
              <span>Sync</span>
            </div>
          </div>
        )}

        {success ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-100 text-[#007d55] flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-3xl">verified</span>
            </div>
            <h4 className="text-xl font-bold text-[#0b1c30]">Your Workspace is Ready!</h4>
            <p className="text-xs sm:text-sm text-[#434655] max-w-sm mx-auto leading-relaxed">
              We've provisioned the AI qualification agent for <strong>{bizName || 'Your Business'}</strong>. The 14-day trial has begun with 2,500 complimentary message tokens.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-primary-container text-white text-xs font-semibold rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
              >
                Go to Live Dashboard
              </button>
            </div>
          </div>
        ) : (
          <div>
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#0b1c30] mb-1">
                    Practice / Business Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Health Clinic"
                    value={bizName}
                    onChange={(e) => setBizName(e.target.value)}
                    className="w-full h-10 px-3 text-xs bg-neutral-50 rounded-lg border border-neutral-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#0b1c30] mb-1">
                    Industry Vertical
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full h-10 px-2 text-xs bg-neutral-50 rounded-lg border border-neutral-200 focus:bg-white focus:outline-none cursor-pointer"
                  >
                    <option value="Dental & Healthcare">Dental & Healthcare</option>
                    <option value="Gym & Fitness Club">Gym & Fitness Club</option>
                    <option value="Test Prep & Tutoring">Test Prep & Tutoring</option>
                    <option value="Home & Commercial Services">Home & Commercial Services</option>
                    <option value="Other Commercial Service">Other Commercial Service</option>
                  </select>
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    disabled={!bizName.trim()}
                    onClick={() => setStep(2)}
                    className="w-full h-10 bg-primary-container text-white text-xs font-semibold rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    Next: Connect Channels →
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-3">
                <p className="text-xs text-neutral-600 mb-2">
                  Select which customer touchpoints your AI agent should listen to:
                </p>
                {[
                  'WhatsApp Business API',
                  'Website Form Webhook',
                  'Google Business Messages',
                  'Facebook & Instagram Lead Ads'
                ].map((channel) => (
                  <div
                    key={channel}
                    onClick={() => toggleChannel(channel)}
                    className={`p-3 rounded-lg border text-xs flex items-center justify-between cursor-pointer transition-all ${
                      channels.includes(channel)
                        ? 'bg-[#eff4ff] border-primary-container text-[#0b1c30] font-semibold'
                        : 'bg-neutral-50 border-neutral-200 text-neutral-600'
                    }`}
                  >
                    <span>{channel}</span>
                    <span className="material-symbols-outlined text-sm">
                      {channels.includes(channel) ? 'check_box' : 'check_box_outline_blank'}
                    </span>
                  </div>
                ))}
                <div className="pt-3 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 h-9 border border-neutral-200 text-xs font-medium rounded-lg"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 h-9 bg-primary-container text-white text-xs font-semibold rounded-lg"
                  >
                    Next: Sync Calendar →
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <p className="text-xs text-neutral-600 mb-2">
                  Select where confirmed slots will be booked:
                </p>
                <div className="space-y-2">
                  {['Google Calendar', 'Calendly / Acuity', 'Microsoft Outlook 365'].map((cal) => (
                    <label
                      key={cal}
                      className={`flex items-center gap-2.5 p-3 rounded-lg border text-xs cursor-pointer ${
                        calendar === cal ? 'bg-[#eff4ff] border-primary-container font-semibold' : 'bg-neutral-50 border-neutral-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name="calendar"
                        checked={calendar === cal}
                        onChange={() => setCalendar(cal)}
                        className="text-primary-container"
                      />
                      <span>{cal}</span>
                    </label>
                  ))}
                </div>
                <div className="pt-3 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 h-9 border border-neutral-200 text-xs font-medium rounded-lg"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleFinish}
                    className="flex-1 h-9 bg-[#007d55] text-white text-xs font-semibold rounded-lg hover:bg-green-700 shadow-sm"
                  >
                    Activate 14-Day Trial 🚀
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
