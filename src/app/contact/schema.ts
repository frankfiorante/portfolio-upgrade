import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(1, { message: 'Name is required' }),
  email: z.email({ message: 'Please enter a valid email address' }).trim().min(1, { message: 'Email is required' }),
  subject: z.string().trim().optional(),
  message: z
    .string()
    .trim()
    .min(1, { message: 'Message is required' })
    .min(10, { message: 'Message must be at least 10 characters' }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactFormState = {
  success?: boolean;
  error?: string;
};
