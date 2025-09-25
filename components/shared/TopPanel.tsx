import { cn } from '@/lib/utils';
import React from 'react';
import { Categories, SortPopup, Container } from './index';

interface Props{
   className?: String;
}

export const TopPanel: React.FC<Props> = ({className}) => {
  return (
    <div className={cn('sticky top-0 py-5 z-10 border-b border-gray-200 shadow-lg shadow-xl-30', className)}>
         <Container className='flex items-center justify-between '>
            <Categories/>
            <SortPopup/>
         </Container>
    </div>
  )
}