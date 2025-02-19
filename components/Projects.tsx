'use client';

import { cn } from '@/lib/utils';
// import { IconBrandYoutubeFilled } from '@tabler/icons-react';
import { skills } from '@/constants/skills';
import PhilanthPro from '@/public/philanthpro-dashboard.jpeg';
import ProWire from '@/public/prowire-logo.png';
import SpotifyClone from '@/public/spotify-screenshot.png';
import { SkillKey } from '@/types/skills';
import React, { useState } from 'react';
import { Card } from './ui/focus-cards';

interface Feature {
  title: string;
  description: string;
  children?: React.ReactNode;
  className: string;
  skeleton: (props: { index: number }) => React.ReactNode;
  techStack?: SkillKey[];
}

export function FeaturesSectionDemo() {
  const [hovered, setHovered] = useState<number | null>(null);
  const features: Feature[] = [
    {
      title: 'PhilanthPro',
      description:
        'PhilanthPro is a platform that helps non-profits manage their donations and donors. Led initial development, including the setup of the development environment, database schema, and user authentication.',
      skeleton: ({ index }: { index: number }) => (
        <Card
          card={{
            title: 'PhilanthPro',
            src: PhilanthPro,
            href: 'https://www.philanthpro.com/',
          }}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ),
      className: 'col-span-1 lg:col-span-4',
      techStack: [
        SkillKey.react,
        SkillKey.typescript,
        SkillKey.nestjs,
        SkillKey.prisma,
        SkillKey.postgresql,
        SkillKey.docker,
        SkillKey.azure,
        SkillKey.stripe,
        SkillKey.auth0,
      ],
    },
    {
      title: 'ProWire',
      description:
        'Converted a native mobile application to a web application for real-time sports audio streaming.',
      skeleton: ({ index }: { index: number }) => (
        <Card
          card={{
            title: 'ProWire',
            src: ProWire,
            href: 'https://www.prowiresport.com/',
          }}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ),
      className: 'col-span-1 lg:col-span-2',
      techStack: [
        SkillKey.react,
        SkillKey.typescript,
        SkillKey.aws,
        SkillKey.terraform,
        SkillKey.java,
        SkillKey.spring,
      ],
    },
    {
      title: 'Course Outline Manager',
      description:
        'Whether its you or Tyler Durden, you can get to know about our product on YouTube',
      skeleton: ({ index }: { index: number }) => (
        <video
          className={cn(
            'rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full',
            hovered !== null && hovered !== 2 && 'blur-sm'
          )}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          controls
          preload='auto'
        >
          <source src='/course-outline-manager-demo.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      ),
      className: 'col-span-1 lg:col-span-3',
      techStack: [
        SkillKey.react,
        SkillKey.typescript,
        SkillKey.tailwindcss,
        SkillKey.nestjs,
        SkillKey.prisma,
        SkillKey.postgresql,
        SkillKey.docker,
        SkillKey.googlecloud,
      ],
    },
    {
      title: 'Spotify Clone',
      description:
        'A clone of the Spotify platform that allows users to search for songs, create and share playlists, and listen to music through YouTube.',
      skeleton: ({ index }: { index: number }) => (
        <Card
          card={{
            title: 'Spotify Clone',
            src: SpotifyClone,
            href: 'https://github.com/rwill33/se3316-rwill33-jdailly2-jgilli33-lab4',
          }}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ),
      className: 'col-span-1 lg:col-span-3',
      techStack: [
        SkillKey.angular,
        SkillKey.typescript,
        SkillKey.aws,
        SkillKey.sql,
        SkillKey.firebase,
      ],
    },
  ];

  return (
    <div className='relative max-w-7xl mx-auto'>
      <div className='px-8'>
        <h2 className='text-4xl md:text-5xl lg:leading-tight mx-auto tracking-tight text-black font-bold dark:text-white'>
          Projects
        </h2>
        <p className='text-sm lg:text-base max-w-2xl my-4 text-neutral-500 font-normal dark:text-neutral-300'>
          Here are a few of my past personal and professsional projects. I am
          always working on new projects so feel free to contact me to see what
          I am currently working on.
        </p>
      </div>

      <div className='relative bg-opacity-40 dark:bg-opacity-0 bg-indigo-200 dark:bg-neutral-950 '>
        <div className='grid grid-cols-1 lg:grid-cols-6 rounded-md'>
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>

              <div className=' h-full w-full rounded-lg'>
                <div className='relative flex gap-10'>
                  <div className='w-full mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full rounded-lg'>
                    <div className='flex flex-1 w-full h-full flex-col space-y-2 '>
                      <feature.skeleton index={index} />
                    </div>
                  </div>
                </div>
                <div className=''>
                  <h5 className='text-lg text-black dark:text-white font-bold mt-4'>
                    Technologies
                  </h5>
                  <div className='mt-4 flex flex-wrap gap-4'>
                    {feature.techStack?.map((key) => {
                      const skill = skills[key];
                      return (
                        <div
                          key={skill.name}
                          className='flex items-center gap-2'
                        >
                          <skill.icon
                            className={cn(`text-4xl ${skill.color}`)}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=' max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-3xl md:leading-snug'>
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        'text-sm md:text-base max-w-xl text-left mx-auto',
        'text-neutral-500 text-center font-normal dark:text-neutral-300',
        'text-left mx-0 my-2'
      )}
    >
      {children}
    </p>
  );
};
