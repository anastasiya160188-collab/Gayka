import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';
import React from 'react';

interface Props{
   className?: String;
}

export const SortPopup: React.FC<Props> = ({className}) => {
  return (
    <div className={cn('inline-flex items-center gap-1')}>
      <ArrowUpDown size={16}/>
      <b>Сортировка:</b>
      <b>по популярности</b>
    </div>
  )
}