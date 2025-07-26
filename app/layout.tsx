import { AuroraBackground } from '@/components/ui/aurora-background';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { ModeToggle } from '@/components/ui/theme-toggle';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { FaBriefcase, FaCode, FaHome } from 'react-icons/fa';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export const metadata: Metadata = {
  title: {
    default: 'Ronin Williams-Young | Software Developer & Business Student',
    template: '%s | Ronin Williams-Young',
  },
  description:
    'Portfolio of Ronin Williams-Young - Software Engineering student at Western University and HBA candidate at Ivey Business School. Experienced in React, TypeScript, NestJS, and full-stack development.',
  keywords: [
    'Ronin Williams-Young',
    'Software Developer',
    'Software Engineering',
    'Ivey Business School',
    'Western University',
    'React',
    'TypeScript',
    'NestJS',
    'Full Stack Developer',
    'Portfolio',
  ],
  authors: [
    { name: 'Ronin Williams-Young', url: 'https://williams-young.com' },
  ],
  creator: 'Ronin Williams-Young',
  publisher: 'Ronin Williams-Young',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://williams-young.com',
    siteName: 'Ronin Williams-Young Portfolio',
    title: 'Ronin Williams-Young | Software Developer & Business Student',
    description:
      'Portfolio of Ronin Williams-Young - Software Engineering student at Western University and HBA candidate at Ivey Business School.',
    images: [
      {
        url: '/headshot-sketch.jpeg',
        width: 1200,
        height: 630,
        alt: 'Ronin Williams-Young',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ronin Williams-Young | Software Developer & Business Student',
    description:
      'Portfolio of Ronin Williams-Young - Software Engineering student at Western University and HBA candidate at Ivey Business School.',
    images: ['/headshot-sketch.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://williams-young.com',
  },
};

const navItems = [
  {
    name: 'Home',
    link: '',
    icon: <FaHome />,
  },
  {
    name: 'Experience',
    link: 'experience',
    icon: <FaBriefcase />,
  },
  {
    name: 'Projects',
    link: 'projects',
    icon: <FaCode />,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ronin Williams-Young',
              jobTitle: 'Software Developer',
              description:
                'Software Engineering student at Western University and HBA candidate at Ivey Business School',
              url: 'https://williams-young.com',
              sameAs: [
                'https://www.linkedin.com/in/ronin-williams-young/',
                'https://github.com/rwill33',
              ],
              alumniOf: [
                {
                  '@type': 'CollegeOrUniversity',
                  name: 'University of Western Ontario',
                  department: 'Software Engineering',
                },
                {
                  '@type': 'CollegeOrUniversity',
                  name: 'Ivey Business School',
                  department: 'HBA',
                },
              ],
              email: 'ronin@williams-young.com',
              telephone: '(647) 570-2191',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Toronto',
                addressRegion: 'Ontario',
                addressCountry: 'Canada',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <AuroraBackground className='relative min-h-screen flex flex-col'>
            <FloatingNav navItems={navItems} />
            <main className='flex flex-1 w-full justify-center pt-20'>
              {children}
            </main>
            <div className='fixed bottom-4 right-4 z-50'>
              <ModeToggle />
            </div>
          </AuroraBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
