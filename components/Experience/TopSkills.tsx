import { skills } from '@/constants/skills';
import { SkillKey } from '@/types/skills';

const topSkills: SkillKey[] = [
  SkillKey.react,
  SkillKey.typescript,
  SkillKey.nextjs,
  SkillKey.nestjs,
  SkillKey.nodejs,
  SkillKey.javascript,
  SkillKey.tailwindcss,
  SkillKey.aws,
  SkillKey.java,
  SkillKey.python,
  SkillKey.html5,
  SkillKey.css3,
  SkillKey.docker,
  SkillKey.terraform,
  SkillKey.sql,
  SkillKey.postgresql,
  SkillKey.git,
  SkillKey.azure,
];

const TopSkills = () => {
  return (
    <div className='dark:bg-neutral-950 dark:bg-opacity-50 rounded-lg p-4'>
      <h4 className='text-xl font-semibold text-neutral-900 dark:text-neutral-100'>
        Top Skills
      </h4>
      <div className='grid grid-cols-3 xl:grid-cols-3 md:grid-cols-6 gap-4 mt-4'>
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
