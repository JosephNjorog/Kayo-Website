import { NextRequest, NextResponse } from 'next/server';
import { query, initializeDatabase } from '@/lib/db';
import { sendContactConfirmation } from '@/lib/email';

// Initialize database tables if they don't exist
initializeDatabase().catch(console.error);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company } = body;

    // Insert into database
    await query(
      `INSERT INTO contact_submissions 
       (name, email, company) 
       VALUES ($1, $2, $3)`,
      [name, email, company]
    );
    
    // Send confirmation email
    await sendContactConfirmation(name, email);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact request error:', error);
    return NextResponse.json({ error: 'Failed to process contact request' }, { status: 500 });
  }
}