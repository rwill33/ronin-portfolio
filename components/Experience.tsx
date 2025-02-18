'use client';

import IntelliwareLogo from '@/public/intelliware-logo.png';
import IntelliwareWork from '@/public/intelliware-work.jpg';
import IveyLogo from '@/public/ivey-logo.png';
import ITCLogo from '@/public/ivey_tech_club_logo.jpeg';
import UltimateFrisbee from '@/public/ultimate-frisbee.jpg';
import WesternLogo from '@/public/western-logo.png';
import WDSLogo from '@/public/western_dev_society_logo.jpeg';
import Image from 'next/image';
import {
  FaAws,
  FaGitAlt,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { PiFileSql } from 'react-icons/pi';
import {
  SiCss3,
  SiDocker,
  SiHtml5,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import AboutUniversityContainer from './ui/about-university-container';
import { Timeline } from './ui/timeline';

export function TimelineDemo() {
  const data = [
    {
      title: 'Education',
      content: (
        <div className='flex gap-16 flex-col'>
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
    // {
    //   title: '2020',
    //   content: (
    //     <div>
    //       <h3 className='text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8'>
    //         Engineering at the University of Western Ontario
    //       </h3>
    //       <p className='text-neutral-800 dark:text-neutral-200 text-md font-normal mb-4'>
    //         Began my Engineering journey at Western University in London,
    //         Ontario.
    //       </p>
    //       <div className='grid grid-cols-2 gap-4'>
    //         <Image
    //           src={WesternEngineering}
    //           alt='Western Engineering Logo'
    //           width={500}
    //           height={500}
    //           className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
    //         />
    //         <Image
    //           src={WesternUniversity}
    //           alt='Western University Campus'
    //           width={500}
    //           height={500}
    //           className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
    //         />
    //       </div>
    //     </div>
    //   ),
    // },
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
          <h5 className='text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8'>
            4 Month Internship
          </h5>
          <p className='text-neutral-800 dark:text-neutral-200 text-md font-normal mb-4'>
            I initially joined Intelliware as a Software Developer Intern during
            the summer of 2022. As part of a small team, I worked on developing
            enterprise software for a client in the real estate industry. I
            quickly gained a strong foundation in web development and the
            software development lifecycle while working with React, NestJS, and
            PostgreSQL. I also learned how to work in an Agile environment,
            collaborating with team members to deliver high-quality software
            efficiently.
          </p>
          <p className='text-neutral-800 dark:text-neutral-200 text-md font-normal mb-4'>
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
          <p className='text-neutral-800 dark:text-neutral-200 text-md font-normal mt-8 mb-8'>
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
          <h5 className='text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8'>
            16 Month Internship
          </h5>
          <p className='text-neutral-800 dark:text-neutral-200 text-md font-normal mb-4'>
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
        <div>
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
    <div className='relative flex flex-1 '>
      <div className='min-h-screen grid grid-cols-1 xl:grid-cols-4 px-4 sm:px-16'>
        <div className='col-span-1 xl:col-span-3'>
          <div className='sm:px-16 pb-8'>
            <Timeline data={data} />
          </div>
        </div>
        <div className='col-span-1'>
          <div className='sm:px-16 xl:px-0 pb-8'>
            <div className='dark:bg-neutral-950 dark:bg-opacity-50 rounded-lg p-4'>
              <h4 className='text-xl font-semibold text-neutral-900 dark:text-neutral-100'>
                Top Skills
              </h4>
              <div className='grid grid-cols-3 gap-4 mt-4'>
                <div className='flex flex-col items-center'>
                  <FaReact className='text-4xl text-blue-400' />
                  <span className='mt-1 text-sm text-neutral-900 dark:text-neutral-100'>
                    React
                  </span>
                </div>
                <div className='flex flex-col items-center'>
                  <SiTypescript className='text-4xl text-blue-500' />
                  <span className='mt-1 text-sm text-neutral-900 dark:text-neutral-100'>
                    TypeScript
                  </span>
                </div>
                <div className='flex flex-col items-center'>
                  <SiNextdotjs className='text-4xl text-black dark:text-white' />
                  <span className='mt-1 text-sm text-neutral-900 dark:text-neutral-100'>
                    Next.js
                  </span>
                </div>
                <div className='flex flex-col items-center'>
                  <SiNestjs className='text-4xl text-rose-600' />
                  <span className='mt-1 text-sm text-neutral-900 dark:text-neutral-100'>
                    NestJS
                  </span>
                </div>
                <div className='flex flex-col items-center'>
                  <FaNodeJs className='text-4xl text-green-500' />
                  <span className='mt-1 text-sm text-neutral-900 dark:text-neutral-100'>
                    Node.js
                  </span>
                </div>
                <div className='flex flex-col items-center'>
                  <FaJs className='text-4xl text-yellow-500' />
                  <span className='mt-1 text-sm text-neutral-900 dark:text-neutral-100'>
                    JavaScript
                  </span>
                </div>
                <div className='flex flex-col items-center'>
                  <SiTailwindcss className='text-4xl text-sky-500' />
                  <span className='mt-1 text-sm text-neutral-900 dark:text-neutral-100'>
                    Tailwind CSS
                  </span>
                </div>
                <div className='flex flex-col items-center'>
                  <FaAws className='text-4xl text-orange-500' />
                  <span className='mt-1 text-sm text-neutral-900 dark:text-neutral-100'>
                    AWS
                  </span>
                </div>
                <div className='flex flex-col items-center'>
                  <FaJava className='text-4xl text-red-600' />
                  <span className='mt-1 text-sm text-neutral-900 dark:text-neutral-100'>
                    Java
                  </span>
                </div>
                <div className='flex flex-col items-center'>
                  <SiPython className='text-4xl text-blue-400' />
                  <span className='mt-1 text-sm text-neutral-900 dark:text-neutral-100'>
                    Python
                  </span>
                </div>
                <div className='flex flex-col items-center'>
                  <SiHtml5 className='text-4xl text-orange-600' />
                  <span className='mt-1 text-sm text-neutral-900 dark:text-neutral-100'>
                    HTML5
                  </span>
                </div>
                <div className='flex flex-col items-center'>
                  <SiCss3 className='text-4xl text-blue-500' />
                  <span className='mt-1 text-sm text-neutral-900 dark:text-neutral-100'>
                    CSS3
                  </span>
                </div>
                <div className='flex flex-col items-center'>
                  <SiDocker className='text-4xl text-blue-500' />
                  <span className='mt-1 text-sm text-neutral-900 dark:text-neutral-100'>
                    Docker
                  </span>
                </div>
                <div className='flex flex-col items-center'>
                  <SiTerraform className='text-4xl text-purple-800' />
                  <span className='mt-1 text-sm text-neutral-900 dark:text-neutral-100'>
                    Terraform
                  </span>
                </div>
                <div className='flex flex-col items-center'>
                  <PiFileSql className='text-4xl text-blue-600' />
                  <span className='mt-1 text-sm text-neutral-900 dark:text-neutral-100'>
                    SQL
                  </span>
                </div>
                <div className='flex flex-col items-center'>
                  <SiPostgresql className='text-4xl text-blue-600' />
                  <span className='mt-1 text-sm text-neutral-900 dark:text-neutral-100'>
                    PostgresSQL
                  </span>
                </div>
                <div className='flex flex-col items-center'>
                  <FaGitAlt className='text-4xl text-orange-600' />
                  <span className='mt-1 text-sm text-neutral-900 dark:text-neutral-100'>
                    Git
                  </span>
                </div>
                <div className='flex flex-col items-center'>
                  <VscAzure className='text-4xl text-sky-500' />
                  <span className='mt-1 text-sm text-neutral-900 dark:text-neutral-100'>
                    Azure
                  </span>
                </div>
              </div>
            </div>

            {/* <div className='mt-4'>
              <h4 className='text-xl font-semibold text-neutral-900 dark:text-neutral-100'>
                Other Skills
              </h4>
              <ul className='mt-2 space-y-1'>
                <li className='text-sm text-neutral-900 dark:text-neutral-100'>
                  GraphQL
                </li>
                <li className='text-sm text-neutral-900 dark:text-neutral-100'>
                  Vite
                </li>
                <li className='text-sm text-neutral-900 dark:text-neutral-100'>
                  Material UI
                </li>
                <li className='text-sm text-neutral-900 dark:text-neutral-100'>
                  Agile Methodologies
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
