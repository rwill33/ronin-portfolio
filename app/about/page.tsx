import { About } from '@/components/About';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Learn more about Ronin Williams-Young - Software Engineering student at Western University, HBA candidate at Ivey Business School, and experienced software developer.',
  openGraph: {
    title: 'About Ronin Williams-Young',
    description:
      'Learn more about Ronin Williams-Young - Software Engineering student at Western University, HBA candidate at Ivey Business School, and experienced software developer.',
    url: 'https://williams-young.com/about',
  },
  alternates: {
    canonical: 'https://williams-young.com/about',
  },
};

const AboutPage = () => {
  return (
    <>
      <About />
    </>
  );
};

export default AboutPage;
