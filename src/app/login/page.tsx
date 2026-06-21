'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [method, setMethod] = useState<'email' | 'phone'>('email');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Logic here talks to /api/login
    router.push('/dashboard');
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <motion.form 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        onSubmit={handleLogin}
        className="w-full max-w-xs flex flex-col gap-6"
      >
        <h2 className="text-xl font-extralight uppercase tracking-[0.3em] text-center mb-4">Log In</h2>
        
        {/* Toggle Buttons */}
        <div className="flex justify-center gap-8 mb-4">
          <button type="button" onClick={() => setMethod('email')} className={`uppercase text-xs tracking-widest ${method === 'email' ? 'text-white border-b' : 'text-white/30'}`}>Email</button>
          <button type="button" onClick={() => setMethod('phone')} className={`uppercase text-xs tracking-widest ${method === 'phone' ? 'text-white border-b' : 'text-white/30'}`}>Phone</button>
        </div>

        <input 
          type={method === 'email' ? 'email' : 'tel'} 
          placeholder={method === 'email' ? 'Email Address' : 'Phone Number'}
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          className="bg-white/5 border border-white/10 p-4 rounded-xl text-center focus:outline-none focus:border-indigo-500 transition"
        />

        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-white/5 border border-white/10 p-4 rounded-xl text-center focus:outline-none focus:border-indigo-500 transition"
        />

        <button className="py-4 bg-white text-black rounded-full font-bold hover:bg-indigo-100 transition">
          Enter Hub
        </button>
      </motion.form>
    </main>
  );
}