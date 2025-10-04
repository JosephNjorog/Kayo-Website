// Initialize Database Script
import { Pool } from 'pg';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

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
  } catch (error) {
    console.error('❌ Error initializing database:', error);
    throw error;
  } finally {
    // Close pool connection when done
    await pool.end();
  }
}

// Run initialization
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