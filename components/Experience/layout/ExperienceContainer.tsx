import Image, { StaticImageData } from 'next/image';

interface ExperienceContainerProps extends React.PropsWithChildren {
  image: StaticImageData;
  altText: string;
  title: string;
  date: string;
}

const ExperienceContainer = ({
  image,
  altText,
  title,
  date,
  children,
}: ExperienceContainerProps) => {
  return (
    <div className='space-y-4'>
      <div className='flex gap-4 mb-6'>
        <div className='hidden sm:block relative shrink-0 h-16 w-16 sm:w-20 sm:h-20'>
          <Image
            src={image}
            alt={altText}
            fill
            className='rounded-xl object-cover border border-white/20 shadow-lg'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-xl sm:text-2xl font-bold text-white'>{title}</h3>
          <p className='font-semibold text-white text-sm sm:text-base'>
            {date}
          </p>
        </div>
      </div>
      <div className='space-y-3'>
        <div className='mt-6 ml-6 space-y-6'>{children}</div>
      </div>
    </div>
  );
};

export default ExperienceContainer;
