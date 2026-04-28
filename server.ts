import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Leads
  app.post('/api/contact', async (req, res) => {
    const { fullName, email, phone, budget, location, propertyType, message } = req.body;
    
    console.log('--- NEW WEBSITE LEAD ---');
    console.log(`From: ${fullName} <${email}>`);
    console.log(`Phone: ${phone}`);
    console.log(`Preferred: ${propertyType} in ${location}`);
    console.log(`Budget: ${budget}`);
    console.log(`Message: ${message}`);
    console.log('------------------------');

    // NOTE: To send actual emails, you would use a service like Resend, SendGrid, or Nodemailer.
    // Since this requires an API key, we simulate a successful delivery here.
    // If you add an API key to the Secrets panel, you can implement the real mailer here.

    res.status(200).json({ message: 'Lead received successfully' });
  });

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
