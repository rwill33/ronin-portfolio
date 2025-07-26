'use client';
import { cn } from '@/lib/utils';
import React from 'react';

export const FloatingNav = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
    icon: React.ReactElement;
  }[];
}) => {
  const handleScroll = (sectionId: string) => {
    const targetId = sectionId || 'home';
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex max-w-fit inset-x-0 my-6 mx-auto border border-white/20 dark:border-white/10 rounded-full bg-white/20 backdrop-blur-md dark:bg-black/20 dark:backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:shadow-2xl z-[5000] px-8 py-4  items-center justify-center space-x-4'>
      {navItems.map(
        (
          navItem: {
            name: string;
            link: string;
            icon: React.ReactElement;
          },
          idx: number
        ) => (
          <button
            key={`nav-${idx}`}
            onClick={() => handleScroll(navItem.link)}
            className={cn(
              'relative text-white dark:text-neutral-50 items-center flex space-x-1 hover:text-white/80 dark:hover:text-neutral-300 cursor-pointer transition-colors duration-200'
            )}
          >
            <span className='block sm:hidden text-2xl'>{navItem.icon}</span>
            <span className='hidden sm:block text-sm'>{navItem.name}</span>
          </button>
        )
      )}
      <a
        href='mailto:ronin@williams-young.com'
        className='border text-sm font-medium relative border-white/30 dark:border-white/[0.2] text-white dark:text-white px-4 py-2 rounded-full hover:bg-white/10 transition-colors duration-200'
      >
        <span>Contact</span>
        <span className='absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-300 to-transparent  h-px' />
      </a>
    </div>
  );
};
