import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, Star, Video, Clock, Filter, AlertCircle, Calendar, 
  MapPin, CheckCircle2, Ticket, X, MessageSquare, Briefcase, ChevronRight
} from 'lucide-react';
import { Consultant } from '../types';

const CONSULTANTS: Consultant[] = [
  {
    id: 'c1',
    name: 'Arlene McCoy',
    role: 'SaaS Design & Wireframing Advisor',
    rating: 4.9,
    reviews: 142,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80',
    specialty: 'Strategy',
    availability: 'Available Today'
  },
  {
    id: 'c2',
    name: 'Jacob Jones',
    role: 'Senior Cloud DevOps Architect',
    rating: 5.0,
    reviews: 98,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    specialty: 'DevOps',
    availability: 'Available Today'
  },
  {
    id: 'c3',
    name: 'Dianne Russell',
    role: 'Corporate Legal & Integrity Director',
    rating: 4.8,
    reviews: 167,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    specialty: 'Legal',
    availability: 'Next Session: Friday'
  },
  {
    id: 'c4',
    name: 'Albert Flores',
    role: 'SaaS Growth & Scale Lead',
    rating: 4.9,
    reviews: 110,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    specialty: 'Strategy',
    availability: 'Available Tomorrow'
  },
  {
    id: 'c5',
    name: 'Esther Howard',
    role: 'HIPAA & Healthcare Audit Lead',
    rating: 5.0,
    reviews: 54,
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&auto=format&fit=crop&q=80',
    specialty: 'Healthcare',
    availability: 'Available Today'
  },
  {
    id: 'c6',
    name: 'Cody Fisher',
    role: 'Cryptographic Security Analyst',
    rating: 4.7,
    reviews: 82,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80',
    specialty: 'DevOps',
    availability: 'Next Session: Monday'
  }
];

