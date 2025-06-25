import Hero from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description:
    "Welcome to Ronin Williams-Young's portfolio. Software Engineering student at Western University and HBA candidate at Ivey Business School with experience in full-stack development.",
  openGraph: {
    title: 'Ronin Williams-Young | Software Developer & Business Student',
    description:
      "Welcome to Ronin Williams-Young's portfolio. Software Engineering student at Western University and HBA candidate at Ivey Business School.",
    url: 'https://williams-young.com',
  },
  alternates: {
    canonical: 'https://williams-young.com',
  },
};

export default function Home() {
  return (
    <main className='flex flex-row justify-center items-stretch'>
      <Hero />
    </main>
  );
}
