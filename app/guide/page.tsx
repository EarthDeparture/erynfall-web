import ParchmentWrapper from '@/components/ParchmentWrapper';

export default function NewPlayerGuide() {
  return (
    <ParchmentWrapper>
      <main className="w-full markdown-content px-10">
        <h2 className="section-title text-center">New Player Guide &amp; Setup</h2>
        
        <h3>1. Getting Started in Erynfall</h3>
        <p>
          Welcome to Erynfall! As a new survivor stepping out into the ash-wastes, your first goal is simply to survive. 
          Unlike traditional theme-park MMORPGs, Erynfall drops you into a hostile world with nothing but the clothes on your back.
        </p>

        <h3>2. The Interface</h3>
        <p>
          We utilize a classic 2D isometric interface. Your inventory, equipment, combat styles, and settings are all located 
          in the bottom right interface panel. Take time to familiarize yourself with the 28-slot inventory limit—inventory management is key.
        </p>

        <h3>3. First Steps</h3>
        <p>
          1. <strong>Locate a Safe Zone:</strong> Stick near the starting outpost until you gain a few levels. <br/>
          2. <strong>Gather Resources:</strong> Punching trees or gathering loose flint is the easiest way to start crafting basic tools. <br/>
          3. <strong>Train Combat:</strong> Speak to the local guards to learn the basic combat triangle: Melee beats Ranged, Ranged beats Magic, Magic beats Melee.
        </p>
        
        <div className="mt-10 p-5 bg-[#392b1a] border border-[#ffde82] text-[#cdb99f] text-center">
          <h4 className="font-cinzel text-xl text-[#ffde82] mb-2">Need more detailed help?</h4>
          <p>Check out our comprehensive community-driven Wiki!</p>
          <a href="https://wiki.erynfall.com" className="inline-block mt-4 px-6 py-2 bg-[#8c6a2e] text-white border border-[#4a3411] font-bold">Visit the official Wiki</a>
        </div>
      </main>
    </ParchmentWrapper>
  );
}
