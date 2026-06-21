'use client';
import Link from 'next/link';

export default function Dashboard() {
  const modes = [
    { name: 'Solo', path: '/dashboard/solo' },
    { name: 'Family', path: '/dashboard/family' },
    { name: 'Group', path: '/dashboard/group' },
  ];

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-12 text-white">
      <h1 className="text-3xl font-extralight tracking-[0.2em] uppercase mb-20 text-center">Travel Bug Hub</h1>
      
      {/* Buttons with massive spacing */}
      <div className="flex flex-col gap-12">
        {modes.map((mode) => (
          <Link 
            key={mode.name} 
            href={mode.path}
            className="text-2xl font-light uppercase tracking-[0.3em] text-white/50 hover:text-white transition-all hover:scale-105"
          >
            {mode.name} Trip
          </Link>
        ))}
      </div>
    </main>
  );
}