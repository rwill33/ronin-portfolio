import Image, { StaticImageData } from 'next/image';

interface AboutUniversityContainerProps {
  image: StaticImageData;
  altText: string;
  title: string;
  date: string;
  description: string[];
}

const AboutUniversityContainer = ({
  image,
  altText,
  title,
  date,
  description,
}: AboutUniversityContainerProps) => {
  return (
    <div>
      <div className='flex gap-4 mb-12'>
        <div className='hidden sm:block relative shrink-0 h-12 w-12 sm:w-24 sm:h-24 justify-self-start'>
          <Image
            src={image}
            alt={altText}
            layout='fill'
            className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='col-span-2 text-lg sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100'>
            {title}
          </h3>
          <p className=' font-bold text-neutral-800 dark:text-neutral-400 text-md'>
            {date}
          </p>
        </div>
      </div>
      {description.map((desc, index) => (
        <p
          key={index}
          className='text-neutral-800 dark:text-neutral-200 text-md font-normal mb-2'
        >
          {desc}
        </p>
      ))}
    </div>
  );
};

export default AboutUniversityContainer;
