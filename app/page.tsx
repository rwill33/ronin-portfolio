import { Experience } from '@/components/Experience/Experience';
import Hero from '@/components/Hero';
import { FeaturesSectionDemo } from '@/components/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ronin Williams-Young | AI Engineer & Full-Stack Developer Portfolio',
  description:
    "Welcome to Ronin Williams-Young's portfolio. AI Engineer at Bond Brand Loyalty and Software Engineering student at Western University. Specializing in AI/ML, React, TypeScript, NestJS, Python, and enterprise software development with experience in fintech and data analytics.",
  keywords: [
    'Ronin Williams-Young',
    'AI Engineer Portfolio',
    'Full Stack Developer Portfolio',
    'Machine Learning Engineer',
    'React Developer Toronto',
    'TypeScript Developer',
    'Python AI Engineer',
    'Bond Brand Loyalty',
    'Western University Software Engineering',
    'Ivey Business School',
    'Fintech Developer',
    'Data Analytics',
    'Enterprise Software',
    'OpenAI Developer',
    'NLP Engineer',
    'Toronto Tech',
    'Software Engineering Portfolio',
  ],
  openGraph: {
    title:
      'Ronin Williams-Young | AI Engineer & Full-Stack Developer Portfolio',
    description:
      'AI Engineer at Bond Brand Loyalty and Software Engineering student at Western University. Explore my projects in AI/ML, fintech, and enterprise software development.',
    url: 'https://williams-young.com',
    images: [
      {
        url: '/sf_pic3.jpeg',
        width: 1200,
        height: 630,
        alt: 'Ronin Williams-Young - AI Engineer and Full-Stack Developer Portfolio',
      },
    ],
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
        id='experience'
        className='min-h-screen flex justify-center items-center py-20 pt-16'
      >
        <Experience />
      </section>

      <section
        id='projects'
        className='min-h-screen flex justify-center items-center py-20 pt-16'
      >
        <FeaturesSectionDemo />
      </section>
    </main>
  );
}
