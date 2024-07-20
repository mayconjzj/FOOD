'use client';

import { cn } from '@/lib/TailwindMerge';

export type FeedbackRootProps = {
  children: React.ReactNode;
  className?: string;
};

export const FeedbackRoot = ({ children, className }: FeedbackRootProps) => {
  return (
    <div
      className={cn(
        'flex items-center gap-5 p-3 rounded-xl shadow-lg bg-tertiary flex-col md:flex-row',
        className
      )}
    >
      {children}
    </div>
  );
};
