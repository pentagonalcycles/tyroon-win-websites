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

    console.log('Contact form submission:', {
      name,
      email,
      phone: phone || 'Not provided',
      clientType: clientTypeLabels[clientType] || clientType,
      message,
      site: 'taxclerk.co.uk',
      timestamp: new Date().toISOString(),
    });

    // TODO: Configure email provider (e.g. Resend):
    // await resend.emails.send({ to: 'tyroon.win@taxclerk.co.uk', ... });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process your message. Please try again.' },
      { status: 500 }
    );
  }
}
