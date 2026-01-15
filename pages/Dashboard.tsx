import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-background-dark text-white overflow-hidden">
       {/* Background Video */}
       <video autoPlay loop muted className="fixed top-0 right-0 w-full h-full object-cover opacity-20 z-0 pointer-events-none">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-motorcyclist-riding-on-a-mountain-road-40544-large.mp4" type="video/mp4" />
       </video>

       {/* Sidebar */}
       <aside className="w-20 lg:w-72 bg-surface-dark border-r border-white/10 flex flex-col h-full relative z-10">
          <div className="p-6 flex items-center gap-3">
             <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-2xl">rocket_launch</span>
             </div>
             <span className="text-2xl font-black tracking-tight hidden lg:block uppercase">Vietmate</span>
          </div>
          
          <div className="px-4 mb-8 hidden lg:block">
             <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary">search</span>
                <input type="text" placeholder="Search adventures..." className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-white/30 text-white" />
             </div>
          </div>

          <nav className="flex-1 px-4 space-y-2 overflow-y-auto no-scrollbar">
             <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4 px-2 hidden lg:block">Explorer Menu</div>
             <a href="#" className="flex items-center gap-4 px-4 py-3 bg-primary/10 text-primary rounded-xl font-bold transition-all group border border-primary/20">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">dashboard</span>
                <span className="hidden lg:block">Dashboard</span>
             </a>
             <a href="#" className="flex items-center gap-4 px-4 py-3 text-white/60 hover:bg-white/5 hover:text-white rounded-xl font-bold transition-all group">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">explore</span>
                <span className="hidden lg:block">Itineraries</span>
             </a>
             <a href="#" className="flex items-center gap-4 px-4 py-3 text-white/60 hover:bg-white/5 hover:text-white rounded-xl font-bold transition-all group">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">map</span>
                <span className="hidden lg:block">Destinations</span>
             </a>

             <div className="pt-8 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4 px-2 hidden lg:block">Trip Stats</div>
             <div className="hidden lg:block px-4 py-4 bg-white/5 rounded-2xl space-y-4 border border-white/5">
                <div className="flex justify-between items-center">
                   <span className="text-xs text-white/50">Budget Used</span>
                   <span className="text-xs font-bold text-primary">65%</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                   <div className="bg-primary w-[65%] h-full"></div>
                </div>
                <div className="flex items-center gap-3 pt-2">
                   <div className="size-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                      <span className="material-symbols-outlined text-sm">bolt</span>
                   </div>
                   <span className="text-xs font-medium">3 Pending Bookings</span>
                </div>
             </div>
          </nav>

          <div className="p-4 border-t border-white/10 mt-auto">
             <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-xl cursor-pointer transition-colors">
                <div className="size-10 rounded-full bg-gradient-to-tr from-primary to-orange-500 overflow-hidden border-2 border-white/20">
                   <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9nMLlVULjivE4BPiZ8pMukC2tG6DZypFhnG19oGRugFmkeLdhgyaeNTd3ep0OpbZvXualGGFHQmrGsh8F4dFOGz1C5AxV3-oXpzdM-0Elgpon5chwupnp8YEwBFaS8_BYT9YDtNmU3cMGqteyMTgsJt1i9zDlrq4eZv6dY3eEVBtQnL0j2ANDUonZ8MQQCembjtDqPHxah3sUtx4zgtuuYz8mH8JRMtkw10lYuhNYj13fsqbF3_9atNsX7ey14pCEBPWc-aduSoM" alt="User" />
                </div>
                <div className="hidden lg:block overflow-hidden">
                   <p className="text-sm font-bold truncate">Alex Explorer</p>
                   <p className="text-[10px] text-white/50 truncate">PRO Explorer Level 4</p>
                </div>
             </div>
             <Link to="/" className="mt-2 text-xs text-white/40 hover:text-white flex justify-center lg:justify-start lg:pl-2">Exit Dashboard</Link>
          </div>
       </aside>

       {/* Main Content */}
       <main className="flex-1 overflow-y-auto no-scrollbar relative z-10 p-4 lg:p-8">
          <header className="flex justify-between items-center bg-white/5 backdrop-blur-xl p-6 rounded-3xl mb-8 border border-white/10">
             <div className="flex items-center gap-4">
                <h2 className="text-xl font-black">Hanoi Basecamp</h2>
                <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20">Active Trip</span>
             </div>
             <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                   <img className="size-8 rounded-full border-2 border-background-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARx3Avlg2m2we7fqGZ-8o64hPfOF49Rj2pj2df0bQSfe6pLyNFc77wEaShWGg3_Rvc20WEo3HLpCICtTia2nFbOFthOTKM_npTd4-akdwDf4xU1spYtKDmO6isqHjywD4bp3eNHadVp97nApGWyDA8x0RXMvXPRg4M2hH2ejdv0ixY5MevBSM3iEvaTxbfyqYV6JN3hrnruamh2ZH-uiWN-3qkx41svvwzggDTM5vlISWaqFwDkJQwPpmbbTiEJ10pu2gEcEzTvkE" alt="" />
                   <div className="size-8 rounded-full border-2 border-background-dark bg-white/10 flex items-center justify-center text-[10px] font-bold">+2</div>
                </div>
                <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all shadow-xl shadow-white/5">
                   New Adventure
                </button>
             </div>
          </header>

          <div className="max-w-2xl py-8">
             <h1 className="text-6xl font-black leading-[1.1] mb-6 drop-shadow-2xl">Vietnam is your <br/><span className="text-primary italic">Playground.</span></h1>
             <p className="text-xl text-white/80 font-medium max-w-lg drop-shadow-md">Your next adrenaline rush starts here. Pick a segment or craft your own legend.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
             {/* Card 1 */}
             <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-3xl flex flex-col group relative overflow-hidden hover:bg-white/10 transition-all">
                <div className="absolute -top-12 -right-12 size-32 bg-primary/20 blur-3xl"></div>
                <div className="flex justify-between items-start mb-6">
                   <div className="size-12 bg-primary text-white rounded-2xl flex items-center justify-center">
                      <span className="material-symbols-outlined">directions_run</span>
                   </div>
                   <span className="text-[10px] font-bold bg-white/10 px-2 py-1 rounded">MORNING SEGMENT</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Street Food Sprint</h3>
                <p className="text-sm text-white/50 mb-6 flex-1">7:00 AM • Hanoi Old Quarter • 4 Spots Included</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                   <div className="flex items-center gap-1 text-primary">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      <span className="text-xs font-bold">2h 30m left</span>
                   </div>
                   <button className="text-xs font-bold hover:text-primary transition-colors">Details</button>
                </div>
             </div>

             {/* Card 2 - Image */}
             <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_0HAEadB-wg9SamwqxQ3LQhvwED86fsC3kquE-3FuSflW7hlFO17LfkisEiy1BuuOOn6dYVwn9aOaAHvJEeL1ztw83gpYHpmIZiTq_qxCQpjeRC750In1rW2mEpcuLCj-YeXMiHO7lcECIiLFb11QieFq9hmlSDboBLgm0jN9rmAVkt7kHelXRm2W3f-HgGUTPyrO6cVI-hsNzsB_wjXGQlpHY6-Y0OhdI7nBdZ6R0yopBIJxheYxh0J9VK49vPu7usZQ6qdamG8" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Train Street" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-red-500 text-white text-[10px] font-bold rounded-lg uppercase tracking-wider shadow-lg">Trending</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                   <h3 className="text-xl font-black mb-1">Train Street Adrenaline</h3>
                   <p className="text-xs text-white/70 mb-4">Feel the rush as the train passes inches away</p>
                   <button className="w-full bg-white/20 backdrop-blur-md hover:bg-primary transition-all py-3 rounded-xl font-bold text-sm">Quick Add +</button>
                </div>
             </div>

             {/* Card 3 - Image */}
             <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuqU-52DQmoi0NIIh1FhrzA-JXc1Q-EqE0jnZ9wjoyqg4LVeqnIKHve1Xc2qp2NEqVxXnTJxLnrmWpKmtBZ5XDrlL1zi_8Kbjtv9MuiKz4iN5LRFWHdaXw51h5v2PzY0Q6iS9pStd634aEhcQuicjy92QlpH9E_ajhgaZlqIsPI85F2ge8g9n716nmspPgO3ZWiEStVuXzjpOUULR-0Nj_3f-5GVlN1LIjhcOTJNfLCDz-nHHQgdHuyRhXzWlboecyvaCuepEVgpE" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Ha Giang" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-lg uppercase tracking-wider shadow-lg">Epic Loop</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                   <h3 className="text-xl font-black mb-1">The Ha Giang Ridge</h3>
                   <p className="text-xs text-white/70 mb-4">Motorbike expedition through the north</p>
                   <button className="w-full bg-white/20 backdrop-blur-md hover:bg-primary transition-all py-3 rounded-xl font-bold text-sm">Reserve Slot</button>
                </div>
             </div>

             {/* Card 4 - Transport */}
             <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-3xl flex flex-col col-span-1">
                <div className="flex items-center justify-between mb-6">
                   <h3 className="text-lg font-bold">Smart Connect</h3>
                   <div className="flex gap-2">
                      <button className="size-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><span className="material-symbols-outlined text-sm">directions_bus</span></button>
                   </div>
                </div>
                <div className="space-y-3">
                   <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl hover:bg-white/10 cursor-pointer transition-all border border-transparent hover:border-white/10">
                      <div className="size-10 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                         <span className="material-symbols-outlined">airport_shuttle</span>
                      </div>
                      <div className="flex-1">
                         <div className="flex justify-between">
                            <p className="text-sm font-bold">Hanoi ➔ Ha Long</p>
                            <p className="text-sm font-black text-primary">$18</p>
                         </div>
                         <p className="text-[10px] text-white/40">Luxury Limousine Van</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl hover:bg-white/10 cursor-pointer transition-all border border-transparent hover:border-white/10">
                      <div className="size-10 bg-primary/20 text-primary rounded-xl flex items-center justify-center shrink-0">
                         <span className="material-symbols-outlined">train</span>
                      </div>
                      <div className="flex-1">
                         <div className="flex justify-between">
                            <p className="text-sm font-bold">Hanoi ➔ Sapa</p>
                            <p className="text-sm font-black text-primary">$35</p>
                         </div>
                         <p className="text-[10px] text-white/40">Sleeper Train • 21:30</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </main>
    </div>
  );
};

export default Dashboard;