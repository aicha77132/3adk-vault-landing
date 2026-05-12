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

  if (loading) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-sky-500 font-mono tracking-widest animate-pulse">INIT CENTRAL COMMAND...</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans p-4 md:p-12 lg:p-20">
      <Head>
        <title>COMMAND CENTER | 3ADK Vault</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6 border-l-2 border-sky-500 pl-8">
        <div>
          <h1 className="text-4xl md:text-6xl font-black italic text-white tracking-tighter leading-none mb-2">CENTRAL <br/><span className="text-sky-500">COMMAND.</span></h1>
          <div className="flex gap-4 items-center">
            <p className="text-slate-500 uppercase tracking-[0.3em] text-[10px] font-bold">3ADK Vault Control v1.0</p>
            <span className="h-1 w-1 bg-slate-700 rounded-full"></span>
            <p className="text-slate-500 uppercase tracking-[0.3em] text-[10px] font-bold italic">Aïcha BELAIDOUNI</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
            <div className="bg-sky-500/10 border border-sky-500/20 px-6 py-2 rounded-full text-sky-400 text-[10px] font-black tracking-widest animate-pulse">SYSTEM STATUS: OPTIMAL</div>
            <p className="text-[10px] text-slate-700 font-mono">ENCRYPTED SESSION ACTIVE</p>
        </div>
      </header>

      {/* KPI GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] hover:border-sky-500/40 transition-all group">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">Total Capture</p>
          <div className="flex items-baseline gap-2">
            <p className="text-7xl font-black text-white leading-none group-hover:text-sky-400 transition-colors">{stats.total}</p>
            <p className="text-slate-500 font-bold uppercase text-[10px]">Leads</p>
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] hover:border-sky-500/40 transition-all group">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">Onboarding Flow</p>
          <div className="flex items-baseline gap-2 text-sky-500">
            <p className="text-7xl font-black leading-none">{stats.total > 0 ? Math.round((stats.contacted/stats.total)*100) : 0}</p>
            <p className="text-sky-500/50 font-bold uppercase text-2xl">%</p>
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] hover:border-sky-500/40 transition-all">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">Audit Intensity</p>
          <p className="text-xl font-bold text-white italic leading-tight uppercase tracking-tighter">Focus Secteur: <br/><span className="text-sky-500 text-3xl not-italic font-black">5-30 PERS.</span></p>
        </div>
      </div>

      {/* COMMAND TABLE */}
      <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl p-1">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-950 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              <tr>
                <th className="px-8 py-6">Timestamp</th>
                <th className="px-8 py-6">Cabinet Data</th>
                <th className="px-8 py-6">Protocol Status</th>
                <th className="px-8 py-6 text-right">Intel ➔</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {leads.map(lead => (
                <tr key={lead.id} className="group hover:bg-slate-800/40 transition-all">
                  <td className="px-8 py-6 text-xs font-mono text-slate-600 italic">[{new Date(lead.created_at).toLocaleDateString()}]</td>
                  <td className="px-8 py-6">
                    <div className="text-slate-200 font-bold text-lg leading-none mb-2 group-hover:text-sky-400 transition-colors uppercase tracking-tighter">{lead.email}</div>
                    <div className="text-[10px] text-slate-600 font-black uppercase tracking-widest">{lead.notes || 'DATA EMPTY'}</div>
                  </td>
                  <td className="px-8 py-6">
                    <div className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase border ${lead.status === 'contacted' ? 'border-green-500/30 text-green-500 bg-green-500/5' : 'border-sky-500/30 text-sky-500 bg-sky-500/5'}`}>
                      {lead.status === 'contacted' ? '● ONBOARDED' : '○ PENDING_AUDIT'}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                     <a href={`https://linear.app/3adkagency`} target="_blank" className="bg-slate-950 border border-slate-800 text-slate-500 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:text-white hover:border-sky-500 transition-all">View Linear</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-slate-900 flex justify-between items-center opacity-30">
        <p className="text-[8px] uppercase tracking-[0.5em] font-bold text-slate-500">Restricted Access • 3ADK Vault Monitoring</p>
        <p className="text-[8px] uppercase tracking-[0.5em] font-bold text-slate-500">© 2026</p>
      </footer>
    </div>
  );
}
