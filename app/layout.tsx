import { AuroraBackground } from '@/components/ui/aurora-background';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { ModeToggle } from '@/components/ui/theme-toggle';
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

export const metadata: Metadata = {
  title: "Ronin's Portfolio",
  description: `Ronin Williams-Young's portfolio created using Next.js with TypeScript and Tailwind CSS.`,
};

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Experience', link: '/experience' },
  { name: 'Projects', link: '/projects' },
  // { name: 'Personal', link: '/personal' },
  // { name: 'Contact', link: '/contact' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <AuroraBackground className='relative flex flex-col'>
            <FloatingNav navItems={navItems} />
            <main className='flex flex-1 w-full justify-center'>
              {children}
            </main>
            <div className='absolute bottom-0 right-0 p-4'>
              <ModeToggle />
            </div>
          </AuroraBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
