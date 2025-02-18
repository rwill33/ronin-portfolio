import { IconType } from 'react-icons/lib';

export interface Skill {
  icon: IconType;
  color: string;
  name: string;
}

export enum SkillKey {
  react = 'react',
  typescript = 'typescript',
  nextjs = 'nextjs',
  nestjs = 'nestjs',
  nodejs = 'nodejs',
  javascript = 'javascript',
  tailwindcss = 'tailwindcss',
  aws = 'aws',
  java = 'java',
  python = 'python',
  html5 = 'html5',
  css3 = 'css3',
  docker = 'docker',
  terraform = 'terraform',
  sql = 'sql',
  postgresql = 'postgresql',
  git = 'git',
  azure = 'azure',
}
