import Header from '@/components/header';

import './globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Borodavko Bohdan | Personal Portfolio',
  description: 'Front-End Developer Borodavko Bohdan.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm:pt-36`}
      >
        {/* <div className="relative w-full max-w-lg -z-10 ml-auto mr-auto"> */}
        <div className="absolute -top-24 right-44 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50  animate-blob animation-delay-2000"></div>
        <div className="absolute -top-4 left-80 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-15 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        {/* </div> */}
        <Header />
        {children}
      </body>
    </html>
  );
}
