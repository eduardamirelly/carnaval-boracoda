import { ReactNode } from "react"
import { clsx } from "clsx";

interface ButtonProps {
  children: ReactNode;
  color?: 'violet' | 'white';
  className?: string;
}

export function Button({ children, color = 'violet', className }: ButtonProps) {
  return (
    <button 
      className={
        clsx(
          'px-8 py-3 uppercase font-bold text-sm rounded cursor-pointer transition-colors', 
          {
            'bg-violet-500 text-white hover:bg-violet-600': color == 'violet',
            'bg-white text-violet-500 hover:bg-black-300': color === 'white',
          }, 
          className
        )
      }
    >
      {children}
    </button>
  )
}