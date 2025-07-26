import IntelliwareLogo from '@/public/intelliware-logo.png';
import AboutUniversityContainer from '../layout/ExperienceContainer';
import Position from '../layout/Position';

const WorkExperience = () => {
  return (
    <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 group shadow-xl'>
      {/* Section Header */}
      <div className='mb-6 pb-4 border-b border-white/20'>
        <h3 className='text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent'>
          Professional Experience
        </h3>
      </div>

      {/* Section Content */}
      <div className='space-y-6'>
        <div className='flex gap-8 flex-col'>
          <div>
            <AboutUniversityContainer
              image={IntelliwareLogo}
              title='Bond Brand Loyalty — Toronto, ON'
              altText='Bond Brand Loyalty Logo'
              date='May 2025 – Present'
            />

            <div className='mt-6 ml-6 space-y-6'>
              <div>
                <h5 className='text-xl font-bold text-white mb-3'>
                  <span className='font-bold'>AI Engineer Intern</span> | May
                  2025 – Present
                </h5>
                <p className='text-white text-base font-light mb-3'>
                  Python, OpenAI Models, Google Gemini
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Developed an LLM-powered pipeline to analyze{' '}
                  <span className='font-bold'>
                    23K+ unstructured support chat logs
                  </span>
                  , uncovering key customer pain points, analyzing emotional
                  sentiment, and delivering actionable strategic insights
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Built an embedding-based NLP pipeline to cluster{' '}
                  <span className='font-bold'>20M+ messy text entries</span>{' '}
                  into 30 clean categories, achieving{' '}
                  <span className='font-bold'>0.85 average similarity</span> and
                  improving search and analytics usability
                </p>
              </div>
            </div>
          </div>

          <div>
            <AboutUniversityContainer
              image={IntelliwareLogo}
              title='Electric Mind (Formerly Intelliware) — Toronto, ON'
              altText='Electric Mind Logo'
              date='May 2022 – Aug 2022 & May 2023 – Aug 2024'
            >
              <Position
                title='Software Engineer Intern'
                date='May 2023 – Aug 2024'
                skills={[
                  'React',
                  'NestJS',
                  'PostgreSQL',
                  'Azure',
                  'AWS',
                  'Terraform',
                  'Agile',
                ]}
              >
                <p className='text-white text-base font-light mb-3'>
                  • Developed a full-stack web application for a fintech
                  start-up, enabling a{' '}
                  <span className='font-bold'>$100K pilot launch</span> with a
                  Big Five bank
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Led a post-launch client engagement involving frequent
                  client communication and the delivery of{' '}
                  <span className='font-bold'>30+ critical fixes</span>
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Designed and deployed a cloud-native application on AWS to
                  support large-scale events, including a professional sports
                  league (
                  <span className='font-bold'>71M+ annual attendance</span>) and
                  a national live sports event (
                  <span className='font-bold'>34K+ attendees</span>)
                </p>
              </Position>
              <Position
                title='Software Engineer Intern'
                date='May 2022 – Aug 2022'
                skills={[
                  'React',
                  'NestJS',
                  'PostgreSQL',
                  'Azure',
                  'AWS',
                  'Terraform',
                  'Agile',
                ]}
              >
                <p className='text-white text-base font-light mb-3'>
                  • Built a modular React component library, reducing UI
                  development time and complying with{' '}
                  <span className='font-bold'>WCAG 2 standards</span>
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Developed automated deployment pipelines with caching,
                  cutting release times down to{' '}
                  <span className='font-bold'>under 5 minutes</span>
                </p>
              </Position>
            </AboutUniversityContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
