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
    <div>
      <h4 className='text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6'>
        Top Skills
      </h4>
      <div className='grid grid-cols-2 xl:grid-cols-2 md:grid-cols-4 gap-4'>
        {topSkills.map((key) => {
          const skill = skills[key];
          return (
            <div
              key={skill.name}
              className='flex flex-col items-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group'
            >
              <skill.icon
                className={`text-3xl xl:text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
              />
              <span className='mt-2 text-xs xl:text-sm text-white/90 text-center font-medium'>
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
