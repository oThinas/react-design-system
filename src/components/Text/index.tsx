import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot'

export interface ITextProps {
  size?: 'sm' | 'md' | 'lg',
  children: ReactNode,
  asChild?: boolean,
  className?: string
}

export function Text({ size = 'md', ...props }: ITextProps) {
  const Tag = props.asChild ? Slot : 'span'

  return (
    <Tag 
      className={
        clsx('text-gray-100 font-sans', 
          {
            'text-xs': size === 'sm',
            'text-sm': size === 'md',
            'text-md': size === 'lg'
          },
          props.className
        )
      }
    >
      {props.children}
    </Tag>
  )
}