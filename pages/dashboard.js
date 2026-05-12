import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import Head from 'next/head';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Dashboard() {
  const [stats, setStats] = useState({ total: 0, contacted: 0, bySize: {} });
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data, error } = await supabase
      .from('leads_vault')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) {
      setLeads(data);
      const statsObj = {
        total: data.length,
        contacted: data.filter(l => l.status === 'contacted').length,
        bySize: data.reduce((acc, current) => {
          const notesPart = current.notes || "";
          const size = notesPart.split('|').length > 1 ? notesPart.split('|')[1].split(':')[1].trim() : 'N/A';
          acc[size] = (acc[size] || 0) + 1;
          return acc;
        }, {})
      };
      setStats(statsObj);
    }
    setLoading(false);
  }

  if (loading) return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center text-sky-500 font-mono tracking-widest uppercase text-xs">
      Initialisation de la session cryptée...
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020617] text-[#f1f5f9] font-sans antialiased">
      <Head>
        <title>COMMAND CENTER | 3ADK Vault</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{`
          body { background-color: #020617; }
          .glass-card { background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.05); backdrop-blur: 10px; }
          .glow-text { text-shadow: 0 0 20px rgba(14, 165, 233, 0.3); }
        `}</style>
      </Head>
      
      <div className="max-w-[1400px] mx-auto p-6 md:p-12 lg:p-20">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8 border-l-4 border-sky-500 pl-10">
          <div>
            <h1 className="text-5xl md:text-8xl font-black italic text-white tracking-tighter leading-none mb-4 glow-text uppercase">
              Central <br/><span className="text-sky-500">Command.</span>
            </h1>
            <div className="flex gap-6 items-center">
              <p className="text-slate-500 uppercase tracking-[0.4em] text-[11px] font-black">Control v1.0</p>
              <div className="h-1 w-1 bg-slate-700 rounded-full"></div>
              <p className="text-slate-400 uppercase tracking-[0.4em] text-[11px] font-black italic">Aïcha BELAIDOUNI</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-3 shrink-0">
              <div className="bg-sky-500/10 border border-sky-500/30 px-8 py-3 rounded-full text-sky-400 text-[11px] font-black tracking-[0.3em] animate-pulse">
                STATUS: OPTIMAL
              </div>
              <p className="text-[10px] text-slate-700 font-mono tracking-widest mr-4">RELIABILITY: 99.9%</p>
          </div>
        </header>

        {/* STATS BEYOND REPROACH */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          <div className="glass-card p-10 rounded-[3rem] hover:border-sky-500/30 transition-all group">
            <p className="text-slate-500 text-[11px] font-black uppercase tracking-widest mb-6">Capture Totale</p>
            <div className="flex items-baseline gap-3">
              <p className="text-8xl font-black text-white leading-none group-hover:text-sky-400 transition-colors tracking-tighter">{stats.total}</p>
              <span className="text-slate-600 font-bold uppercase text-xs tracking-widest">Leads</span>
            </div>
          </div>
          <div className="glass-card p-10 rounded-[3rem] hover:border-sky-500/30 transition-all group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 blur-3xl"></div>
            <p className="text-slate-500 text-[11px] font-black uppercase tracking-widest mb-6">Onboarding Ratio</p>
            <div className="flex items-baseline gap-2 text-sky-500 leading-none">
              <p className="text-8xl font-black tracking-tighter">{stats.total > 0 ? Math.round((stats.contacted/stats.total)*100) : 0}</p>
              <p className="text-sky-500/40 font-black text-4xl">%</p>
            </div>
          </div>
          <div className="glass-card p-10 rounded-[3rem] hover:border-sky-500/30 transition-all group">
            <p className="text-slate-500 text-[11px] font-black uppercase tracking-widest mb-6">Intensity Focus</p>
            <p className="text-2xl font-black text-white italic leading-none uppercase tracking-tighter">
              Marché Primaire: <br/><span className="text-sky-500 text-5xl not-italic font-black block mt-2">5-30 PERS.</span>
            </p>
          </div>
        </div>

        {/* THE INTEL GRID */}
        <div className="glass-card rounded-[4rem] overflow-hidden p-2 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#0f172a] text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">
                <tr>
                  <th className="px-10 py-8">Timestamp</th>
                  <th className="px-10 py-8">Asset Ident</h3>
                  <th className="px-10 py-8 text-center uppercase tracking-widest">Protocol</th>
                  <th className="px-10 py-8 text-right">Intel ➔</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/30">
                {leads.map(lead => (
                  <tr key={lead.id} className="group hover:bg-white/5 transition-all">
                    <td className="px-10 py-8 text-xs font-mono text-slate-600">[{new Date(lead.created_at).toLocaleDateString()}]</td>
                    <td className="px-10 py-8">
                      <div className="text-white font-black text-xl leading-none mb-3 group-hover:text-sky-400 transition-colors uppercase tracking-tight italic">
                        {lead.email}
                      </div>
                      <div className="text-[11px] text-slate-500 font-bold uppercase tracking-widest bg-slate-950/50 inline-block px-3 py-1 rounded-lg">
                        {lead.notes || 'NO_METADATA'}
                      </div>
                    </td>
                    <td className="px-10 py-8 text-center">
                      <div className={`px-5 py-2 rounded-full text-[10px] font-black tracking-widest border ${lead.status === 'contacted' ? 'border-green-500/40 text-green-500 bg-green-500/5' : 'border-sky-500/40 text-sky-500 bg-sky-500/5 hover:bg-sky-500/10'} transition-all cursor-pointer inline-block`}>
                        {lead.status === 'contacted' ? '● ONBOARDED' : '○ PENDING_AUDIT'}
                      </div>
                    </td>
                    <td className="px-10 py-8 text-right">
                       <a href="https://linear.app/3adkagency" target="_blank" className="bg-white text-slate-950 px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-sky-400 transition-all hover:scale-105 active:scale-95 shadow-xl inline-block">
                        View Linear
                       </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <footer className="mt-40 pt-10 border-t border-slate-900 flex justify-between items-center opacity-40">
          <p className="text-[9px] uppercase tracking-[0.6em] font-black text-slate-600">3ADK Vault Monitoring • Restricted Access</p>
          <p className="text-[9px] uppercase tracking-[0.6em] font-black text-slate-600 italic">2026</p>
        </footer>
      </div>
    </div>
  );
}
