# Deploying the Kayo Website on Vercel

This guide explains how to deploy the Kayo Website application on Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup)
2. Your project pushed to GitHub, GitLab, or Bitbucket
3. Your database already set up (using Neon PostgreSQL)

## Deployment Steps

### 1. Connect Your Repository to Vercel

1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on **"Add New..."** and select **"Project"**
3. Import your Git repository
4. Select the repository containing your Kayo Website project

### 2. Configure Project Settings

On the configuration page:

1. **Project Name**: Enter a name for your project
2. **Framework Preset**: Vercel should automatically detect Next.js
3. **Root Directory**: Leave as `.` if your project is in the root of the repository
4. **Build and Output Settings**: Use the default settings

### 3. Configure Environment Variables

In the **"Environment Variables"** section, add the following:

1. **Production Environment Variables**:
   - `DATABASE_URL`: Your Neon PostgreSQL connection string
   - `GMAIL_USER`: Your Gmail account email
   - `GMAIL_APP_PASSWORD`: Your Gmail App Password
   - `NODE_ENV`: `production`

### 4. Deploy

1. Click the **"Deploy"** button
2. Wait for the deployment to complete

### 5. Database Initialization

After your application is deployed:

1. Connect to your database using a PostgreSQL client
2. Run the database initialization SQL commands found in `scripts/db-init.js`

Or alternatively, you can use Vercel CLI to run the initialization script:

1. Install Vercel CLI: `npm i -g vercel`
2. Login to Vercel: `vercel login`
3. Pull environment variables: `vercel env pull`
4. Run the initialization script: `node scripts/db-init.js`

## Custom Domain Setup

To set up a custom domain:

1. Go to your project in the Vercel Dashboard
2. Click on **"Settings"** and then **"Domains"**
3. Add your domain and follow the verification steps

## Troubleshooting Common Issues

### Issue: Routes Manifest Not Found

If you see an error like: `Error: ENOENT: no such file or directory, lstat '/vercel/path0/.next/routes-manifest.json'`:

1. Check your `next.config.ts` file for any issues
2. Ensure your project builds correctly locally with `npm run build`
3. Remove any `outputFileTracingRoot` configuration that might cause issues
4. Add a `vercel.json` file to explicitly configure the build

### Issue: Environment Variables Not Working

1. Check that all environment variables are correctly set in the Vercel Dashboard
2. Make sure they're added to the correct environment (Production, Preview, Development)
3. Redeploy your application after updating environment variables

### Issue: Database Connection Errors

1. Verify that your database is accessible from Vercel's servers
2. Check if your database connection string is correct
3. Ensure your database provider (like Neon) allows connections from Vercel's IP ranges

## Monitoring and Logs

1. Go to your project dashboard in Vercel
2. Click on **"Deployments"** to see all deployments
3. Select a deployment to view build logs
4. Click on **"Functions"** to see function logs and performance metrics

## Automatic Deployments

Vercel automatically deploys when you push to your connected Git repository. You can configure branch deployments in your project settings:

1. Go to your project settings
2. Click on **"Git"**
3. Configure which branches should trigger deployments

## Additional Resources

- [Vercel Documentation for Next.js](https://vercel.com/docs/frameworks/nextjs)
- [Environment Variables in Vercel](https://vercel.com/docs/concepts/projects/environment-variables)
- [Custom Domains on Vercel](https://vercel.com/docs/concepts/projects/domains)