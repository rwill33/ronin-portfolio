export default function Loading() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='relative'>
        {/* Spinning gradient border matching the hero button */}
        <div className='relative inline-flex h-16 w-16 overflow-hidden rounded-full p-[1px]'>
          <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
          <span className='inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 backdrop-blur-3xl'>
            <div className='w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
          </span>
        </div>
      </div>
      <p className='mt-6 text-lg font-extralight text-zinc-800 dark:text-neutral-200 animate-pulse'>
        Loading...
      </p>
    </div>
  );
}
