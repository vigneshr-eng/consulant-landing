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

    </div>
  );
}
