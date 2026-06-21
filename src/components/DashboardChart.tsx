'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TripDashboard() {
  const [tripMode, setTripMode] = useState<'solo' | 'family' | 'group'>('solo');

  return (
    <div className="min-h-screen bg-slate-950 p-10">
      <div className="flex gap-4 mb-10">
        {(['solo', 'family', 'group'] as const).map((mode) => (
          <button 
            key={mode}
            onClick={() => setTripMode(mode)}
            className={`px-8 py-3 rounded-2xl font-bold transition-all ${tripMode === mode ? 'bg-indigo-500 scale-105' : 'bg-white/5 text-white/50'}`}
          >
            {mode.charAt(0).toUpperCase() + mode.slice(1)} Trip
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={tripMode}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10"
        >
          {tripMode === 'solo' && <SoloInterface />}
          {tripMode === 'family' && <FamilyInterface />}
          {tripMode === 'group' && <GroupInterface />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Placeholder Interfaces
const SoloInterface = () => <div className="text-white">Solo Mode: Personal Itinerary & Private Notes</div>;
const FamilyInterface = () => <div className="text-white">Family Mode: Kid-Friendly Filters & Safety Map</div>;
const GroupInterface = () => <div className="text-white">Group Mode: Budget Tally, Shared Calendar, & Voting</div>;