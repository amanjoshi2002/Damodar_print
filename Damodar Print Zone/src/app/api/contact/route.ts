// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, service, message } = data;

    // Validate required fields
    if (!name || !phone || !service || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill all required fields' },
        { status: 400 }
      );
    }

    // Format current date and time
    const currentDate = new Date().toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata'
    });

    // Send email to store
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.STORE_EMAIL,
      subject: `New Contact Inquiry - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Date & Time:</strong> ${currentDate}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Service Required:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p>This is an automated message from your contact form system.</p>
      `
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message. Please try again.' 
      },
      { status: 500 }
    );
  }
}