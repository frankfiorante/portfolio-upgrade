'use client';

import { startTransition, useActionState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast, { Toaster } from 'react-hot-toast';
import { Send } from 'lucide-react';
import { submitContact } from './actions';
import { ContactFormData, ContactFormState, contactSchema } from './schema';

const initialState: ContactFormState = {};

const inputStyle = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  color: '#f0f0ff',
  borderRadius: '10px',
  padding: '12px 16px',
  width: '100%',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const labelStyle = { fontSize: '12px', fontWeight: 500, color: '#8888aa' } as const;
const errorStyle = { fontSize: '12px', color: '#f87171', marginTop: '4px' } as const;

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched',
  });

  useEffect(() => {
    if (state.success === true) {
      reset();
      toast.success('Message sent! I\'ll get back to you within 24 hours.');
    } else if (state.success === false) {
      toast.error(state.error || 'Something went wrong. Please try again.');
    }
  }, [state, reset]);

  const onSubmit = (data: ContactFormData) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('subject', data.subject || '');
    formData.append('message', data.message);
    startTransition(() => { formAction(formData); });
  };

  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 6000 }} />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label style={labelStyle}>Name *</label>
            <input
              {...register('name')}
              placeholder="Frank Fiorante"
              disabled={isPending}
              style={inputStyle}
              onFocus={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'; }}
              onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            />
            {errors.name && <span style={errorStyle}>{errors.name.message}</span>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label style={labelStyle}>Email *</label>
            <input
              {...register('email')}
              type="email"
              placeholder="you@example.com"
              disabled={isPending}
              style={inputStyle}
              onFocus={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'; }}
              onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            />
            {errors.email && <span style={errorStyle}>{errors.email.message}</span>}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label style={labelStyle}>Subject</label>
          <input
            {...register('subject')}
            placeholder="What's on your mind?"
            disabled={isPending}
            style={inputStyle}
            onFocus={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'; }}
            onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label style={labelStyle}>Message *</label>
          <textarea
            {...register('message')}
            rows={5}
            placeholder="Your message..."
            disabled={isPending}
            style={{ ...inputStyle, resize: 'vertical' }}
            onFocus={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'; }}
            onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
          />
          {errors.message && <span style={errorStyle}>{errors.message.message}</span>}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all disabled:opacity-60"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #818cf8)',
            color: '#fff',
            boxShadow: '0 0 30px rgba(99,102,241,0.25)',
          }}
        >
          {isPending ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </button>
      </form>
    </>
  );
}