export default function ExploreConsultants() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Booking modal and success ticket state
  const [selectedConsultant, setSelectedConsultant] = useState<Consultant | null>(null);
  const [bookingDate, setBookingDate] = useState('2026-06-15');
  const [bookingTime, setBookingTime] = useState('10:00 AM');
  const [bookingInquiry, setBookingInquiry] = useState('');
  const [confirmedTicket, setConfirmedTicket] = useState<{
    id: string;
    advisorName: string;
    avatar: string;
    role: string;
    date: string;
    time: string;
    inquiry: string;
  } | null>(null);

  // Filters calculation
  const filtered = CONSULTANTS.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = activeCategory === 'All' || c.specialty === activeCategory;
    return matchesSearch && matchesCat;
  });

  const handleBookingConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedConsultant) return;

    // Simulate instant ticket deployment
    setConfirmedTicket({
      id: 'CM-' + Math.floor(100000 + Math.random() * 900000),
      advisorName: selectedConsultant.name,
      avatar: selectedConsultant.avatar,
      role: selectedConsultant.role,
      date: bookingDate,
      time: bookingTime,
      inquiry: bookingInquiry || 'Strategic platform consultation'
    });

    setSelectedConsultant(null);
    setBookingInquiry('');
  };

  return (
    <div className="w-full relative bg-slate-50 min-h-screen py-12 md:py-20 overflow-hidden">
      
      {/* Decorative Blur Spheres */}
      <div className="absolute top-[10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 flex flex-col gap-10">
        
        {/* Top Header */}
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto mb-4">
          <span className="self-center inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 font-mono font-bold text-xs uppercase px-4 py-2 rounded-full border border-indigo-100">
            <Briefcase className="w-3.5 h-3.5" /> Accredited Advisory Directory
          </span>
          <h1 className="font-display font-black text-3.5xl md:text-5.5xl text-slate-900 tracking-tight leading-none">
            Meet our expert advisors
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            All consultants are strictly background audited and maintain standard active licenses. Ready to block schedule time slots for instant, secure visual whiteboard sessions.
          </p>
        </div>

        {/* Filters and Search Action capsule */}
        <div className="bg-white border border-slate-200/60 p-4 rounded-3xl shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Search bar */}
          <div className="relative w-full md:max-w-xs">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by advisor name or key skill..."
              className="w-full bg-slate-50 border border-slate-200 pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all duration-200"
            />
          </div>

          {/* Specialty categories selector pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 font-mono mr-1">Specialties:</span>
            {['All', 'Strategy', 'DevOps', 'Legal', 'Healthcare'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold cursor-pointer transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-slate-950 text-white shadow'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Live List Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((c, i) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                key={c.id}
                className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex flex-col gap-4">
                  {/* Portrait Avatar and Rating header */}
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 shadow">
                      <img 
                        referrerPolicy="no-referrer"
                        src={c.avatar} 
                        alt={c.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1 text-amber-500 bg-amber-50 py-1 px-2.5 rounded-full border border-amber-100">
                        <Star className="w-3.5 h-3.5 fill-amber-500" />
                        <span className="text-xs font-black font-display text-slate-800">{c.rating}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono font-bold mt-1 uppercase">
                        {c.reviews} total reviews
                      </span>
                    </div>
                  </div>

                  {/* Specialty badge */}
                  <span className="text-[10px] font-mono font-bold uppercase text-indigo-700 bg-indigo-50 border border-indigo-100 py-1 px-3.5 rounded-full inline-block self-start">
                    {c.specialty} Division
                  </span>

                  {/* Text labels */}
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display font-black text-xl text-slate-900 leading-snug tracking-tight">
                      {c.name}
                    </h3>
                    <p className="text-slate-500 text-xs leading-normal font-sans tracking-wide">
                      {c.role}
                    </p>
                  </div>
                </div>

                {/* Grid card footer call to schedule actions */}
                <div className="border-t border-slate-100 pt-5 mt-6 flex flex-col gap-4">
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-1 font-semibold text-emerald-600 bg-emerald-50 py-1 px-3 border border-emerald-100 rounded-full">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                      <span>{c.availability}</span>
                    </div>
                    <span className="text-slate-700 font-mono font-semibold">Standard billing</span>
                  </div>
                  
                  <button
                    onClick={() => {
                      setSelectedConsultant(c);
                    }}
                    className="w-full py-3 rounded-2xl bg-slate-900 hover:bg-indigo-600 text-white font-display font-extrabold text-sm shadow hover:shadow-md transition-all duration-300 flex items-center justify-center gap-1.5"
                  >
                    <span>Schedule Conversation</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-200/50 rounded-3xl p-12 text-center max-w-md mx-auto shadow-sm">
            <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <span className="block font-display font-black text-lg text-slate-800">No consultants found</span>
            <p className="text-slate-400 text-xs mt-2 leading-relaxed">
              We couldn't locate active advisors matching "{searchTerm}". Try clearing category filters or typing alternate parameters on the search field.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('All');
              }}
              className="mt-5 px-5 py-2 text-xs font-bold text-indigo-600 hover:text-slate-900 transition-colors"
            >
              Reset Directories
            </button>
          </div>
        )}

        {/* ================= SUCCESS ACTION TICKET DISPLAY ================= */}
        <AnimatePresence>
          {confirmedTicket && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 text-white rounded-[2.5rem] p-6 md:p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden mt-6"
            >
              {/* background badge ticket decor */}
              <div className="absolute top-1/2 left-[30%] -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col gap-5 relative z-10">
                <span className="self-start inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 font-mono font-bold text-xs uppercase px-3.5 py-1.5 rounded-md border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Appointment Reserved Successfully
                </span>
                
                <div className="flex flex-col">
                  <h3 className="font-display font-black text-2xl text-white">Your Consultation Ticket is Ready</h3>
                  <p className="text-slate-400 text-xs mt-1">
                    An encrypt invitation trigger with instant board links has been launched toward workspace records folder.
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-slate-950 p-2.5 rounded-xl border border-white/5 max-w-sm">
                  <img src={confirmedTicket.avatar} alt="" className="w-10 h-10 rounded-full object-cover shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-100">{confirmedTicket.advisorName}</span>
                    <span className="text-[10px] text-slate-500">{confirmedTicket.role}</span>
                  </div>
                </div>
              </div>

              {/* Physical Booking Ticket Badge Layout */}
              <div className="w-full md:max-w-xs bg-amber-400 text-slate-900 rounded-3xl p-5 border border-amber-300 relative z-10 shrink-0 shadow-lg flex flex-col gap-4 font-sans">
                <div className="flex items-center justify-between border-b border-slate-800/20 pb-3">
                  <span className="font-display font-black text-sm tracking-wide">CM TRANSIT V2</span>
                  <Ticket className="w-5 h-5 text-indigo-900" />
                </div>
                
                <div className="flex flex-col gap-3.5">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-[8px] text-slate-600 font-bold uppercase tracking-wider">Ticket Identifier</span>
                      <span className="text-sm font-bold font-mono tracking-tight text-indigo-900">{confirmedTicket.id}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 border-t border-b border-dashed border-slate-800/20 py-3">
                    <div className="flex flex-col">
                      <span className="text-[8px] text-slate-600 font-bold uppercase tracking-wider">Reserved Date</span>
                      <span className="text-[11px] font-black">{confirmedTicket.date}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[8px] text-slate-600 font-bold uppercase tracking-wider">Standard Slot</span>
                      <span className="text-[11px] font-black">{confirmedTicket.time}</span>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[8px] text-slate-600 font-bold uppercase tracking-wider">Session Briefing Inquiry</span>
                    <p className="text-[10px] font-medium leading-relaxed italic text-slate-800">
                      "{confirmedTicket.inquiry}"
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono text-slate-700 bg-white/50 px-3 py-1.5 rounded-lg border border-amber-500/20 mt-1">
                  <span>★ Secured via SSL Layer</span>
                  <button 
                    onClick={() => setConfirmedTicket(null)}
                    className="font-bold underline text-indigo-900 hover:text-black"
                  >
                    Close
                  </button>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= SCHEDULER POPUP MODAL ================= */}
        <AnimatePresence>
          {selectedConsultant && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white rounded-[2.2rem] max-w-md w-full p-6 md:p-8 border border-slate-200 shadow-2xl relative"
              >
                {/* Close lever */}
                <button 
                  onClick={() => setSelectedConsultant(null)}
                  className="p-1.5 rounded-full hover:bg-slate-100 absolute right-6 top-6 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-widest">Active Booking Request</span>
                    <h3 className="font-display font-black text-2xl text-slate-900 tracking-tight leading-none">Schedule Appointment</h3>
                  </div>

                  {/* Tiny advisor summary header */}
                  <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    <img src={selectedConsultant.avatar} alt="" className="w-11 h-11 rounded-full object-cover border" />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-800 leading-snug">{selectedConsultant.name}</span>
                      <span className="text-[10px] text-slate-500 leading-relaxed">{selectedConsultant.role}</span>
                    </div>
                  </div>

                  {/* Appointment parameters form */}
                  <form onSubmit={handleBookingConfirm} className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-slate-600 font-mono font-bold uppercase">Requested Date</label>
                        <input 
                          type="date"
                          required
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                          className="bg-slate-50 border border-slate-200 text-slate-800 text-xs p-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all font-semibold"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-slate-600 font-mono font-bold uppercase">Target Time Slot</label>
                        <select
                          value={bookingTime}
                          onChange={(e) => setBookingTime(e.target.value)}
                          className="bg-slate-50 border border-slate-200 text-slate-800 text-xs p-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all font-semibold"
                        >
                          <option value="09:00 AM">09:00 AM</option>
                          <option value="10:00 AM">10:00 AM (Recommended)</option>
                          <option value="11:30 AM">11:30 AM</option>
                          <option value="02:00 PM">02:00 PM</option>
                          <option value="04:00 PM">04:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-600 font-mono font-bold uppercase">Tell the advisor what you need (Inquiry Goals)</label>
                      <textarea
                        rows={2}
                        value={bookingInquiry}
                        onChange={(e) => setBookingInquiry(e.target.value)}
                        placeholder="E.g. Strategy wireframe wireline audit with responsive Whiteboard drafts..."
                        className="bg-slate-50 border border-slate-200 text-slate-800 text-xs p-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white transition-all resize-none placeholder-slate-400 leading-relaxed font-sans"
                      />
                    </div>

                    {/* Submit confirmation button */}
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-indigo-600 hover:bg-slate-900 text-white font-display font-extrabold text-sm rounded-2xl shadow-md transition-colors flex items-center justify-center gap-1.5 mt-2"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Request Booking Slots Now</span>
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
