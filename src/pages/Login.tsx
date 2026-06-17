import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, ArrowUpRight, Lock, Mail, CheckCircle2, 
  Terminal, Sparkles, UserPlus, LogIn, Video
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        // Direct toward homepage
        navigate('/');
      }, 2500);
    }
  };

  return (
    <div className="w-full relative bg-slate-50 min-h-screen py-16 md:py-28 flex items-center justify-center p-4 overflow-hidden">
      
      {/* Background Decorators */}
      <div className="absolute top-[10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-md w-full relative z-10 flex flex-col gap-8">
        
        {/* Title logo block */}
        <div className="text-center flex flex-col items-center gap-3">
          <Link to="/" className="flex items-center gap-2 group justify-center">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow">
              <Video className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-extrabold text-2xl tracking-tight text-slate-900">
              Consul<span className="text-indigo-600">Meet</span>
            </span>
          </Link>
          <p className="text-slate-400 text-xs">Secure Single-Sign-On Entry Hub</p>
        </div>

        {/* Auth form enclosure */}
        <div className="bg-white border border-slate-200/50 rounded-[2.5rem] p-6 sm:p-8 shadow-sm flex flex-col gap-6 relative">
          
          {/* Tabs toggler */}
          <div className="bg-slate-100 p-1 rounded-full grid grid-cols-2 text-center border">
            <button
              onClick={() => {
                setIsLogin(true);
                setSuccess(false);
              }}
              className={`py-2 rounded-full text-xs font-bold transition-all ${
                isLogin 
                  ? 'bg-white text-indigo-900 shadow-sm border border-slate-200/50' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              LogIn Standard
            </button>
            <button
              onClick={() => {
                setIsLogin(false);
                setSuccess(false);
              }}
              className={`py-2 rounded-full text-xs font-bold transition-all ${
                !isLogin 
                  ? 'bg-white text-indigo-900 shadow-sm border border-slate-200/50' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Create Account
            </button>
          </div>

          <h2 className="font-display font-black text-2xl text-slate-800 leading-none">
            {isLogin ? 'Welcome back' : 'Register directory'}
          </h2>

          <form onSubmit={handleAuthSubmit} className="flex flex-col gap-4">
            
            {/* Full Name for register only */}
            {!isLogin && (
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] text-slate-600 font-mono font-bold uppercase">Your Full Name</label>
                <input 
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Arlene McCoy"
                  className="bg-slate-50 border border-slate-200 text-slate-800 text-xs p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all font-sans font-medium"
                />
              </div>
            )}

            {/* Email input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-slate-600 font-mono font-bold uppercase">Business Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs pl-10 pr-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all font-sans font-medium"
                />
              </div>
            </div>

            {/* Password input */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label className="text-[10px] text-slate-600 font-mono font-bold uppercase">Secret Password</label>
                {isLogin && (
                  <a href="#" className="text-[10px] text-indigo-600 hover:underline">Forgot password?</a>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input 
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs pl-10 pr-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all font-sans font-medium"
                />
              </div>
            </div>

            {/* Action button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-slate-900 hover:bg-indigo-600 text-white font-display font-extrabold text-sm rounded-2xl shadow hover:shadow-md transition-colors flex items-center justify-center gap-2 mt-2"
            >
              {isLogin ? <LogIn className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
              <span>{isLogin ? 'Enter Workspace' : 'Setup Credentials Now'}</span>
            </button>

          </form>

          {/* Success Dialog overlay */}
          <AnimatePresence>
            {success && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-900/95 backdrop-blur-md rounded-[2.5rem] p-6 flex flex-col justify-center items-center text-center gap-4 z-20 text-white"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-lg animate-bounce">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-amber-300 font-mono text-[10px] uppercase font-bold tracking-widest">Client Authenticated</span>
                  <p className="font-display font-black text-xl">Loading Secure Workspace...</p>
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-2">
                  Welcome back as {email.split('@')[0]}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Privacy disclaimer */}
        <p className="text-slate-400 text-[10px] text-center leading-relaxed max-w-xs mx-auto">
          Authorization layer synced with SSL cert protocols in compliance with corporate sandbox models.
        </p>

      </div>
    </div>
  );
}
