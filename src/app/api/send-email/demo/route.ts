import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { demoType, fullName, organization, email, phone, role, goal, demoDate, consent } = body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
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
              <h1 style="margin: 0;">New Demo Request</h1>
              <p style="margin: 10px 0 0 0;">Kayo Carbon Credit Platform</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Demo Type:</span>
                ${demoType.map((type: string) => `<span class="badge">${type}</span>`).join('')}
              </div>
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
              ${phone ? `<div class="field">
                <span class="label">Phone:</span>
                <span class="value">${phone}</span>
              </div>` : ''}
              ${role ? `<div class="field">
                <span class="label">Role/Title:</span>
                <span class="value">${role}</span>
              </div>` : ''}
              ${goal ? `<div class="field">
                <span class="label">Primary Goal:</span>
                <span class="value">${goal}</span>
              </div>` : ''}
              ${demoDate ? `<div class="field">
                <span class="label">Preferred Demo Date:</span>
                <span class="value">${demoDate}</span>
              </div>` : ''}
              <div class="field">
                <span class="label">Consent:</span>
                <span class="value">${consent ? '✓ Yes' : '✗ No'}</span>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Confirmation email to user
    const userHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #374151; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; }
            .header { background: linear-gradient(135deg, #10B981 0%, #059669 100%); color: white; padding: 40px 30px; text-align: center; }
            .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
            .content { background: #ffffff; padding: 40px 30px; }
            .section { margin-bottom: 30px; }
            .section-title { font-size: 18px; font-weight: 600; color: #1F2937; margin-bottom: 15px; }
            .info-box { background: #F0FDF4; border-left: 4px solid #10B981; padding: 20px; margin: 20px 0; border-radius: 4px; }
            .details { background: #F9FAFB; padding: 20px; border-radius: 8px; margin: 15px 0; }
            .detail-item { padding: 8px 0; border-bottom: 1px solid #E5E7EB; }
            .detail-item:last-child { border-bottom: none; }
            .label { font-weight: 600; color: #374151; display: inline-block; width: 150px; }
            .value { color: #6B7280; }
            .badge { display: inline-block; background: #10B981; color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px; margin: 4px 4px 4px 0; }
            .next-steps { background: #EFF6FF; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .next-steps ul { margin: 10px 0; padding-left: 20px; }
            .next-steps li { margin: 8px 0; color: #1F2937; }
            .cta-button { display: inline-block; background: #10B981; color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
            .footer { background: #1F2937; color: #9CA3AF; padding: 30px; text-align: center; font-size: 14px; }
            .footer a { color: #10B981; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">Kayo</div>
              <h1 style="margin: 0; font-size: 24px; font-weight: 600;">Demo Request Confirmed!</h1>
            </div>
            
            <div class="content">
              <div class="section">
                <p style="font-size: 16px; margin: 0 0 20px 0;">Dear ${fullName},</p>
                <p style="font-size: 16px; line-height: 1.8; margin: 0;">
                  Thank you for your interest in Kayo's carbon credit verification platform. We're excited to show you how our digital infrastructure can bring transparency and trust to your carbon projects.
                </p>
              </div>

              <div class="info-box">
                <p style="margin: 0; font-weight: 600; color: #059669;">✓ Your demo request has been received</p>
                <p style="margin: 10px 0 0 0; font-size: 14px; color: #065F46;">
                  Our team will review your request and contact you within 24 hours to confirm your demo schedule.
                </p>
              </div>

              <div class="section">
                <div class="section-title">Your Demo Request Details:</div>
                <div class="details">
                  <div class="detail-item">
                    <span class="label">Organization:</span>
                    <span class="value">${organization}</span>
                  </div>
                  <div class="detail-item">
                    <span class="label">Contact Email:</span>
                    <span class="value">${email}</span>
                  </div>
                  ${phone ? `<div class="detail-item">
                    <span class="label">Phone:</span>
                    <span class="value">${phone}</span>
                  </div>` : ''}
                  ${role ? `<div class="detail-item">
                    <span class="label">Role:</span>
                    <span class="value">${role}</span>
                  </div>` : ''}
                  <div class="detail-item">
                    <span class="label">Products:</span><br/>
                    <div style="margin-top: 8px;">
                      ${demoType.map((type: string) => `<span class="badge">${type}</span>`).join('')}
                    </div>
                  </div>
                  ${goal ? `<div class="detail-item">
                    <span class="label">Primary Goal:</span>
                    <span class="value">${goal}</span>
                  </div>` : ''}
                  ${demoDate ? `<div class="detail-item">
                    <span class="label">Preferred Date:</span>
                    <span class="value">${new Date(demoDate).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</span>
                  </div>` : ''}
                </div>
              </div>

              <div class="next-steps">
                <div class="section-title" style="color: #1F2937; margin-bottom: 10px;">What Happens Next:</div>
                <ul style="margin: 0; padding-left: 20px;">
                  <li>Our team will contact you within 24 hours to confirm your demo schedule</li>
                  <li>We'll send you a calendar invitation with meeting details and access links</li>
                  <li>You'll receive preparation materials to help you get the most from your demo</li>
                  <li>During the demo, we'll address your specific use cases and answer all questions</li>
                </ul>
              </div>

              <div class="section">
                <p style="font-size: 14px; color: #6B7280; line-height: 1.8;">
                  In the meantime, feel free to explore our <a href="https://kayopulse.com" style="color: #10B981; text-decoration: none; font-weight: 600;">website</a> to learn more about our capabilities, or reach out to us directly at <a href="mailto:hello@kayopulse.com" style="color: #10B981; text-decoration: none;">hello@kayopulse.com</a> if you have any questions.
                </p>
              </div>

              <div style="text-align: center; margin: 30px 0;">
                <p style="font-size: 16px; margin-bottom: 10px;">Looking forward to connecting with you!</p>
                <p style="font-size: 16px; font-weight: 600; color: #1F2937; margin: 0;">The Kayo Team</p>
              </div>
            </div>

            <div class="footer">
              <p style="margin: 0 0 10px 0;">
                <strong style="color: #fff;">Kayo</strong> - Building the digital infrastructure for verifiable carbon credits
              </p>
              <p style="margin: 10px 0;">
                <a href="https://kayopulse.com/privacy-policy">Privacy Policy</a> | 
                <a href="https://kayopulse.com/terms">Terms of Service</a>
              </p>
              <p style="margin: 10px 0; font-size: 13px;">
                © ${new Date().getFullYear()} Kayo. All rights reserved.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send internal email
    await transporter.sendMail({
      from: `"Kayo Demo Requests" <${process.env.GMAIL_USER}>`,
      to: 'njorojoe11173@gmail.com',
      subject: `New Demo Request from ${fullName}`,
      html: internalHtml,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: `"Kayo Team" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Your Kayo Demo Request is Confirmed!',
      html: userHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}