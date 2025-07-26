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
            date='2020 - Present'
            description={[
              `Awards: Western Scholarship of Distinction, Dean's Honour List (2020-2023)`,
              `Activities and Societies: Western Engineering Competition (WEC), Western Developer's Society`,
            ]}
          />
          <AboutUniversityContainer
            image={IveyLogo}
            title='HBA at Ivey Business School'
            altText='Ivey Business School Logo'
            date='2024 - Present'
            description={[
              `Activities and Societies: Western Engineering Competition (WEC), Western Developer's Society`,
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
            title='Software Developer Intern at Electric Mind (Previously Intelliware)'
            altText='Intelliware Logo'
            date='May 2022 - Aug 2022 & May 2023 - Aug 2024'
            description={[]}
          />
          <h5 className='text-2xl font-bold text-white dark:text-neutral-100 mb-8'>
            4 Month Internship
          </h5>
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
          <p className='text-white/95 dark:text-neutral-200 text-md font-normal mb-4'>
            Early on, I focused on building frontend screens and components, and
            later, I transitioned to working on the backend API. I adapted the
            Material UI component library and built out most of the frontend
            screens, ensuring a consistent and reusable design system. By
            structuring the library for reusability, I accelerated the
            development of new pages, improving efficiency as the project
            progressed. Additionally, I integrated these components with backend
            CRUD operations using GraphQL, streamlining data retrieval and
            updates.
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
          <h5 className='text-2xl font-bold text-white dark:text-neutral-100 mb-8'>
            16 Month Internship
          </h5>
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
      title: 'Extra Curriculars',
      content: (
        <div className='flex gap-8 flex-col'>
          <AboutUniversityContainer
            image={ITCLogo}
            title='Section 6 Rep for the Ivey Tech Club'
            altText='ITC Logo'
            date='2024 - Present'
            description={[]}
          />
          <AboutUniversityContainer
            image={WDSLogo}
            title='Tech Lead for the Western Developer Society'
            altText='WDS Logo'
            date='Sept 2022 - May 2023'
            description={[
              `As a Tech Lead, I supervised the development of all pro-bono web development projects across the Western Developers Society. I taught various tools and frameworks such as git, css, and react, providing developers with a solid web development foundation. From 1-on-1 mentoring to hosting club-wide educational workshops, I empowered developers throughout the club to meaningfully contribute to client projects. I additionally contributed to developing the WDS club website, as well as ad-hoc development for client projects.`,
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
