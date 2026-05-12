import { useState } from 'react';
import Head from 'next/head';

export default function Vision() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500/30 flex flex-col">
      <Head>
        <title>Note de Vision | 3ADK Vault</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-sm text-[10px] font-bold uppercase tracking-widest text-white">
          <div className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent italic tracking-tighter normal-case">
            <a href="/">3ADK Agency</a>
          </div>
          <a href="https://calendly.com/aichaboulidouni/demo-3adk" className="bg-sky-600 px-4 py-2 rounded-lg hover:bg-sky-500 transition-all">Prendre RDV</a>
        </div>
      </nav>

      <main className="flex-grow pt-32 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          <header className="mb-16 border-b border-slate-900 pb-12">
            <div className="text-sky-400 font-bold tracking-widest text-[10px] uppercase mb-4 underline decoration-2 underline-offset-8">Confidentiel — Document de Travail</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter italic mb-6">Projection d'Intelligence en Zone Souveraine</h1>
            <p className="text-slate-500 italic text-sm">Par Aïcha BELAIDOUNI — Fondatrice 3ADK Agency • Mai 2026</p>
          </header>

          <section className="space-y-8 text-lg leading-relaxed text-slate-300 mb-20 text-justify">
            <p>
              Le secret professionnel comptable (Art. 226-13 du Code Pénal) n'est pas négociable. Pourtant, chaque jour, des milliers de documents sensibles sont envoyés vers des serveurs outre-Atlantique sans aucune garantie souveraine.
            </p>
            <div className="p-10 bg-slate-900/50 rounded-2xl italic font-medium text-sky-400 border border-sky-500/20 text-center shadow-inner">
              "L'IA ne doit pas être une fuite, elle doit être un coffre-fort."
            </div>
            <p>
              Le projet **3ADK Vault** change le paradigme. Nous ne vous vendons pas un accès à un service tiers. Nous projetons notre technologie d'intelligence artificielle directement dans votre instance **Azure France Central**. 
            </p>
          </section>

          {/* SECTION VALEUR AJOUTÉE UPGRADED */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-12 rounded-[2rem] border border-sky-500/30 shadow-2xl mb-20">
             <h2 className="text-2xl font-bold text-white mb-6 italic tracking-tight">Accédez à votre Guide Offert</h2>
             <p className="text-slate-400 mb-10 leading-relaxed italic text-sm">
               Nous avons préparé un guide de conformité IA 2026 pour les cabinets comptables. 100% souverain, 100% actionnable.
             </p>
             <div className="flex flex-col gap-6">
                <a 
                  href="https://snyuaperwsispgkiqtoy.supabase.co/storage/v1/object/public/leads_vault/3ADK_Livre_Blanc_IA_Souveraine.pdf" 
                  target="_blank"
                  className="w-fit px-12 py-5 bg-white text-slate-950 rounded-2xl font-black text-xl hover:bg-sky-400 hover:scale-105 transition-all flex items-center justify-center gap-4"
                >
                  📥 Télécharger le Guide (PDF)
                </a>
             </div>
          </div>

          <footer className="pt-20 border-t border-slate-900 text-center space-y-12">
            <h3 className="text-3xl text-white font-bold italic tracking-tighter">Planifiez votre Démo Souveraine</h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
               L'intégration de 3ADK Vault nécessite un audit technique de 15 minutes. 
               Vérifiez dès maintenant si votre infrastructure est prête pour l'IA souveraine.
            </p>
            <a 
              href="https://calendly.com/aichaboulidouni/demo-3adk" 
              className="inline-block px-12 py-5 bg-sky-600 text-white rounded-2xl font-black text-xl hover:bg-sky-500 hover:scale-110 shadow-2xl shadow-sky-500/40 transition-transform"
            >
              Réserver mon Audit de Châssis (15 min)
            </a>
          </footer>
        </article>
      </main>

      <footer className="w-full p-20 border-t border-slate-900 bg-slate-950 text-[10px] text-slate-600 uppercase tracking-[0.3em] text-center">
        Propriété Intellectuelle 3ADK Agency • Aïcha BELAIDOUNI
      </footer>
    </div>
  );
}
