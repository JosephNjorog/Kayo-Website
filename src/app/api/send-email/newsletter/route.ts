import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

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
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; text-align: center; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #374151; }
            .value { color: #6b7280; margin-left: 10px; font-size: 18px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Newsletter Subscription</h1>
              <p style="margin: 10px 0 0 0;">Kayo Newsletter</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Email Address:</span>
                <div style="margin-top: 12px;">
                  <span class="value">${email}</span>
                </div>
              </div>
              <p style="color: #6b7280; margin-top: 30px;">
                This subscriber joined from the newsletter signup section at the bottom of the homepage.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Confirmation email to subscriber
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
            .welcome-box { background: #F0FDF4; border: 2px solid #10B981; padding: 25px; margin: 25px 0; border-radius: 8px; text-align: center; }
            .section { margin-bottom: 25px; }
            .benefits { background: #F9FAFB; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .benefit-item { padding: 12px 0; display: flex; align-items: start; }
            .checkmark { color: #10B981; font-size: 20px; margin-right: 12px; font-weight: bold; }
            .cta-button { display: inline-block; background: #10B981; color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
            .footer { background: #1F2937; color: #9CA3AF; padding: 30px; text-align: center; font-size: 14px; }
            .footer a { color: #10B981; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">Kayo</div>
              <h1 style="margin: 0; font-size: 24px; font-weight: 600;">Welcome to Our Newsletter! 🎉</h1>
            </div>
            
            <div class="content">
              <div class="welcome-box">
                <h2 style="margin: 0 0 10px 0; color: #059669; font-size: 22px;">Thank You for Subscribing!</h2>
                <p style="margin: 0; font-size: 16px; color: #065F46;">
                  You're now part of the Kayo community and will receive the latest updates on carbon credit verification and supply chain transparency.
                </p>
              </div>

              <div class="section">
                <p style="font-size: 16px; line-height: 1.8; margin: 0;">
                  We're thrilled to have you join us on our mission to build trust in carbon markets through verifiable, transparent digital infrastructure.
                </p>
              </div>

              <div class="benefits">
                <h3 style="margin: 0 0 15px 0; color: #1F2937; font-size: 18px;">Here's What You'll Receive:</h3>
                <div class="benefit-item">
                  <span class="checkmark">✓</span>
                  <div>
                    <strong style="color: #1F2937;">Product Updates:</strong>
                    <span style="color: #6B7280;"> Be the first to know about new features and platform enhancements</span>
                  </div>
                </div>
                <div class="benefit-item">
                  <span class="checkmark">✓</span>
                  <div>
                    <strong style="color: #1F2937;">Industry Insights:</strong>
                    <span style="color: #6B7280;"> Expert analysis on carbon markets and supply chain transparency trends</span>
                  </div>
                </div>
                <div class="benefit-item">
                  <span class="checkmark">✓</span>
                  <div>
                    <strong style="color: #1F2937;">Case Studies:</strong>
                    <span style="color: #6B7280;"> Real-world examples of how organizations are using Kayo</span>
                  </div>
                </div>
                <div class="benefit-item">
                  <span class="checkmark">✓</span>
                  <div>
                    <strong style="color: #1F2937;">Exclusive Content:</strong>
                    <span style="color: #6B7280;"> Early access to research, webinars, and educational resources</span>
                  </div>
                </div>
                <div class="benefit-item">
                  <span class="checkmark">✓</span>
                  <div>
                    <strong style="color: #1F2937;">Event Invitations:</strong>
                    <span style="color: #6B7280;"> Join us for product demos, workshops, and industry events</span>
                  </div>
                </div>
              </div>

              <div class="section">
                <h3 style="margin: 0 0 15px 0; color: #1F2937; font-size: 18px;">Get Started Today</h3>
                <p style="font-size: 15px; color: #6B7280; line-height: 1.8; margin: 0 0 20px 0;">
                  Want to learn more about how Kayo can help your organization? Explore our platform or schedule a personalized demo with our team.
                </p>
                <div style="text-align: center;">
                  <a href="https://kayopulse.com" class="cta-button">Explore Kayo Platform</a>
                </div>
              </div>

              <div class="section" style="background: #EFF6FF; padding: 20px; border-radius: 8px; border-left: 4px solid #3B82F6;">
                <p style="margin: 0; font-size: 14px; color: #1E40AF;">
                  <strong>Need Help?</strong> Our team is here to answer any questions. Reply to this email or reach us at <a href="mailto:hello@kayopulse.com" style="color: #3B82F6; text-decoration: none;">hello@kayopulse.com</a>
                </p>
              </div>

              <div style="text-align: center; margin: 30px 0;">
                <p style="font-size: 16px; margin-bottom: 10px;">Thank you for joining us in building a more transparent future!</p>
                <p style="font-size: 16px; font-weight: 600; color: #1F2937; margin: 0;">The Kayo Team</p>
              </div>
            </div>

            <div class="footer">
              <p style="margin: 0 0 10px 0;">
                <strong style="color: #fff;">Kayo</strong> - Building the digital infrastructure for verifiable carbon credits
              </p>
              <p style="margin: 10px 0;">
                <a href="https://kayopulse.com">Website</a> | 
                <a href="https://kayopulse.com/privacy-policy">Privacy Policy</a> | 
                <a href="https://kayopulse.com/terms">Terms of Service</a>
              </p>
              <p style="margin: 10px 0; font-size: 13px; color: #6B7280;">
                You're receiving this email because you subscribed to the Kayo newsletter.<br/>
                To unsubscribe, reply to this email with "Unsubscribe" in the subject line.
              </p>
              <p style="margin: 10px 0; font-size: 13px;">
                © ${new Date().getFullYear()} Kayo. All rights reserved.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send internal notification
    await transporter.sendMail({
      from: `"Kayo Newsletter" <${process.env.GMAIL_USER}>`,
      to: 'njorojoe11173@gmail.com',
      subject: `New Newsletter Subscription - ${email}`,
      html: internalHtml,
    });

    // Send welcome email to subscriber
    await transporter.sendMail({
      from: `"Kayo Team" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Welcome to the Kayo Newsletter! 🎉',
      html: userHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}