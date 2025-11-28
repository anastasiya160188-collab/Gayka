import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from '../shared';
import  Image  from 'next/image';
import { Button } from '../ui';
import { ShoppingCart, User } from 'lucide-react';

interface Props{
   className?: string
}


export const Header: React.FC<Props> = ({className}) =>{
   return(
      <header className={cn('border border-b border-gray-200', className)}>
         <div>
            <Container className='flex items-center justify-between py-8'>
               {/* left side */}
               <div className='flex items-center gap-2'>
                  <Image src="/assets/avto.png" width={80} height={80} alt='logo'/>
                  <div>
                     <h1 className='text-2xl uppercase font-black'>Gayka</h1>
                     <p className='text-sm text-gray-400 leading-5'>Сервис который слышит</p>
                  </div>
               </div>
               {/* right side */}
               <div className='flex items-center gap-3'>
                  <Button variant="outline"><User size={16}/>Войти</Button>
                  <Button variant="outline"><ShoppingCart size={16}/>Корзина пуста</Button>
               </div>
            </Container>
         </div>
      </header>
   )
}