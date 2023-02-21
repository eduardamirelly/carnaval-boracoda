import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react"

interface TextProps {
  size?: 'lg' | 'md' | 'sm';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Text({ size = 'md', children, asChild = false, className }: TextProps) {
  const Comp = asChild ? Slot : 'p';

  return (
    <Comp className={
      clsx(
        'text-black-800', 
        {
          'text-lg': size == 'lg',
          'text-md': size == 'md',
          'text-sm': size == 'sm',
        }, 
        className
      )}>
      {children}
    </Comp>
  )
}