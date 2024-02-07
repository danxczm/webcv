import './globals.css';

import ActiveSectionContextProvider from '@/context/active-section-context';

import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import Header from '@/components/header';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Borodavko Bohdan | Personal Portfolio',
  description: 'Front-End Developer Borodavko Bohdan.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-32 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="relative w-full max-w-lg -z-10 ml-auto mr-auto">
          <div className="absolute sm:right-44 right-10 w-52 h-52 sm:w-96 sm:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50  animate-blob animation-delay-2000"></div>
          <div className="absolute sm:left-44 left-10 w-52 h-52 sm:w-96 sm:h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>
        <ThemeContextProvider>
          <Toaster position="top-right" />

          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
