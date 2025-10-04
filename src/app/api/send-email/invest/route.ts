import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { sendInvestmentConfirmation } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Mapping the form fields from invest-modal to variables used in the email template
    const { 
      name, 
      email, 
      companyFund,
      investmentRange,
      investmentTimeline,
      focusAreas,
      preferredMeetingTime,
      additionalComments
    } = body;

    // Insert into database
    await query(
      `INSERT INTO investment_inquiries 
       (name, email, company_fund, investment_range, investment_timeline, focus_areas, 
        preferred_meeting_time, additional_comments) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [name, email, companyFund, investmentRange, investmentTimeline, focusAreas, 
       preferredMeetingTime, additionalComments]
    );
    
    // Send confirmation email
    await sendInvestmentConfirmation(name, email, investmentRange, investmentTimeline, focusAreas);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Investment inquiry error:', error);
    return NextResponse.json({ error: 'Failed to process investment inquiry' }, { status: 500 });
  }
}