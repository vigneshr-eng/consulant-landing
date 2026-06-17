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
    <div className="w-full relative bg-slate-50 min-h-screen py-12 md:py-20 overflow-hidden">
      
      {/* Decorative Blur Spheres */}
      <div className="absolute top-[5%] left-[-10%] w-160 h-160 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-140 h-140 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col gap-16 md:gap-24 relative z-10">
        
        {/* About Hero Title */}
        <section className="text-center max-w-3xl mx-auto flex flex-col gap-6">
          <span className="self-center inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 font-mono font-bold text-xs uppercase px-4 py-2 rounded-full border border-indigo-100">
            <Target className="w-3.5 h-3.5" /> Our Mission
          </span>
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
            Seamless human expertise, <br />
            delivered <span className="relative inline-block px-4 py-0.5 rounded-full border-4 border-amber-400">anywhere.</span>
          </h1>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed">
            ConsulMeet was built to remove friction from virtual advisory services. By wrapping vetted networks in secure, real-time visual whiteboards and AI summarizers, we make virtual connections actually feel productive.
          </p>
        </section>

        {/* Live Interactive Statistic Widgets */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((st, i) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={st.label}
              className="bg-white border border-slate-200/50 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="block font-display font-black text-3xl md:text-4xl text-indigo-600 mb-1">
                {st.value}
              </span>
              <span className="block text-slate-800 text-sm font-bold font-display uppercase tracking-wide">
                {st.label}
              </span>
              <p className="text-xs text-slate-400 mt-1">{st.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Platform Strategy Card Row */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-4/3 shadow-md border border-slate-200">
            <img 
              referrerPolicy="no-referrer"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" 
              alt="Advisory Team meeting" 
              className="w-full h-full object-cover"
            />
            {/* Visual Glass floating block */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-slate-700/50">
              <span className="text-[10px] uppercase font-mono font-bold text-amber-400">Unified Compliance</span>
              <p className="text-xs text-slate-300 font-medium leading-relaxed mt-1">
                "Our consultants maintain full corporate insurance with legal coverage across major Western and Pacific jurisdictions."
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600">The Advisory Gap</span>
            <h2 className="font-display font-black text-3xl text-slate-900 tracking-tight leading-snug">
              Why Traditional Meetings Fail Customers
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Standard video calling programs are disconnected from notes tools, calendar slots, and secure whiteboard drafts. Advisors waste key session minutes screen-sharing static PDF files.
            </p>

            <ul className="flex flex-col gap-3">
              {[
                'Vetted and background-checked credential records.',
                'Immediate AI generated summary transcript lockers.',
                'Secure e-Sign, whiteboard wireframes, and file vaults.',
                'Time-blocked appointments with fully customizable schedules.'
              ].map((val, idx) => (
                <li key={idx} className="flex gap-2.5 items-start text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
                  <span>{val}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Solutions / About Us Section */}
      

        {/* Timeline Roadmap */}
        <section className="flex flex-col gap-12 bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 border border-slate-800">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1">
              <Milestone className="w-4 h-4" /> Company Milestones
            </span>
            <h3 className="font-display font-black text-2xl md:text-3xl">Our Growth Journey</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative border-l md:border-l-0 md:border-t border-slate-800/80 pl-6 md:pl-0 pt-0 md:pt-8">
            {milestones.map((m, idx) => (
              <div key={m.year} className="flex flex-col gap-2 relative">
                {/* Micro Dot decor */}
                <div className="absolute -left-7.5 md:left-0 top-1.5 md:-top-10.25 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900" />
                
                <span className="text-amber-300 font-display font-black text-3xl">{m.year}</span>
                <span className="font-display font-bold text-base text-white">{m.title}</span>
                <p className="text-slate-400 text-xs leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-amber-400 rounded-3xl p-8 md:p-12 text-slate-900 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="flex flex-col gap-2.5 max-w-xl">
            <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight">
              Looking to join as an expert advisor?
            </h3>
            <p className="text-slate-800 text-xs md:text-sm leading-relaxed font-medium">
              We look for senior strategic counsel in DevOps architecture, healthcare compliance, legal advisory structures, and SaaS design systems. Apply for credential review immediately.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3.5 rounded-full bg-slate-900 hover:bg-indigo-600 hover:scale-102 hover:shadow-lg hover:-translate-y-0.5 text-white font-display font-extrabold text-sm transition-all duration-300 shrink-0"
          >
            Become Consultant
          </Link>
        </section>

      </div>
    </div>
  );
}
