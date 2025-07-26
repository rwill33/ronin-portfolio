'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className='w-full font-sans' ref={containerRef}>
      <div ref={ref} className='relative max-w-7xl mx-auto pb-8'>
        {data.map((item, index) => (
          <div
            key={index}
            className='flex justify-start pt-6 lg:pb-16 lg:gap-10'
          >
            <div className='sticky flex flex-col lg:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm'>
              <div className='h-10 absolute left-3 lg:left-3 w-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center'>
                <div className='h-4 w-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 p-2' />
              </div>
              <h3 className='hidden lg:block text-xl lg:pl-20 lg:text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent'>
                {item.title}
              </h3>
            </div>

            <div className='relative pl-20 pr-4 lg:pl-4 w-full'>
              <h3 className='lg:hidden block text-xl mb-4 text-left font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent'>
                {item.title}
              </h3>
              <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300'>
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className='absolute lg:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white/30 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]'
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className='absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-400 via-blue-400 to-transparent from-[0%] via-[10%] rounded-full'
          />
        </div>
      </div>
    </div>
  );
};
