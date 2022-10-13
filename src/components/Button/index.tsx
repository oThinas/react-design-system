import { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface IButtonProps {
  children: ReactNode,
  asChild?: boolean
}

export function Button(props: IButtonProps) {
  const Tag = props.asChild ? Slot : 'button'
  
  return (
    <Tag
      className={
        clsx('px-4 py-3 bg-cyan-500 hover:bg-cyan-300 rounded font-semibold text-gray-900 text-sm w-full transition-colors focus:ring-2 ring-white',
          {

          }
        )
      }
    >
      {props.children}
    </Tag>
  )
}