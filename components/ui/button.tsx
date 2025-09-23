'use client'

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'h-[50px] inline-flex  items-center  border rounded-[15px] cursor-pointer transition duration-500  hover:scale-102 px-4',
  {variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      btn_sm: 'min-w-[50px]',
      btn_lg: 'min-w-[110px] bg-[#bd4546] text-white'
    },
  }}
)

const Button = ({className, variant, asChild = false, ...props}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
  asChild?: boolean
}) => {
  const Comp = asChild ? Slot : 'button'
  return(
    <Comp
      data-slot="button"
      className={cn(buttonVariants({variant, className}))}
      {...props}
    />
  )
}

export { Button, buttonVariants }