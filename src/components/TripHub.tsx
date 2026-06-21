'use client';
import { useState } from 'react';

export default function TripHub() {
  const [mode, setMode] = useState<'solo' | 'family' | 'group'>('solo');

  return (
    <div className="flex flex-col items-center p-20">
      {/* Mode Switcher */}
      <div className="flex gap-8 mb-12">
        {['solo', 'family', 'group'].map((m) => (
          <button 
            key={m} 
            onClick={() => setMode(m as any)}
            className={`uppercase tracking-widest text-sm ${mode === m ? 'text-white border-b border-white' : 'text-white/40'}`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* The Mode-Specific Interface */}
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl p-12 rounded-[2rem] border border-white/10">
        {mode === 'solo' && <SoloContent />}
        {mode === 'family' && <FamilyContent />}
        {mode === 'group' && <GroupContent />}
      </div>
    </div>
  );
}

// These will be the logic files we build next
const SoloContent = () => <div className="text-white">Solo: Your Personal Itinerary...</div>;
const FamilyContent = () => <div className="text-white">Family: Kid-Friendly Map...</div>;
const GroupContent = () => <div className="text-white">Group: Budget Tally & Voting...</div>;