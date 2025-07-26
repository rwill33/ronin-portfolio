import { AuroraBackground } from '@/components/ui/aurora-background';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { Analytics } from '@vercel/analytics/next';
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
  themeColor: '#0a0a0a',
};

export const metadata: Metadata = {
  title: {
    default: 'Ronin Williams-Young | AI Engineer & Full-Stack Developer',
    template: '%s | Ronin Williams-Young',
  },
  description:
    'Ronin Williams-Young - AI Engineer at Bond Brand Loyalty and Software Engineering student at Western University. Expert in React, TypeScript, NestJS, Python, AI/ML, and full-stack development. Experience with fintech applications, data analytics, and enterprise software.',
  keywords: [
    'Ronin Williams-Young',
    'AI Engineer',
    'Software Developer',
    'Full Stack Developer',
    'Software Engineering',
    'Bond Brand Loyalty',
    'Electric Mind',
    'Intelliware',
    'Western University',
    'Ivey Business School',
    'React Developer',
    'TypeScript Developer',
    'NestJS Developer',
    'Python Developer',
    'AI/ML Engineer',
    'Machine Learning',
    'Data Analytics',
    'Fintech Developer',
    'Enterprise Software',
    'Web Development',
    'Toronto Developer',
    'Ontario Developer',
    'Portfolio',
    'PhilanthPro',
    'ProWire',
    'Course Outline Manager',
    'AWS',
    'Azure',
    'PostgreSQL',
    'Docker',
    'Terraform',
    'OpenAI',
    'Google Gemini',
    'NLP',
    'Embedding Models',
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
    title: 'Ronin Williams-Young | AI Engineer & Full-Stack Developer',
    description:
      'AI Engineer at Bond Brand Loyalty and Software Engineering student at Western University. Expert in React, TypeScript, Python, AI/ML, and enterprise software development.',
    images: [
      {
        url: '/sf_pic3.jpeg',
        width: 1200,
        height: 630,
        alt: 'Ronin Williams-Young - AI Engineer and Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ronin Williams-Young | AI Engineer & Full-Stack Developer',
    description:
      'AI Engineer at Bond Brand Loyalty and Software Engineering student at Western University. Expert in React, TypeScript, Python, AI/ML, and enterprise software development.',
    images: ['/sf_pic3.jpeg'],
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
  category: 'Technology',
  classification: 'Business',
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
    <html lang='en' suppressHydrationWarning className='dark'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='16x16 32x32' />
        <link
          rel='icon'
          href='/sf_pic3.jpeg'
          sizes='192x192'
          type='image/jpeg'
        />
        <link rel='apple-touch-icon' href='/sf_pic3.jpeg' />
        <meta name='theme-color' content='#0a0a0a' />
        <meta name='color-scheme' content='dark' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
        <meta
          name='apple-mobile-web-app-title'
          content='Ronin Williams-Young'
        />
        <meta
          name='application-name'
          content='Ronin Williams-Young Portfolio'
        />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-config' content='/browserconfig.xml' />
        <link rel='canonical' href='https://williams-young.com' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link rel='dns-prefetch' href='//williams-young.com' />
        <meta name='geo.region' content='CA-ON' />
        <meta name='geo.placename' content='Toronto' />
        <meta name='geo.position' content='43.7001;-79.4163' />
        <meta name='ICBM' content='43.7001, -79.4163' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ronin Williams-Young',
              jobTitle: 'AI Engineer',
              description:
                'AI Engineer at Bond Brand Loyalty and Software Engineering student at Western University. Expert in React, TypeScript, Python, AI/ML, and enterprise software development.',
              url: 'https://williams-young.com',
              sameAs: [
                'https://www.linkedin.com/in/ronin-williams-young/',
                'https://github.com/rwill33',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Bond Brand Loyalty',
                url: 'https://bondbrandloyalty.com',
              },
              alumniOf: [
                {
                  '@type': 'CollegeOrUniversity',
                  name: 'Western University',
                  department: 'Software Engineering',
                  url: 'https://www.uwo.ca',
                },
                {
                  '@type': 'CollegeOrUniversity',
                  name: 'Ivey Business School',
                  department: 'Honours Business Administration',
                  url: 'https://www.ivey.uwo.ca',
                },
              ],
              email: 'ronin@williams-young.com',
              telephone: '+16475702191',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Toronto',
                addressRegion: 'Ontario',
                addressCountry: 'Canada',
              },
              knowsAbout: [
                'Artificial Intelligence',
                'Machine Learning',
                'React',
                'TypeScript',
                'NestJS',
                'Python',
                'Full Stack Development',
                'Fintech',
                'Data Analytics',
                'Enterprise Software',
                'AWS',
                'Azure',
                'PostgreSQL',
                'Docker',
                'Terraform',
                'OpenAI',
                'Natural Language Processing',
                'Web Development',
              ],
              workExample: [
                {
                  '@type': 'SoftwareApplication',
                  name: 'PhilanthPro',
                  description:
                    'Fintech application for optimizing charitable donations with Auth0 authentication and Stripe integration',
                  url: 'https://www.philanthpro.com/',
                  programmingLanguage: [
                    'React',
                    'TypeScript',
                    'NestJS',
                    'PostgreSQL',
                  ],
                  applicationCategory: 'BusinessApplication',
                },
                {
                  '@type': 'SoftwareApplication',
                  name: 'ProWire',
                  description:
                    'Sports technology web application for live audio streaming using WebRTC and Web Audio API',
                  url: 'https://www.prowiresport.com/',
                  programmingLanguage: [
                    'React',
                    'TypeScript',
                    'Java',
                    'Spring',
                  ],
                  applicationCategory: 'EntertainmentApplication',
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <AuroraBackground className='relative min-h-screen flex flex-col'>
          <FloatingNav navItems={navItems} />
          <main className='flex flex-1 w-full justify-center'>{children}</main>
        </AuroraBackground>
        <Analytics />
      </body>
    </html>
  );
}
