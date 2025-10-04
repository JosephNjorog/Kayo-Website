import { NextRequest, NextResponse } from 'next/server';
import { query, initializeDatabase } from '@/lib/db';
import { sendNewsletterConfirmation } from '@/lib/email';

// Initialize database tables if they don't exist
initializeDatabase().catch(console.error);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    // Insert into database
    await query(
      'INSERT INTO newsletter_subscriptions (email) VALUES ($1) ON CONFLICT (email) DO NOTHING',
      [email]
    );
    
    // Send confirmation email
    await sendNewsletterConfirmation(email);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json({ error: 'Failed to process newsletter subscription' }, { status: 500 });
  }
}