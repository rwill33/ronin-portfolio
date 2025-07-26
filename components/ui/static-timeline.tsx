'use client';
import React from 'react';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const StaticTimeline = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <div className='space-y-8'>
      {data.map((item, index) => (
        <div
          key={index}
          className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 group shadow-xl'
        >
          {/* Section Header */}
          <div className='mb-6 pb-4 border-b border-white/20'>
            <h3 className='text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent'>
              {item.title}
            </h3>
          </div>

          {/* Section Content */}
          <div className='space-y-6'>{item.content}</div>
        </div>
      ))}
    </div>
  );
};
