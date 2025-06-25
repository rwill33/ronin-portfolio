'use client';
import Headshot from '@/public/headshot-sketch.jpeg';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      }}
      className='relative flex flex-col gap-4 items-center justify-center py-8 px-4'
      aria-label='Hero section introducing Ronin Williams-Young'
    >
      <div className='rounded-full overflow-hidden'>
        <Image
          src={Headshot}
          width={200}
          height={200}
          alt='Professional headshot of Ronin Williams-Young'
          className='object-cover'
          priority
          placeholder='blur'
          sizes='(max-width: 768px) 150px, 200px'
        />
      </div>

      <header className='flex flex-col gap-1 text-center'>
        <h1 className='text-3xl md:text-7xl font-bold text-zinc-800 dark:text-white'>
          Hi, I&apos;m
        </h1>
        <TypewriterEffectSmooth
          words={[
            {
              text: 'Ronin',
              className:
                'text-3xl md:text-7xl font-bold text-zinc-800 dark:text-white text-center',
            },
            {
              text: 'Williams-Young',
              className:
                'text-3xl md:text-7xl font-bold text-zinc-800 dark:text-white text-center',
            },
          ]}
        />
      </header>

      <p className='font-extralight text-base md:text-3xl text-zinc-800 dark:text-neutral-200 py-4 text-center max-w-2xl'>
        Aspiring Leader and Software Developer
      </p>

      <Link
        href={'/about'}
        className='group relative inline-flex h-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-300 hover:scale-105'
        aria-label='Learn more about Ronin Williams-Young'
      >
        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
        <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-1 text-md font-medium text-white backdrop-blur-3xl group-hover:bg-slate-900 transition-colors duration-300'>
          Learn More About Me
        </span>
      </Link>
    </motion.section>
  );
};

export default Hero;
