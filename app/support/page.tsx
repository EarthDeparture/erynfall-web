import ParchmentWrapper from '@/components/ParchmentWrapper';

export default function SupportPage() {
  return (
    <ParchmentWrapper>
      <main className="w-full text-center py-10 px-4">
        <h2 className="section-title text-center inline-block mb-10">Player Support Centre</h2>
        
        <div className="max-w-xl mx-auto p-10 bg-[#ece4cd] border border-[#bba37f] shadow-inner rounded-sm">
          <h3 className="font-cinzel text-xl text-[#3a2914] mb-4">Need Assistance?</h3>
          <p className="mb-6">
            If you've lost access to your account, experienced a billing issue, or encountered a game-breaking bug, 
            our moderation and support team is here to help.
          </p>
          
          <div className="p-6 bg-[#d5ccb0] border border-[#a88d67] mb-6 shadow-sm">
            <p className="font-bold text-lg text-[#5a4428] mb-2">Email Support Directly</p>
            <a href="mailto:support@erynfall.com" className="font-mono text-[#7c1a1a] text-xl font-bold hover:underline">
              support@erynfall.com
            </a>
          </div>

          <p className="text-sm opacity-80">
            For general gameplay questions, we highly recommend checking the official Wiki or asking veteran players in the community Discord.
          </p>
        </div>
      </main>
    </ParchmentWrapper>
  );
}
