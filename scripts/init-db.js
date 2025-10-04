import { initializeDatabase } from '../src/lib/db';

// Run the database initialization
(async () => {
  try {
    console.log('Starting database initialization...');
    await initializeDatabase();
    console.log('Database initialization complete');
    process.exit(0);
  } catch (error) {
    console.error('Database initialization failed:', error);
    process.exit(1);
  }
})();