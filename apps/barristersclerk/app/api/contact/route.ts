import { NextResponse } from 'next/server';

const clientTypeLabels: Record<string, string> = {
  lawyer: 'Lawyer / Law Firm',
  licensed: 'Licensed Access Professional',
  public: 'Member of the Public',
};

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, email, phone, clientType, message } = data;

    // Basic server-side validation
    if (!name || !email || !clientType || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log the submission (in production, you'd send an email here via nodemailer, Resend, etc.)
    console.log('Contact form submission:', {
      name,
      email,
      phone: phone || 'Not provided',
      clientType: clientTypeLabels[clientType] || clientType,
      message,
      site: 'barristersclerk.co.uk',
      timestamp: new Date().toISOString(),
    });

    // TODO: In production, configure an email provider such as Resend or nodemailer:
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@barristersclerk.co.uk',
    //   to: 'tyroon.win@barristersclerk.co.uk',
    //   subject: `New enquiry from ${name} (${clientTypeLabels[clientType]})`,
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nType: ${clientTypeLabels[clientType]}\n\nMessage:\n${message}`,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process your message. Please try again.' },
      { status: 500 }
    );
  }
}
