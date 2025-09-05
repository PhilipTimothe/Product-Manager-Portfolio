import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'large' | 'medium';
}

export function Container({ 
  children, 
  className, 
  size = 'default' 
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-6 md:px-8 lg:px-12',
        {
          'max-w-[920px]': size === 'default',
          'max-w-[800px]': size === 'large', 
          'max-w-[600px]': size === 'medium',
        },
        className
      )}
    >
      {children}
    </div>
  );
}