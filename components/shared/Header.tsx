'use client'
import { cn } from '@/lib/utils';
import React from 'react';
import {Container} from '../shared';
import { Button } from '../ui';
import Image from 'next/image';
import { CircleUserRound, ShoppingCart } from 'lucide-react';


interface Props{
   className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
  return (
    <header className={cn('border border_b border-gray-300', className)}>
        <Container className={cn('flex items-center justify-between py-8')}>
          {/* Left side */}
          <div className='flex items-center gap-2'>
              <Image 
              src='/assets/logo.png' 
              alt='Logo' 
              width={80} 
              height={32}/>
              <div>
                <h1 className='text-2xl uppercase font-black'>Gayka</h1>
                <p className='text-gray-500'>сервис, который слышит</p>
              </div>
          </div>
          {/* Right side */}
          <div className='flex gap-2'>
            <Button variant='btn_sm' className='px-4'>
              <CircleUserRound size={20}/>
              Войти
              </Button>
            <Button variant='btn_lg'
            className='flex items-center hover:bg-red-800 px-6 gap-3'>
              <ShoppingCart size={26}/>
              <div className='flex flex-col leading-4'>
                <b>Корзина</b>
                <b className='flex'>пустая</b>
              </div>
            </Button>
          </div>
        </Container>
    </header>
  )
}

