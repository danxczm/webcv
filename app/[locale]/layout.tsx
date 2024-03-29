import React from 'react';
import './globals.css';

import ActiveSectionContextProvider from '@/context/active-section-context';

import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import Header from '@/components/header';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import { NextIntlClientProvider, useMessages } from 'next-intl';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Borodavko Bohdan | Personal Portfolio',
  description: 'Front-End Developer Borodavko Bohdan.',
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: 'en' | 'uk';
  };
};

export default function RootLayout({ children, params: { locale } }: Readonly<RootLayoutProps>) {
  const messages = useMessages();
  return (
    <html lang={locale} className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-gray-50 pt-32 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
      >
        <div className="relative -z-10 ml-auto mr-auto w-full max-w-lg">
          <div className="animation-delay-2000 absolute right-10 h-52 w-52 animate-blob rounded-full bg-blue-300 opacity-50 mix-blend-multiply blur-xl filter sm:right-44  sm:h-96 sm:w-96"></div>
          <div className="animation-delay-4000 absolute left-10 h-52 w-52 animate-blob rounded-full bg-yellow-300 opacity-50 mix-blend-multiply blur-xl filter sm:left-44 sm:h-96 sm:w-96"></div>
        </div>
        <NextIntlClientProvider messages={messages}>
          <ThemeContextProvider>
            <Toaster position="top-right" />
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />
            </ActiveSectionContextProvider>
            <ThemeSwitch />
          </ThemeContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
