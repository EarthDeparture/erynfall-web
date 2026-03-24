import ParchmentWrapper from '@/components/ParchmentWrapper';

export default function Membership() {
  return (
    <ParchmentWrapper>
      <main className="w-full markdown-content px-10">
        <h2 className="section-title text-center">Erynfall Membership &amp; Bonds</h2>
        
        <h3>Why become a Member?</h3>
        <p>
          While Erynfall offers a massive free-to-play experience containing dozens of hours of content, becoming a Member unlocks the true depth of the game.
        </p>

        <ul className="list-disc pl-10 mb-6">
          <li><strong>Expanded Map:</strong> Gain access to the Western Ashlands and the deep underground ruins.</li>
          <li><strong>More Skills:</strong> Unlock members-only skills like Construction, Herblore, and Thieving.</li>
          <li><strong>Player Housing:</strong> Build your own secure outpost to store gear and invite friends.</li>
          <li><strong>Advanced Combat:</strong> Challenge high-level bosses with unique mechanics.</li>
        </ul>

        <div className="text-center my-10">
          <button className="btn-classic btn-create mx-auto">
            <span className="btn-text">GET MEMBERSHIP</span>
            <span className="btn-sub">Starting at $10.99/mo</span>
          </button>
        </div>

        <h3>The Bond System</h3>
        <p>
          Don't want to pay with real money? You can purchase <strong>Erynfall Bonds</strong> from other players using your in-game gold! 
          Bonds are secure, tradeable items that can be redeemed for 14 days of Membership. 
        </p>
        <p>
          This ensures that dedicated players can fund their entire membership purely through playing the game, creating a healthy, player-driven economy.
        </p>

      </main>
    </ParchmentWrapper>
  );
}
