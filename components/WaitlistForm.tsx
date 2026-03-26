'use client';

import { FormEvent, useState } from 'react';

type WaitlistState = {
  kind: 'idle' | 'success' | 'error';
  message: string;
};

const initialState: WaitlistState = {
  kind: 'idle',
  message: '',
};

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<WaitlistState>(initialState);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      setStatus({
        kind: 'error',
        message: 'Please enter an email address.',
      });
      return;
    }

    setIsLoading(true);
    setStatus(initialState);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus({
          kind: 'error',
          message: payload.message ?? 'Unable to join the waitlist right now.',
        });
        return;
      }

      setStatus({
        kind: 'success',
        message: 'You are in. We will send launch updates to your inbox.',
      });
      setEmail('');
    } catch {
      setStatus({
        kind: 'error',
        message: 'Network error. Please try again in a moment.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="waitlist-wrap">
      <p className="waitlist-title">Claim your place in the first wave.</p>

      <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className="waitlist-input"
          aria-describedby="waitlist-feedback"
          disabled={isLoading}
        />
        <button type="submit" className="waitlist-submit" disabled={isLoading}>
          {isLoading ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>

      <p id="waitlist-feedback" className={`waitlist-feedback is-${status.kind}`} role="status" aria-live="polite">
        {status.message}
      </p>
    </div>
  );
}
