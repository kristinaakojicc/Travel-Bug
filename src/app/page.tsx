'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')" }}
      />
      <div className="absolute inset-0 bg-black/20" />

      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <h1 className="text-6xl font-extralight text-white tracking-[0.3em] mb-24 uppercase">
          Travel Bug
        </h1>
        
        {/* Added gap-8 to space buttons out so they don't touch */}
        <div className="flex flex-col gap-8">
          <Link href="/about" className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition">
            About Us
          </Link>
          <Link href="/signup" className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition border-b border-white/20 pb-4">
            Get Started
          </Link>
          <Link href="/login" className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition">
            Log In
          </Link>
        </div>
      </motion.div>
    </main>
  );
}