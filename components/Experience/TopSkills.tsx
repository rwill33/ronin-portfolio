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

const TopSkills = () => {
  return (
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
  );
};

export default TopSkills;
