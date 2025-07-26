'use client';
import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        'relative flex flex-col items-center bg-gradient-to-br from-blue-400 via-purple-500 to-purple-600 dark:bg-gradient-to-br dark:from-indigo-950 dark:via-slate-950 dark:to-purple-900 text-white dark:text-white',
        'transition-colors duration-200', // Faster, smoother transition
        className
      )}
      {...props}
    >
      <div className='absolute inset-0 overflow-hidden'>
        <div
          className={cn(
            `
            [--aurora-light:repeating-linear-gradient(100deg,rgba(59,130,246,0.3)_10%,rgba(99,102,241,0.2)_15%,rgba(168,85,247,0.2)_20%,rgba(139,92,246,0.3)_25%,rgba(59,130,246,0.2)_30%)]
            [--aurora-dark:repeating-linear-gradient(100deg,var(--blue-900)_10%,var(--blue-800)_15%,var(--purple-800)_20%,var(--violet-800)_25%,var(--indigo-800)_30%)]
            [background-image:var(--aurora-light)]
            dark:[background-image:var(--aurora-dark)]
            [background-size:200%,_100%]
            [background-position:50%_50%]
            pointer-events-none
            absolute -inset-[10px] 
            opacity-40 dark:opacity-60
            will-change-transform
            transform-gpu`,

            // Conditionally apply blur and animation only when needed
            'animate-aurora',
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
          )}
          style={{
            // Use CSS custom properties for better performance
            filter: 'blur(8px)', // Reduced blur for better performance
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)', // Force GPU acceleration
          }}
        ></div>
      </div>
      {children}
    </div>
  );
};
