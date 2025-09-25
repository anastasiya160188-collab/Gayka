import { cn } from '@/lib/utils';
import React from 'react';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface Props{
   sizes: Size;
   text: string;
   className?: string;
}

export const Title: React.FC<Props> = ({className, sizes = 'sm', text}) => {

   const makeTagBySize = {
      xs: 'h5',
      sm: 'h4',
      md: 'h3',
      lg: 'h2',
      xl: 'h1',
      '2xl': 'h1'
   } as const;

   const makeStyleForTag = {
      xs: 'text-[16px]',
      sm: 'text-[22px]',
      md: 'text-[26px]',
      lg: 'text-[32px]',
      xl: 'text-[40px]',
      '2xl': 'text-[48px]',
   } as const;

   const Tag = makeTagBySize[sizes];
  return (
    <Tag className={cn(makeStyleForTag[sizes], className)}>{text}</Tag>
  )
}