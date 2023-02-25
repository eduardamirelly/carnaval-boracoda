import { ReactNode } from "react"
import { clsx } from "clsx";

interface ButtonProps {
  children: ReactNode;
  color?: 'violet' | 'white';
  size?: 'lg' | 'sm';
  className?: string;
}

export function Button({ children, color = 'violet', size = 'lg', className }: ButtonProps) {
  return (
    <button 
      className={
        clsx(
          'uppercase font-bold text-sm rounded cursor-pointer transition-colors', 
          {
            'bg-violet-500 text-white hover:bg-violet-600': color == 'violet',
            'bg-white text-violet-500 hover:bg-gray-400': color === 'white',
            'px-8 py-3': size == 'lg',
            'px-6 py-1': size == 'sm',
          }, 
          className
        )
      }
    >
      {children}
    </button>
  )
}