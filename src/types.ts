export type LeadStatus = 'HOT' | 'WARM' | 'INFORMATION';
export type PriorityLevel = 'HIGH' | 'MEDIUM' | 'STANDARD';

export interface Lead {
  id: string;
  name: string;
  code: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  status: LeadStatus;
  score: number;
  priority: PriorityLevel;
  followUp: string;
  detectedIntent: string;
  urgency: string;
  targetTime: string;
  aiInsight: string;
  whatsappMessage: string;
  createdAt: string;
  stage: 'inbound' | 'qualified' | 'dispatched' | 'booked';
}

export interface LiveFeedItem {
  id: string;
  title: string;
  meta: string;
  icon: string;
  iconColor: string;
  timestamp: string;
}

export interface IndustryPreset {
  id: string;
  title: string;
  icon: string;
  description: string;
  sampleQuery: string;
  service: string;
  defaultLead: {
    name: string;
    phone: string;
    email: string;
    service: string;
    message: string;
  };
}
