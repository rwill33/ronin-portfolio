'use client';
import Headshot from '@/public/headshot-sketch.jpeg';
import { motion } from 'motion/react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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
      className='relative min-h-screen flex items-center justify-center py-8 px-4'
      aria-label='Hero section introducing Ronin Williams-Young'
    >
      <div className='max-w-7xl mx-auto w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left side - Content */}
          <div className='space-y-8'>
            {/* Main heading */}
            <div className='space-y-4'>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight'>
                Hello, I&apos;m{' '}
                <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent'>
                  Ronin Williams-Young
                </span>
              </h1>

              <p className='text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed'>
                An experienced Software Engineering and Business student with a
                passion for creating innovative digital solutions.
              </p>
            </div>

            {/* Action buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <button
                onClick={() => {
                  document
                    .getElementById('experience')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className='px-8 py-4 bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-lg backdrop-blur-sm'
              >
                View My Work
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className='px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 text-lg backdrop-blur-sm'
              >
                See Projects
              </button>
            </div>

            {/* Social media links only */}
            <div className='flex gap-4 pt-8'>
              <a
                href='https://www.linkedin.com/in/ronin-williams-young/'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm'
                aria-label="Visit Ronin's LinkedIn profile"
              >
                <FaLinkedin className='text-xl text-blue-400' />
              </a>
              <a
                href='https://github.com/rwill33'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm'
                aria-label="Visit Ronin's GitHub profile"
              >
                <FaGithub className='text-xl text-white' />
              </a>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className='relative lg:order-last order-first'>
            <div className='relative w-full max-w-lg mx-auto'>
              {/* Main image with effects */}
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl'></div>
                <div className='relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl'>
                  <div className='relative w-64 h-64 mx-auto'>
                    <Image
                      src={Headshot}
                      fill
                      alt='Professional headshot of Ronin Williams-Young'
                      className='object-cover rounded-2xl'
                      priority
                      placeholder='blur'
                      sizes='256px'
                    />
                    {/* Decorative elements */}
                    <div className='absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-80'></div>
                    <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60'></div>
                    <div className='absolute top-1/2 -right-8 w-4 h-4 bg-cyan-400 rounded-full opacity-70'></div>
                  </div>

                  {/* Floating cards */}
                  <div className='absolute -top-6 -left-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 shadow-lg'>
                    <div className='text-white text-sm font-medium'>
                      Software Engineer
                    </div>
                  </div>

                  <div className='absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 shadow-lg'>
                    <div className='text-white text-sm font-medium'>
                      Business Student
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact info underneath the picture */}
              <div className='mt-8 text-center space-y-4'>
                <div className='text-white/70 space-y-2'>
                  <p className='text-lg font-medium'>
                    Toronto, Ontario, Canada
                  </p>
                  <p>
                    <a
                      href='mailto:ronin@williams-young.com'
                      className='text-blue-200 hover:text-blue-100 transition-colors duration-200'
                    >
                      ronin@williams-young.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Background pattern */}
              <div className='absolute inset-0 -z-10'>
                <div className='absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full'></div>
                <div className='absolute bottom-20 right-10 w-24 h-24 border border-white/10 rounded-full'></div>
                <div className='absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full'></div>
                <div className='absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
        <div className='text-white/60 text-sm mb-2'>Scroll to discover</div>
        <div className='w-px h-8 bg-gradient-to-b from-white/60 to-transparent mx-auto'></div>
      </div>
    </motion.section>
  );
};

export default Hero;
