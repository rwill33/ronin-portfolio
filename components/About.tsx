import Headshot from '@/public/1723690818171.jpeg';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function About() {
  return (
    <section
      className='relative max-w-7xl mx-auto'
      aria-labelledby='about-heading'
    >
      <div className='px-8'>
        <div className='grid gap-y-8 grid-cols-1 md:grid-cols-4'>
          <aside className='col-span-1'>
            <div className='flex flex-col items-center gap-4'>
              <div className='relative w-full max-w-32 sm:max-w-64 aspect-square rounded-md mb-4'>
                <Image
                  src={Headshot}
                  fill
                  alt='Professional photo of Ronin Williams-Young'
                  className='rounded-md object-cover'
                  sizes='(max-width: 640px) 128px, 256px'
                  placeholder='blur'
                />
              </div>

              <div className='flex flex-col items-center gap-2'>
                <h2 className='text-2xl md:text-xl lg:text-2xl font-bold text-neutral-800 dark:text-neutral-100'>
                  Ronin Williams-Young
                </h2>
                <address className='text-base text-neutral-600 dark:text-neutral-300 not-italic'>
                  <p>Toronto, Ontario, Canada</p>
                  <p>
                    <a
                      href='mailto:ronin@williams-young.com'
                      className='hover:underline focus:underline focus:outline-none'
                      aria-label='Send email to Ronin Williams-Young'
                    >
                      ronin@williams-young.com
                    </a>
                  </p>
                  <p>
                    <a
                      href='tel:+16475702191'
                      className='hover:underline focus:underline focus:outline-none'
                      aria-label='Call Ronin Williams-Young'
                    >
                      (647) 570-2191
                    </a>
                  </p>
                </address>
                <nav
                  className='flex gap-4 mt-2'
                  aria-label='Social media links'
                >
                  <a
                    href='https://www.linkedin.com/in/ronin-williams-young/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:scale-110 transition-transform duration-200 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded'
                    aria-label="Visit Ronin's LinkedIn profile"
                  >
                    <FaLinkedin className='text-4xl text-blue-600 dark:text-blue-400' />
                  </a>
                  <a
                    href='https://github.com/rwill33'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:scale-110 transition-transform duration-200 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded'
                    aria-label="Visit Ronin's GitHub profile"
                  >
                    <FaGithub className='text-4xl text-gray-800 dark:text-gray-100' />
                  </a>
                </nav>
              </div>
            </div>
          </aside>

          <main className='col-span-3 sm:px-16'>
            <header>
              <h1
                id='about-heading'
                className='text-4xl md:text-5xl lg:leading-tight mx-auto tracking-tight text-black font-bold dark:text-white'
              >
                About Me
              </h1>
              <div
                className='w-full border-t-2 border-neutral-900 dark:border-neutral-100 mb-8'
                role='separator'
              />
            </header>

            <article className='prose prose-lg prose-neutral dark:prose-invert max-w-none'>
              <p className='text-lg text-neutral-800 dark:text-neutral-200 mb-4'>
                Hi, I&apos;m Ronin!
              </p>
              <p className='text-lg text-neutral-800 dark:text-neutral-200 mb-4'>
                I am currently in my 4th year of studies as a student in
                Software Engineering and Ivey HBA at Western University.
                I&apos;ve also had the chance to apply my skills during a
                4-month and 16-month internship, where I worked on full-stack
                development projects using tools like React, Java, SQL, and AWS.
              </p>
              <p className='text-lg text-neutral-800 dark:text-neutral-200 mb-4'>
                From a young age, I was captivated by the idea of building
                things. Whether it was assembling LEGO sets without instructions
                or tinkering with computers, I loved figuring out how things
                worked and how I could make them better. This curiosity
                eventually led me to programming, where I enjoyed the challenge
                of solving complex problems and the satisfaction of seeing my
                code come to life. That fascination sparked my decision to
                pursue software engineering where I have learned to create
                optimized, secure, and scalable solutions.
              </p>
              <p className='text-lg text-neutral-800 dark:text-neutral-200 mb-4'>
                Throughout my software development journey, I became
                increasingly interested in the intersection of technology and
                business, particularly how businesses can leverage technology to
                drive growth and solve problems. That curiosity led me to the
                Ivey Business School, where I am now pursuing a dual degree in
                business and software engineering. My goal is to combine the
                technical expertise I&apos;ve gained with the strategic thinking
                and clear communication skills I am developing to create
                solutions that bridge the gap between technology and business.
              </p>
              <p className='text-lg text-neutral-800 dark:text-neutral-200 mb-4'>
                Looking ahead, I&apos;m excited to build a career where I can
                create innovative tools, systems, and strategies that help
                organizations solve complex challenges and grow in a rapidly
                evolving digital world. If this resonates with you, let&apos;s
                connect—I&apos;d love to share more about my journey and hear
                about yours!
              </p>
            </article>
          </main>
        </div>
      </div>
    </section>
  );
}
