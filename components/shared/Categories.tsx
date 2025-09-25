import React from 'react';
import { Container } from '../shared';
import { cn } from '@/lib/utils';

interface Props{
   className?: String;
}

const items = ['Аккумуляторы', 'Моторные масла', 'Автотовары', 'Автохимия', 'Сезонные товары', 'Автолампы'];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({className}) => {
  return (
    <div className={cn('inline-flex gap-4 p-1 rounded-2xl', className)}>
      {items.map((item, index)=>(
         <a 
         className={cn('flex items-center font-bold h-11 rounded-2xl px-5 bg-gray-200', activeIndex === index && 'bg-black/80 text-white')}
         href="" 
         key={index}>
            <button>
               {item}
            </button>
         </a>
      ))
      }
    </div>
  )
}