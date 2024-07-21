import { ButtonHTMLAttributes, forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { VariantProps, tv } from 'tailwind-variants';

export const ButtonVariants = tv({
  base: 'inline-flex gap-2 items-center justify-center rounded-xl shadow-lg duration-150',
  variants: {
    variant: {
      primary: 'bg-primary font-semibold hover:bg-primary-foreground',
      secundary: 'bg-tertiary hover:bg-tertiary-foreground ',
      icon: 'shadow-none'
    },
    size: {
      md: 'px-[14px] py-[10px]'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
});

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonVariants> & {
    className?: string;
    asChild?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={ButtonVariants({ variant, className })}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';
