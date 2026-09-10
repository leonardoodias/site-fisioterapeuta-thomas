import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const title = 'Guia de Alongamentos | Dr. Thomas A. Bressan';
const description = 'Guia gratuito de alongamentos com exercícios simples para pescoço, ombros, coluna, pernas, punhos e mãos.';
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title,
  description,
  icons: { icon: '/thomas-mark.webp' },
  openGraph: { title, description, type: 'website', locale: 'pt_BR', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Movimento é cuidado — Guia interativo de alongamentos' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
