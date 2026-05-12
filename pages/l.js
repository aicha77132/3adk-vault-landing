import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Tracking() {
  const router = useRouter();

  useEffect(() => {
    // Redirection immédiate vers la landing page
    router.push('/');
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-sky-500 font-mono text-[10px] tracking-widest uppercase">
      Accréditation de session en cours...
    </div>
  );
}
