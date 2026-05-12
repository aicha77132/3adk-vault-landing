import Head from 'next/head';

export default function Article() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500/30 flex flex-col">
      <Head>
        <title>Le Châssis Souverain | Guide 3ADK</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 px-6 py-4 flex justify-between items-center whitespace-nowrap overflow-x-hidden">
        <div className="text-xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent italic shrink-0">
          <a href="/">3ADK Agency</a>
        </div>
        <a href="https://calendly.com/aichaboulidouni/demo-3adk" className="bg-sky-600 px-4 py-2 rounded-lg text-xs font-bold hover:bg-sky-500 shrink-0">Audit compatible</a>
      </nav>

      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="text-sky-500 font-mono text-[10px] tracking-widest uppercase mb-4">Livre Blanc • Diagnostic IA 2026</div>
        <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-tight mb-12">Le Châssis <br/>Souverain.</h1>
        
        <div className="space-y-12 text-slate-400 leading-relaxed text-lg">
          <p className="border-l-4 border-sky-600 pl-6 italic text-xl text-white">
            "Le secret professionnel n'est pas négociable. Votre IA ne doit pas être une fuite, elle doit être un coffre-fort."
          </p>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tighter italic border-b border-slate-900 pb-4">I. La faille du Cloud Public</h2>
            <p>
              Chaque seconde, des milliers de documents comptables sensibles sont envoyés vers des serveurs US sans aucune protection souveraine. L'Art. 226-13 du Code Pénal engage votre responsabilité directe en cas de fuite via des APIs tierces "grands publics".
            </p>
          </section>

          <section className="space-y-6 bg-slate-900/40 p-8 rounded-3xl border border-slate-800">
            <h2 className="text-2xl font-bold text-white italic">II. L'Architecture 3ADK Vault</h2>
            <p>
              Nous projetons l'intelligence au cœur de votre donnée. Toute l'infrastructure repose sur **Azure France Central**. 
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-sky-500 font-bold">✓</span> <strong className="text-slate-200">Zéro Donnée Sortante</strong> : Votre instance est isolée et étanche.
              </li>
              <li className="flex gap-4">
                <span className="text-sky-500 font-bold">✓</span> <strong className="text-slate-200">Conformité PDP/PPF</strong> : Prêt pour la réforme 2026.
              </li>
              <li className="flex gap-4">
                <span className="text-sky-500 font-bold">✓</span> <strong className="text-slate-200">ROI Industriel</strong> : Libérez 40h de révision / mois.
              </li>
            </ul>
          </section>

          <footer className="pt-20 text-center space-y-10">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-sky-500/30 to-transparent mb-12"></div>
            <h3 className="text-3xl font-bold text-white italic tracking-tighter">Prêt pour votre audit ?</h3>
            <a 
              href="https://calendly.com/aichaboulidouni/demo-3adk" 
              className="inline-block px-12 py-5 bg-sky-600 text-white rounded-2xl font-black text-xl hover:bg-sky-500 transition-all hover:scale-105 shadow-2xl shadow-sky-500/40 text-center"
            >
              Vérifier ma compatibilité (15 min)
            </a>
          </footer>
        </div>
      </main>

      <footer className="bg-black py-12 px-6 text-center">
        <p className="text-[10px] text-slate-700 uppercase tracking-[0.3em]">Propriété Intellectuelle 3ADK Agency • Aïcha BELAIDOUNI</p>
      </footer>
    </div>
  );
}
