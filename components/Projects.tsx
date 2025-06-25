'use client';

import { cn } from '@/lib/utils';
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
        'This project helped advisors and their clients optimize charitable donations by calculating the ideal annual contribution based on factors like timeline, cash flows, inflation, and the time value of money. I implemented authentication and authorization with Auth0, integrated Stripe for subscription management, and contributed to the donation optimization algorithm by improving performance with WebWorkers. Additionally, I built dynamic form pages, implemented data-saving functionality, resolved bugs, and provided client support as the sole developer post-launch, balancing technical troubleshooting with relationship management.',
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
        "This web app recreated a lightweight version of the client's mobile app, enabling users to onboard and stream live sports audio. I adapted the existing audio streaming system for the web using WebRTC and the Web Audio API, solving challenges like enabling playback through iPhone speakers for a seamless experience. Additionally, I extended the Java Spring backend to support the web app without disrupting the original mobile app's functionality.",
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
        'I built a multi-tenant web application for universities to manage course outlines, leading development in an agile environment with sprints, stand-ups, and code reviews. I designed a robust PostgreSQL database with Prisma and deployed the app on GCP using Docker. By practicing Test-Driven Development with Jest for React and NestJS, I improved stability and reduced bugs.',
      skeleton: ({ index }: { index: number }) => (
        <video
          className={cn(
            'rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full',
            hovered !== null && hovered !== 2 && 'blur-sm'
          )}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          controls
          preload='metadata'
          aria-label='Demo video of Course Outline Manager application'
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
        'A clone of the Spotify platform that allows users to search for songs, create and share playlists, and listen to music through YouTube. I implemented the frontend with Angular and TypeScript, integrated Firebase for authentication, and deployed the app on AWS using an EC2 instance.',
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
    <section
      className='relative max-w-7xl mx-auto'
      aria-labelledby='projects-heading'
    >
      <div className='px-8'>
        <header>
          <h1
            id='projects-heading'
            className='text-4xl md:text-5xl lg:leading-tight mx-auto tracking-tight text-black font-bold dark:text-white'
          >
            Projects
          </h1>
          <p className='text-sm lg:text-base max-w-2xl my-4 text-neutral-800 font-normal dark:text-neutral-300'>
            Here are a few of my past personal and professional projects.
            I&apos;m always building something new, so feel free to reach out to
            see what I&apos;m currently working on!
          </p>
        </header>

        <div className='relative'>
          <div className='grid grid-cols-1 lg:grid-cols-6 rounded-md gap-y-8'>
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} className={feature.className}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <div className='h-full w-full rounded-lg my-4'>
                  <div className='relative flex gap-10'>
                    <div className='w-full mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full rounded-lg overflow-hidden'>
                      <div className='flex flex-1 w-full h-full flex-col space-y-2'>
                        <feature.skeleton index={index} />
                      </div>
                    </div>
                  </div>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                  <div className='mt-4'>
                    <h3 className='text-black dark:text-white font-semibold mb-2'>
                      Technologies
                    </h3>
                    <div
                      className='flex flex-wrap gap-4'
                      role='list'
                      aria-label='Technologies used in this project'
                    >
                      {feature.techStack?.map((key) => {
                        const skill = skills[key];
                        return (
                          <div
                            key={skill.name}
                            className='flex items-center gap-2 hover:scale-110 transition-transform duration-200'
                            role='listitem'
                            title={skill.name}
                          >
                            <skill.icon
                              className={cn(`text-4xl ${skill.color}`)}
                              aria-label={`${skill.name} technology icon`}
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
    </section>
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
    <article className={cn(`sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </article>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <h2 className='max-w-5xl mx-auto text-left tracking-tight font-bold text-black dark:text-white text-xl md:text-3xl md:leading-snug'>
      {children}
    </h2>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        'text-sm md:text-base text-left mx-auto',
        'text-neutral-800 font-normal dark:text-neutral-300',
        'text-left mx-0 my-2'
      )}
    >
      {children}
    </p>
  );
};
