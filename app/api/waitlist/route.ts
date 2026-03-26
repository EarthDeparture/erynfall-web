import { NextResponse } from 'next/server';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const { email } = (await request.json().catch(() => ({}))) as { email?: string };
  const normalizedEmail = (email ?? '').trim().toLowerCase();

  if (!normalizedEmail || !EMAIL_REGEX.test(normalizedEmail)) {
    return NextResponse.json({ message: 'Please provide a valid email address.' }, { status: 400 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return NextResponse.json(
      { message: 'Waitlist is not configured yet. Please try again soon.' },
      { status: 503 },
    );
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/waitlist_emails`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: supabaseServiceRoleKey,
      Authorization: `Bearer ${supabaseServiceRoleKey}`,
      Prefer: 'resolution=ignore-duplicates,return=minimal',
    },
    body: JSON.stringify([
      {
        email: normalizedEmail,
        source: 'landing_page',
      },
    ]),
    cache: 'no-store',
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: 'Could not save your email right now. Please try again.' },
      { status: 500 },
    );
  }

  return NextResponse.json({ message: 'Joined waitlist.' }, { status: 200 });
}
