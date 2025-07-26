import { About } from '@/components/About';
import { Experience } from '@/components/Experience/Experience';
import Hero from '@/components/Hero';
import { FeaturesSectionDemo } from '@/components/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ronin Williams-Young | Portfolio',
  description:
    "Welcome to Ronin Williams-Young's portfolio. Software Engineering student at Western University and HBA candidate at Ivey Business School with experience in full-stack development.",
  keywords: [
    'Ronin Williams-Young',
    'Software Developer',
    'Western University',
    'Ivey Business School',
    'Full Stack Developer',
    'Software Engineering',
    'Portfolio',
  ],
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
    <main className='flex flex-col w-full'>
      <section
        id='home'
        className='min-h-screen flex flex-row justify-center items-center'
      >
        <Hero />
      </section>

      <section
        id='about'
        className='min-h-screen flex justify-center items-center py-20'
      >
        <About />
      </section>

      <section
        id='experience'
        className='min-h-screen flex justify-center items-center py-20'
      >
        <Experience />
      </section>

      <section
        id='projects'
        className='min-h-screen flex justify-center items-center py-20'
      >
        <FeaturesSectionDemo />
      </section>
    </main>
  );
}
