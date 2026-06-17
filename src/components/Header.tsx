import React, { useState } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Video, Menu, X, ArrowUpRight, User, Globe, MessageSquare } from 'lucide-react';
import logo from '../assests/Artboard 5 copy 13.png';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
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

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    // { name: 'Feature', path: '/features' },
    { name: 'Become expert', path: '/become-expert' },
    { name: 'Business', path: '/consultants' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <header
      className="sticky top-0 z-50 w-full px-4 py-4 md:px-8 transition-all duration-300"
      style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #f1f5f9' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

        {/* Logo */}
     <Link to="/" className="flex items-center gap-2 group shrink-0">
  <img
    src={logo}
    alt="ConsulMeet Logo"
    className="h-20 w-auto object-contain"
  />
</Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-1.5 bg-transparent p-0">
          {navItems.map((item) => {
            const active = isActive(item.path);
            if (item.name === 'Feature' || item.name === 'Contact Us') {
              const handler = item.name === 'Contact Us' ? scrollToContact : scrollToFeatures;
              return (
                <button
                  key={item.name}
                  onClick={handler}
                  className="relative px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300"
                  style={{
                    background: 'rgba(241,245,249,0.6)',
                    color: '#475569',
                    border: '1px solid transparent',
                  }}
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

        {/* Login CTA */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Link
            to="/login"
            className="px-6 py-2 rounded-full font-display font-black text-xs text-white shadow-sm transition-all duration-300 flex items-center gap-1.5 hover:opacity-80"
            style={{ background: '#284AA3' }}
            id="login-btn-nav"
          >
            Login
          </Link>
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
                if (item.name === 'Feature' || item.name === 'Contact Us') {
                  const handler = item.name === 'Contact Us' ? scrollToContact : scrollToFeatures;
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
              
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full py-3.5 text-center bg-indigo-600 hover:bg-slate-900 text-white font-bold font-display text-base rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2"
              >
                <User className="w-5 h-5" />
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
