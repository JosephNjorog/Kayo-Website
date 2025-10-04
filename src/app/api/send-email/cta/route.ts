import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const htmlContent = `
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
              <h1 style="margin: 0;">New CTA Demo Request</h1>
              <p style="margin: 10px 0 0 0;">From Homepage CTA Section</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Email Address:</span>
                <div style="margin-top: 12px;">
                  <span class="value">${email}</span>
                </div>
              </div>
              <p style="color: #6b7280; margin-top: 30px;">
                This lead was generated from the "Build Trust in Your Carbon Projects" CTA section at the bottom of the homepage.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Kayo CTA Requests" <${process.env.GMAIL_USER}>`,
      to: 'njorojoe11173@gmail.com',
      subject: `New CTA Demo Request - ${email}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}