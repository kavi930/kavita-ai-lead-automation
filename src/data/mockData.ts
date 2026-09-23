import { Lead, LiveFeedItem, IndustryPreset } from '../types';

export const INITIAL_LEADS: Lead[] = [
  {
    id: 'LD-8492',
    name: 'Rahul Sharma',
    code: '+91',
    phone: '98765 43210',
    email: 'rahul.sharma@example.com',
    service: 'Dental Consultation',
    message: 'Looking for teeth alignment consultation this Saturday morning. Mild pain on lower molar. Need urgent slot.',
    status: 'HOT',
    score: 96,
    priority: 'HIGH',
    followUp: 'In 15 Mins',
    detectedIntent: 'Appointment',
    urgency: 'Molar Discomfort',
    targetTime: 'Saturday Morning',
    aiInsight: 'Patient reports mild lower molar sensitivity; requesting Dr. Verma\'s clinic slot on Saturday 10:30 AM. Budget qualified for comprehensive scanning. Instant personalized WhatsApp booking dispatch generated.',
    whatsappMessage: 'Hi Rahul! Thanks for contacting Apex Dental. We noticed you\'re looking for a consultation regarding lower molar discomfort this Saturday morning. Dr. Verma has a VIP slot open at 10:30 AM. Tap below to confirm your visit in 5 seconds: https://leadflow.me/b/dr-v-sat',
    createdAt: 'Just now',
    stage: 'dispatched'
  },
  {
    id: 'LD-8491',
    name: 'Priya Sundaram',
    code: '+91',
    phone: '98123 45678',
    email: 'priya.s@example.com',
    service: 'Gym & Personal Training',
    message: 'Interested in joining morning Pilates and 3-day strength training pass. Looking for female personal trainer.',
    status: 'HOT',
    score: 94,
    priority: 'HIGH',
    followUp: 'In 20 Mins',
    detectedIntent: 'Membership & PT',
    urgency: 'Immediate Trial',
    targetTime: 'This Weekend',
    aiInsight: 'High-intent member requesting morning trainer consultation with female instructor. Guest pass link dispatched with slot reservations.',
    whatsappMessage: 'Hi Priya! Coach Maya has two slots for your complimentary 1-on-1 Pilates orientation this Saturday at 8:00 AM or 10:30 AM. Which one fits you best?',
    createdAt: '4m ago',
    stage: 'booked'
  },
  {
    id: 'LD-8490',
    name: 'Amit Verma',
    code: '+1',
    phone: '415 892 0192',
    email: 'amit.v@techcorp.io',
    service: 'IELTS / Exam Coaching',
    message: 'Planning for IELTS General exam in 6 weeks. Target band 8. Need details on weekend online batch.',
    status: 'WARM',
    score: 88,
    priority: 'MEDIUM',
    followUp: 'In 30 Mins',
    detectedIntent: 'Course Enrollment',
    urgency: 'Exam in 6 weeks',
    targetTime: 'Upcoming Weekend',
    aiInsight: 'Target band 8 aspirant with concrete timeline. Sent syllabus overview and invite to live diagnostic mock lecture.',
    whatsappMessage: 'Hi Amit! For your target Band 8 timeline, our Masterclass starts this Saturday at 11 AM EST. Here is the mock assessment link: https://leadflow.me/ielts-diag',
    createdAt: '12m ago',
    stage: 'qualified'
  },
  {
    id: 'LD-8489',
    name: 'David Reynolds',
    code: '+1',
    phone: '212 555 8901',
    email: 'david.reynolds@nycclinic.com',
    service: 'Commercial HVAC Service',
    message: 'Main rooftop cooling unit in our Midtown office is blowing warm air since 2pm. Need emergency service call.',
    status: 'HOT',
    score: 98,
    priority: 'HIGH',
    followUp: 'In 5 Mins',
    detectedIntent: 'Emergency Repair',
    urgency: 'Severe Overheating',
    targetTime: 'Today / Within 2 Hours',
    aiInsight: 'Commercial emergency breakdown. Alert dispatched to on-call senior HVAC technician team for midtown zip code.',
    whatsappMessage: 'Hello David, our emergency commercial technician team has been notified for your Midtown unit. Dispatch ETA is 45 minutes. Direct tech line: +1-212-555-0199',
    createdAt: '25m ago',
    stage: 'inbound'
  }
];

