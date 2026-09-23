import React, { useState } from 'react';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [date, setDate] = useState('Tomorrow');
  const [time, setTime] = useState('11:30 AM');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [volume, setVolume] = useState('100 - 500 leads/mo');
  const [isBooked, setIsBooked] = useState(false);

  const dates = ['Tomorrow', 'Thursday', 'Friday', 'Next Monday'];
  const times = ['10:00 AM', '11:30 AM', '2:00 PM', '3:30 PM', '5:00 PM'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 p-6 sm:p-8">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
          <div>
            <span className="text-xs uppercase font-semibold text-primary-container">
              1-on-1 Product Tour
            </span>
            <h3 className="text-xl font-bold text-[#0b1c30]">Schedule LeadFlow Demo</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg text-neutral-600">close</span>
          </button>
        </div>

        {isBooked ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-100 text-[#007d55] flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-3xl">task_alt</span>
            </div>
            <h4 className="text-xl font-bold text-[#0b1c30]">Demo Confirmed!</h4>
            <p className="text-xs sm:text-sm text-[#434655] max-w-sm mx-auto leading-relaxed">
              We've reserved <strong>{time} ({date})</strong> for <strong>{fullName || 'you'}</strong>. A calendar invite and Google Meet link have been sent to <strong>{email || 'your email'}</strong>.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-primary-container text-white text-xs font-semibold rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#0b1c30] mb-1.5">
                Select Date
              </label>
              <div className="grid grid-cols-4 gap-2">
                {dates.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDate(d)}
                    className={`py-2 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                      date === d
                        ? 'bg-primary-container text-white border-primary-container'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#0b1c30] mb-1.5">
                Select Time Slot (EST)
              </label>
              <div className="grid grid-cols-5 gap-1.5">
                {times.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTime(t)}
                    className={`py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                      time === t
                        ? 'bg-[#004ac6] text-white border-[#004ac6]'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[#0b1c30] mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Dr. Sarah Jenkins"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full h-9 px-3 text-xs bg-neutral-50 rounded-lg border border-neutral-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#0b1c30] mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@dentalpractice.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-9 px-3 text-xs bg-neutral-50 rounded-lg border border-neutral-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[#0b1c30] mb-1">
                  Business / Clinic Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="SmileCraft Health"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full h-9 px-3 text-xs bg-neutral-50 rounded-lg border border-neutral-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#0b1c30] mb-1">
                  Monthly Lead Volume
                </label>
                <select
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-full h-9 px-2 text-xs bg-neutral-50 rounded-lg border border-neutral-200 focus:bg-white focus:outline-none cursor-pointer"
                >
                  <option value="50 - 100 leads/mo">50 - 100 leads/mo</option>
                  <option value="100 - 500 leads/mo">100 - 500 leads/mo</option>
                  <option value="500 - 2,000 leads/mo">500 - 2,000 leads/mo</option>
                  <option value="2,000+ leads/mo">2,000+ leads/mo</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full h-10 rounded-lg bg-primary-container text-white text-xs font-semibold hover:bg-blue-600 transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">calendar_month</span>
                <span>Confirm Walkthrough Session</span>
              </button>
              <p className="text-[11px] text-center text-neutral-400 mt-2">
                Includes custom agent script setup tailored for your vertical.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
