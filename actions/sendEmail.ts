'use server';

import { Resend } from 'resend';

import { getErrorMessage, validateString } from '@/lib/utils';
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailHandler = async (data: FormData) => {
  const message = data.get('message');
  const email = data.get('email');

  if (!validateString(email, 500)) {
    return {
      error: 'Invalid email',
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  let info;

  try {
    info = await resend.emails.send({
      from: 'Contact form <onboarding@resend.dev>',
      to: 'danbohdan92@gmail.com',
      subject: 'Message from contact form',
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        email: email as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    info,
  };
};
