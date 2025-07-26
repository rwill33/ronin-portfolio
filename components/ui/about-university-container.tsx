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
    <div className='space-y-4'>
      <div className='flex gap-4 mb-6'>
        <div className='hidden sm:block relative shrink-0 h-16 w-16 sm:w-20 sm:h-20'>
          <Image
            src={image}
            alt={altText}
            layout='fill'
            className='rounded-xl object-cover border border-white/20 shadow-lg'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent'>
            {title}
          </h3>
          <p className='font-semibold text-white/80 text-sm sm:text-base'>
            {date}
          </p>
        </div>
      </div>
      <div className='space-y-3'>
        {description.map((desc, index) => (
          <p
            key={index}
            className='text-white/90 text-sm sm:text-base font-light leading-relaxed'
          >
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutUniversityContainer;
