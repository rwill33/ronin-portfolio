'use client';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type Card = {
  title: string;
  src: StaticImageData;
  href: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <a
      href={card.href}
      target='_blank'
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full',
        hovered !== null && hovered !== index && 'blur-sm'
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className='object-cover absolute inset-0'
      />

      <div
        className={cn(
          'absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300',
          hovered === index ? 'opacity-100' : 'opacity-0'
        )}
      >
        <div className='text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-100'>
          {card.title}
        </div>
      </div>
    </a>
  )
);

Card.displayName = 'Card';
