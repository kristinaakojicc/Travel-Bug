import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-10 py-6 z-50">
      <div className="text-white font-black text-xl tracking-widest uppercase">WanderNest</div>
      <div className="flex gap-8 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
        <Link href="/" className="text-white hover:text-indigo-300 transition">Overview</Link>
        <Link href="/analytics" className="text-white/70 hover:text-white transition">Analytics</Link>
        <Link href="/profile" className="text-white/70 hover:text-white transition">Profile</Link>
      </div>
    </nav>
  );
}