'use client';

import { cn } from '@/lib/utils';
// import { IconBrandYoutubeFilled } from '@tabler/icons-react';
import React, { useState } from 'react';
import { FaAngular, FaAws, FaJava, FaReact } from 'react-icons/fa';
import { PiFileSql } from 'react-icons/pi';
import {
  SiDocker,
  SiFirebase,
  SiGooglecloud,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiSpring,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { Card } from './ui/focus-cards';

export function FeaturesSectionDemo() {
  const [hovered, setHovered] = useState<number | null>(null);
  const features = [
    {
      title: 'PhilanthPro',
      description:
        'PhilanthPro is a platform that helps non-profits manage their donations and donors.',
      skeleton: <SkeletonOne hovered={hovered} setHovered={setHovered} />,
      className: 'col-span-1 lg:col-span-4',
    },
    {
      title: 'ProWire',
      description:
        'Capture stunning photos effortlessly using our advanced AI technology.',
      skeleton: <SkeletonTwo hovered={hovered} setHovered={setHovered} />,
      className: ' col-span-1 lg:col-span-2',
    },
    {
      title: 'Course Outline Manager',
      description:
        'Whether its you or Tyler Durden, you can get to know about our product on YouTube',
      skeleton: <SkeletonThree hovered={hovered} setHovered={setHovered} />,
      className: 'col-span-1 lg:col-span-3  ',
    },
    {
      title: 'Spotify Clone',
      description:
        'A clone of the Spotify platform that allows users to search for songs, create and share playlists, and listen to music through YouTube.',
      skeleton: <SkeletonFour hovered={hovered} setHovered={setHovered} />,
      className: 'col-span-1 lg:col-span-3',
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
          continuously working on new projects so feel free to contact me to see
          what I am currently working on.
        </p>
      </div>

      <div className='relative bg-opacity-40 dark:bg-opacity-0 bg-indigo-200 dark:bg-neutral-950 '>
        <div className='grid grid-cols-1 lg:grid-cols-6 rounded-md'>
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>

              <div className=' h-full w-full rounded-lg'>
                {feature.skeleton}
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

export const SkeletonOne = ({
  hovered,
  setHovered,
}: {
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <>
      <div className='relative flex gap-10'>
        <div className='w-full mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full rounded-lg'>
          <div className='flex flex-1 w-full h-full flex-col space-y-2'>
            <Card
              card={{
                title: 'PhilanthPro',
                src: '/philanthpro-dashboard.jpeg',
                href: 'https://www.philanthpro.com/',
              }}
              index={0}
              hovered={hovered}
              setHovered={setHovered}
            />
          </div>
        </div>
      </div>
      <div className='mt-4 flex flex-wrap gap-4'>
        <div className='flex items-center gap-2'>
          <FaReact className='text-4xl text-blue-400' />
        </div>
        <div className='flex items-center gap-2'>
          <SiTypescript className='text-4xl text-blue-500' />
        </div>
        <div className='flex items-center gap-2'>
          <SiNestjs className='text-4xl text-rose-600' />
        </div>
        <div className='flex items-center gap-2'>
          <SiPrisma className='text-4xl text-white' />
        </div>
        <div className='flex items-center gap-2'>
          <SiPostgresql className='text-4xl text-blue-600' />
        </div>
        <div className='flex items-center gap-2'>
          <SiDocker className='text-4xl text-blue-500' />
        </div>
        <div className='flex items-center gap-2'>
          <VscAzure className='text-4xl text-sky-500' />
        </div>
      </div>
    </>
  );
};

export const SkeletonThree = ({
  hovered,
  setHovered,
}: {
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <>
      <div className='relative flex gap-10'>
        <div className='w-full mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full rounded-lg'>
          <div className='flex flex-1 w-full h-full flex-col space-y-2'>
            <video
              className={cn(
                'rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out',
                hovered !== null && hovered !== 2 && 'blur-sm scale-[0.98]'
              )}
              onMouseEnter={() => setHovered(2)}
              onMouseLeave={() => setHovered(null)}
              controls
              preload='auto'
            >
              <source src='/course-outline-manager-demo.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className='mt-4 flex flex-wrap gap-4'>
        <div className='flex items-center gap-2'>
          <FaReact className='text-4xl text-blue-400' />
        </div>
        <div className='flex items-center gap-2'>
          <SiTypescript className='text-4xl text-blue-500' />
        </div>
        <div className='flex items-center gap-2'>
          <SiTailwindcss className='text-4xl text-sky-500' />
        </div>
        <div className='flex items-center gap-2'>
          <SiNestjs className='text-4xl text-rose-600' />
        </div>
        <div className='flex items-center gap-2'>
          <SiPrisma className='text-4xl text-white' />
        </div>
        <div className='flex items-center gap-2'>
          <SiPostgresql className='text-4xl text-blue-600' />
        </div>
        <div className='flex items-center gap-2'>
          <SiDocker className='text-4xl text-blue-500' />
        </div>
        <div className='flex items-center gap-2'>
          <SiGooglecloud className='text-4xl text-green-500' />
        </div>
      </div>
    </>
  );
};

export const SkeletonTwo = ({
  hovered,
  setHovered,
}: {
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <>
      <div className='relative flex gap-10'>
        <div className='w-full mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full rounded-lg'>
          <div className='flex flex-1 w-full h-full flex-col space-y-2'>
            <Card
              card={{
                title: 'ProWire',
                src: '/prowire-logo.png',
                href: 'https://www.prowiresport.com/',
              }}
              index={1}
              hovered={hovered}
              setHovered={setHovered}
            />
          </div>
        </div>
      </div>
      <div className='mt-4 flex flex-wrap gap-4'>
        <div className='flex items-center gap-2'>
          <FaReact className='text-4xl text-blue-400' />
        </div>
        <div className='flex items-center gap-2'>
          <SiTypescript className='text-4xl text-blue-500' />
        </div>
        <div className='flex items-center gap-2'>
          <FaAws className='text-4xl text-orange-500' />
        </div>
        <div className='flex items-center gap-2'>
          <SiTerraform className='text-4xl text-purple-800' />
        </div>
        <div className='flex items-center gap-2'>
          <FaJava className='text-4xl text-red-600' />
        </div>
        <div className='flex items-center gap-2'>
          <SiSpring className='text-4xl text-green-600' />
        </div>
      </div>
    </>
  );
};

export const SkeletonFour = ({
  hovered,
  setHovered,
}: {
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <>
      <div className='relative flex gap-10'>
        <div className='w-full mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full rounded-lg'>
          <div className='flex flex-1 w-full h-full flex-col space-y-2'>
            <Card
              card={{
                title: 'Spotify Clone',
                src: '/spotify-screenshot.png',
                href: 'https://github.com/rwill33/se3316-rwill33-jdailly2-jgilli33-lab4',
              }}
              index={1}
              hovered={hovered}
              setHovered={setHovered}
            />
          </div>
        </div>
      </div>
      <div className='mt-4 flex flex-wrap gap-4'>
        <div className='flex items-center gap-2'>
          <FaAngular className='text-4xl text-red-700' />
        </div>
        <div className='flex items-center gap-2'>
          <SiTypescript className='text-4xl text-blue-500' />
        </div>
        <div className='flex items-center gap-2'>
          <FaAws className='text-4xl text-orange-500' />
        </div>
        <div className='flex items-center gap-2'>
          <PiFileSql className='text-4xl text-blue-600' />
        </div>
        <div className='flex items-center gap-2'>
          <SiFirebase className='text-4xl text-red-600' />
        </div>
      </div>
    </>
  );
};
