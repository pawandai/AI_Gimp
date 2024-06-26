import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const IBMPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex',
});

export const metadata: Metadata = {
  title: 'Ai Gimp',
  description: 'The is the project created by Pawan Dai.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ClerkProvider
        appearance={{
          variables: { colorPrimary: '#624cf5' },
        }}
      >
        <body className={cn('font-IBMPlex antialiased', IBMPlex.variable)}>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
