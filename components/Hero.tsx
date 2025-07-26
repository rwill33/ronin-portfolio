'use client';
import Headshot from '@/public/sf_pic3.jpeg';
import { motion } from 'motion/react';
import Image from 'next/image';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

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
      className='relative min-h-screen flex flex-col justify-center py-8 pt-24'
      aria-label='Hero section introducing Ronin Williams-Young'
    >
      <div className='flex-1 flex items-center'>
        <div className='max-w-7xl mx-auto w-full'>
          <div className='px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
              {/* Left side - Content */}
              <div className='space-y-6 lg:space-y-8 order-2 lg:order-1'>
                {/* Main heading */}
                <div className='space-y-4'>
                  <div>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight'>
                      Hello, I&apos;m{' '}
                    </h1>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
                      <span className='text-indigo-700 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] dark:bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]'>
                        Ronin Williams‑Young
                      </span>
                    </h1>
                  </div>

                  <p className='text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed'>
                    An experienced Software Engineering and Business student
                    with a passion for creating innovative digital solutions.
                  </p>
                </div>

                {/* Action buttons and social links */}
                <div className='flex flex-col gap-6'>
                  {/* Main action buttons */}
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
                    <a
                      href='/Ronin_Williams_Young_Resume.pdf'
                      download='Ronin_Williams_Young_Resume.pdf'
                      className='px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 text-lg backdrop-blur-sm text-center'
                    >
                      Download Resume
                    </a>
                  </div>

                  {/* Social contact buttons */}
                  <div className='flex gap-4 justify-start sm:justify-start'>
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
                    <a
                      href='mailto:ronin@williams-young.com'
                      className='p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm'
                      aria-label='Send email to Ronin'
                    >
                      <FaEnvelope className='text-xl text-green-400' />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right side - Visual element */}
              <div className='relative order-1 lg:order-2 mb-8 lg:mb-0 mt-8 lg:mt-0'>
                <div className='relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto'>
                  {/* Main image with effects */}
                  <div className='relative'>
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl'></div>

                    <div className='relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto'>
                      <Image
                        src={Headshot}
                        fill
                        alt='Professional headshot of Ronin Williams-Young'
                        className='object-cover rounded-2xl'
                        priority
                        placeholder='blur'
                        sizes='(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='flex-shrink-0 pt-4 xl:pt-12 pb-4 lg:pb-8'>
        <div className='text-center'>
          <div className='text-white/60 text-xs sm:text-sm mb-2'>
            Scroll for more
          </div>
          <div className='w-px h-6 sm:h-8 bg-gradient-to-b from-white/60 to-transparent mx-auto'></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
