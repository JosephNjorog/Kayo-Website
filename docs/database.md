# Kayo Website Form Submission Database

This document describes the database structure and implementation for storing form submissions from the Kayo website.

## Overview

The Kayo website uses a PostgreSQL database hosted on Neon to store form submissions from:

- Newsletter subscriptions
- Contact form submissions
- Demo requests
- Investment inquiries

Form data is stored in the database and confirmation emails are sent to users.

## Database Structure

### Tables

#### newsletter_subscriptions

- `id`: SERIAL PRIMARY KEY
- `email`: VARCHAR(255) UNIQUE NOT NULL
- `created_at`: TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP

#### contact_submissions

- `id`: SERIAL PRIMARY KEY
- `name`: VARCHAR(255) NOT NULL
- `email`: VARCHAR(255) NOT NULL
- `company`: VARCHAR(255)
- `created_at`: TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP

#### demo_requests

- `id`: SERIAL PRIMARY KEY
- `demo_type`: TEXT[] NOT NULL
- `full_name`: VARCHAR(255) NOT NULL
- `organization`: VARCHAR(255)
- `email`: VARCHAR(255) NOT NULL
- `phone`: VARCHAR(50)
- `role`: VARCHAR(255)
- `goal`: TEXT
- `demo_date`: VARCHAR(255)
- `consent`: BOOLEAN DEFAULT FALSE
- `created_at`: TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP

#### investment_inquiries

- `id`: SERIAL PRIMARY KEY
- `name`: VARCHAR(255) NOT NULL
- `email`: VARCHAR(255) NOT NULL
- `company_fund`: VARCHAR(255)
- `investment_range`: VARCHAR(255)
- `investment_timeline`: VARCHAR(255)
- `focus_areas`: TEXT[]
- `preferred_meeting_time`: VARCHAR(255)
- `additional_comments`: TEXT
- `created_at`: TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP

## Implementation

### Database Connection

The database connection is managed in `src/lib/db.ts` using the `pg` package with connection pooling.

```typescript
// src/lib/db.ts
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export async function query(text: string, params?: any[]) {
  // Query execution logic...
}
```

### API Routes

Each form submission is handled by a specific API route:

- `/api/send-email/newsletter/route.ts`: Handles newsletter subscriptions
- `/api/send-email/cta/route.ts`: Handles contact form submissions
- `/api/send-email/demo/route.ts`: Handles demo requests
- `/api/send-email/invest/route.ts`: Handles investment inquiries

### Email Confirmation

Email confirmations are managed in `src/lib/email.ts` using nodemailer with Gmail SMTP:

```typescript
// src/lib/email.ts
import nodemailer from 'nodemailer';

const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};
```

## Setup Instructions

1. Create a `.env` file with the following variables:

   ```env
   DATABASE_URL=postgresql://user:password@hostname:port/database
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-app-password
   ADMIN_EMAIL=notifications-recipient@example.com
   ```

### Setting Up Gmail App Password

For the email functionality to work correctly, you must use an App Password for your Gmail account, especially if you have 2-Step Verification enabled (which is recommended):

1. Go to your Google Account settings: https://myaccount.google.com/
2. Select "Security"
3. Under "Signing in to Google," select "2-Step Verification" (you must have this enabled)
4. At the bottom of the page, select "App passwords"
5. Click "Select app" and choose "Other (Custom name)"
6. Enter a name (e.g., "Kayo Website")
7. Click "Generate" to get your 16-character app password
8. Copy this password and use it as the `GMAIL_APP_PASSWORD` in your `.env` file

**Troubleshooting Gmail Authentication:**

If you receive errors like `Invalid login: 535-5.7.8 Username and Password not accepted`, try the following:

1. **Verify app password**: Make sure you're using the 16-character app password and not your regular Gmail password
2. **Check your username**: Ensure the Gmail username is correct and matches the account where you generated the app password
3. **Regenerate the app password**: Try creating a new app password if the current one isn't working
4. **Enable "Less secure apps"**: For non-2FA accounts, you might need to allow "less secure apps" at [Google Account Settings](https://myaccount.google.com/lesssecureapps)
5. **Check for account restrictions**: Some organizational Gmail accounts might have restrictions on SMTP access
6. **Verify no copy/paste errors**: Ensure no extra spaces were added when copying the password

**Important Notes:**

- An App Password is a 16-character code that gives a less secure app permission to access your Google Account
- App passwords can only be created if you have 2-Step Verification enabled
- Never share or expose this password
- For production environments, consider using a dedicated email service like SendGrid or Mailchimp

## Database Initialization

1. Initialize the database:

   ```bash
   npm run db:init
   ```

2. Build and start the application:

   ```bash
   npm run build
   npm run start
   ```

## Testing

To test the form submissions:

1. Fill out any of the forms on the website
2. Check the database for the stored submission
3. Verify that confirmation emails are sent correctly

## Data Retrieval

To retrieve stored form submissions, you can connect to the PostgreSQL database directly using any PostgreSQL client and run queries against the tables.
