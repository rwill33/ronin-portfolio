const Position = ({
  title,
  date,
  skills,
  children,
}: {
  title: string;
  date: string;
  skills: string[];
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h5 className='text-xl font-bold text-white mb-3'>
        <span className='font-bold'>{title}</span> | {date}
      </h5>
      <p className='text-white text-base font-light mb-3'>
        {skills.join(', ')}
      </p>
      {children}
    </div>
  );
};

export default Position;
