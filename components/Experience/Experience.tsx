import { skills } from '@/constants/skills';
import IntelliwareLogo from '@/public/intelliware-logo.png';
import ITCLogo from '@/public/ivey_tech_club_logo.jpeg';
import WesternLogo from '@/public/western-logo.png';
import WDSLogo from '@/public/western_dev_society_logo.jpeg';
import { SkillKey } from '@/types/skills';
import AboutUniversityContainer from '../ui/about-university-container';
import { StaticTimeline } from '../ui/static-timeline';
import TopSkills from './TopSkills';

export function Experience() {
  const data = [
    {
      title: 'Education',
      content: (
        <div className='flex gap-8 flex-col'>
          <div>
            <AboutUniversityContainer
              image={WesternLogo}
              title='Western University – Ivey Business School — London, ON'
              altText='Western University Logo'
              date='Expected Graduation: Apr 2026'
              description={[
                'Software Engineering & Honours Business Administration, Dual Degree',
                "Awards: Scholarship of Distinction ($3,500), Dean's Honor's List (2021, 2022, 2023)",
                'Courses: Data Structures & Algorithms, Computer Networking, Databases, Operating Systems, Linear Algebra I',
              ]}
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Experience',
      content: (
        <div className='flex gap-8 flex-col'>
          <div>
            <AboutUniversityContainer
              image={IntelliwareLogo}
              title='Bond Brand Loyalty — Toronto, ON'
              altText='Bond Brand Loyalty Logo'
              date='May 2025 – Present'
              description={[]}
            />

            <div className='mt-6 ml-6 space-y-6'>
              <div>
                <h5 className='text-xl font-bold text-white mb-3'>
                  <strong>AI Engineer Intern</strong> | May 2025 – Present
                </h5>
                <p className='text-white text-base font-light mb-3'>
                  Python, OpenAI Models, Google Gemini
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Developed an LLM-powered pipeline to analyze{' '}
                  <strong>23K+ unstructured support chat logs</strong>,
                  uncovering key customer pain points, analyzing emotional
                  sentiment, and delivering actionable strategic insights
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Built an embedding-based NLP pipeline to cluster{' '}
                  <strong>20M+ messy text entries</strong> into 30 clean
                  categories, achieving <strong>0.85 average similarity</strong>{' '}
                  and improving search and analytics usability
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
              description={[]}
            />

            <div className='mt-6 ml-6 space-y-6'>
              <div>
                <h5 className='text-xl font-bold text-white mb-3'>
                  <strong>Software Engineer Intern</strong> | May 2023 – Aug
                  2024
                </h5>
                <p className='text-white text-base font-light mb-3'>
                  React, NestJS, Azure, AWS, Terraform, Agile
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Developed a full-stack web application for a fintech
                  start-up, enabling a <strong>$100K pilot launch</strong> with
                  a Big Five bank
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Led a post-launch client engagement involving frequent
                  client communication and the delivery of{' '}
                  <strong>30+ critical fixes</strong>
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Designed and deployed a cloud-native application on AWS to
                  support large-scale events, including a professional sports
                  league (<strong>71M+ annual attendance</strong>) and a
                  national live sports event (<strong>34K+ attendees</strong>)
                </p>
              </div>

              <div>
                <h5 className='text-xl font-bold text-white mb-3'>
                  <strong>Software Engineer Intern</strong> | May 2022 – Aug
                  2022
                </h5>
                <p className='text-white text-base font-light mb-3'>
                  React, Material UI, NestJS, PostgreSQL, Azure, Agile
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Built a modular React component library, reducing UI
                  development time and complying with{' '}
                  <strong>WCAG 2 standards</strong>
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Developed automated deployment pipelines with caching,
                  cutting release times down to <strong>under 5 minutes</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Leadership',
      content: (
        <div className='flex gap-8 flex-col'>
          <div>
            <AboutUniversityContainer
              image={ITCLogo}
              title='Ivey Tech Club — London, ON'
              altText='ITC Logo'
              date='Nov 2024 – Present'
              description={[]}
            />

            <div className='mt-6 ml-6 space-y-6'>
              <div>
                <h5 className='text-xl font-bold text-white mb-3'>
                  <strong>Co-President</strong> | May 2025 – Present
                </h5>
                <p className='text-white text-base font-light mb-3'>
                  • Defined the club&apos;s strategic vision and priorities to
                  deliver meaningful programs for <strong>200+ members</strong>
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Overseeing operations across{' '}
                  <strong>seven portfolios</strong> and{' '}
                  <strong>16 executives</strong> to ensure timely execution of
                  club initiatives
                </p>
              </div>

              <div>
                <h5 className='text-xl font-bold text-white mb-3'>
                  <strong>Section Rep</strong> | Nov 2024 – Apr 2025
                </h5>
                <p className='text-white text-base font-light mb-3'>
                  • Served as <strong>Section 6 communications lead</strong>,
                  managing outreach and promoting club initiatives to over{' '}
                  <strong>75 students</strong>
                </p>
              </div>
            </div>
          </div>

          <div>
            <AboutUniversityContainer
              image={WDSLogo}
              title="Western Developer's Society — London, ON"
              altText='WDS Logo'
              date='Sep 2022 – May 2023'
              description={[]}
            />

            <div className='mt-6 ml-6 space-y-6'>
              <div>
                <h5 className='text-xl font-bold text-white mb-3'>
                  <strong>Tech Lead</strong> | Sep 2022 – May 2023
                </h5>
                <p className='text-white text-base font-light mb-3'>
                  • Mentored <strong>50 developers</strong>, offering
                  comprehensive technical guidance and ensuring consistent
                  project progress
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Boosted registrations by <strong>27%</strong> by leading the
                  development team and maintenance of the club&apos;s primary
                  website
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Projects',
      content: (
        <div className='flex gap-8 flex-col'>
          <div>
            <div className='space-y-4'>
              <div className='flex gap-4 mb-6'>
                <div className='flex flex-col gap-2'>
                  <h3 className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent'>
                    <strong>Caise</strong>
                  </h3>
                </div>
              </div>
              <div className='space-y-3'>
                <h5 className='text-xl font-bold text-white mb-3'>
                  <strong>AI Web Application</strong> | Dec 2024 – Present
                </h5>
                <p className='text-white text-base font-light mb-3'>
                  React, Next.js, PostgreSQL, Supabase, Stripe, OpenAI
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Developed an <strong>AI web application</strong> using
                  Next.js to assist business students with solving case studies
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Implemented robust <strong>user authentication</strong> via
                  Supabase OAuth and streamlined{' '}
                  <strong>payments integration</strong> using Stripe
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Engineering an <strong>agentic RAG-powered AI</strong> to
                  effectively process and reason over{' '}
                  <strong>50+ documents</strong>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className='space-y-4'>
              <div className='flex gap-4 mb-6'>
                <div className='flex flex-col gap-2'>
                  <h3 className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent'>
                    <strong>Course Outline Manager</strong>
                  </h3>
                </div>
              </div>
              <div className='space-y-3'>
                <h5 className='text-xl font-bold text-white mb-3'>
                  <strong>Multi-Tenant Web Application</strong> | Jan 2023 – Apr
                  2023
                </h5>
                <p className='text-white text-base font-light mb-3'>
                  React, NestJS, Git, Google Cloud Platform
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Created a <strong>multi-tenant web application</strong> for
                  universities to manage the creation and updating of course
                  outlines
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Worked with a <strong>team of 5 developers</strong> in an
                  agile environment, participating in sprints, stand-ups, and
                  code-reviews
                </p>
                <p className='text-white text-base font-light mb-3'>
                  • Implemented <strong>version control</strong> and source code
                  management using Git and GitHub
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Technical Skills',
      content: (
        <div className='flex gap-8 flex-col'>
          <div>
            <h5 className='text-2xl font-bold text-white mb-4'>
              <strong>Programming Languages</strong>
            </h5>
            <div className='grid grid-cols-3 sm:grid-cols-4 gap-4'>
              {[
                SkillKey.typescript,
                SkillKey.javascript,
                SkillKey.python,
                SkillKey.java,
              ].map((key) => {
                const skill = skills[key];
                return (
                  <div
                    key={skill.name}
                    className='flex flex-col items-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group'
                  >
                    <skill.icon
                      className={`text-2xl sm:text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className='mt-2 text-xs sm:text-sm text-white text-center font-medium'>
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h5 className='text-2xl font-bold text-white mb-4'>
              <strong>Web Frameworks</strong>
            </h5>
            <div className='grid grid-cols-3 sm:grid-cols-4 gap-4'>
              {[
                SkillKey.react,
                SkillKey.nextjs,
                SkillKey.nodejs,
                SkillKey.nestjs,
                SkillKey.tailwindcss,
              ].map((key) => {
                const skill = skills[key];
                return (
                  <div
                    key={skill.name}
                    className='flex flex-col items-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group'
                  >
                    <skill.icon
                      className={`text-2xl sm:text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className='mt-2 text-xs sm:text-sm text-white text-center font-medium'>
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h5 className='text-2xl font-bold text-white mb-4'>
              <strong>Databases & Cloud</strong>
            </h5>
            <div className='grid grid-cols-3 sm:grid-cols-4 gap-4'>
              {[
                SkillKey.postgresql,
                SkillKey.docker,
                SkillKey.aws,
                SkillKey.azure,
                SkillKey.googlecloud,
              ].map((key) => {
                const skill = skills[key];
                return (
                  <div
                    key={skill.name}
                    className='flex flex-col items-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group'
                  >
                    <skill.icon
                      className={`text-2xl sm:text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className='mt-2 text-xs sm:text-sm text-white text-center font-medium'>
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h5 className='text-2xl font-bold text-white mb-4'>
              <strong>Developer Tools</strong>
            </h5>
            <div className='grid grid-cols-3 sm:grid-cols-4 gap-4'>
              {[SkillKey.git, SkillKey.terraform, SkillKey.stripe].map(
                (key) => {
                  const skill = skills[key];
                  return (
                    <div
                      key={skill.name}
                      className='flex flex-col items-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group'
                    >
                      <skill.icon
                        className={`text-2xl sm:text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                      <span className='mt-2 text-xs sm:text-sm text-white text-center font-medium'>
                        {skill.name}
                      </span>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          <div>
            <h5 className='text-2xl font-bold text-white mb-4'>
              <strong>Certifications</strong>
            </h5>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div className='flex items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10'>
                <div className='flex items-center gap-3'>
                  <skills.azure.icon
                    className={`text-2xl ${skills.azure.color}`}
                  />
                  <span className='text-white font-medium'>
                    Azure Developer Associate (AZ-204)
                  </span>
                </div>
              </div>
              <div className='flex items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10'>
                <div className='flex items-center gap-3'>
                  <skills.aws.icon className={`text-2xl ${skills.aws.color}`} />
                  <span className='text-white font-medium'>
                    AWS Cloud Practitioner (CLF-C02)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <section
      className='relative max-w-7xl mx-auto'
      aria-labelledby='experience-heading'
    >
      <div className='px-8'>
        <header className='text-center mb-16'>
          <h1
            id='experience-heading'
            className='text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6'
          >
            Experience
          </h1>
          <p className='text-lg lg:text-xl max-w-3xl mx-auto text-white/90 font-light leading-relaxed'>
            Here are my educational background, work experiences, and
            extracurricular activities that have shaped my journey as a software
            developer and business student.
          </p>
        </header>

        <div className='relative'>
          <div className='grid grid-cols-1 gap-8 xl:gap-16 xl:grid-cols-4'>
            <div className='col-span-1 xl:col-span-3'>
              <StaticTimeline data={data} />
            </div>
            <div className='col-span-1'>
              <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 lg:p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-500 sticky top-32 shadow-xl'>
                <TopSkills />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
