import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Building2 } from 'lucide-react';
import contact from '../assests/contact.imaage-removebg-preview.png';

const INFO_CARDS = [
  {
    icon: <Briefcase size={16} className="text-[#284AA3]" />,
    title: 'For Industry Experts',
    desc: 'Join as a consultant and start reaching more clients today.',
  },
  {
    icon: <Building2 size={16} className="text-[#284AA3]" />,
    title: 'For Businesses',
    desc: 'Find the right expert to solve your business challenges.',
  },
];

const SHEET_URL =
  'https://script.google.com/macros/s/AKfycbzv-EC4K7nEE7K-cbfT-9lRey9DQlkuYz6e6AWXuoP5jQqBMZfF4YjSz6b5_iSe66Dl4Q/exec';

function InfoCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div
      className="flex items-start gap-3 bg-white rounded-xl px-4 py-3"
      style={{ border: '1px solid #E2E8F0' }}
    >
      <div
        className="flex items-center justify-center shrink-0 mt-0.5"
        style={{ width: 32, height: 32, borderRadius: 8, background: '#EEF2FF' }}
      >
        {icon}
      </div>
      <div>
        <p className="font-semibold text-sm text-slate-800 leading-snug">{title}</p>
        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const [selectedType, setSelectedType] = useState<'expert' | 'business'>('expert');
  const [formData, setFormData] = useState({
    fullName: '', location: '', phone: '', email: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{ phone?: string; email?: string }>({});

  const charCount = formData.message.length;

  const validatePhone = (value: string) => {
    if (!value) return undefined;
    const digits = value.replace(/\D/g, '');
    if (digits.length !== 10) return 'Phone number must be exactly 10 digits';
    return undefined;
  };

  const validateEmail = (value: string) => {
    if (!value) return undefined;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address';
    return undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    let value = e.target.value;

    // Phone: digits only, max 10
    if (name === 'phone') {
      value = value.replace(/\D/g, '').slice(0, 10);
      setFieldErrors((prev) => ({ ...prev, phone: validatePhone(value) }));
    }

    if (name === 'email') {
      setFieldErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const phoneErr = validatePhone(formData.phone);
    const emailErr = validateEmail(formData.email);
    if (phoneErr || emailErr) {
      setFieldErrors({ phone: phoneErr, email: emailErr });
      return;
    }
    setSubmitting(true);
    setError(false);
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        // text/plain avoids CORS preflight; Apps Script reads e.postData.contents
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          fullName: formData.fullName,
          location: formData.location,
          phone: formData.phone,
          email: formData.email,
          clientBusiness: selectedType === 'expert' ? 'Industry Expert' : 'Business',
          message: formData.message,
        }),
        mode: 'no-cors',
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ fullName: '', location: '', phone: '', email: '', message: '' });
      }, 3500);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    /* ── Page wrapper ── */
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-10 md:py-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

        {/* ══════════ LEFT COLUMN ══════════ */}
        <div className="flex flex-col gap-5 w-full lg:w-100 xl:w-104.5 shrink-0">

          {/* Label + Heading + Description */}
          <div className="flex flex-col gap-2">
            <p
              className="font-bold uppercase tracking-[1.5px]"
              style={{ fontSize: 11, color: '#284AA3' }}
            >
              GET IN TOUCH
            </p>
            <h2
              className="font-extrabold leading-tight"
              style={{ fontSize: 'clamp(20px, 2.8vw, 30px)', color: '#284AA3' }}
            >
              We'd Love to Hear from You
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
              Reach out to us and our team will connect with you to help you make the most
              of Bizpole Consult — whether you're an industry expert or a growing business.
            </p>
          </div>

          {/* Info cards — side by side on tablet, stacked on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {INFO_CARDS.map((c) => (
              <InfoCard key={c.title} {...c} />
            ))}
          </div>

          {/* Response Time + decorative image */}
          <div className="flex flex-col rounded-2xl overflow-hidden">
            <div className="px-5 py-4" style={{ background: '#284AA3' }}>
              <p
                className="font-bold uppercase tracking-[1.5px] mb-2"
                style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)' }}
              >
                RESPONSE TIME
              </p>
              <p className="text-sm leading-relaxed text-white">
                Our team typically responds within{' '}
                <span className="font-bold text-[#F3C625]">24 hours</span> on business days.
              </p>
            </div>
            <img
              src={contact}
              alt="Contact"
              className="w-full object-contain"
              style={{ maxHeight: 200 }}
            />
          </div>
        </div>

        {/* ══════════ RIGHT COLUMN — FORM ══════════ */}
        <div
          className="w-full flex-1 bg-white rounded-2xl"
          style={{
            border: '1px solid rgba(16,35,82,0.07)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06)',
            padding: 'clamp(16px, 3vw, 28px)',
          }}
        >
          <h3 className="font-bold mb-5 text-base sm:text-lg" style={{ color: '#1E293B' }}>
            Reach Out to Us!
          </h3>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center gap-3 py-14 text-center"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: '#EEF2FF' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#284AA3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-bold text-slate-800 text-lg">Message Sent!</p>
              <p className="text-sm text-slate-500">We'll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text" name="fullName" value={formData.fullName}
                  onChange={handleChange} placeholder="e.g. Sarah Johnson" required
                  className="w-full rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#284AA3]/30 transition"
                  style={{ border: '1px solid #E2E8F0', background: '#F8FAFC' }}
                />
              </div>

              {/* Location */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">Location</label>
                <input
                  type="text" name="location" value={formData.location}
                  onChange={handleChange} placeholder="e.g. London, UK"
                  className="w-full rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#284AA3]/30 transition"
                  style={{ border: '1px solid #E2E8F0', background: '#F8FAFC' }}
                />
              </div>

              {/* Phone + Email — 2-col from sm up */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">Phone Number</label>
                  <input
                    type="tel" name="phone" value={formData.phone} inputMode="numeric"
                    onChange={handleChange} placeholder="10-digit mobile number" maxLength={10}
                    className="w-full rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition"
                    style={{
                      border: fieldErrors.phone ? '1px solid #EF4444' : '1px solid #E2E8F0',
                      background: fieldErrors.phone ? '#FFF5F5' : '#F8FAFC',
                    }}
                  />
                  {fieldErrors.phone && (
                    <p className="text-[11px] text-red-500 flex items-center gap-1">
                      <span>⚠</span> {fieldErrors.phone}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <input
                    type="email" name="email" value={formData.email}
                    onChange={handleChange} placeholder="you@example.com" required
                    className="w-full rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition"
                    style={{
                      border: fieldErrors.email ? '1px solid #EF4444' : '1px solid #E2E8F0',
                      background: fieldErrors.email ? '#FFF5F5' : '#F8FAFC',
                    }}
                  />
                  {fieldErrors.email && (
                    <p className="text-[11px] text-red-500 flex items-center gap-1">
                      <span>⚠</span> {fieldErrors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* User type */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">I am a...</label>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3">
                  {(
                    [
                      { id: 'expert',   icon: <Briefcase size={15} />, label: 'Industry Expert', sub: 'Consultant / Advisor' },
                      { id: 'business', icon: <Building2 size={15} />, label: 'Business',         sub: 'Startup / Company / Enterprise' },
                    ] as const
                  ).map(({ id, icon, label, sub }) => {
                    const active = selectedType === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setSelectedType(id)}
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-left transition-all duration-200"
                        style={{
                          border: active ? '1.5px solid #284AA3' : '1px solid #E2E8F0',
                          background: active ? '#EEF2FF' : '#F8FAFC',
                        }}
                      >
                        <div
                          className="shrink-0 flex items-center justify-center"
                          style={{
                            width: 30, height: 30, borderRadius: 7,
                            background: active ? '#284AA3' : '#E2E8F0',
                            color: active ? '#fff' : '#64748B',
                          }}
                        >
                          {icon}
                        </div>
                        <div>
                          <p
                            className="text-sm font-semibold leading-tight"
                            style={{ color: active ? '#172554' : '#334155' }}
                          >
                            {label}
                          </p>
                          <p className="text-[11px] text-slate-400 leading-tight mt-0.5">{sub}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">Your Message / Note</label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange}
                  placeholder="Tell us about your goals, the services you need, or any questions you have..."
                  rows={4} required
                  className="w-full rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#284AA3]/30 transition resize-none"
                  style={{ border: '1px solid #E2E8F0', background: '#F8FAFC' }}
                />
                <p className="text-[11px] text-slate-400 text-right">{charCount} chars</p>
              </div>

              {/* Error */}
              {error && (
                <p className="text-xs text-red-500 text-center">
                  Something went wrong. Please try again.
                </p>
              )}

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={submitting ? {} : { opacity: 0.9 }}
                whileTap={submitting ? {} : { scale: 0.98 }}
                className="w-full py-3 sm:py-3.5 rounded-xl font-semibold text-white text-sm transition flex items-center justify-center gap-2"
                style={{
                  background: '#284AA3',
                  opacity: submitting ? 0.7 : 1,
                  cursor: submitting ? 'not-allowed' : 'pointer',
                }}
              >
                {submitting && (
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="32" strokeDashoffset="10" />
                  </svg>
                )}
                {submitting ? 'Sending…' : 'Send Message'}
              </motion.button>

              <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                By submitting, you agree to our Privacy Policy.{' '}
                We'll never share your details with third parties.
              </p>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
