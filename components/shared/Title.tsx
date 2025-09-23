import { cn } from '@/lib/utils';
import React from 'react';

type Size = 'sm' | 'md' | 'lg' | 'xl'

interface Props{
   sizes: Size[];
   text: string;
   className: string;
}

export const Title: React.FC<Props> = ({className}) => {

   const makeTagBySize = {
      'sm': 'h6',
      'md': 'h5',
      'lg': 'h4',
      '2xl': 'h3'
   } as const

   const makeStyleForTag = {
      'sm': 'text-xs',
      'md': 'text-md',
      'lg': 'text-lg',
      '2xl': 'text-2xl',
   } as const

   const Tag = makeTagBySize[sizes];
  return (
    <div className={cn('', className)}>Header</div>
  )
}