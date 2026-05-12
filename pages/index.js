import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Landing() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.from('leads_vault').insert([{ email }]);
    setLoading(false);
    if (!error) setSent(true);
    else alert("Erreur : " + error.message);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500/30">
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center text-sm">
        <div className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent italic tracking-tighter">3ADK Agency</div>
        <div className="hidden md:flex gap-8 text-slate-400 uppercase tracking-widest text-[10px] font-bold">
          <span>Souveraineté</span>
          <span>Digital Workers</span>
          <span>Vault</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-32 text-center">
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
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="votre@email-cabinet.fr" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-900 border border-slate-800 rounded-xl px-6 py-4 focus:outline-none focus:border-sky-500 flex-1 transition-all"
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
            <p className="text-sky-400 font-bold mb-2">Requête enregistrée ✓</p>
            <p className="text-sm text-slate-400">Aïcha BELAIDOUNI vous contactera sous 24h pour configurer votre accès souverain.</p>
          </div>
        )}
      </main>

      <footer className="fixed bottom-0 w-full p-8 border-t border-slate-900 bg-slate-950/80 backdrop-blur-md">
        <p className="text-[10px] text-slate-600 text-center uppercase tracking-widest leading-relaxed">
          3ADK Vault est un outil de support opérationnel certifié par 3ADK Agency.<br/>
          L'utilisateur professionnel reste le seul responsable de la signature des comptes.
        </p>
      </footer>
    </div>
  );
}
