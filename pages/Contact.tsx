import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! I'm Minh. Excited to help you plan your journey through Vietnam. What's your name?", isAi: true, time: "10:02 AM" },
    { id: 2, text: "I'm Alex!", isAi: false },
    { id: 3, text: "Nice to meet you, Alex! 👋 To get started, what can I help you with today?", isAi: true },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, { id: Date.now(), text: input, isAi: false }]);
    setInput("");
    
    // Simulate reply
    setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now() + 1, text: "That sounds like a great idea! Let me pull up some options for you.", isAi: true }]);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen flex flex-col text-white">
       {/* Background */}
       <div className="fixed inset-0 z-0">
         <div className="absolute inset-0 bg-black/60 z-10"></div>
         <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4iGvWDyucj5_uJiq2LzH_OeO9bl797d-_UEUjo_Pu244sqBDH9pTri6ab0r8Zf154y7skxraD2JcZSlVXgF7gM_vHoM8JM8jVob59DSWRsDmWgUprPRdBZsrv5S5n6GzR2S1LdLh8W3NLDtlGP-fJBy1dFTeJtRe_mKcun427ddURghWV3dFNw3D-Vony4DJuJudNUnFHUQKkdXQ_b2Xvj_vl5Y5QYh-s3k-PGIArhYUXtoEDijGscg5RBeQOxmsStSNjZjo1Xj0" className="w-full h-full object-cover" alt="Hanoi Map" />
       </div>

       <main className="flex-grow flex items-center justify-center px-4 py-24 relative z-10">
          <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
             <div className="lg:col-span-5 space-y-8">
                <span className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-xs font-bold uppercase tracking-widest text-primary">Live Support</span>
                <h1 className="text-5xl lg:text-7xl font-black leading-tight">Hello from<br/><span className="text-primary italic">Hanoi.</span></h1>
                <p className="text-lg text-white/70">How can we help you explore the heart of Vietnam? Start a conversation with our local concierge team.</p>
                <div className="pt-8 space-y-4 border-t border-white/10">
                   <div className="flex items-center gap-3 text-sm text-white/60">
                      <span className="material-symbols-outlined text-primary text-base">location_on</span>
                      <span>18 Lo Su Street, Hoan Kiem, Hanoi</span>
                   </div>
                   <div className="flex items-center gap-3 text-sm text-white/60">
                      <span className="material-symbols-outlined text-primary text-base">call</span>
                      <span>+84 24 3926 2323</span>
                   </div>
                </div>
             </div>

             <div className="lg:col-span-7 w-full">
                <div className="glass rounded-[2rem] overflow-hidden shadow-2xl flex flex-col h-[600px] border border-white/10">
                   {/* Chat Header */}
                   <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                      <div className="flex items-center gap-3">
                         <div className="relative">
                            <div className="size-10 rounded-full bg-primary/20 overflow-hidden border border-white/20">
                               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5Wf6nPoDN5G4jpwOl3M0JenykPfVni5D2xpxLrT-oZWtgjyQ67gLA8IBNCioIWgOQxIu82tlmJAk8hFaAxw0XWWlz-NQnFb2L-hpIgO7YD4qFYIxXrUBGuZc1E7Eq9plFcGt6J4vCcspQnJAi1ZegbSAK4FAUOPC8WnX8GANvAu-0h71hKAbtIe-ET2WvqM8IpKnvbgPOoiIxS2YiyOtO8LnjPQhtXHdMwTv9WfG8VJM-NFpz39ex1VE3WghJN-wgx9A6xKpaTGc" className="w-full h-full object-cover" alt="Concierge" />
                            </div>
                            <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-surface-dark"></div>
                         </div>
                         <div>
                            <h3 className="font-bold text-sm">Vietmate Concierge</h3>
                            <p className="text-[10px] text-white/50 uppercase tracking-tighter">Typically replies in 5 mins</p>
                         </div>
                      </div>
                      <button className="size-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors">
                         <span className="material-symbols-outlined text-sm">more_horiz</span>
                      </button>
                   </div>

                   {/* Chat Messages */}
                   <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar bg-black/20">
                      {messages.map((msg) => (
                          <div key={msg.id} className={`flex flex-col gap-2 ${msg.isAi ? '' : 'self-end'}`}>
                              <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${msg.isAi ? 'bg-white/10 text-white rounded-tl-none' : 'bg-primary text-white rounded-tr-none shadow-lg shadow-primary/20'}`}>
                                  {msg.text}
                              </div>
                              {msg.time && <span className="text-[10px] text-white/30 ml-2">{msg.time}</span>}
                          </div>
                      ))}
                   </div>

                   {/* Chat Input */}
                   <div className="p-4 bg-black/40 border-t border-white/10">
                      <form onSubmit={handleSend} className="relative">
                         <input 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="w-full bg-white/5 border-none rounded-2xl py-4 pl-6 pr-14 text-sm focus:ring-2 focus:ring-primary/50 placeholder:text-white/30 text-white" 
                            placeholder="Type your message here..." 
                         />
                         <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 size-10 bg-primary rounded-xl flex items-center justify-center hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined text-white text-lg">arrow_forward</span>
                         </button>
                      </form>
                      <div className="mt-3 flex items-center justify-between px-2">
                         <div className="flex gap-4">
                            <button className="text-white/40 hover:text-white transition-colors"><span className="material-symbols-outlined text-lg">attach_file</span></button>
                            <button className="text-white/40 hover:text-white transition-colors"><span className="material-symbols-outlined text-lg">mood</span></button>
                         </div>
                         <p className="text-[10px] text-white/30">Press Enter to send</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </main>
    </div>
  );
};

export default Contact;