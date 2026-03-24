import ParchmentWrapper from '@/components/ParchmentWrapper';

export default function PrivacyPolicy() {
  return (
    <ParchmentWrapper>
      <main className="w-full markdown-content px-4 md:px-10">
        <h2 className="section-title text-center">Privacy Policy</h2>
        
        <p className="text-sm opacity-60 mb-8 italic">Last Updated: March 24, 2026</p>

        <h3>1. Information We Collect</h3>
        <p>
          We collect basic account information necessary to provide you with the Erynfall game experience. This includes your email address, 
          username, and payment information (processed securely through our third-party payment providers) when you purchase membership or bonds.
        </p>

        <h3>2. How We Use Your Data</h3>
        <p>
          Your data is solely used to authenticate your login, save your game state, provide customer support, and communicate important 
          service announcements. We do not sell your personal data to advertisers.
        </p>

        <h3>3. Analytics & Logging</h3>
        <p>
          To maintain game integrity and identify bugs, we temporarily log in-game chat messages, trade histories, and IP addresses. 
          This data is strictly utilized to enforce our Terms and Conditions against cheating, botting, and RWT.
        </p>

        <h3>4. Data Security</h3>
        <p>
          Your passwords are cryptographically hashed and salted. All sensitive database connections are encrypted. 
          While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
        </p>
      </main>
    </ParchmentWrapper>
  );
}
