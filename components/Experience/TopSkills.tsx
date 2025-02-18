import { skills } from '../skills';

const topSkills = [
  'react',
  'typescript',
  'nextjs',
  'nestjs',
  'nodejs',
  'javascript',
  'tailwindcss',
  'aws',
  'java',
  'python',
  'html5',
  'css3',
  'docker',
  'terraform',
  'sql',
  'postgresSQL',
  'git',
  'azure',
];

const TopSkills = () => {
  return (
    <div className='dark:bg-neutral-950 dark:bg-opacity-50 rounded-lg p-4'>
      <h4 className='text-xl font-semibold text-neutral-900 dark:text-neutral-100'>
        Top Skills
      </h4>
      <div className='grid grid-cols-3 gap-4 mt-4'>
        {topSkills.map((key) => {
          const skill = skills[key];
          return (
            <div key={skill.name} className='flex flex-col items-center'>
              <skill.icon className={`text-4xl ${skill.color}`} />
              <span className='mt-1 text-sm text-neutral-900 text-center dark:text-neutral-100'>
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopSkills;
