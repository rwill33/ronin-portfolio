import WesternLogo from '@/public/western-logo.png';
import AboutUniversityContainer from '../layout/ExperienceContainer';

const Education = () => {
  return (
    <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 group shadow-xl'>
      {/* Section Header */}
      <div className='mb-6 pb-4 border-b border-white/20'>
        <h3 className='text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent'>
          Education
        </h3>
      </div>

      {/* Section Content */}
      <div className='space-y-6'>
        <div className='flex gap-8 flex-col'>
          <div>
            <AboutUniversityContainer
              image={WesternLogo}
              title='Western University – Ivey Business School — London, ON'
              altText='Western University Logo'
              date='Expected Graduation: Apr 2026'
            >
              <p className='text-white text-base font-light mb-3'>
                Software Engineering & Honours Business Administration;
                Dual-Degree
              </p>
              <p className='text-white text-base font-light mb-3'>
                <span className='font-bold'>Awards:</span> Scholarship of
                Distinction ($3,500), Dean&apos;s Honor&apos;s List (2021, 2022,
                2023)
              </p>
              <p className='text-white text-base font-light mb-3'>
                <span className='font-bold'>Courses:</span> Data Structures &
                Algorithms, Computer Networking, Databases, Operating Systems,
                Linear Algebra I
              </p>
            </AboutUniversityContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
