import { Pool } from 'pg';

// Create connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// For server-side initialization only (not called during build)
export async function initializeDatabase() {
  if (process.env.NODE_ENV === 'development' || process.env.INITIALIZE_DB === 'true') {
    try {
      // Create tables if they don't exist
      await query(`
        CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
          id SERIAL PRIMARY KEY,
          email VARCHAR(255) UNIQUE NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
      `);
      
      await query(`
        CREATE TABLE IF NOT EXISTS contact_submissions (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          company VARCHAR(255),
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
      `);

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

      console.log('Database tables initialized successfully');
    } catch (error) {
      console.error('Error initializing database:', error);
      throw error;
    }
  }
}

// Helper function to execute queries
export async function query(text: string, params?: any[]) {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query', { text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('Error executing query', { text, error });
    throw error;
  }
}