import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pt-24 pb-20">
       <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Our Journal</span>
             <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white mb-6 tracking-tight">Stories from Vietnam</h2>
             <p className="text-gray-500 text-lg">Discover the hidden gems, culinary delights, and cultural wonders of Vietnam through our curated travel guides.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
             {/* Article 1 */}
             <article className="flex flex-col bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group">
                <div className="relative aspect-[16/10] overflow-hidden">
                   <div className="absolute top-4 left-4 z-10">
                      <span className="bg-primary text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded shadow-lg">Food & Drink</span>
                   </div>
                   <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSBMuUkF_0xiReYd7qpNZ0c2YddMG0Gy30xQJz5NzTdkSt0QDZkOqSqAqfMixuTxh2m0wPrePWYa1b-tr7YEU9lfxkbA07-LaEJBK4d0-eDjsZTJ-vyfabpoRuFUs3vC9uiaAgdoLcLNztYaZZkVM7DSwp8BvmhtP27pptH3Mol31yQCA_8BLw119IZz05dJp30elqjkhccBxIBKSD7A5Y5xJLpHrWvuq0OfdRKK1YinXRkiqxRfufhCoErUTwwlOV0GvZuZLWQ9Y')"}}></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                   <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-3">
                      <span>Oct 12, 2023</span> • <span>5 min read</span>
                   </div>
                   <h3 className="text-xl font-bold text-text-main dark:text-white mb-3 leading-snug group-hover:text-primary transition-colors">Top 10 Street Foods You Must Try in Hanoi</h3>
                   <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">From the world-famous Pho to the crispy Banh Mi, explore the culinary delights that make Hanoi a foodie paradise.</p>
                   <div className="mt-auto">
                      <a href="#" className="inline-flex items-center gap-1 text-primary text-xs font-black uppercase tracking-wider hover:gap-2 transition-all">
                         Read More <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                      </a>
                   </div>
                </div>
             </article>

             {/* Article 2 */}
             <article className="flex flex-col bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group">
                <div className="relative aspect-[16/10] overflow-hidden">
                   <div className="absolute top-4 left-4 z-10">
                      <span className="bg-primary text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded shadow-lg">Destinations</span>
                   </div>
                   <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDi86DJGjQbNVjVcKeLesg96G9_CA1Enkmw8A2Xm4YOqM4fEIgghDWmzlgC0KDWlsylUxVktJi7EHcO42DonuWVdtBRS6_p0JbOTEQPSnT_vhT8jZnzvETGC5zSPIdT5KfPhBM9V6UJKMRrlBjun4dYcqc13AQ6I4Vktxr3RZD90EDFLdB2gJaud5zpuFO4NSaTDza8lUUS63RAK8HTVMRwOhJdoMs5Du78jqjcdOn14VE4CfdqSrnWKwcDt4sg2aO6l5o-GPivvQw')"}}></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                   <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-3">
                      <span>Oct 08, 2023</span> • <span>7 min read</span>
                   </div>
                   <h3 className="text-xl font-bold text-text-main dark:text-white mb-3 leading-snug group-hover:text-primary transition-colors">Beyond the Rice Terraces: Exploring Sapa</h3>
                   <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">Head north to discover how mountain air changes the palate. Experience traditional Hmong smoked meats and wine.</p>
                   <div className="mt-auto">
                      <a href="#" className="inline-flex items-center gap-1 text-primary text-xs font-black uppercase tracking-wider hover:gap-2 transition-all">
                         Read More <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                      </a>
                   </div>
                </div>
             </article>

             {/* Article 3 */}
             <article className="flex flex-col bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group">
                <div className="relative aspect-[16/10] overflow-hidden">
                   <div className="absolute top-4 left-4 z-10">
                      <span className="bg-primary text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded shadow-lg">Guides</span>
                   </div>
                   <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzxklx7RauV6fI1asgXwdE_8rDD-3EnVIww9kK3h5vLdopfH76TZYzfSaAUK6BEOLaZYDfrdcmWtq4yUbYbpUmhxkP4LKdLAwCDLUMBfNlL6YZRF50BJCV-27dsrN6pSRhRXC1BgjaEg10fatqhhYRy050EEn-IuK030uy5d16UMwuvQXOlhcL9s7MLvVbZrsIOntoGzKzQFZapPlBiQs9vA-LoTjZF7TT1gnPexsTpsVeVFl67mvfQiPHiQIJq9J8pp-GP6V9YP0')"}}></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                   <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-3">
                      <span>Sep 25, 2023</span> • <span>4 min read</span>
                   </div>
                   <h3 className="text-xl font-bold text-text-main dark:text-white mb-3 leading-snug group-hover:text-primary transition-colors">A Weekend Guide to Hoi An Ancient Town</h3>
                   <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">Discover why Hoi An is the food capital of Central Vietnam. Learn about Cao Lau noodles and where to find the absolute best.</p>
                   <div className="mt-auto">
                      <a href="#" className="inline-flex items-center gap-1 text-primary text-xs font-black uppercase tracking-wider hover:gap-2 transition-all">
                         Read More <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                      </a>
                   </div>
                </div>
             </article>
          </div>

          {/* Newsletter */}
          <div className="bg-primary rounded-[2.5rem] p-12 lg:p-16 relative overflow-hidden shadow-2xl shadow-primary/30">
             <div className="absolute right-0 top-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
             <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
                <div className="flex-1">
                   <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Vietnam in your inbox</h3>
                   <p className="text-white/80 font-medium text-lg">Join 15,000+ travelers. Get exclusive travel tips, hidden gem alerts, and special tour discounts.</p>
                </div>
                <div className="w-full lg:w-auto min-w-[350px]">
                   <form className="flex flex-col gap-3">
                      <input type="email" placeholder="Your email address" className="w-full px-6 py-4 rounded-xl bg-white text-text-main border-0 focus:ring-2 focus:ring-black/20 font-medium" />
                      <button type="button" className="w-full px-6 py-4 rounded-xl bg-background-dark text-white font-black uppercase tracking-wider hover:bg-black transition-colors shadow-lg">
                         Subscribe Now
                      </button>
                   </form>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Blog;