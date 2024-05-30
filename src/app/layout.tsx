import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppContainer from '@/components/Layouts/AppContainer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevTools',
  description: 'A collection of tools for developers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className={inter.className}>
        <AppContainer>{children}</AppContainer>
      </body>
    </html>
  );
}
