import { emailLayout } from './emailLayout';
import type { ContactFormData } from '../schema';

export function confirmationEmail({ name }: Pick<ContactFormData, 'name'>): string {
  return emailLayout(`
    <p style="font-size: 16px; margin-bottom: 16px;">Hi ${name},</p>

    <p style="font-size: 15px; line-height: 1.7; margin-bottom: 16px;">
      Thanks for reaching out — I received your message and will get back to you as soon as I can.
    </p>

    <p style="font-size: 15px; line-height: 1.7; margin-bottom: 0;">
      — Frank
    </p>
  `);
}
