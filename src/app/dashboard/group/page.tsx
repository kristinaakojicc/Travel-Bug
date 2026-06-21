'use client';
import { useState, useMemo } from 'react';

export default function GroupPage() {
  const [expenses] = useState([{ name: 'Dinner', cost: 150 }]);
  const totalCost = useMemo(() => expenses.reduce((acc, curr) => acc + curr.cost, 0), []);

  return (
    <main className="min-h-screen bg-slate-950 p-20 text-white">
      <h1 className="text-2xl font-light uppercase tracking-widest text-center mb-12">Group Mode</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-12 bg-white/5 p-12 rounded-[2rem] border border-white/10">
        <div>
          <h3 className="uppercase tracking-widest mb-6">Budget Tally</h3>
          <p className="text-4xl font-bold">${totalCost}</p>
        </div>
        <div>
          <h3 className="uppercase tracking-widest mb-6">Voting</h3>
          <button className="px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition">Add Activity</button>
        </div>
      </div>
    </main>
  );
}