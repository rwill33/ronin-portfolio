import IntelliwareLogo from '@/public/intelliware-logo.png';
import IntelliwareWork from '@/public/intelliware-work.jpg';
import IveyLogo from '@/public/ivey-logo.png';
import ITCLogo from '@/public/ivey_tech_club_logo.jpeg';
import UltimateFrisbee from '@/public/ultimate-frisbee.jpg';
import WesternLogo from '@/public/western-logo.png';
import WDSLogo from '@/public/western_dev_society_logo.jpeg';
import Image from 'next/image';
import AboutUniversityContainer from '../ui/about-university-container';
import { StaticTimeline } from '../ui/static-timeline';
import TopSkills from './TopSkills';

export function Experience() {
  const data = [
    {
      title: 'Education',
      content: (
        <div className='flex gap-8 flex-col'>
          <AboutUniversityContainer
            image={WesternLogo}
            title='Software Engineering at the University of Western Ontario'
            altText='Western Engineering Logo'
            date='2020 - Apr 2026'
            description={[
              `Awards: Scholarship of Distinction ($3,500), Dean's Honor's List (2021, 2022, 2023)`,
              `Courses: Data Structures & Algorithms, Computer Networking, Databases, Operating Systems, Linear Algebra I`,
              `Activities and Societies: Western Engineering Competition (WEC), Western Developer's Society`,
            ]}
          />
          <AboutUniversityContainer
            image={IveyLogo}
            title='HBA at Ivey Business School'
            altText='Ivey Business School Logo'
            date='2024 - Apr 2026'
            description={[
              `Honours Business Administration, Dual Degree`,
              `Activities and Societies: Ivey Tech Club (Co-President), Western Developer's Society`,
            ]}
          />
        </div>
      ),
    },
    {
      title: 'Work Experience',
      content: (
        <div>
          <AboutUniversityContainer
            image={IntelliwareLogo}
            title='AI Engineer Intern at Bond Brand Loyalty'
            altText='Bond Brand Loyalty Logo'
            date='May 2025 - Present'
            description={[
              'Python, OpenAI Models, Google Gemini',
              'Developed an LLM-powered pipeline to analyze 23K+ unstructured support chat logs, uncovering key customer pain points, analyzing emotional sentiment, and delivering actionable strategic insights',
              'Built an embedding-based NLP pipeline to cluster 20M+ messy text entries into 30 clean categories, achieving 0.85 average similarity and improving search and analytics usability',
            ]}
          />
          <div className='mt-8'>
            <AboutUniversityContainer
              image={IntelliwareLogo}
              title='Software Engineer Intern at Electric Mind (Formerly Intelliware)'
              altText='Intelliware Logo'
              date='May 2023 - Aug 2024 & May 2022 - Aug 2022'
              description={[
                'React, NestJS, Azure, AWS, Terraform, PostgreSQL, Material UI, Agile',
              ]}
            />
          </div>
          <h5 className='text-2xl font-bold text-white dark:text-neutral-100 mb-8 mt-8'>
            16 Month Internship (May 2023 - Aug 2024)
          </h5>
          <p className='text-white/95 dark:text-neutral-200 text-md font-normal mb-4'>
            Developed a full-stack web application for a fintech start-up,
            enabling a $100K pilot launch with a Big Five bank. Led a
            post-launch client engagement involving frequent client
            communication and the delivery of 30+ critical fixes.
          </p>
          <p className='text-white/95 dark:text-neutral-200 text-md font-normal mb-4'>
            Designed and deployed a cloud-native application on AWS to support
            large-scale events, including a professional sports league (71M+
            annual attendance) and a national live sports event (34K+
            attendees).
          </p>
          <h5 className='text-2xl font-bold text-white dark:text-neutral-100 mb-8 mt-8'>
            4 Month Internship (May 2022 - Aug 2022)
          </h5>
          <p className='text-white/95 dark:text-neutral-200 text-md font-normal mb-4'>
            Built a modular React component library, reducing UI development
            time and complying with WCAG 2 standards. Developed automated
            deployment pipelines with caching, cutting release times down to
            under 5 minutes.
          </p>
          <p className='text-white/95 dark:text-neutral-200 text-md font-normal mb-4'>
            I initially joined Intelliware as a Software Developer Intern during
            the summer of 2022. As part of a small team, I worked on developing
            enterprise software for a client in the real estate industry. I
            quickly gained a strong foundation in web development and the
            software development lifecycle while working with React, NestJS, and
            PostgreSQL. I also learned how to work in an Agile environment,
            collaborating with team members to deliver high-quality software
            efficiently.
          </p>
          <p className='text-white/95 dark:text-neutral-200 text-md font-normal mt-8 mb-8'>
            Also joined the Ultimate Frisbee team!
          </p>
          <div className='grid grid-cols-2 gap-4 mb-8'>
            <Image
              src={IntelliwareWork}
              alt='Work at Intelliware'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <Image
              src={UltimateFrisbee}
              alt='hero template'
              width={500}
              height={500}
              className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
          <p className='text-white/95 dark:text-neutral-200 text-md font-normal mb-4'>
            After completing my third year of software engineering, I decided to
            return to Intelliware for a 16-month internship. During this term, I
            worked on 2 main projects; a fintech application for a client
            launching a startup and a web adaptation of a mobile application for
            a client in the sports and entertainment industry.
          </p>
          <p className='text-neutral-800 dark:text-neutral-200 text-md font-normal mb-4'>
            My role on the fintech project was to develop a web application that
            would help financial advisors and their clients to manage their
            charitable foundations. I was the sole developer at the start of the
            project, leading the initial setup, including choosing the tech
            stack, configuring the development environment, and establishing
            best practices. I worked closely with the client to gather technical
            requirements and conducted research to assess which components could
            be procured and which should be developed in-house. I developed the
            frontend using React, Vite, and Material UI, and the backend using
            NestJS, Prisma and PostgreSQL. I also integrated the application
            with third-party APIs for payment processing (Stripe),
            authentication and authorization (Auth0), and document management
            (Azure).
          </p>
        </div>
      ),
    },
    {
      title: 'Leadership & Extra Curriculars',
      content: (
        <div className='flex gap-8 flex-col'>
          <AboutUniversityContainer
            image={ITCLogo}
            title='Co-President for the Ivey Tech Club'
            altText='ITC Logo'
            date='May 2025 - Present'
            description={[
              "Defined the club's strategic vision and priorities to deliver meaningful programs for 200+ members",
              'Overseeing operations across seven portfolios and 16 executives to ensure timely execution of club initiatives',
            ]}
          />
          <AboutUniversityContainer
            image={ITCLogo}
            title='Section Rep for the Ivey Tech Club'
            altText='ITC Logo'
            date='Nov 2024 - Apr 2025'
            description={[
              'Served as Section 6 communications lead, managing outreach and promoting club initiatives to over 75 students',
            ]}
          />
          <AboutUniversityContainer
            image={WDSLogo}
            title='Tech Lead for the Western Developer Society'
            altText='WDS Logo'
            date='Sep 2022 - May 2023'
            description={[
              `Mentored 50 developers, offering comprehensive technical guidance and ensuring consistent project progress`,
              `Boosted registrations by 27% by leading the development team and maintenance of the club's primary website`,
              `As a Tech Lead, I supervised the development of all pro-bono web development projects across the Western Developers Society. I taught various tools and frameworks such as git, css, and react, providing developers with a solid web development foundation. From 1-on-1 mentoring to hosting club-wide educational workshops, I empowered developers throughout the club to meaningfully contribute to client projects.`,
            ]}
          />
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
