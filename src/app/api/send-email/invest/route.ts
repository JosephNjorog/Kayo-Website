import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, organization, role, investmentInterest, budget, timeline, additionalInfo } = body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.resend.com',
      secure: true,
      port: 465,
      auth: {
        user: 'resend',
        pass: process.env.RESEND_API_KEY,
      },
    });

    // Email to internal team
    const internalHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #10B981; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #374151; }
            .value { color: #6b7280; margin-left: 10px; }
            .badge { display: inline-block; background: #eff6ff; color: #3b82f6; padding: 4px 12px; border-radius: 4px; font-size: 14px; margin-right: 8px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Investment Inquiry</h1>
              <p style="margin: 10px 0 0 0;">Kayo Carbon Credit Platform</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Full Name:</span>
                <span class="value">${fullName}</span>
              </div>
              <div class="field">
                <span class="label">Organization:</span>
                <span class="value">${organization}</span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value">${email}</span>
              </div>
              <div class="field">
                <span class="label">Role:</span>
                <span class="value">${role}</span>
              </div>
              <div class="field">
                <span class="label">Investment Interest:</span>
                <span class="value">${investmentInterest}</span>
              </div>
              <div class="field">
                <span class="label">Budget Range:</span>
                <span class="value">${budget}</span>
              </div>
              <div class="field">
                <span class="label">Timeline:</span>
                <span class="value">${timeline}</span>
              </div>
              ${additionalInfo ? `
              <div class="field">
                <span class="label">Additional Information:</span>
                <span class="value">${additionalInfo}</span>
              </div>
              ` : ''}
              <div style="margin-top: 30px; color: #6b7280; font-size: 14px;">
                <p>This inquiry was submitted on ${new Date().toLocaleString()}.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email to submitter
    const userHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #10B981; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .footer { margin-top: 20px; text-align: center; color: #6b7280; font-size: 14px; }
            .button { display: inline-block; background: #10B981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">Thank You for Your Interest</h1>
              <p style="margin: 10px 0 0 0;">Kayo Carbon Credit Platform</p>
            </div>
            <div class="content">
              <p>Dear ${fullName},</p>
              
              <p>Thank you for your interest in investing in Kayo. We've received your inquiry and will review it promptly.</p>
              
              <p>A member of our investment relations team will be in touch with you shortly to discuss your interest in more detail and answer any questions you may have.</p>
              
              <p>Here's a summary of the information you provided:</p>
              <ul>
                <li><strong>Investment Interest:</strong> ${investmentInterest}</li>
                <li><strong>Budget Range:</strong> ${budget}</li>
                <li><strong>Timeline:</strong> ${timeline}</li>
              </ul>
              
              <p>In the meantime, if you have any urgent questions, please don't hesitate to reply to this email.</p>
              
              <div style="text-align: center;">
                <a href="https://kayopulse.com" class="button">Learn More About Kayo</a>
              </div>
              
              <p>Regards,<br>The Kayo Team</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Kayo. All rights reserved.</p>
              <p>123 Innovation Way, Tech City, CA 94103</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send emails
    await transporter.sendMail({
      from: '"Kayo Investment Team" <investment@kayopulse.com>',
      to: 'investment@kayopulse.com', // Change to your internal team email
      subject: 'New Investment Inquiry from ' + fullName,
      html: internalHtml,
    });

    await transporter.sendMail({
      from: '"Kayo Investment Team" <investment@kayopulse.com>',
      to: email,
      subject: 'Thank You for Your Interest in Kayo',
      html: userHtml,
    });

    return NextResponse.json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
