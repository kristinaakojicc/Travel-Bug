'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Signup() {
  const [method, setMethod] = useState<'email' | 'phone'>('email');
  const [input, setInput] = useState('');

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xs flex flex-col gap-6"
      >
        <h2 className="text-xl font-extralight uppercase tracking-[0.3em] text-center mb-4">Get Started</h2>
        
        {/* Toggle Buttons */}
        <div className="flex justify-center gap-8 mb-4">
          <button onClick={() => setMethod('email')} className={`uppercase text-xs tracking-widest ${method === 'email' ? 'text-white border-b' : 'text-white/30'}`}>Email</button>
          <button onClick={() => setMethod('phone')} className={`uppercase text-xs tracking-widest ${method === 'phone' ? 'text-white border-b' : 'text-white/30'}`}>Phone</button>
        </div>

        <input 
          type={method === 'email' ? 'email' : 'tel'} 
          placeholder={method === 'email' ? 'Email Address' : 'Phone Number'}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-white/5 border border-white/10 p-4 rounded-xl text-center focus:outline-none focus:border-indigo-500 transition"
        />

        <button className="py-4 bg-white text-black rounded-full font-bold hover:bg-indigo-100 transition">
          Continue
        </button>

        <Link href="/login" className="text-center text-xs text-white/40 hover:text-white transition">
          Already have an account? Log in
        </Link>
      </motion.div>
    </main>
  );
}