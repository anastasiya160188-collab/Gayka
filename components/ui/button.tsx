import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import {cva, type VariantProps} from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center h-[50px]",
  {variants: {
    variant: {
      default: "bg-primary text-primary-foreground",
      outline: " flex gap-1 bg-background border rounded-xl"
    },
    size: {
      default: "h-[50px] px-4 py-2",
      lg_btn: "",
      sm_btn: ""
    }
  },
defaultVariants: {
  variant: "default",
  size: "default"
}
}
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {asChild?: boolean}){
const Comp = asChild ? Slot : "button"

  return(
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }