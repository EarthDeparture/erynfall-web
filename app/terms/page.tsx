import ParchmentWrapper from '@/components/ParchmentWrapper';

export default function TermsAndConditions() {
  return (
    <ParchmentWrapper>
      <main className="w-full markdown-content px-4 md:px-10">
        <h2 className="section-title text-center">Terms and Conditions</h2>
        
        <p className="text-sm opacity-60 mb-8 italic">Last Updated: March 24, 2026</p>

        <h3>1. Acceptance of Terms</h3>
        <p>
          By accessing or using the Erynfall website and game client, you agree to be bound by these Terms and Conditions. 
          If you do not agree, please do not use our services.
        </p>

        <h3>2. Code of Conduct</h3>
        <p>
          Players must treating others with respect. Harassment, hate speech, botting, macroing, and real-world trading (RWT) 
          are strictly prohibited and will result in permanent account termination. Erynfall maintains a zero-tolerance policy 
          toward automated gameplay software.
        </p>

        <h3>3. Virtual Goods & Currency</h3>
        <p>
          All virtual goods, including in-game currency, items, and Erynfall Bonds, remain the exclusive property of EarthDeparture. 
          They have no real-world monetary value and may not be sold or transferred outside of the official game environment.
        </p>

        <h3>4. Account Responsibility</h3>
        <p>
          You are solely responsible for maintaining the confidentiality of your login credentials. We will never ask for your password. 
          EarthDeparture is not liable for items or wealth lost due to compromised accounts.
        </p>
      </main>
    </ParchmentWrapper>
  );
}
