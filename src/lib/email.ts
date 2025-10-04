import nodemailer from 'nodemailer';

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

// Send email confirmation for newsletter subscription
export async function sendNewsletterConfirmation(email: string) {
  const transporter = createTransporter();
  
  const html = `
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
            <h1 style="margin: 0;">Newsletter Subscription Confirmed</h1>
            <p style="margin: 10px 0 0 0;">Kayo Carbon Credit Platform</p>
          </div>
          <div class="content">
            <p>Thank you for subscribing to our newsletter!</p>
            <p>You'll now receive updates on carbon credit opportunities, industry insights, and exclusive content from Kayo.</p>
            <p>If you have any questions, feel free to reach out to our team.</p>
            <p>Best regards,<br>The Kayo Team</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Kayo. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: '"Kayo Newsletter" <newsletter@kayopulse.com>',
      to: email,
      subject: 'Welcome to Kayo\'s Newsletter',
      html,
    });
    return true;
  } catch (error) {
    console.error('Error sending newsletter confirmation:', error);
    return false;
  }
}

// Send email confirmation for contact form
export async function sendContactConfirmation(name: string, email: string) {
  const transporter = createTransporter();
  
  const html = `
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
            <p>Thank you for reaching out to us. We've received your message and a member of our team will be in touch with you shortly.</p>
            <p>In the meantime, feel free to explore our website to learn more about our offerings and how Kayo is revolutionizing the carbon credit market.</p>
            <p>Best regards,<br>The Kayo Team</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Kayo. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: '"Kayo Contact Team" <contact@kayopulse.com>',
      to: email,
      subject: 'Thank You for Contacting Kayo',
      html,
    });
    return true;
  } catch (error) {
    console.error('Error sending contact confirmation:', error);
    return false;
  }
}

// Send email confirmation for demo request
export async function sendDemoConfirmation(fullName: string, email: string, demoType: string[]) {
  const transporter = createTransporter();
  
  const demoTypeString = Array.isArray(demoType) ? demoType.join(', ') : demoType;
  
  const html = `
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
            <h1 style="margin: 0;">Demo Request Received</h1>
            <p style="margin: 10px 0 0 0;">Kayo Carbon Credit Platform</p>
          </div>
          <div class="content">
            <p>Hello ${fullName},</p>
            <p>Thank you for requesting a demo of ${demoTypeString}. We're excited to show you how Kayo can transform your approach to carbon credits.</p>
            <p>A member of our team will be in touch shortly to schedule your personalized demo and answer any questions you may have.</p>
            <p>Best regards,<br>The Kayo Demo Team</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Kayo. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: '"Kayo Demo Team" <demos@kayopulse.com>',
      to: email,
      subject: 'Your Kayo Demo Request Confirmation',
      html,
    });
    return true;
  } catch (error) {
    console.error('Error sending demo confirmation:', error);
    return false;
  }
}

// Send email confirmation for investment inquiry
export async function sendInvestmentConfirmation(
  name: string, 
  email: string, 
  investmentRange: string,
  timeline: string,
  focusAreas: string[]
) {
  const transporter = createTransporter();
  
  const focusAreasString = Array.isArray(focusAreas) ? focusAreas.join(', ') : focusAreas;
  
  const html = `
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
            <h1 style="margin: 0;">Investment Interest Received</h1>
            <p style="margin: 10px 0 0 0;">Kayo Carbon Credit Platform</p>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for your interest in investing in Kayo. We've received your inquiry and will review it promptly.</p>
            <p>A member of our investment relations team will be in touch with you shortly to discuss your interest in more detail.</p>
            <p>Here's a summary of the information you provided:</p>
            <ul>
              <li><strong>Focus Areas:</strong> ${focusAreasString}</li>
              <li><strong>Investment Range:</strong> ${investmentRange}</li>
              <li><strong>Investment Timeline:</strong> ${timeline}</li>
            </ul>
            <div style="text-align: center;">
              <a href="https://kayopulse.com" class="button">Learn More About Kayo</a>
            </div>
            <p>Regards,<br>The Kayo Investment Team</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Kayo. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: '"Kayo Investment Team" <investment@kayopulse.com>',
      to: email,
      subject: 'Thank You for Your Interest in Kayo',
      html,
    });
    return true;
  } catch (error) {
    console.error('Error sending investment confirmation:', error);
    return false;
  }
}