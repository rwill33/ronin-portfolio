import Headshot from '@/public/1723690818171.jpeg';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import Image from 'next/image';

export function About() {
  return (
    <div className='relative '>
      <div className='grid grid-cols-4 p-12'>
        <div className='col-span-1'>
          <div className='flex flex-col items-center gap-4'>
            <Image
              width={250}
              height={250}
              src={Headshot}
              alt='About Me'
              className='rounded-md mb-4'
            />
            <div className='flex flex-col items-center gap-2'>
              <h2 className='text-xl lg:text-2xl font-bold text-neutral-800 dark:text-neutral-100'>
                Ronin Williams-Young
              </h2>
              <p className='text-base text-neutral-600 dark:text-neutral-300'>
                Toronto, Ontario, Canada
              </p>
              <p className='text-base text-neutral-600 dark:text-neutral-300'>
                <a
                  href='mailto:ronin@williams-young.com'
                  className='hover:underline'
                >
                  ronin@williams-young.com
                </a>{' '}
                | (647) 570-2191
              </p>
            </div>
            <div className='flex flex-col items-center mt-4'>
              {/* <h4 className='text-xl font-semibold text-neutral-500 dark:text-neutral-100'>
                Connect with Me
              </h4> */}
              <div className='flex gap-4 mt-2'>
                <a
                  href='https://www.linkedin.com/in/ronin-williams-young/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <LinkedinIcon className='text-4xl text-blue-600 dark:text-blue-400' />
                </a>
                <a
                  href='https://github.com/rwill33'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GithubIcon className='text-4xl text-gray-800 dark:text-gray-100' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-3 px-16'>
          <h3 className='hidden md:block text-xl mb-4 md:text-5xl font-bold text-neutral-500 dark:text-neutral-100'>
            About Me
          </h3>
          <div className='w-full border-t-2 border-neutral-100 mb-8' />
          <p className='text-lg text-neutral-800 dark:text-neutral-200 mb-4'>
            Hi, I&apos;m Ronin!
          </p>
          <p className='text-lg text-neutral-800 dark:text-neutral-200 mb-4'>
            I am currently in my 4th year of studies as a student in Software
            Engineering and Ivey HBA at Western University. I&apos;ve also had
            the chance to apply my skills during a 4-month and 16-month
            internship, where I worked on full-stack development projects using
            tools like React, Java, SQL, and AWS.
          </p>
          <p className='text-lg text-neutral-800 dark:text-neutral-200 mb-4'>
            From a young age, I was captivated by the idea of building things.
            Whether it was assembling LEGO sets without instructions or
            tinkering with computers, I loved figuring out how things worked and
            how I could make them better. This curiosity eventually led me to
            programming, where I enjoyed the challenge of solving complex
            problems and the satisfaction of seeing my code come to life. That
            fascination sparked my decision to pursue software engineering where
            I have learned to create optimized, secure, and scalable solutions.
          </p>
          <p className='text-lg text-neutral-800 dark:text-neutral-200 mb-4'>
            Throughout my software development journey, I became increasingly
            interested in the intersection of technology and business,
            particularly how businesses can leverage technology to drive growth
            and solve problems. That curiosity led me to the Ivey Business
            School, where I am now pursuing a dual degree in business and
            software engineering. My goal is to combine the technical expertise
            I&apos;ve gained with the strategic thinking and clear communication
            skills I am developing to create solutions that bridge the gap
            between technology and business.
          </p>
          <p className='text-lg text-neutral-800 dark:text-neutral-200 mb-4'>
            Looking ahead, I&apos;m excited to build a career where I can create
            innovative tools, systems, and strategies that help organizations
            solve complex challenges and grow in a rapidly evolving digital
            world. If this resonates with you, let&apos;s connect—I&apos;d love
            to share more about my journey and hear about yours!
          </p>
          {/* <p className='text-lg text-neutral-800 dark:text-neutral-200 mb-4'>
            Outside of my career, I also enjoy making music and playing sports.
            I love to play drums, guitar and piano, as well as produce music,
            where I have over 14,000 streams on SoundCloud. I also enjoy playing
            softball at my local park where I volunteered for many years and
            volleyball at Ashbridges bay where I have a team with friends that I
            organize.
          </p> */}
        </div>
      </div>
    </div>
  );
}
