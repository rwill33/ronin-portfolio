import Education from './sections/Education';
import Leadership from './sections/Leadership';
import Skills from './sections/Skills';
import WorkExperience from './sections/WorkExperience';

export function Experience() {
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
          <div className='flex gap-8 xl:gap-16 xl:grid-cols-4'>
            <div className='space-y-8'>
              <Education />
              <WorkExperience />
              <Leadership />
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
