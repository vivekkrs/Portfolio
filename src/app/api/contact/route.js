import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, query } = await request.json();

    // Verify environment variables are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      console.error('Nodemailer configuration error: Missing environment variables.');
      return NextResponse.json(
        { success: false, error: 'Internal Server Error: Email service not configured.' },
        { status: 500 }
      );
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // easy setup for Gmail apps
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO,
      subject: `New Message from ${name} via Portfolio`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${query}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
