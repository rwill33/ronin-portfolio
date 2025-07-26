import { skills } from '@/constants/skills';
import { SkillKey } from '@/types/skills';

const Skills = () => {
  return (
    <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 group shadow-xl'>
      {/* Section Header */}
      <div className='mb-6 pb-4 border-b border-white/20'>
        <h3 className='text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent'>
          Technical Skills
        </h3>
      </div>

      {/* Section Content */}
      <div className='space-y-6'>
        <div className='flex gap-8 flex-col'>
          <div>
            <h5 className='text-2xl font-bold text-white mb-4'>
              <span className='font-bold'>Programming Languages</span>
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
              <span className='font-bold'>Web Frameworks</span>
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
              <span className='font-bold'>Databases & Cloud</span>
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
              <span className='font-bold'>Developer Tools</span>
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
              <span className='font-bold'>Certifications</span>
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
      </div>
    </div>
  );
};

export default Skills;
