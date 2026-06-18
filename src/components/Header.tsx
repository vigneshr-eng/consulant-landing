import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, User, ShieldCheck, Mail, Lock } from 'lucide-react';
import logo from '../assests/Artboard 5 copy 13.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginSending, setLoginSending] = useState(false);
  const [loginSent, setLoginSent] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const scrollToFeatures = () => {
    const doScroll = () =>
      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    if (isHome) {
      doScroll();
    } else {
      navigate('/');
      setTimeout(doScroll, 400);
    }
  };

  const scrollToAbout = () => {
    const doScroll = () =>
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    if (isHome) {
      doScroll();
    } else {
      navigate('/');
      setTimeout(doScroll, 400);
    }
  };

  const scrollToContact = () => {
    const doScroll = () =>
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    if (isHome) {
      doScroll();
    } else {
      navigate('/');
      setTimeout(doScroll, 400);
    }
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
    setLoginEmail('');
    setLoginSent(false);
    setLoginSending(false);
  };

  const handleLoginContinue = async () => {
    if (!loginEmail) return;
    setLoginSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoginSending(false);
    setLoginSent(true);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Become expert', path: '/become-expert' },
    { name: 'Business', path: '/consultants' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path;
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full px-4 py-4 md:px-8 transition-all duration-300"
        style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #f1f5f9' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <img src={logo} alt="Bizpole Consult Logo" className="h-20 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-1.5 bg-transparent p-0">
            {navItems.map((item) => {
              const active = isActive(item.path);
              if (item.name === 'Feature' || item.name === 'Contact Us' || item.name === 'About Us') {
                const handler = item.name === 'Contact Us' ? scrollToContact : item.name === 'About Us' ? scrollToAbout : scrollToFeatures;
                return (
                  <button
                    key={item.name}
                    onClick={handler}
                    className="relative px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300"
                    style={{ background: 'rgba(241,245,249,0.6)', color: '#475569', border: '1px solid transparent' }}
                  >
                    <span className="relative z-10">{item.name}</span>
                  </button>
                );
              }
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="relative px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300"
                  style={{
                    background: active ? '#eef2ff' : 'rgba(241,245,249,0.6)',
                    color: active ? '#284AA3' : '#475569',
                    border: active ? '1px solid #c7d2fe' : '1px solid transparent',
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Login CTA — Desktop */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button
              onClick={() => setShowLoginModal(true)}
              className="px-6 py-2 rounded-full font-display font-black text-xs text-white shadow-sm transition-all duration-300 flex items-center gap-1.5 hover:opacity-80"
              style={{ background: '#284AA3' }}
              id="login-btn-nav"
            >
              Login
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors duration-200 focus:outline-none"
            style={{ color: '#475569' }}
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden w-full overflow-hidden rounded-b-2xl mt-2"
              style={{ background: 'rgba(255,255,255,0.97)', borderTop: '1px solid #f1f5f9' }}
            >
              <div className="p-4 flex flex-col gap-2 shadow-xl">
                {navItems.map((item) => {
                  if (item.name === 'Feature' || item.name === 'Contact Us' || item.name === 'About Us') {
                    const handler = item.name === 'Contact Us' ? scrollToContact : item.name === 'About Us' ? scrollToAbout : scrollToFeatures;
                    return (
                      <button
                        key={item.name}
                        onClick={() => { setIsOpen(false); handler(); }}
                        className="flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 font-medium text-base text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      >
                        <span className="font-medium text-base">{item.name}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-50" />
                      </button>
                    );
                  }
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 font-medium text-base ${
                          isActive ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`
                      }
                    >
                      <span className="font-medium text-base">{item.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </NavLink>
                  );
                })}

                <hr className="my-2" style={{ borderColor: '#f1f5f9' }} />

                <button
                  onClick={() => { setIsOpen(false); setShowLoginModal(true); }}
                  className="w-full py-3.5 text-center text-white font-bold font-display text-base rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                  style={{ background: '#284AA3' }}
                >
                  <User className="w-5 h-5" />
                  Login
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Login Modal (portal) ── */}
      {createPortal(
        <AnimatePresence>
          {showLoginModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLoginModal}
              style={{
                position: 'fixed', inset: 0, zIndex: 9999,
                background: 'rgba(0,0,0,0.45)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: 16,
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.93, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.93, y: 20 }}
                transition={{ type: 'spring', stiffness: 340, damping: 26 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: '#fff',
                  borderRadius: 16,
                  width: '100%',
                  maxWidth: 380,
                  boxShadow: '0 24px 60px rgba(0,0,0,0.18)',
                  overflow: 'hidden',
                }}
              >
                {/* Header */}
                <div
                  className="flex items-center justify-between"
                  style={{ padding: '20px 24px 18px', borderBottom: '1px solid #F1F5F9' }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      style={{
                        width: 40, height: 40, borderRadius: 10,
                        background: '#284AA3',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      <ShieldCheck size={20} color="#fff" strokeWidth={2} />
                    </div>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 20, color: '#1E293B' }}>
                      Sign In
                    </span>
                  </div>
                  <button
                    onClick={closeLoginModal}
                    style={{
                      width: 30, height: 30, borderRadius: '50%',
                      background: '#F1F5F9', border: 'none', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#94A3B8', fontSize: 16,
                    }}
                  >
                    ✕
                  </button>
                </div>

                {/* Body */}
                <div style={{ padding: '24px 24px 20px' }}>
                  {!loginSent ? (
                    <>
                      <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, color: '#64748B', lineHeight: 1.6, marginBottom: 20 }}>
                        Enter your email address to receive a one-time password
                      </p>

                      {/* Email label */}
                      <label style={{ display: 'block', fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 700, color: '#1E293B', marginBottom: 8 }}>
                        Email Address
                      </label>

                      {/* Input with icon */}
                      <div
                        style={{
                          display: 'flex', alignItems: 'center',
                          border: '1.5px solid #284AA3', borderRadius: 10,
                          overflow: 'hidden', marginBottom: 20,
                          background: '#fff',
                        }}
                      >
                        <div
                          style={{
                            padding: '12px 14px',
                            borderRight: '1px solid #E2E8F0',
                            display: 'flex', alignItems: 'center',
                            background: '#F8FAFC',
                          }}
                        >
                          <Mail size={16} color="#94A3B8" strokeWidth={2} />
                        </div>
                        <input
                          type="email"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleLoginContinue()}
                          placeholder="Your@gmail.com"
                          autoFocus
                          style={{
                            flex: 1, border: 'none', outline: 'none',
                            padding: '12px 14px', fontSize: 14,
                            fontFamily: "'Manrope', sans-serif",
                            color: '#1E293B', background: 'transparent',
                          }}
                        />
                      </div>

                      {/* Continue button */}
                      <motion.button
                        onClick={handleLoginContinue}
                        disabled={loginSending || !loginEmail}
                        whileHover={loginSending || !loginEmail ? {} : { opacity: 0.9 }}
                        whileTap={loginSending || !loginEmail ? {} : { scale: 0.97 }}
                        style={{
                          width: '100%', height: 48, borderRadius: 10,
                          background: loginEmail ? '#284AA3' : '#94A3B8',
                          color: '#fff', border: 'none',
                          fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 15,
                          cursor: loginSending || !loginEmail ? 'not-allowed' : 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                          transition: 'background 0.2s',
                        }}
                      >
                        {loginSending && (
                          <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="32" strokeDashoffset="10" />
                          </svg>
                        )}
                        {loginSending ? 'Sending…' : 'Continue'}
                      </motion.button>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{ textAlign: 'center', padding: '8px 0 4px' }}
                    >
                      <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13l4 4L19 7" stroke="#284AA3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 16, color: '#1E293B', marginBottom: 6 }}>OTP Sent!</p>
                      <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, color: '#64748B', lineHeight: 1.6 }}>
                        We've sent a one-time password to<br />
                        <strong style={{ color: '#284AA3' }}>{loginEmail}</strong>.<br />
                        Please check your inbox.
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Footer */}
                <div
                  style={{
                    padding: '12px 24px 16px',
                    borderTop: '1px solid #F1F5F9',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  }}
                >
                  <Lock size={12} color="#94A3B8" strokeWidth={2} />
                  <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 12, color: '#94A3B8' }}>
                    Secure authentication via email OTP
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
