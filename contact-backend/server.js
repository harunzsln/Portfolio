const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {

    const { name, surname, email, message } = req.body;

    if (!name || !surname || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {

        await transporter.sendMail({
            from: `"${name, surname}" <${email}>`,
            to: process.env.TO_EMAIL,
            subject: `New contact form submission from ${name, surname}`,
            text: message,
        });

        res.status(200).json({success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({success: false, message: 'Failed to send email' });
        
    }

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
