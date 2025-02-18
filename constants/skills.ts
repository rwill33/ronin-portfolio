import { Skill, SkillKey } from '@/types/skills';
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

export const skills: Record<SkillKey, Skill> = {
  react: {
    icon: FaReact,
    color: 'text-blue-400',
    name: 'React',
  },
  typescript: {
    icon: SiTypescript,
    color: 'text-blue-500',
    name: 'TypeScript',
  },
  nextjs: {
    icon: SiNextdotjs,
    color: 'text-black dark:text-white',
    name: 'Next.js',
  },
  nestjs: {
    icon: SiNestjs,
    color: 'text-rose-600',
    name: 'NestJS',
  },
  nodejs: {
    icon: FaNodeJs,
    color: 'text-green-500',
    name: 'Node.js',
  },
  javascript: {
    icon: FaJs,
    color: 'text-yellow-500',
    name: 'JavaScript',
  },
  tailwindcss: {
    icon: SiTailwindcss,
    color: 'text-sky-500',
    name: 'Tailwind CSS',
  },
  aws: {
    icon: FaAws,
    color: 'text-orange-500',
    name: 'AWS',
  },
  java: {
    icon: FaJava,
    color: 'text-red-600',
    name: 'Java',
  },
  python: {
    icon: SiPython,
    color: 'text-blue-400',
    name: 'Python',
  },
  html5: {
    icon: SiHtml5,
    color: 'text-orange-600',
    name: 'HTML5',
  },
  css3: {
    icon: SiCss3,
    color: 'text-blue-500',
    name: 'CSS3',
  },
  docker: {
    icon: SiDocker,
    color: 'text-blue-500',
    name: 'Docker',
  },
  terraform: {
    icon: SiTerraform,
    color: 'text-purple-800',
    name: 'Terraform',
  },
  sql: {
    icon: PiFileSql,
    color: 'text-blue-600',
    name: 'SQL',
  },
  postgresql: {
    icon: SiPostgresql,
    color: 'text-blue-600',
    name: 'PostgresSQL',
  },
  git: {
    icon: FaGitAlt,
    color: 'text-orange-600',
    name: 'Git',
  },
  azure: {
    icon: VscAzure,
    color: 'text-sky-500',
    name: 'Azure',
  },
};
