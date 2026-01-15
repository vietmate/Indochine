import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-background-dark text-white">
      {/* Hero Video Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover scale-105"
            poster="https://lh3.googleusercontent.com/aida-public/AB6AXuBB63SuFlnwy6j3ykCvlO6AuVI2wr_o0EPlRwisBRdng59xgJhUqUy9YuaLbcboqIaRwuNeDMLkynf00hh0b3xR78W5AXUlhe0fIrrrFp68mfLqT1GGZbmGIcUZAkVUKCxUIOwvA8Us1Wxvq0OMXCALoKgYTXt3SY5umGJSBiO1MohGJCzr8PBoqaPFlRu7QVwChbdf3mVge0bvwwnTfCSQWzNczcPQ0vLacgWLxx547yCT9g8lDckrpODSSYR3pL91Efehy-sTHsI"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-floating-over-the-mountains-of-a-beautiful-island-40156-large.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-5xl">
          <h2 className="text-white/80 text-sm uppercase tracking-[0.5em] mb-6 animate-pulse">Experience the Timeless</h2>
          <h1 className="text-6xl md:text-[8rem] font-serif italic text-white leading-[0.9] drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] mb-8 tracking-tighter">
            Indochina <br /> <span className="not-italic font-black text-white/90">Elegance</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto uppercase">
             Curating breathtaking moments from Sapa to Saigon.
          </p>
        </div>

        {/* Floating Search Bar */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 w-full max-w-xl px-6">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full p-2 flex items-center shadow-2xl">
             <div className="flex-1 flex items-center px-6">
                <span className="material-symbols-outlined text-white/40 mr-3">search</span>
                <input type="text" placeholder="Where do you want to wander?" className="w-full bg-transparent border-none text-white placeholder-white/40 focus:ring-0 text-sm font-medium focus:outline-none" />
             </div>
             <button className="bg-white text-black hover:bg-primary hover:text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300">
                Explore
             </button>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="bg-white dark:bg-background-dark py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-48">
             <div className="lg:col-span-7 overflow-hidden rounded-[2rem] group cursor-pointer relative">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_0HAEadB-wg9SamwqxQ3LQhvwED86fsC3kquE-3FuSflW7hlFO17LfkisEiy1BuuOOn6dYVwn9aOaAHvJEeL1ztw83gpYHpmIZiTq_qxCQpjeRC750In1rW2mEpcuLCj-YeXMiHO7lcECIiLFb11QieFq9hmlSDboBLgm0jN9rmAVkt7kHelXRm2W3f-HgGUTPyrO6cVI-hsNzsB_wjXGQlpHY6-Y0OhdI7nBdZ6R0yopBIJxheYxh0J9VK49vPu7usZQ6qdamG8" 
                  alt="Hanoi Street" 
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-1000"
                />
             </div>
             <div className="lg:col-span-5 lg:pl-12">
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Cultural Heritage</span>
                <h2 className="text-5xl md:text-7xl font-fancy leading-tight mb-8">The Echoes of Hanoi's Old Quarter</h2>
                <p className="text-gray-400 text-lg leading-relaxed font-light mb-10 max-w-md">
                   Between the narrow alleys and the scent of morning coffee, discover a city that breathes history. Our curated tours take you beyond the surface.
                </p>
                <Link to="/tour/hanoi" className="inline-flex items-center gap-4 group">
                   <span className="text-sm font-black uppercase tracking-widest">Read Story</span>
                   <span className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                      <span className="material-symbols-outlined">north_east</span>
                   </span>
                </Link>
             </div>
          </div>

          {/* Cards Grid */}
          <div className="border-t border-white/10 pt-24">
             <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-xl">
                   <h2 className="text-5xl font-fancy italic mb-4">Captivating Escapes</h2>
                   <p className="text-gray-400 font-light">From the emerald waters of the north to the sun-drenched deltas of the south.</p>
                </div>
                <div className="flex gap-4">
                   <button className="size-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"><span className="material-symbols-outlined">arrow_back</span></button>
                   <button className="size-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"><span className="material-symbols-outlined">arrow_forward</span></button>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Ha Long Bay Cruise", type: "Natural Wonder", price: 126, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGGDpYk24i33R5m8DbZTtZA1k0WrbvKMW4gRwHAYK72iMXduEj9J_b_G2qfbD85kLwzetC1wQtBgKZFxxOeFZCZLUZlH3M29Wshiew9PRYVwXPP4Hj6uf88VL0Wxo3gtL1eLk0ecgtfUBGarEXAxrSXSQwHyXe1eQbEofYjPXN6aLNpFEnts-gc_QqK5y2y5aP7TJrsu6P1pq02jJ8PCbNdJB6FVLays2aget7Kfvl053rfK16opbeJz5Uh258ENXTcPK1Im1ApMA" },
                  { title: "Golden Bridge", type: "Modern Marvel", price: 46, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwAGo0-cmIuHwi6vbOy2Z7TE1fs4E_1ipqIoQSsbkvViiV5RKCN3vpYTgYQSnphjvZ-_9mzwZNvEnPrmJbRDCmi5sZ5EPm54RgrocRCybBTLqZgnpdWAu4alxQuouTiebL0VDUoi8sNtIspWQKT0dZQ6jD8QJLUQ0oN6WJKvdn62_514r6hHujvwEFAZMlWQqbzp2-WAD5RCX_S8BHlXfQlc2_Tix_I6moGUn_CSOEIajGeh-hNn1F9L3XwOyvGgMZp6RHcU5BayU" },
                  { title: "Ninh Binh River", type: "Rural Tranquility", price: 36, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsCWscGhSEAJ3fLEz5s-f0SwYTP7BJYKsgC9qx4HqBBukymM7ylnw3gwORApAftCWPU8Uy8V2ojhpUWMbTXpCWi8YqBfGyKEN9rnOf4YSXwpiCUtVbyxabvGsKnzpvRW5gtnC1WofDOZxlitVCeAx2uE7-6wgq63tSvr7ewbyVqSOvGIjr0cwOj2I4kbaDuSGwtibxwPCqe6pbRB4bjKehSK7xfV-LZuFgDKzmgIWEukCiGKtdNSbEFY_SeAoYOyaK1sE6NFMiKJE" },
                ].map((item, i) => (
                  <div key={i} className="group cursor-pointer">
                     <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[3/4]">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                        <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                           <p className="text-white text-xs font-black uppercase tracking-widest">View Experience</p>
                        </div>
                     </div>
                     <div className="flex justify-between items-start">
                        <div>
                           <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                           <p className="text-gray-500 text-sm uppercase tracking-widest">{item.type}</p>
                        </div>
                        <span className="text-primary font-black">${item.price}</span>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;