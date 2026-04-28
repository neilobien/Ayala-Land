import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import nodemailer from 'nodemailer';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post('/api/leads', async (req, res) => {
    const { fullName, email, phone, budget, location, propertyType, message } = req.body;

    // IMPORTANT: In a real production app, you would use environment variables for SMTP credentials.
    // Since we are in a dev environment, we'll log the lead and simulate success.
    console.log('New Lead Received:', { fullName, email, phone, budget, location, propertyType, message });

    try {
      // Example Nodemailer setup (requires real SMTP credentials to work)
      /*
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: 'Real Estate Leads <no-reply@ayalaland-intl.com>',
        to: 'obien.neil@ayalaland-intl.com, nikobien14@yahoo.com',
        subject: 'New Website Lead – Property Inquiry',
        text: `
          New Inquiry from: ${fullName}
          Email: ${email}
          Phone: ${phone}
          Budget: ${budget}
          Preferred Location: ${location}
          Property Type: ${propertyType}
          Message: ${message}
        `,
      };

      await transporter.sendMail(mailOptions);
      */

      res.status(200).json({ status: 'success', message: 'Lead received and processed.' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ status: 'error', message: 'Failed to process lead.' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