export const INITIAL_FEED: LiveFeedItem[] = [
  {
    id: 'feed-1',
    title: 'Priya S. confirmed Saturday Pilates',
    meta: 'Booked via WhatsApp · Just now',
    icon: 'chat',
    iconColor: 'text-primary',
    timestamp: 'Just now'
  },
  {
    id: 'feed-2',
    title: 'Dr. Roy qualified Implant Lead',
    meta: 'Tag: $1,200 High Budget · 3m ago',
    icon: 'dentistry',
    iconColor: 'text-tertiary-container',
    timestamp: '3m ago'
  },
  {
    id: 'feed-3',
    title: 'Drip Sequence #2 sent to Amit V.',
    meta: 'Opened within 4 minutes · 11m ago',
    icon: 'mail',
    iconColor: 'text-secondary',
    timestamp: '11m ago'
  },
  {
    id: 'feed-4',
    title: 'Summit Academy booked 4 Demos',
    meta: 'Batch Admissions · 24m ago',
    icon: 'contact_phone',
    iconColor: 'text-primary-container',
    timestamp: '24m ago'
  }
];

export const INDUSTRY_PRESETS: IndustryPreset[] = [
  {
    id: 'clinics',
    title: 'Clinics & Healthcare',
    icon: 'local_hospital',
    description: 'HIPAA-ready secure intake, doctor schedule coordination, triage question assessment, and insurance acceptance queries.',
    sampleQuery: '"Do you accept Aetna? Can I book Dr. Mehra tomorrow afternoon?"',
    service: 'Private Clinic Checkup',
    defaultLead: {
      name: 'Elena Rostova',
      phone: '98450 12390',
      email: 'elena.rostova@healthmail.com',
      service: 'Private Clinic Checkup',
      message: 'Need general cardiology checkup tomorrow afternoon. Have recurring mild palpitation. Do you accept BlueCross insurance?'
    }
  },
  {
    id: 'dental',
    title: 'Dental Practices',
    icon: 'dentistry',
    description: 'Cosmetic vs. emergency triage tagging, tooth pain urgency filtering, aligner lead screening, and treatment cost ranges.',
    sampleQuery: '"How much do invisible braces cost? Do you offer free consultations?"',
    service: 'Dental Consultation',
    defaultLead: {
      name: 'Rahul Sharma',
      phone: '98765 43210',
      email: 'rahul.sharma@example.com',
      service: 'Dental Consultation',
      message: 'Looking for teeth alignment consultation this Saturday morning. Mild pain on lower molar. Need urgent slot.'
    }
  },
  {
    id: 'gyms',
    title: 'Gyms & Fitness Centers',
    icon: 'fitness_center',
    description: 'Instant free guest pass issuance, personal training goals discovery, group class timetable booking, and tier recommendations.',
    sampleQuery: '"I want a 3-day pass for weight training and morning HIIT classes."',
    service: 'Gym Membership',
    defaultLead: {
      name: 'Kavita Grover',
      phone: '97112 88401',
      email: 'kavita.grover@fitlife.co',
      service: 'Gym Membership',
      message: 'Want to activate a 3-day guest pass for functional training and morning spin classes. Can I tour tomorrow at 7 AM?'
    }
  },
  {
    id: 'coaching',
    title: 'Coaching & Test Prep',
    icon: 'school',
    description: 'Target exam evaluation (IELTS, GRE, NEET, SAT), batch start date sharing, demo lecture reservation, and fee breakdowns.',
    sampleQuery: '"What is the weekend schedule for IELTS academic batch starting next month?"',
    service: 'IELTS / Exam Coaching',
    defaultLead: {
      name: 'Arjun Nambiar',
      phone: '98201 55642',
      email: 'arjun.nambiar@prepmail.org',
      service: 'IELTS / Exam Coaching',
      message: 'Aiming for 7.5 band in IELTS Academic. Need fees breakdown and schedule for upcoming weekend crash batch.'
    }
  },
  {
    id: 'education',
    title: 'Educational Institutes',
    icon: 'account_balance',
    description: 'Prospective parent queries, campus visit coordination, scholarship criteria questions, and application deadline notifications.',
    sampleQuery: '"Can I schedule a school campus walkthrough for Grade 6 admissions?"',
    service: 'Private Clinic Checkup',
    defaultLead: {
      name: 'Sunita Mehra',
      phone: '98104 33219',
      email: 'sunita.mehra@familycorp.in',
      service: 'Private Clinic Checkup',
      message: 'Parent looking for Grade 6 CBSE admission. Can we schedule a campus tour and interaction with the academic head this Friday?'
    }
  },
  {
    id: 'hvac',
    title: 'Local Service Operators',
    icon: 'plumbing',
    description: 'HVAC, electrical, and commercial cleaning dispatch. Location serviceability checks, emergency surcharge disclosure, and quoting.',
    sampleQuery: '"My AC stopped cooling in Sector 48. Do you have a technician today?"',
    service: 'Commercial HVAC Service',
    defaultLead: {
      name: 'Vikram Seth',
      phone: '99200 44102',
      email: 'vikram.seth@cleanproperty.com',
      service: 'Commercial HVAC Service',
      message: 'Commercial central AC compressor failed on 3rd floor office. Needs urgent diagnostic visit before afternoon meetings.'
    }
  }
];

export const TESTIMONIALS = [
  {
    quote: '"Our weekend appointment bookings increased by 42%. The AI qualifies treatment requests and locks in patient calendar slots before our front desk even opens on Monday morning."',
    name: 'Dr. Ananya Sen',
    role: 'Principal Dentist, SmileCraft Clinic',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNk4cH_PBJ6t_nfm-jn08NeI4USCkkM9PMetWr-4Y34qDwpvV3wzej-BXs_xJ14TPBd-dD5qLQSAvHVP2dSZBo4WrcQVTRHYu2nZ9bhdiQjq0-sxzHwkKGNAbn-UPQ4Y4ht21XglQ_PHscm4GejshDxScKt3Tn2Y3WAbmGDXI2YylZJIAMbAyLttK3dS0phAEYbwQ3NSa3-ALsIXsEQVO7idtefDsTE68KQz18X8QDUfuIS7Dw17ED',
    highlight: '+42% Weekend Appointments'
  },
  {
    quote: '"Lead response time dropped from 4 hours to 22 seconds. Our conversion from initial website enquiry to paid trial pass jumped 3x. It pays for itself fifty times over every month."',
    name: 'Marcus Vance',
    role: 'Managing Director, Pulse Athletic Club',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAed6rd4kUX8b8T0A3_Oj0ritku3HsU4Cp-2Zug3vPnBGidiMV6msnRZKWkVeC8dlURMVJMDXnlkhOTtN-OnAZuQkwryp_zTiN1RE1hVnjDqhO2wONaxvIFbDZNhY71TRBSDdb2gyk28Izb079ZaP4lP_N6fnAgqo8vsdsaFNIIv5LYyR4tshuAJYzeBNFoHTpuH2rxC_l-OrbWKLS6s5uLGVw4UVECHG4MhycL5axO1-9KhY5McVEq',
    highlight: '22s Response Time & 3x Conversion'
  },
  {
    quote: '"Managing 2,000+ admission inquiries was pure chaos. LeadFlow automatically filters genuine aspirants, checks eligibility, and books counseling sessions without losing a single student."',
    name: 'Rajesh Kulkarni',
    role: 'Founder, Apex IIT & NEET Coaching',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0T-1niMRuftxf8oFD3W_ZmjYOpGnK-WYaqhT3KffXLJV6qFyLpo1M5dxx_CfyhkgIt_vm7Fd9VXWnc1esmqJYd3pEW9iDKCYjS_LJpo-6o1iiu-ORWbZMlDMYyVNvX5OJze_bd5Rc6ZSQA3oeunlGVLT6KJsZEEVtuAlB-CUUYD0-9cXeLRHwNDPQHpxSg20qY0POvWhpF1kMGfEcrpHmf1oBYFSykoR0YYzzLJ9QTbdnQYT4xFbY',
    highlight: 'Zero Lead Leakage Across 2,000+ Students'
  }
];

export const CHAT_TRANSCRIPTS: Record<string, Array<{ sender: 'ai' | 'lead'; text: string; time: string }>> = {
  'LD-8492': [
    { sender: 'lead', text: 'Hi, I need an appointment for teeth alignment consultation this Saturday. Having molar discomfort too.', time: '10:14 AM' },
    { sender: 'ai', text: 'Hello Rahul! Welcome to Apex Dental. I can certainly help you schedule with Dr. Verma this Saturday.', time: '10:14 AM' },
    { sender: 'ai', text: 'Since you mentioned molar discomfort, we can reserve a 30-minute priority exam slot that includes digital 3D dental imaging at no extra charge.', time: '10:14 AM' },
    { sender: 'lead', text: 'That would be great. Is 10:30 AM available?', time: '10:15 AM' },
    { sender: 'ai', text: 'Yes, 10:30 AM is open! I have provisionally reserved it for you. Tap this secure link to confirm with one click: https://leadflow.me/b/dr-v-sat', time: '10:15 AM' },
    { sender: 'lead', text: 'Confirmed! See you Saturday.', time: '10:16 AM' },
    { sender: 'ai', text: 'You are all set, Rahul! We sent an SMS and calendar invite with parking instructions. Feel free to reply here if you have any questions before your visit.', time: '10:16 AM' }
  ]
};
