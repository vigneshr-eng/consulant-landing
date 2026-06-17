import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, Phone, MapPin, CheckCircle2, MessageCircle, Send, 
  HelpCircle, Sparkles, Terminal, ArrowUpRight
} from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const faqs = [
    {
      q: 'How does the interactive whiteboard save records?',
      a: 'Whiteboard vectors are saved securely onto local workspace sandboxes or synced as high-definition encrypted pdf files that both the customer and consultant can access immediately.'
    },
    {
      q: 'Are these advisors fully vetted?',
      a: 'Yes. Every consultant has undergone rigorous identity, background, and license vetting including active audits on academic and industrial credential registries.'
    },
    {
      q: 'Can I do custom consultations from other countries?',
      a: 'Absolutely. We support global accessibility. Consultants are matched based on responsive time zones to ensure latency-free communication slots.'
    }
  ];

  return (
    <div className="w-full relative bg-slate-50 min-h-screen py-12 md:py-20 overflow-hidden">
      
      {/* Decorative Blur Spheres */}
      <div className="absolute top-[10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 flex flex-col gap-16">
        
        {/* Title Block */}
        <section className="text-center max-w-2xl mx-auto flex flex-col gap-4">
          <span className="self-center inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 font-mono font-bold text-xs uppercase px-4 py-2 rounded-full border border-indigo-100">
            <MessageCircle className="w-3.5 h-3.5" /> Direct Contact Channels
          </span>
          <h1 className="font-display font-black text-3.5xl md:text-5xl text-slate-900 tracking-tight leading-none">
            Get in touch instantly
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed">
            Need localized support, private custom licensing plans, or help with booking advisors? Launch a secure query and our office desk will follow up in 2 hours or less.
          </p>
        </section>

        {/* Form and Contact details Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Support credentials Column */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 flex flex-col gap-6 relative overflow-hidden group shadow-md">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-xl" />
              
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-mono font-bold text-amber-400">Headquarters</span>
                <h3 className="font-display font-bold text-lg">Virtual Advisory Lab</h3>
              </div>

              <div className="flex flex-col gap-4 text-xs text-slate-300 font-sans">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span>100 Pine Street Suite 2400, San Francisco, CA 94111</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span>+1 (800) 555-0199</span>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span>support@consulmeet.corp</span>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                <span>Response rate: 99.2%</span>
                <span>UTC timezone active</span>
              </div>
            </div>

            {/* Quick Helper Banner */}
            <div className="bg-amber-100/50 border border-amber-200 rounded-2xl p-5 text-amber-900 flex flex-col gap-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider flex items-center gap-1 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500" /> Vetted SLA SLA
              </span>
              <p className="text-xs leading-relaxed font-medium">
                Standard accounts are guaranteed 4 hrs reply SLAs. Premium enterprise client channels receive live priority Slack triggers.
              </p>
            </div>
          </div>

          {/* Secure Web Form Column */}
          <div className="md:col-span-7 bg-white border border-slate-200/50 p-6 md:p-8 rounded-[2.2rem] shadow-sm flex flex-col gap-6">
            <h3 className="font-display font-black text-xl text-slate-800 leading-none">Send Secure Message</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-slate-600 font-mono font-bold uppercase">Your Full Name</label>
                  <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Arlene McCoy"
                    className="bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all font-sans font-medium"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-slate-600 font-mono font-bold uppercase">Business Email</label>
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="arlene@mccoy.co"
                    className="bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all font-sans font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] text-slate-600 font-mono font-bold uppercase">Tell us about your strategy needs</label>
                <textarea 
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you need. Standard DevOps compliance audits, real-time board integration requests, etc."
                  className="bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all resize-none placeholder-slate-400 font-sans leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-indigo-600 hover:bg-slate-900 text-white font-display font-extrabold text-sm rounded-2xl shadow hover:shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <Send className="w-4 h-4" />
                <span>Submit Query Ticket</span>
              </button>
            </form>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex gap-3 text-emerald-800 text-xs leading-relaxed"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-bold">Message Submitted Successfully!</span>
                    <span className="text-[11px] text-emerald-700/80 mt-0.5">We processed your secure data ticket parameters. Check your inbox momentarily.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </section>

        {/* Dynamic FAQ List */}
        <section className="bg-slate-100 rounded-3xl p-6 md:p-8 border border-slate-200/50 flex flex-col gap-6">
          <div className="flex items-center gap-1.5 text-xs text-indigo-700 font-mono font-bold uppercase">
            <HelpCircle className="w-4 h-4" /> Frequently Answered Queries
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="font-display font-black text-slate-900 border-l-2 border-amber-400 pl-3 leading-snug text-sm tracking-wide">
                  {faq.q}
                </span>
                <p className="text-slate-500 text-xs leading-relaxed font-medium pl-3">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
