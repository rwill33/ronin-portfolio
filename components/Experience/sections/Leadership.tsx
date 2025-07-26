import ITCLogo from '@/public/ivey_tech_club_logo.jpeg';
import WDSLogo from '@/public/western_dev_society_logo.jpeg';
import AboutUniversityContainer from '../layout/ExperienceContainer';
import Position from '../layout/Position';

const Leadership = () => {
  return (
    <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 group shadow-xl'>
      {/* Section Header */}
      <div className='mb-6 pb-4 border-b border-white/20'>
        <h3 className='text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent'>
          Leadership Experience
        </h3>
      </div>

      {/* Section Content */}
      <div className='space-y-6'>
        <div className='flex gap-8 flex-col'>
          <div>
            <AboutUniversityContainer
              image={ITCLogo}
              title='Ivey Tech Club — London, ON'
              altText='ITC Logo'
              date='Nov 2024 – Present'
            >
              <Position
                title='Co-President'
                date='May 2025 – Present'
                skills={['Leadership', 'Strategic Planning']}
              >
                <p className='text-white text-base font-light mb-3'>
                  • Defined the club&apos;s strategic vision and priorities to
                  deliver meaningful programs for{' '}
                  <span className='font-bold'>200+ members</span>
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Overseeing operations across{' '}
                  <span className='font-bold'>seven portfolios</span> and{' '}
                  <span className='font-bold'>16 executives</span> to ensure
                  timely execution of club initiatives
                </p>
              </Position>
              <Position
                title='Co-President'
                date='May 2025 – Present'
                skills={['Leadership', 'Communication']}
              >
                <p className='text-white text-base font-light mb-3'>
                  • Served as{' '}
                  <span className='font-bold'>
                    Section 6 communications lead
                  </span>
                  , managing outreach and promoting club initiatives to over{' '}
                  <span className='font-bold'>75 students</span>
                </p>
              </Position>
            </AboutUniversityContainer>
          </div>

          <div>
            <AboutUniversityContainer
              image={WDSLogo}
              title="Western Developer's Society — London, ON"
              altText='WDS Logo'
              date='Sep 2022 – May 2023'
            >
              <Position
                title='Tech Lead'
                date='Sep 2022 – May 2023'
                skills={['React', 'Next.js', 'TypeScript', 'Tailwind CSS']}
              >
                <p className='text-white text-base font-light mb-3'>
                  • Mentored <span className='font-bold'>50 developers</span>,
                  offering comprehensive technical guidance and ensuring
                  consistent project progress
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Boosted registrations by{' '}
                  <span className='font-bold'>27%</span> by leading the
                  development team and maintenance of the club&apos;s primary
                  website
                </p>
              </Position>
            </AboutUniversityContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
