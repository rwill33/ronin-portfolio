import { Experience } from '@/components/Experience/Experience';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    "Discover Ronin Williams-Young's professional experience including internships at Electric Mind (Intelliware), education at Western University and Ivey Business School, and leadership roles.",
  keywords: [
    'Electric Mind',
    'Intelliware',
    'Software Developer Intern',
    'Western University',
    'Ivey Business School',
    'Western Developer Society',
    'Ivey Tech Club',
  ],
  openGraph: {
    title: 'Experience - Ronin Williams-Young',
    description:
      "Discover Ronin Williams-Young's professional experience including internships at Electric Mind (Intelliware), education at Western University and Ivey Business School.",
    url: 'https://williams-young.com/experience',
  },
  alternates: {
    canonical: 'https://williams-young.com/experience',
  },
};

const ExperiencePage = () => {
  return (
    <article>
      <Experience />
    </article>
  );
};

export default ExperiencePage;
