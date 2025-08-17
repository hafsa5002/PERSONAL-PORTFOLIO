const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Contact from ${name}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.redirect('/?sent=true');
  } catch (err) {
    console.error(err);
    res.redirect('/?sent=false');
  }
});

module.exports = router;
