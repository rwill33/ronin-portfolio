'use client';

import { cn } from '@/lib/utils';
// import { IconBrandYoutubeFilled } from '@tabler/icons-react';
import React, { useState } from 'react';
import { Card } from './ui/focus-cards';

export function FeaturesSectionDemo() {
  const [hovered, setHovered] = useState<number | null>(null);
  const features = [
    {
      title: 'PhilanthPro',
      description:
        'Track and manage your project issues with ease using our intuitive interface.',
      skeleton: <SkeletonOne hovered={hovered} setHovered={setHovered} />,
      className:
        'col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-400',
    },
    {
      title: 'ProWire',
      description:
        'Capture stunning photos effortlessly using our advanced AI technology.',
      skeleton: <SkeletonTwo hovered={hovered} setHovered={setHovered} />,
      className: 'border-b col-span-1 lg:col-span-2 dark:border-neutral-400',
    },
    {
      title: 'Course Outline Manager',
      description:
        'Whether its you or Tyler Durden, you can get to know about our product on YouTube',
      skeleton: <SkeletonThree hovered={hovered} setHovered={setHovered} />,
      className:
        'col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-400',
    },
    {
      title: 'Deploy in seconds',
      description:
        'With our blazing fast, state of the art, cutting edge, we are so back cloud servies (read AWS) - you can deploy your model in seconds.',
      skeleton: <SkeletonFour />,
      className: 'col-span-1 lg:col-span-3 border-b lg:border-none',
    },
  ];

  return (
    <div className='relative z-20 max-w-7xl mx-auto '>
      <div className='px-8'>
        <h4 className='text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white'>
          Past Projects
        </h4>

        <p className='text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300'>
          Here are some of the projects I have worked on in the past. I am
          always looking for new projects to work on, so feel free to reach out
          to me if you have a project in mind.
        </p>
      </div>

      <div className='relative bg-opacity-40 dark:bg-opacity-50 bg-indigo-200 dark:bg-neutral-950 '>
        <div className='grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-400'>
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
    <p className=' max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug'>
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        'text-sm md:text-base  max-w-4xl text-left mx-auto',
        'text-neutral-500 text-center font-normal dark:text-neutral-300',
        'text-left max-w-sm mx-0 md:text-sm my-2'
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
  );
};

export const SkeletonFour = () => {
  return (
    <div className='h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10'>
      Hi
    </div>
  );
};
