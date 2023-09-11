import { EmailTemplate } from '@/components/EmailTemplate';
import { NextResponse, NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_DLALcjjx_4pdJDKc4LQEscRk8tj7wBjwc');

export async function POST(request: NextRequest) {
  try {
    const {name, email, linkedin, description} = await request.json();
    
    const data = await resend.emails.send({
        from: 'Contact portafolio <onboarding@resend.dev>',
        to: [`${email}`],
        subject: 'Correo del portafolio',
        text: '',
        react: EmailTemplate({ firstName: name , description: description, linkedin: linkedin}),
      });
    return NextResponse.json({message: "Email enviado"},{status: 200});
  } catch (error) {
    return NextResponse.json({ message: "Error" },{status: 500});
  }
}