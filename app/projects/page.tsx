import { FeaturesSectionDemo } from '@/components/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "Explore Ronin Williams-Young's software development projects including PhilanthPro, ProWire, Course Outline Manager, and Spotify Clone. Built with React, TypeScript, NestJS, and more.",
  keywords: [
    'PhilanthPro',
    'ProWire',
    'Course Outline Manager',
    'Spotify Clone',
    'React Projects',
    'TypeScript Projects',
    'NestJS Projects',
    'Full Stack Projects',
  ],
  openGraph: {
    title: 'Projects - Ronin Williams-Young',
    description:
      "Explore Ronin Williams-Young's software development projects including PhilanthPro, ProWire, Course Outline Manager, and Spotify Clone.",
    url: 'https://williams-young.com/projects',
  },
  alternates: {
    canonical: 'https://williams-young.com/projects',
  },
};

const ProjectsPage = () => {
  return (
    <article>
      <FeaturesSectionDemo />
    </article>
  );
};

export default ProjectsPage;
