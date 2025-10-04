import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { sendDemoConfirmation } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { demoType, fullName, organization, email, phone, role, goal, demoDate, consent } = body;

    // Insert into database
    await query(
      `INSERT INTO demo_requests 
       (demo_type, full_name, organization, email, phone, role, goal, demo_date, consent) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [demoType, fullName, organization, email, phone, role, goal, demoDate, consent]
    );
    
    // Send confirmation email
    await sendDemoConfirmation(fullName, email, demoType);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Demo request error:', error);
    return NextResponse.json({ error: 'Failed to process demo request' }, { status: 500 });
  }
}