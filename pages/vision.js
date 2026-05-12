import { useState } from 'react';
import Head from 'next/head';

export default function Vision() {
  const CALENDLY_URL = "https://calendly.com/aicha77132/30min";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500/30 flex flex-col scroll-smooth">
      <Head>
        <title>Note de Vision | 3ADK Vault</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 px-6 py-4 flex justify-between items-center text-white">
        <div className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent italic tracking-tighter normal-case">
          <a href="/">3ADK Agency</a>
        </div>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="bg-sky-600 px-4 py-2 rounded-lg text-xs font-bold hover:bg-sky-500 transition-all">Audit express</a>
      </nav>

      <main className="flex-grow pt-32 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          <header className="mb-16 border-b border-slate-900 pb-12 text-center md:text-left">
            <div className="text-sky-400 font-bold tracking-widest text-[10px] uppercase mb-4">Confidentiel — Document de Vision</div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic mb-6 leading-none">Projection <br/>Souveraine.</h1>
            <p className="text-slate-500 italic text-sm">Par Aïcha BELAIDOUNI — Fondatrice 3ADK Agency • 2026</p>
          </header>

          <section className="space-y-8 text-lg leading-relaxed text-slate-400 mb-20 text-justify">
            <p>
              Le secret professionnel comptable (Art. 226-13 du Code Pénal) n'est pas négociable. Pourtant, chaque jour, des milliers de documents sensibles sont envoyés vers des serveurs outre-Atlantique sans aucune garantie souveraine.
            </p>
            <p>
              Le projet **3ADK Vault** change le paradigme. Nous ne vous vendons pas un accès à un service tiers. Nous projetons notre technologie d'intelligence artificielle directement dans votre instance **Azure France Central**. 
            </p>
          </section>

          {/* SECTION VALEUR AJOUTÉE UPGRADED */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-12 rounded-[2.5rem] border border-sky-500/30 shadow-2xl mb-20 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 blur-3xl group-hover:bg-sky-500/20 transition-all"></div>
             <h2 className="text-3xl font-bold text-white mb-6 italic tracking-tight italic">Lire le Guide Interne</h2>
             <p className="text-slate-400 mb-10 leading-relaxed italic text-sm">
               Accédez à notre diagnostic complet : "Le Châssis Souverain — Protocoles IA 2026".
             </p>
             <a 
               href="/article-souverainete" 
               className="inline-block px-12 py-5 bg-white text-slate-950 rounded-2xl font-black text-xl hover:bg-sky-400 hover:scale-105 transition-all text-center w-full md:w-auto"
             >
               Accéder au Livre Blanc ➔
             </a>
          </div>

          <footer className="pt-20 border-t border-slate-900 text-center space-y-12">
            <h3 className="text-3xl font-bold text-white italic tracking-tighter italic">Étude de faisabilité</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">Réservez votre créneau pour valider la projection du Vault sur votre infrastructure Azure.</p>
            <a 
              href={CALENDLY_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-sky-600 text-white rounded-2xl font-black text-xl hover:bg-sky-500 hover:scale-110 shadow-2xl shadow-sky-500/40 transition-transform"
            >
              Réserver mon Audit (30 min)
            </a>
          </footer>
        </article>
      </main>

      <footer className="w-full p-20 border-t border-slate-900 bg-slate-950 text-[10px] text-slate-700 uppercase tracking-[0.3em] text-center font-bold">
        3ADK Agency • Propriété Exclusive
      </footer>
    </div>
  );
}
