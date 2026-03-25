'use client';

import React, { useState } from 'react';
import { cn } from '../lib/utils';
import type { SiteId } from '../types';

interface ContactFormProps {
  site: SiteId;
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  clientType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  clientType?: string;
  message?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Full name is required';
  }
  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'A valid email address is required';
  }
  if (!data.clientType) {
    errors.clientType = 'Please select how you are enquiring';
  }
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please provide some details about your matter (at least 10 characters)';
  }
  return errors;
}

export function ContactForm({ site, className }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    clientType: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, site }),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', clientType: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (error?: string) =>
    cn(
      'w-full rounded-lg border px-4 py-3 text-sm transition-colors outline-none',
      'placeholder:text-gray-400',
      error
        ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
        : 'border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20'
    );

  if (status === 'success') {
    return (
      <div className={cn('text-center py-10', className)}>
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
          Message Sent
        </h3>
        <p className="text-gray-600">
          Thank you for getting in touch. I aim to respond within 24 hours during business days.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-primary font-medium text-sm hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={cn('space-y-5', className)}>
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          className={inputClass(errors.name)}
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          className={inputClass(errors.email)}
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
          Phone Number <span className="text-gray-400 text-xs">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="e.g. 020 7430 2005"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass()}
        />
      </div>

      {/* Client Type */}
      <div>
        <label htmlFor="clientType" className="block text-sm font-medium text-gray-700 mb-1.5">
          I am a... <span className="text-red-500">*</span>
        </label>
        <select
          id="clientType"
          name="clientType"
          value={formData.clientType}
          onChange={handleChange}
          className={inputClass(errors.clientType)}
        >
          <option value="">Please select...</option>
          <option value="lawyer">Lawyer / Law Firm</option>
          <option value="licensed">Licensed Access Professional (e.g. Accountant)</option>
          <option value="public">Member of the Public</option>
        </select>
        {errors.clientType && (
          <p className="mt-1 text-xs text-red-600">{errors.clientType}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Please describe your matter briefly..."
          value={formData.message}
          onChange={handleChange}
          className={cn(inputClass(errors.message), 'resize-y min-h-[120px]')}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message}</p>
        )}
      </div>

      {/* Error message */}
      {status === 'error' && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          Something went wrong. Please try again or contact me directly by phone or email.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className={cn(
          'w-full py-3 px-6 rounded-lg font-medium text-sm transition-all duration-200',
          'bg-primary text-white hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed',
          'shadow-sm hover:shadow-md'
        )}
      >
        {status === 'submitting' ? (
          <span className="flex items-center justify-center space-x-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            <span>Sending...</span>
          </span>
        ) : (
          'Send Message'
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        I aim to respond to all enquiries within 24 hours during business days.
      </p>
    </form>
  );
}
