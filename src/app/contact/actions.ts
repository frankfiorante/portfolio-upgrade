'use server';

import { contactSchema, ContactFormState } from './schema';
import { sendEmail } from './sendEmail';

export async function submitContact(_prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const result = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!result.success) {
    return {
      success: false,
      error: 'Please check your form inputs and try again.',
    };
  }

  try {
    await sendEmail(result.data);
    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return {
      success: false,
      error: 'Failed to send your message. Please try again later.',
    };
  }
}
