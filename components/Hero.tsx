'use client';
import Headshot from '@/public/headshot-sketch.jpeg';
import { motion } from 'motion/react';
import Image from 'next/image';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      }}
      className='relative flex flex-col gap-4 items-center justify-center px-16 py-8'
    >
      <div style={{ borderRadius: '40rem', overflow: 'hidden' }}>
        <Image
          src={Headshot}
          width={200}
          alt='Headshot of Ronin Williams-Young'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <div className='text-3xl md:text-7xl font-bold text-zinc-800 dark:text-white text-center'>
          Hi, I&apos;m
        </div>
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
      </div>

      <div className='font-extralight text-base md:text-3xl text-zinc-800 dark:text-neutral-200 py-4'>
        Aspiring Leader and Software Developer
      </div>
      <button className='relative inline-flex h-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
        <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-1 text-md font-medium text-white backdrop-blur-3xl'>
          Learn More About Me
        </span>
      </button>
    </motion.div>
  );
};

export default Hero;
