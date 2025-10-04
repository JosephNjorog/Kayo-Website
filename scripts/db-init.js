// Initialize Database Script
import { Pool } from 'pg';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Load environment variables
dotenv.config();

// Check for required environment variables
function checkRequiredEnvVars() {
  const required = ['DATABASE_URL'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error('❌ Missing required environment variables:');
    missing.forEach(key => console.error(`  - ${key}`));
    console.error('\nPlease create a .env file with these values. See .env.example for reference.');
    process.exit(1);
  }
  
  return true;
}

// Create connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Helper function to execute queries
async function query(text, params) {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query', { text: text.substring(0, 50) + '...', duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('Error executing query', { text: text.substring(0, 50) + '...', error });
    throw error;
  }
}

// Initialize database tables
async function initializeDatabase() {
  try {
    // Create newsletter subscriptions table
    await query(`
      CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Newsletter subscriptions table initialized');
    
    // Create contact submissions table
    await query(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        company VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Contact submissions table initialized');

    // Create demo requests table
    await query(`
      CREATE TABLE IF NOT EXISTS demo_requests (
        id SERIAL PRIMARY KEY,
        demo_type TEXT[] NOT NULL,
        full_name VARCHAR(255) NOT NULL,
        organization VARCHAR(255),
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        role VARCHAR(255),
        goal TEXT,
        demo_date VARCHAR(255),
        consent BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Demo requests table initialized');

    // Create investment inquiries table
    await query(`
      CREATE TABLE IF NOT EXISTS investment_inquiries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        company_fund VARCHAR(255),
        investment_range VARCHAR(255),
        investment_timeline VARCHAR(255),
        focus_areas TEXT[],
        preferred_meeting_time VARCHAR(255),
        additional_comments TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Investment inquiries table initialized');

    console.log('\n✨ All database tables initialized successfully');
    
    // Test email configuration
    await testEmailConfiguration();
  } catch (error) {
    console.error('❌ Error initializing database:', error);
    throw error;
  } finally {
    // Close pool connection when done
    await pool.end();
  }
}

// Test email configuration
async function testEmailConfiguration() {
  try {
    console.log('\n📧 Testing email configuration...');
    
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.warn('⚠️ Email testing skipped: GMAIL_USER or GMAIL_APP_PASSWORD not provided');
      return;
    }
    
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });
    
    // Verify connection configuration
    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          console.error('❌ Email configuration test failed:', error);
          if (error.code === 'EAUTH') {
            console.error(`
⚠️ Authentication Error: The app password appears to be invalid.
   
Please make sure you're using an App Password, not your regular Gmail password:
1. Visit https://myaccount.google.com/apppasswords
2. Generate a new app password specifically for this application
3. Update your .env file with the new password
`);
          }
          reject(error);
        } else {
          console.log('✅ Email configuration verified successfully');
          resolve(success);
        }
      });
    });
    
  } catch (error) {
    console.error('❌ Email configuration test failed:', error);
    console.warn('⚠️ Form submissions will be saved to the database, but confirmation emails may not be sent');
  }
}

// Run initialization
console.log('🚀 Starting database initialization...');
checkRequiredEnvVars();
console.log('🔌 Connecting to database...');
initializeDatabase()
  .then(() => {
    console.log('🎉 Database setup complete');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Database setup failed:', error);
    process.exit(1);
  });