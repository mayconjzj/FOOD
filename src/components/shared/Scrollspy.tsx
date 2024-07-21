import { HTMLAttributes } from 'react';
import Spy from 'react-scrollspy';

import { cn } from '@/lib/TailwindMerge';

export type ScrollspyProps = HTMLAttributes<HTMLUListElement> &
  React.ComponentProps<typeof Spy>;

export const Scrollspy = ({
  children,
  className,
  ...props
}: ScrollspyProps) => {
  return (
    <Spy className={cn('', className)} {...props}>
      {children}
    </Spy>
  );
};
