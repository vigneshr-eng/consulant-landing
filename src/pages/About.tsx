import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, Award, ShieldCheck, Globe, Clock, Terminal, 
  ArrowUpRight, Target, CheckCircle2, Milestone, CircleDot
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SOLUTIONS_DATA = [
  {
    id: 'trusted',
    title: 'Trusted Consulting Network',
    tagline: 'Vetted by experts, backed by security protocols.',
    description: 'Connect immediately with accredited professionals across 48+ business divisions. Benefit from unified secure communication channels built directly for responsive workspace environments.',
    snippets: [
      { author: 'Jacob Jones', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80', timeAgo: '1 min ago', message: 'You got the entire meeting conversation summarized perfectly.' },
      { author: 'Arlene McCoy', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80', timeAgo: '3 min ago', message: 'AI transcription loaded. All legal variables verified.' }
    ],
    images: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=600&auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'booking',
    title: 'Instant Expert Booking',
    tagline: 'Skip back-and-forth invites. Set schedules instantly.',
    description: 'Sync your calendar securely with automated reservation logs. Consultants receive notification tickers instantly, blocking time slips and optimizing meeting delivery speeds.',
    snippets: [
      { author: 'Dianne Russell', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80', timeAgo: 'Just now', message: 'Booking confirmed for Friday Strategy Briefing at 10 AM (PST)' },
      { author: 'Albert Flores', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80', timeAgo: '5 min ago', message: 'Assigned Senior Advisor Arlene for compliance auditing.' }
    ],
    images: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542744094-3a31f103e35f?w=600&auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'secure',
    title: 'Secure Networking Platform',
    tagline: 'End-to-End client confidentiality is our priority.',
    description: 'Enterprise privacy standard layers with restricted data lockers. Video meetings, slide attachments, and whiteboard transcripts are guarded with military-grade credentials.',
    snippets: [
      { author: 'Jane Cooper', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80', timeAgo: '10 min ago', message: 'Platform encrypted tunnel opened. Access Keys generated.' },
      { author: 'Theresa Webb', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&auto=format&fit=crop&q=80', timeAgo: '1 hour ago', message: 'Session metadata erased upon close. Absolute privacy ensured.' }
    ],
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'custom',
    title: 'Custom Consultation Experience',
    tagline: 'Tailored roadmaps that match your exact business vision.',
    description: 'Build priority workspaces and custom whiteboard modules fitted specifically for your team. Empower advisors to draft bespoke templates for action plans.',
    snippets: [
      { author: 'Cody Fisher', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80', timeAgo: '2 hours ago', message: 'Bespoke corporate template configured and saved to vault.' },
      { author: 'Esther Howard', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&auto=format&fit=crop&q=80', timeAgo: '1 day ago', message: 'Interactive team roadmap successfully deployed!' }
    ],
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop&q=80'
    ]
  }
];

export default function About() {
  const [activeTab, setActiveTab] = useState('trusted');
  const currentTabContent = SOLUTIONS_DATA.find((item) => item.id === activeTab) || SOLUTIONS_DATA[0];

  const stats = [
    { label: 'Accredited Advisors', value: '480+', desc: 'Across 48 domains' },
    { label: 'Meetings Commenced', value: '1.2M+', desc: 'Zero data breaches' },
    { label: 'Client Retention', value: '98.4%', desc: 'Long-term corporate relationships' },
    { label: 'Avg Settle Speed', value: '18s', desc: 'Instant expert matching' }
  ];

  const milestones = [
    { year: '2024', title: 'Network Launch', body: 'Bootstrapped secure virtual consulting channels with 50 key partners in San Francisco.' },
    { year: '2025', title: 'AI Synthesis Integration', body: 'Deployed native summarization nodes, saving clients average of 3.5 hrs per transcript analysis.' },
    { year: '2026', title: 'Global Multi-Chain', body: 'Officially scaled consultation licenses worldwide, facilitating absolute cross-device browser operations.' }
  ];

  return (
<>
</>
  );
}
