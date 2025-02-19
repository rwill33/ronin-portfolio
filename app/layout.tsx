import { AuroraBackground } from '@/components/ui/aurora-background';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { ModeToggle } from '@/components/ui/theme-toggle';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { FaHome } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { MdWork } from 'react-icons/md';
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
  { name: 'Home', link: '/', icon: FaHome },
  { name: 'About', link: '/about', icon: IoPersonCircleSharp },
  { name: 'Experience', link: '/experience', icon: MdWork },
  { name: 'Projects', link: '/projects', icon: GrProjects },
  // { name: 'Personal', link: '/personal' },
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
          <AuroraBackground className='relative min-h-[100vh] flex flex-col'>
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
