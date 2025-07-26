'use client';
import Headshot from '@/public/headshot-sketch.jpeg';
import { motion } from 'motion/react';
import Image from 'next/image';
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
        <h1 className='text-3xl md:text-7xl font-bold text-white dark:text-white'>
          Hi, I&apos;m
        </h1>
        <TypewriterEffectSmooth
          words={[
            {
              text: 'Ronin',
              className:
                'text-3xl md:text-7xl font-bold text-white dark:text-white text-center',
            },
            {
              text: 'Williams-Young',
              className:
                'text-3xl md:text-7xl font-bold text-white dark:text-white text-center',
            },
          ]}
        />
      </header>

      <p className='font-extralight text-base md:text-3xl text-white dark:text-neutral-200 py-4 text-center max-w-2xl'>
        Aspiring Leader and Software Developer
      </p>

      <button
        onClick={() => {
          document
            .getElementById('about')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
        className='mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg'
        aria-label='Learn more about Ronin Williams-Young'
      >
        About Me
      </button>
    </motion.section>
  );
};

export default Hero;
