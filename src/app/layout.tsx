import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import CursorBackground from '@/components/cursor-background';

export const metadata: Metadata = {
  title: 'Rise Gum - Next Gen Energy',
  description: 'India’s first sugar-free caffeinated chewing gum. Energize your day, instantly.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <CursorBackground />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
