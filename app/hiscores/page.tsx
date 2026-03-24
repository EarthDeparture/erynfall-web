import ParchmentWrapper from '@/components/ParchmentWrapper';
import { supabase } from '@/utils/supabase';

export const revalidate = 60;

export default async function Hiscores() {
  let hiscoreData = [];
  try {
    const { data } = await supabase.from('erynfall_hiscores').select('*').order('skill_overall_xp', { ascending: false }).limit(25);
    if (data) hiscoreData = data;
  } catch (e) {
    console.error(e);
  }

  return (
    <ParchmentWrapper>
      <main className="w-full px-6">
        <h2 className="section-title text-center">Overall Hiscores</h2>
        
        {hiscoreData.length > 0 ? (
          <table className="w-full text-left border-collapse mt-6">
            <thead>
              <tr className="bg-[#a88d67] text-[#2c1e10]">
                <th className="p-2 border border-[#5a4428]">Rank</th>
                <th className="p-2 border border-[#5a4428]">Player Name</th>
                <th className="p-2 border border-[#5a4428]">Level</th>
                <th className="p-2 border border-[#5a4428]">Experience</th>
              </tr>
            </thead>
            <tbody>
              {hiscoreData.map((player: any, index: number) => (
                <tr key={player.id} className="odd:bg-[#ece4cd] even:bg-[#d5ccb0] hover:bg-[#ffeec2]">
                  <td className="p-2 border border-[#896e49] font-bold text-center">{index + 1}</td>
                  <td className="p-2 border border-[#896e49]">{player.player_name}</td>
                  <td className="p-2 border border-[#896e49] text-center">{player.skill_overall_level}</td>
                  <td className="p-2 border border-[#896e49] text-right font-mono">{player.skill_overall_xp.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center mt-10">No hiscore data available. Database may not be connected.</p>
        )}
      </main>
    </ParchmentWrapper>
  );
}
