'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { JSX } from 'react';
import { ModeToggle } from './theme-toggle';

export const FloatingNav = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
}) => {
  return (
    <div className='flex max-w-fit inset-x-0 my-6 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-4  items-center justify-center space-x-4'>
      {navItems.map(
        (
          navItem: { name: string; link: string; icon?: JSX.Element },
          idx: number
        ) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              'relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500'
            )}
          >
            <span className='block sm:hidden'>{navItem.icon}</span>
            <span className='hidden sm:block text-sm'>{navItem.name}</span>
          </Link>
        )
      )}
      <ModeToggle />
    </div>
  );
};
