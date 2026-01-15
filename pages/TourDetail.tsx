import React from 'react';

const TourDetail: React.FC = () => {
  return (
    <div className="bg-background-dark text-slate-300">
      {/* Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden snap-start">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuByuzMQa5hZMq5hZ5m7JeeilYWFQ72iwdiFeDBkET0IF0bIxhjQ3D7x4eEFfefqXMO0oJ9HR-nanDKcl-fGNb7c3l-ZB6cy1nMCaLZk1u3vWS2IxQ7y8Fu50hFGM1KT_BlSeYWR2Q1dNfhD8xQhCJSLIKrqUSBhQWjlN04T2QX_NUeZoV6zsM_za4Q6KwFXq9zb7rhqQjUxGI5VJiL64xxxjEzFxKFJfIYNognf72VWV3Qgq-7jTOUixzYZLNrQ3UvMbMV_qjVE84c"
          alt="Hanoi Food"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background-dark"></div>
        
        <div className="relative z-10 max-w-3xl px-6 text-center">
           <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-primary mb-6 animate-pulse">The Inspired Explorer Series</h2>
           <h1 className="text-6xl md:text-9xl font-serif italic text-white leading-none mb-8">Midnight in Hanoi</h1>
           <p className="text-lg md:text-xl text-slate-300 font-light max-w-xl mx-auto leading-relaxed opacity-80">
              A sensory journey through the hidden alleyways, steam-filled corners, and neon-lit secrets of the Old Quarter.
           </p>
           <div className="mt-16 flex flex-col items-center">
              <span className="text-xs uppercase tracking-widest font-bold mb-4 opacity-50">Scroll to Begin</span>
              <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
           </div>
        </div>
      </section>

      {/* Chapter I */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZXI8x0sdKm9kc6eKaawC7Uh5VYC6UG2wev2NGYAamB4rTrvMri9G8Wim1Z4QiALKrdshChVuKw5xx3GAYSIQIew8C2eT20bDQCtjrnqQk_Bpuu3lJNpnxEMrPYun2-yIuR98Co9SZKXK3fzZvV6RCcXN-aMcCGNmcqZHD4jeA7Zv4N1wXwXu65YU_ugI9tHwgiyurJ0IaLQs9rZMtHlJ6IP1C6lU4FWI6QEBmW_vmttARGaOpAM2DXCFmSuUNlveNfiKlpS4IX1I" 
          alt="Hanoi Streets"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-[1200px] w-full px-8 mx-auto flex flex-col md:flex-row items-end gap-12 relative z-10 pb-20">
           <div className="md:w-1/2">
              <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block italic">Chapter I</span>
              <h3 className="text-4xl md:text-6xl font-serif text-white mb-6">Chasing Neon Lights</h3>
              <p className="text-lg text-slate-200 leading-relaxed font-light">
                 As the sun dips below the horizon, Hanoi transforms. Hop onto the back of a vintage motorbike and feel the warm night air as we weave through a labyrinth of history.
              </p>
           </div>
           <div className="md:w-1/3 bg-black/60 backdrop-blur-md p-8 border border-white/10 rounded-xl">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                 <span className="material-symbols-outlined text-primary">speed</span>
                 The Experience
              </h4>
              <ul className="space-y-4 text-sm opacity-80">
                 <li className="flex gap-3"><span>•</span> Authentic vintage motorbike ride</li>
                 <li className="flex gap-3"><span>•</span> Safety-first professional drivers</li>
                 <li className="flex gap-3"><span>•</span> Exclusive access to narrow "shortcut" lanes</li>
              </ul>
           </div>
        </div>
      </section>

      {/* Chapter II */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOSaCvBhewyQQzxNyry5y4WdB_VlD5edB3pesuaNTutzCKImfOe1DoDckk5kybI5NdnfMss1WJQ7O9Y3a3F8vuZfqQy4evTzGTJ6PgDfmdayliOjrQGzf0d5hEMVlq_8CeV7AHPzqaezRMMa__P5oAt8agb13bHPgGljLaP0gOVu_f9a0p7qChjlse0yD2EV3wBBKc2RlgKHb0ZiiahVNkUYEZiOcghXaXzBZ9Lv0YVZ_GOlxfz_2kzFkQ49FtgXgLwvW2Ve9EKT8" 
          alt="Food"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
        <div className="max-w-[1200px] w-full px-8 mx-auto relative z-10">
           <div className="max-w-xl">
              <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block italic">Chapter II</span>
              <h3 className="text-4xl md:text-6xl font-serif text-white mb-6">A Symphony of Smoke</h3>
              <p className="text-lg text-slate-200 leading-relaxed font-light mb-8">
                 From the sizzling Bánh Xèo to the iconic Bún Chả, we find the family-run stalls where recipes have been guarded for generations. No guidebooks, just pure local legacy.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg">
                    <span className="text-3xl font-serif text-white">7+</span>
                    <p className="text-[10px] uppercase tracking-widest font-bold mt-2">Signature Dishes</p>
                 </div>
                 <div className="p-4 bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg">
                    <span className="text-3xl font-serif text-white">100%</span>
                    <p className="text-[10px] uppercase tracking-widest font-bold mt-2">Locally Sourced</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-32 px-6 bg-surface-dark">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-lg">
             <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 p-10 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between">
                   <div>
                      <div className="flex items-end gap-2 mb-6">
                         <span className="text-5xl font-black text-white">$25</span>
                         <span className="text-slate-500 mb-2 uppercase tracking-widest text-xs font-bold">/ Person</span>
                      </div>
                      <ul className="space-y-6">
                         <li className="flex items-center gap-4 group">
                            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">schedule</span>
                            <div>
                               <span className="block text-xs uppercase font-bold tracking-widest text-slate-500">Duration</span>
                               <span className="text-white">4 Immersive Hours</span>
                            </div>
                         </li>
                         <li className="flex items-center gap-4 group">
                            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">groups</span>
                            <div>
                               <span className="block text-xs uppercase font-bold tracking-widest text-slate-500">Intimacy</span>
                               <span className="text-white">Max 8 Explorers</span>
                            </div>
                         </li>
                      </ul>
                   </div>
                   <div className="mt-12 pt-8 border-t border-white/5">
                      <p className="text-xs text-slate-500 italic">“This tour changes how you see the city.”</p>
                   </div>
                </div>
                
                <div className="md:col-span-3 p-10 space-y-8 bg-black/20">
                   <div className="space-y-4">
                      <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-primary">Select Your Odyssey Date</label>
                      <div className="relative group">
                         <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">calendar_month</span>
                         <input className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-14 pr-4 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" type="date" />
                      </div>
                   </div>
                   <button className="w-full bg-primary hover:bg-red-700 text-white py-6 rounded-xl font-black uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(230,0,42,0.4)] hover:shadow-[0_0_40px_rgba(230,0,42,0.6)] transition-all flex items-center justify-center gap-3">
                      Reserve My Place
                      <span className="material-symbols-outlined">east</span>
                   </button>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourDetail;