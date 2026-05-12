import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Head from 'next/head';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Landing() {
  const [formData, setFormData] = useState({ email: '', cabinet: '', employees: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('leads_vault').insert([
      { 
        email: formData.email, 
        notes: `Cabinet: ${formData.cabinet} | Taille: ${formData.employees}` 
      }
    ]);
    setLoading(false);
    if (!error || error.code === '23505') setSent(true);
    else alert("Erreur : " + error.message);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500/30 flex flex-col scroll-smooth">
      <Head>
        <title>3ADK Vault | Accès Accrédité</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <nav className="max-w-7xl w-full mx-auto px-6 py-8 flex justify-between items-center text-sm">
        <div className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent italic tracking-tighter shrink-0">
          <a href="/">3ADK Agency</a>
        </div>
        <div className="hidden md:flex gap-8 text-slate-400 uppercase tracking-widest text-[10px] font-bold">
          <a href="/vision" className="hover:text-sky-400 transition-colors">Souveraineté</a>
          <a href="/article-souverainete" className="hover:text-sky-400 transition-colors">Livre Blanc</a>
        </div>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center max-w-4xl mx-auto px-6 text-center py-20">
        <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.2em] text-sky-400 uppercase bg-sky-400/5 rounded-full border border-sky-400/20">
          Note Technique 2026
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-none">
            3ADK <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent italic">Vault</span>
        </h1>
        <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto italic">
          Sécurisez votre responsabilité fiduciaire. <br/>Obtenez le Guide de Conformité IA pour les Experts-Comptables.
        </p>

        {!sent ? (
          <form onSubmit={handleSubmit} className="w-full max-w-md bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl space-y-4">
            <input 
              type="text" 
              placeholder="Nom du Cabinet" 
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-sky-500 transition-all text-white placeholder-slate-600 outline-none"
              onChange={(e) => setFormData({...formData, cabinet: e.target.value})}
            />
            <input 
              type="email" 
              placeholder="Email Professionnel" 
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-sky-500 transition-all text-white placeholder-slate-600 outline-none"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <select 
               required
               className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-sky-500 transition-all text-slate-400 outline-none appearance-none"
               onChange={(e) => setFormData({...formData, employees: e.target.value})}
            >
               <option value="">Taille du Cabinet</option>
               <option value="1-5">1-5 collaborateurs</option>
               <option value="5-30">5-30 collaborateurs</option>
               <option value="30+">30+ collaborateurs</option>
            </select>
            <button 
              disabled={loading}
              className="w-full bg-white text-slate-950 px-8 py-5 rounded-2xl font-black text-lg hover:bg-sky-400 hover:scale-[1.02] transition-all disabled:opacity-50 mt-4 outline-none"
            >
              {loading ? 'Accréditation...' : 'Accéder au Livre Blanc'}
            </button>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-4 flex items-center justify-center gap-2">
              <svg className="w-3 h-3 text-sky-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
              Traitement Souverain • Art. 28 RGPD
            </p>
          </form>
        ) : (
          <div className="bg-sky-500/10 border border-sky-400/20 rounded-[3rem] p-12 max-w-md mx-auto shadow-2xl backdrop-blur-sm animate-pulse">
            <p className="text-sky-400 font-black mb-4 text-2xl italic tracking-tighter">Accès accordé ✓</p>
            <p className="text-slate-300 leading-relaxed">Le Guide de Conformité IA 2026 vient d'être envoyé à votre adresse professionnelle. <br/><br/> <span className="text-sm text-slate-500 font-bold">Vérifiez vos spams si besoin.</span></p>
          </div>
        )}
      </main>

      <footer className="w-full p-12 border-t border-slate-900 bg-slate-950/80 text-[10px] text-slate-600 text-center uppercase tracking-[0.3em] font-bold">
        3ADK Agency • Propriété Exclusive Aïcha BELAIDOUNI
      </footer>
    </div>
  );
}
