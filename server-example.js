/**
 * Backend Server Example for Email Sending
 *
 * This is a simple Node.js/Express server example that handles email sending.
 *
 * To use this:
 * 1. Install dependencies: npm install express nodemailer cors dotenv
 * 2. Create a .env file with your SMTP credentials (optional, or use the values directly)
 * 3. Run: node server-example.js
 * 4. Update the API_ENDPOINT in sendmail.js to point to this server
 *
 * For production, deploy this to a service like Heroku, Vercel, or AWS.
 */

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// SMTP Configuration
const smtpConfig = {
  host: "smtp3.netcore.co.in",
  port: 587, // Use 587 for TLS, or 465 for SSL
  secure: false, // true for 465, false for other ports
  auth: {
    user: "donotreply@swamatics.com",
    pass: "@SPPl23#",
  },
};

// Create transporter
const transporter = nodemailer.createTransport(smtpConfig);

// Verify connection
transporter.verify(function (error, success) {
  if (error) {
    console.log("SMTP Connection Error:", error);
  } else {
    console.log("SMTP Server is ready to send emails");
  }
});

// Email sending endpoint
app.post("/api/send-email", async (req, res) => {
  try {
    const { emailContent } = req.body;

    if (!emailContent) {
      return res.status(400).json({
        success: false,
        error: "Email content is required",
      });
    }

    // Send email
    const info = await transporter.sendMail({
      from: `"Swamatics Contact Form" <${smtpConfig.auth.user}>`,
      to: emailContent.to || "sales@swamatics.com",
      subject: emailContent.subject || "New Contact Form Submission",
      text: emailContent.text,
      html: emailContent.html,
    });

    console.log("Email sent:", info.messageId);

    res.json({
      success: true,
      messageId: info.messageId,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Failed to send email",
    });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Email server is running" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
