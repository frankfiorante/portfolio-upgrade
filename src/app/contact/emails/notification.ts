import { emailLayout } from './emailLayout';
import type { ContactFormData } from '../schema';

export function notificationEmail({ name, email, subject, message }: ContactFormData): string {
  return emailLayout(`
    <p style="font-size: 16px; margin-bottom: 24px; color: #c9a227; font-weight: 600; letter-spacing: 0.5px;">
      New Contact Form Submission
    </p>

    <table style="width: 100%; border-collapse: collapse; font-size: 15px; margin-bottom: 24px;">
      <tr>
        <td style="padding: 10px 12px; background-color: #f8f5ee; border: 1px solid #e8e0d0; font-weight: 600; width: 100px; vertical-align: top;">
          Name
        </td>
        <td style="padding: 10px 12px; border: 1px solid #e8e0d0; vertical-align: top;">
          ${name}
        </td>
      </tr>
      <tr>
        <td style="padding: 10px 12px; background-color: #f8f5ee; border: 1px solid #e8e0d0; font-weight: 600; vertical-align: top;">
          Email
        </td>
        <td style="padding: 10px 12px; border: 1px solid #e8e0d0; vertical-align: top;">
          <a href="mailto:${email}" style="color: #c9a227; text-decoration: none;">${email}</a>
        </td>
      </tr>
      ${
        subject
          ? `
      <tr>
        <td style="padding: 10px 12px; background-color: #f8f5ee; border: 1px solid #e8e0d0; font-weight: 600; vertical-align: top;">
          Subject
        </td>
        <td style="padding: 10px 12px; border: 1px solid #e8e0d0; vertical-align: top;">
          ${subject}
        </td>
      </tr>
      `
          : ''
      }
      <tr>
        <td style="padding: 10px 12px; background-color: #f8f5ee; border: 1px solid #e8e0d0; font-weight: 600; vertical-align: top;">
          Message
        </td>
        <td style="padding: 10px 12px; border: 1px solid #e8e0d0; vertical-align: top; line-height: 1.7;">
          ${message.replace(/\n/g, '<br />')}
        </td>
      </tr>
    </table>

    <p style="font-size: 13px; color: #888; margin: 0;">
      Reply directly to <a href="mailto:${email}" style="color: #c9a227;">${email}</a> to respond.
    </p>
  `);
}
