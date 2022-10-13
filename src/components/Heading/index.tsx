import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot'

export interface IHeadingProps {
  size?: 'sm' | 'md' | 'lg',
  children: ReactNode,
  asChild?: boolean,
  className?: string
}

export function Heading({ size = 'md', ...props }: IHeadingProps) {
  const Tag = props.asChild ? Slot : 'h2'

  return (
    <Tag 
      className={
        clsx('text-gray-100 font-bold font-sans', 
          {
            'text-lg': size === 'sm',
            'text-xl': size === 'md',
            'text-2xl': size === 'lg'
          },
          props.className
        )
      }
    >
      {props.children}
    </Tag>
  )
}