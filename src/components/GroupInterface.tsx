'use client';
import { useState } from 'react';
import { Plus, Check, X, DollarSign } from 'lucide-react';

export default function GroupInterface() {
  const [budgetItems, setBudgetItems] = useState([{ name: 'Hotel', cost: 200 }]);
  const [votes, setVotes] = useState([{ activity: 'Beach Trip', yes: 0, no: 0 }]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Budget Tally Section */}
      <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <DollarSign className="text-indigo-400" /> Budget Tally
        </h3>
        {budgetItems.map((item, i) => (
          <div key={i} className="flex justify-between py-2 border-b border-white/5">
            <span>{item.name}</span>
            <span className="font-bold">${item.cost}</span>
          </div>
        ))}
        <button className="mt-4 w-full py-2 bg-white/10 rounded-xl hover:bg-white/20 transition">Add Expense</button>
      </div>

      {/* Voting Section */}
      <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
        <h3 className="text-xl font-bold mb-4">Activity Voting</h3>
        {votes.map((vote, i) => (
          <div key={i} className="flex justify-between items-center bg-black/20 p-4 rounded-xl">
            <span>{vote.activity}</span>
            <div className="flex gap-2">
              <button className="p-2 bg-green-500/20 text-green-400 rounded-lg"><Check size={18} /></button>
              <button className="p-2 bg-red-500/20 text-red-400 rounded-lg"><X size={18} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}