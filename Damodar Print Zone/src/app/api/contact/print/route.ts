// app/api/contact/print/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import type { Attachment } from 'nodemailer/lib/mailer';

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // Check for required files
    const files = formData.getAll('files') as File[];
    if (files.length === 0) {
      return NextResponse.json(
        { success: false, message: 'No files uploaded' },
        { status: 400 }
      );
    }

    // Get other form data
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const instructions = formData.get('instructions') as string;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: 'Name and phone number are required' },
        { status: 400 }
      );
    }

    // Prepare attachments
    const attachments: Attachment[] = await Promise.all(
      files.map(async (file: File) => {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        return {
          filename: file.name,
          content: buffer,
          contentType: file.type,
        };
      })
    );

    // Format current date and time
    const currentDate = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
    });

    // Send email to store
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.STORE_EMAIL,
      subject: `New Print Request - ${name}`,
      html: `
        <h2>New Print Request</h2>
        <p><strong>Date & Time:</strong> ${currentDate}</p>
        <p><strong>Customer Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Instructions:</strong> ${instructions || 'None provided'}</p>
        <p><strong>Files to Print:</strong></p>
        <ul>
          ${files
            .map(
              (file) =>
                `<li>${file.name} (${(file.size / (1024 * 1024)).toFixed(2)} MB)</li>`
            )
            .join('')}
        </ul>
        <hr>
        <p>This is an automated message from your print service system.</p>
      `,
      attachments,
    });

    // Send SMS notification (optional - implement if needed)
    // await sendSMS(phone, `Thank you for your print request. We'll contact you shortly about your ${files.length} document(s).`);

    return NextResponse.json({
      success: true,
      message: 'Documents received successfully',
    });
  } catch (error) {
    console.error('Print request error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to process request. Please try again or contact us directly.',
      },
      { status: 500 }
    );
  }
}

// Rate limiting (optional - implement if needed)
export async function GET() {
  return NextResponse.json({ message: 'Print service is operational' });
}