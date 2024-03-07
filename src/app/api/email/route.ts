import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const { name, email, phone, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.meta.ua',
    port: 465,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const emailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL_TO,
    replyTo: email,
    subject: `Website activity from Ecosolution`,
    html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Phone: ${phone} </p>
            <p>Message: ${message} </p>
            `,
  };

  try {
    await transporter.sendMail(emailOptions);
    return NextResponse.json({ message: 'Email sent' }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: error }, { status: 500 });
  }
}
