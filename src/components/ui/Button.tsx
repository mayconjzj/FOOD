import { ButtonHTMLAttributes, forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { VariantProps, tv } from 'tailwind-variants';

export const ButtonVariants = tv({
  base: 'flex gap-2 items-center justify-center',
  variants: {
    variant: {
      primary:
        'bg-primary rounded-xl font-semibold shadow-lg hover:bg-primary-foreground duration-150',
      secundary:
        'bg-tertiary shadow-lg rounded-xl hover:bg-tertiary-foreground duration-150',
      icon: ''
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
