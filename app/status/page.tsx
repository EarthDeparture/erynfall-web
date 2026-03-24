import ParchmentWrapper from '@/components/ParchmentWrapper';
import { supabase } from '@/utils/supabase';

export const revalidate = 60;

export default async function GameStatus() {
  let statusData = { status_type: 'Unknown', message: 'Unable to fetch status.', updated_at: new Date() };
  
  try {
    const { data } = await supabase.from('erynfall_game_status').select('*').order('updated_at', { ascending: false }).limit(1).single();
    if (data) statusData = data;
  } catch (e) {
    console.error(e);
  }

  const isOnline = statusData.status_type.toLowerCase() === 'online';

  return (
    <ParchmentWrapper>
      <main className="w-full text-center py-10">
        <h2 className="section-title text-center inline-block mb-10">Game Status Information Centre</h2>
        
        <div className="max-w-xl mx-auto p-10 bg-[#ece4cd] border border-[#bba37f] shadow-inner rounded-sm">
          <div className="mb-6">
            <span className={`inline-block w-6 h-6 rounded-full mr-3 border-2 border-black align-middle ${isOnline ? 'bg-green-600' : 'bg-red-600'}`}></span>
            <span className="font-cinzel text-2xl font-bold align-middle">CURRENT STATUS: {statusData.status_type.toUpperCase()}</span>
          </div>
          
          <div className="p-4 bg-[#d5ccb0] border border-[#a88d67] text-left">
            <p className="font-bold mb-2">Message from Server Engineering:</p>
            <p className="text-sm">{statusData.message}</p>
            <p className="text-xs text-[#725b44] mt-4 font-bold">Last Updated: {new Date(statusData.updated_at).toLocaleString()}</p>
          </div>
        </div>
      </main>
    </ParchmentWrapper>
  );
}
