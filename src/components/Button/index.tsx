import { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  asChild?: boolean
}

export function Button({children, asChild, className, ...props}: IButtonProps) {
  const Tag = asChild ? Slot : 'button'
  
  return (
    <Tag
      className={`x-4 py-3 bg-cyan-500 hover:bg-cyan-300 rounded font-semibold text-gray-900 text-sm w-full transition-colors focus:ring-2 ring-white ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}