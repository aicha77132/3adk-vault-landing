import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Head from 'next/head';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Landing() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    const { error } = await supabase.from('leads_vault').insert([{ email }]);
    
    setLoading(false);
    if (!error) {
      setSent(true);
    } else {
      if (error.code === '23505') { // Code Supabase/Postgres pour duplication
        setSent(true);
        setMessage("Vous êtes déjà inscrit ! Nous revenons vers vous très vite.");
      } else {
        alert("Erreur : " + error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500/30 flex flex-col scroll-smooth">
      <Head>
        <title>3ADK Vault | Infrastructure IA Souveraine</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-sm">
          <div className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent italic tracking-tighter">3ADK Agency</div>
          <div className="hidden md:flex gap-8 text-slate-400 uppercase tracking-widest text-[10px] font-bold">
            <a href="#souverainete" className="hover:text-sky-400 transition-colors">Souveraineté</a>
            <a href="#workers" className="hover:text-sky-400 transition-colors">Digital Workers</a>
            <a href="#vault" className="hover:text-sky-400 transition-colors">Vault</a>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-20">
        <section id="waitlist" className="min-h-[80vh] flex flex-col items-center justify-center max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.2em] text-sky-400 uppercase bg-sky-400/5 rounded-full border border-sky-400/20">
            Infrastructure IA Souveraine
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8">
              3ADK <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent italic">Vault</span>
          </h1>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            L'agent de cohérence comptable qui travaille dans votre propre coffre-fort. 
            Zéro donnée sortante. Secret professionnel garanti.
          </p>

          {!sent ? (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 justify-center w-full max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="votre@email-cabinet.fr" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-900 border border-slate-800 rounded-xl px-6 py-4 focus:outline-none focus:border-sky-500 flex-1 transition-all text-white"
                required
              />
              <button 
                type="submit"
                disabled={loading}
                className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all disabled:opacity-50"
              >
                {loading ? 'Connexion...' : 'Rejoindre la Démo'}
              </button>
            </form>
          ) : (
            <div className="bg-sky-500/10 border border-sky-400/20 rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-sky-400 font-bold mb-2 text-xl italic tracking-tighter">
                {message || "Requête enregistrée ✓"}
              </p>
              <p className="text-sm text-slate-400">
                {message ? "" : "Aïcha BELAIDOUNI vous contactera sous 24h pour configurer votre accès souverain."}
              </p>
            </div>
          )}
        </section>

        <section id="souverainete" className="py-32 border-t border-slate-900 bg-slate-950 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 italic tracking-tighter">Souveraineté des données</h2>
            <div className="grid md:grid-cols-2 gap-12 text-slate-400 leading-relaxed text-lg">
              <div>
                <p className="mb-6">
                  Le secret professionnel est le socle de l'expertise comptable. Chez 3ADK, nous ne faisons pas transiter vos dossiers clients par des APIs tierces sans protection.
                </p>
                <p>
                  Toute notre infrastructure repose sur **Azure France Central**, garantissant que vos données ne quittent jamais le territoire français et sont protégées contre les ingérences étrangères.
                </p>
              </div>
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                <ul className="space-y-4 text-sm font-semibold">
                  <li className="flex gap-3 items-center"><span className="text-sky-400">✓</span> Conforme RGPD & CNIL</li>
                  <li className="flex gap-3 items-center"><span className="text-sky-400">✓</span> Cloud de confiance certifié</li>
                  <li className="flex gap-3 items-center"><span className="text-sky-400">✓</span> Isolation logique par cabinet</li>
                  <li className="flex gap-3 items-center"><span className="text-sky-400">✓</span> Protection Art. 226-13</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="workers" className="py-32 bg-slate-900/30 px-6 border-t border-slate-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-4xl font-bold text-white mb-16 italic tracking-tighter">Vos nouveaux Workers Digitaux</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Cohérence Flux", icon: "📊", desc: "Analyse automatique de cohérence entre factures et écritures. Détection instantanée des anomalies de TVA et de lettrage." },
                { title: "Revue Analytique", icon: "🔍", desc: "Assistant de préparation de clôture. Analyse 100% des dossiers pour identifier les points de vigilance majeurs." },
                { title: "Support Compliance", icon: "⚖️", desc: "Vérification automatisée des pièces justificatives et respect des normes réglementaires en vigueur." }
              ].map((worker, i) => (
                <div key={i} className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-sky-500/50 transition-all group">
                  <div className="text-4xl mb-6">{worker.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4 italic">{worker.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{worker.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="vault" className="py-32 px-6 border-t border-slate-900">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8 italic tracking-tighter underline decoration-sky-500/30">Architecture "Vault"</h2>
            <div className="p-1 w-full bg-gradient-to-r from-slate-900 via-sky-500/20 to-slate-900 rounded-2xl overflow-hidden mb-12">
               <div className="bg-slate-950 p-12 rounded-xl text-slate-400 text-left">
                  <pre className="text-xs md:text-sm font-mono leading-relaxed whitespace-pre-wrap">
{`[CABINET COMPTABLE]  <───>  [TUNNEL PRIVÉ SSL]  <───>  [3ADK VAULT INSTANCE]
                                                          ▲ 
                                                          │ 
                                             [LOGS SÉCURISÉS & AUDIT]`}
                  </pre>
               </div>
            </div>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto italic">
              "L'IA est projetée dans votre environnement, la donnée ne sort jamais."
            </p>
          </div>
        </section>
      </main>

      <footer className="w-full p-12 border-t border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-500 text-[10px] uppercase tracking-widest leading-loose max-w-lg">
            3ADK Vault est une solution propriétaire de 3ADK Agency (Aïcha BELAIDOUNI).<br/>
            Tout usage abusif des données collectées est proscrit. 
            L'utilisateur certifié reste l'unique maître de ses écritures.
          </div>
        </div>
      </footer>
    </div>
  );
}
