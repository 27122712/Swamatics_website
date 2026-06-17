# Email Setup Guide

This guide explains how to set up the email functionality for the contact forms.

## Overview

The email functionality is integrated into:
- **Modal Form** (Quick Enquiry form)
- **Footer Form** (Contact form in the footer section)

Both forms send emails to `sales@swamatics.com` using the SMTP credentials provided.

## Backend Setup

Since email sending requires SMTP credentials, a backend server is needed for security. A sample backend server is provided in `server-example.js`.

### Step 1: Install Backend Dependencies

Navigate to your project root and install the required packages:

```bash
npm install express nodemailer cors dotenv
```

### Step 2: Run the Backend Server

```bash
node server-example.js
```

The server will run on `http://localhost:3001` by default.

### Step 3: Configure Frontend API Endpoint

If your backend is running on a different URL, update the API endpoint in `src/components/sendmail/sendmail.js`:

```javascript
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT || "/api/send-email";
```

Or create a `.env` file in the project root:

```
VITE_API_ENDPOINT=http://localhost:3001/api/send-email
```

### Step 4: Deploy Backend (Production)

For production, deploy the backend server to a service like:
- **Heroku**
- **Vercel** (with serverless functions)
- **AWS Lambda**
- **DigitalOcean**
- **Railway**

Update the `VITE_API_ENDPOINT` environment variable to point to your production backend URL.

## SMTP Configuration

The SMTP credentials are configured in `server-example.js`:

- **Host**: smtp3.netcore.co.in
- **Port**: 587 (TLS)
- **Email**: donotreply@swamatics.com
- **Password**: @SPPl23#
- **Recipient**: sales@swamatics.com

## Testing

1. Start the backend server: `node server-example.js`
2. Start the frontend: `npm run dev`
3. Fill out either contact form and submit
4. Check the backend console for email sending confirmation
5. Check the `sales@swamatics.com` inbox for the email

## Troubleshooting

### Email not sending

1. Check that the backend server is running
2. Verify the API endpoint URL is correct
3. Check browser console for errors
4. Check backend server logs for SMTP errors
5. Verify SMTP credentials are correct

### CORS Errors

If you see CORS errors, ensure the backend has CORS enabled (already included in `server-example.js`).

### SMTP Connection Issues

- Verify the SMTP host and port are correct
- Check if your firewall is blocking the connection
- Try port 465 with `secure: true` for SSL
- Contact your email provider if issues persist

## Security Notes

- **Never commit SMTP credentials to version control**
- Use environment variables for sensitive data in production
- Consider using a service like SendGrid or Mailgun for production
- Implement rate limiting on the backend to prevent abuse

