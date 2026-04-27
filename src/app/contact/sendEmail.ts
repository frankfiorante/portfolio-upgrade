import { Resend } from 'resend';
import type { ContactFormData } from './schema';
import { notificationEmail } from './emails/notification';
import { confirmationEmail } from './emails/confirmation';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ name, email, subject, message }: ContactFormData): Promise<void> {
  const [{ error: notificationError }, { error: confirmationError }] = await Promise.all([
    resend.emails.send({
      from: `${process.env.EMAIL_FROM}`,
      to: `${process.env.EMAIL}`,
      subject: `New message from ${name}`,
      html: notificationEmail({ name, email, subject, message }),
    }),
    resend.emails.send({
      from: `${process.env.EMAIL_FROM}`,
      to: email,
      subject: 'Got your message',
      html: confirmationEmail({ name }),
    }),
  ]);

  if (notificationError || confirmationError) {
    const messages = [notificationError?.message, confirmationError?.message].filter(Boolean).join('\n');
    throw new Error(messages);
  }
}
