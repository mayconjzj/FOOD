import NextLink from 'next/link';
import { AnchorHTMLAttributes, forwardRef } from 'react';

import { VariantProps, tv } from 'tailwind-variants';

export const LinkVariants = tv({
  base: 'font-semibold',
  variants: {
    state: {
      active: 'border-b-[3px] border-b-primary',
      desactive: ''
    }
  },
  defaultVariants: {
    state: 'desactive'
  }
});

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof LinkVariants> & {
    href: string;
  };

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, href, className, state, ...props }, ref) => {
    return (
      <NextLink
        className={LinkVariants({ state, className })}
        href={href}
        ref={ref}
        {...props}
      >
        {children}
      </NextLink>
    );
  }
);
Link.displayName = 'Link';
