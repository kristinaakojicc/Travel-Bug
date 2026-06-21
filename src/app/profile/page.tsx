export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-black mb-8">User Profile</h1>
      
      {/* Profile Card */}
      <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 flex items-center gap-6 mb-8">
        <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold">KK</div>
        <div>
          <h2 className="text-2xl font-bold">Kristina Kojic</h2>
          <p className="text-slate-400">Mechatronics & AI Engineering</p>
        </div>
      </div>

      {/* Grid of Info Cards */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
          <h3 className="text-slate-400 text-sm font-bold uppercase">Active Projects</h3>
          <p className="text-3xl font-black mt-2">BCI Signal Decoding</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
          <h3 className="text-slate-400 text-sm font-bold uppercase">Travel Status</h3>
          <p className="text-3xl font-black mt-2">Explorer Level 5</p>
        </div>
      </div>
    </div>
  );
}