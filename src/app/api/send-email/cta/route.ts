import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company } = body;

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
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Contact Request</h1>
              <p style="margin: 10px 0 0 0;">Kayo Carbon Credit Platform</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <span class="value">${name}</span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value">${email}</span>
              </div>
              <div class="field">
                <span class="label">Company:</span>
                <span class="value">${company}</span>
              </div>
              <div style="margin-top: 30px; color: #6b7280; font-size: 14px;">
                <p>This request was submitted on ${new Date().toLocaleString()}.</p>
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
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">Thank You for Contacting Us</h1>
              <p style="margin: 10px 0 0 0;">Kayo Carbon Credit Platform</p>
            </div>
            <div class="content">
              <p>Hello ${name},</p>
              <p>Thank you for reaching out to us. We've received your contact request and a member of our team will be in touch with you shortly.</p>
              <p>In the meantime, feel free to explore our website to learn more about our offerings and how Kayo is revolutionizing the carbon credit market.</p>
              <p>Regards,<br>The Kayo Team</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Kayo. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send emails
    await transporter.sendMail({
      from: '"Kayo Contact Team" <contact@kayopulse.com>',
      to: 'contact@kayopulse.com', // Change to your internal team email
      subject: 'New Contact Request from ' + name,
      html: internalHtml,
    });

    await transporter.sendMail({
      from: '"Kayo Contact Team" <contact@kayopulse.com>',
      to: email,
      subject: 'Thank You for Contacting Kayo',
      html: userHtml,
    });

    return NextResponse.json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
