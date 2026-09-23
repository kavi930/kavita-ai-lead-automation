import React, { useState } from 'react';
import { Lead } from '../types';
import { CHAT_TRANSCRIPTS } from '../data/mockData';

interface ChatTranscriptModalProps {
  lead: Lead | null;
  onClose: () => void;
}

export const ChatTranscriptModal: React.FC<ChatTranscriptModalProps> = ({ lead, onClose }) => {
  if (!lead) return null;

  const defaultTranscript = CHAT_TRANSCRIPTS[lead.id] || [
    { sender: 'lead', text: lead.message, time: '10:02 AM' },
    {
      sender: 'ai',
      text: `Hello ${lead.name.split(' ')[0]}! Welcome to our automated booking desk. We saw your inquiry for ${lead.service}.`,
      time: '10:02 AM'
    },
    {
      sender: 'ai',
      text: lead.whatsappMessage,
      time: '10:02 AM'
    },
    {
      sender: 'lead',
      text: 'Thanks! I see the booking link. Is there free parking available?',
      time: '10:04 AM'
    },
    {
      sender: 'ai',
      text: 'Yes, validated visitor parking is available directly behind our building on Level P1. Would you like me to lock in your appointment now?',
      time: '10:04 AM'
    }
  ];

  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'lead'; text: string; time: string }>>(defaultTranscript);
  const [newReply, setNewReply] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendProspectMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReply.trim()) return;

    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg = { sender: 'lead' as const, text: newReply, time: timeNow };
    setMessages((prev) => [...prev, userMsg]);
    setNewReply('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const aiReply = {
        sender: 'ai' as const,
        text: `Got it! I've updated your record with: "${userMsg.text}". Our coordinator will also have this note ready for your visit.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiReply]);
    }, 1100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-neutral-200">
        {/* WhatsApp Header */}
        <div className="bg-[#004ac6] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
              {lead.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-semibold text-sm">
                <span>{lead.name}</span>
                <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded">#{lead.id}</span>
              </div>
              <div className="text-xs text-blue-100 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                <span>LeadFlow AI WhatsApp Assistant Active</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Lead Intelligence Banner */}
        <div className="bg-[#eff4ff] px-4 py-2 text-xs border-b border-neutral-200/80 flex items-center justify-between text-[#0b1c30]">
          <span className="truncate">
            <strong>Service:</strong> {lead.service}
          </span>
          <span className="font-semibold text-tertiary-container bg-white px-2 py-0.5 rounded border border-neutral-200 shrink-0">
            Score: {lead.score}/100
          </span>
        </div>

        {/* Messages Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#f0f4f9]">
          <div className="text-center my-2">
            <span className="text-[11px] bg-white/80 px-2.5 py-1 rounded-full text-neutral-500 shadow-2xs">
              End-to-End Encrypted WhatsApp Channel
            </span>
          </div>

          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${m.sender === 'ai' ? 'items-start' : 'items-end'}`}
            >
              <div
                className={`max-w-[82%] p-3 rounded-2xl text-xs sm:text-[13px] leading-relaxed shadow-xs ${
                  m.sender === 'ai'
                    ? 'bg-white text-[#0b1c30] rounded-tl-xs border border-neutral-200/60'
                    : 'bg-[#dce9ff] text-[#004ac6] rounded-tr-xs font-medium'
                }`}
              >
                {m.sender === 'ai' && (
                  <div className="text-[10px] uppercase font-bold text-[#004ac6] mb-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">smart_toy</span> LeadFlow AI Agent
                  </div>
                )}
                <p>{m.text}</p>
                <div className="text-[10px] text-neutral-400 text-right mt-1.5 flex items-center justify-end gap-1">
                  <span>{m.time}</span>
                  {m.sender === 'ai' && (
                    <span className="material-symbols-outlined text-xs text-blue-600">done_all</span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-1.5 p-2 bg-white rounded-xl w-24 text-xs text-neutral-400 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:0.4s]"></span>
            </div>
          )}
        </div>

        {/* Interactive Reply Simulator Bar */}
        <form onSubmit={handleSendProspectMessage} className="p-3 bg-white border-t border-neutral-200 flex items-center gap-2">
          <input
            type="text"
            placeholder="Type customer reply to test agent response..."
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
            className="flex-1 px-3 py-2 text-xs sm:text-sm bg-neutral-100 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 border border-neutral-200"
          />
          <button
            type="submit"
            className="px-3.5 py-2 bg-primary-container text-white text-xs font-semibold rounded-lg hover:bg-blue-600 transition-colors cursor-pointer flex items-center gap-1 shrink-0"
          >
            <span>Simulate Reply</span>
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </form>
      </div>
    </div>
  );
};
