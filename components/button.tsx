import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-ink text-surface hover:bg-ink/90 shadow-md hover:shadow-lg': variant === 'primary',
            'bg-transparent text-ink hover:bg-creamMuted border border-border': variant === 'ghost',
          },
          {
            'h-9 px-4 py-2 text-sm': size === 'sm',
            'h-11 px-6 py-3': size === 'default',
            'h-12 px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };