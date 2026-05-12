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
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-sm">
          <div className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent italic tracking-tighter">
            <a href="/">3ADK Agency</a>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-32 pb-20 px-6">
        <article className="max-w-3xl mx-auto space-y-12">
          <header className="space-y-4">
            <div className="text-sky-400 font-bold tracking-widest text-[10px] uppercase underline decoration-2 underline-offset-8">Confidentiel</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter italic">Projection d'Intelligence en Zone Souveraine</h1>
            <p className="text-slate-500 italic">Par Aïcha BELAIDOUNI — Mai 2026</p>
          </header>

          <section className="space-y-6 text-lg leading-relaxed text-slate-300">
            <h2 className="text-2xl font-bold text-white italic">La fin de l'IA "Cloud Public" pour les Experts</h2>
            <p>
              Le secret professionnel comptable (Art. 226-13 du Code Pénal) n'est pas négociable. Pourtant, chaque jour, des milliers de documents sensibles sont envoyés vers des serveurs outre-Atlantique sans aucune garantie souveraine.
            </p>
            <div className="p-8 bg-slate-900 rounded-2xl border-l-4 border-sky-500 italic font-medium">
              "L'IA ne doit pas être une fuite, elle doit être un coffre-fort."
            </div>
            <p>
              Le projet **3ADK Vault** change le paradigme. Nous ne vous vendons pas un accès à un service tiers. Nous projetons notre technologie d'intelligence artificielle directement dans votre instance **Azure France Central**. 
            </p>
          </section>

          <section className="space-y-6 text-lg leading-relaxed text-slate-300">
            <h2 className="text-2xl font-bold text-white italic">Les 3 Piliers de votre Asset de Croissance</h2>
            <ul className="space-y-8">
              <li className="flex gap-4">
                <span className="text-sky-400 font-bold">01.</span>
                <div>
                  <h3 className="text-white font-bold mb-2">Isolation Totale</h3>
                  <p className="text-base text-slate-400">Vos dossiers clients restent au repos sur vos serveurs certifiés. L'IA vient interroger la donnée localement via un tunnel sécurisé.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-sky-400 font-bold">02.</span>
                <div>
                  <h3 className="text-white font-bold mb-2">Audit-Proof Automation</h3>
                  <p className="text-base text-slate-400">Le système est conçu pour la réforme 2026. Chaque anomalie détectée est sourcée, justifiée et prête pour la validation humaine.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-sky-400 font-bold">03.</span>
                <div>
                  <h3 className="text-white font-bold mb-2">ROI Opérationnel</h3>
                  <p className="text-base text-slate-400">Nos Digital Workers libèrent entre 30 et 50h de temps de saisie et révision par mois, par collaborateur.</p>
                </div>
              </li>
            </ul>
          </section>

          <footer className="pt-20 border-t border-slate-900 text-center space-y-8">
            <p className="text-xl text-white font-bold italic underline decoration-sky-500 underline-offset-8">Êtes-vous prêt pour le pas d'après ?</p>
            <a href="/#waitlist" className="inline-block px-10 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-sky-400 transition-all">
              Réserver mon Audit de Châssis
            </a>
          </footer>
        </article>
      </main>

      <footer className="w-full p-12 border-t border-slate-900 bg-slate-950 text-[10px] text-slate-600 uppercase tracking-widest text-center">
        Propriété Intelectuelle 3ADK Agency • 2026
      </footer>
    </div>
  );
}
