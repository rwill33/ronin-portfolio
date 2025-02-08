import Headshot from '@/public/1723690818171.jpeg';
import UltimateFrisbee from '@/public/ultimate-frisbee.jpg';
import WesternUniversity from '@/public/western.jpg';
import Image from 'next/image';
import { Timeline } from './ui/timeline';

export function TimelineDemo() {
  const data = [
    {
      title: '2020',
      content: (
        <div>
          <h3 className='text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8'>
            Engineering at the University of Western Ontario
          </h3>
          <p className='text-neutral-800 dark:text-neutral-200 text-md font-normal mb-4'>
            Began my Engineering journey at Western University in London,
            Ontario.
          </p>
          <Image
            src={WesternUniversity}
            alt='startup template'
            width={500}
            height={500}
            className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
          />
        </div>
      ),
    },
    {
      title: 'Summer 2022',
      content: (
        <div>
          <h3 className='text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8'>
            Software Developer Intern at Intelliware Development
          </h3>
          <p className='text-neutral-800 dark:text-neutral-200 text-md font-normal mb-2'>
            Started at Intelliware as a Software Developer Intern in Toronto. I
            was a part of a small team that worked on creating an enterprise
            software for a client in the real estate industry.
          </p>
          <p className='text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8'>
            Also joined the company Ultimate Frisbee team!
          </p>
          <Image
            src={UltimateFrisbee}
            alt='hero template'
            width={500}
            height={500}
            className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
          />
        </div>
      ),
    },
    {
      title: 'Changelog',
      content: (
        <div>
          <p className='text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4'>
            Deployed 5 new components on Aceternity today
          </p>
          <div className='mb-8'>
            <div className='flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm'>
              ✅ Card grid component
            </div>
            <div className='flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm'>
              ✅ Startup template Aceternity
            </div>
            <div className='flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm'>
              ✅ Random file upload lol
            </div>
            <div className='flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm'>
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className='flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm'>
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <Image
            src={UltimateFrisbee}
            alt='hero template'
            width={500}
            height={500}
            className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
          />
        </div>
      ),
    },
  ];
  return (
    <div className='flex flex-1'>
      <div className='grid grid-cols-4'>
        <div className='col-span-1'>
          <div className='flex flex-col items-start px-16 gap-4'>
            <Image
              width={250}
              height={250}
              src={Headshot}
              alt='About Me'
              className='rounded-md mb-4'
            />
            <h1 className='text-2xl font-bold text-neutral-900 dark:text-neutral-100'>
              Ronin Williams-Young
            </h1>
            <p className='text-md text-neutral-800 dark:text-neutral-200'>
              Hello! I&apos;m a passionate developer dedicated to crafting
              engaging web experiences. I thrive on blending creativity with
              cutting-edge technology, and my journey is all about continuous
              learning and innovation.
            </p>
          </div>
        </div>
        <div className='col-span-3 flex flex-1 overflow-hidden'>
          <div className='flex-1 overflow-y-scroll px-16 pb-8'>
            <Timeline data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
