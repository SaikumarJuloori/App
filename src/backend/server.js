const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure your email service (use a real email/password or env variables)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'juloorisaikumar2821@gmail.com',      // replace with your email
      pass: 'Chitti123@',         // use App Password if using Gmail
    },
  });

  const mailOptions = {
    from: email,
    to: 'juloorisaikumar2821@gmail.com',
    subject: `New Contact Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
