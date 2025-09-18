import React from 'react';
import {Container } from "../shared";
import { Button } from '../ui';
import Image from 'next/image';
import logoPng from '../../public/assets/logo.png';
import { ShoppingCart, User } from "lucide-react";
import { cn } from '@/lib/utils';

interface Props{
   className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
  return (
    <header className={cn('border border-b', className)}>
     <Container className='flex items-center justify-between py-8'>
      {/* left side */}
      <div className='flex gap-2'>
        <div>
          <Image  width={80} height={50} alt="logo" src={logoPng}/>
        </div>
        <div>
          <h1 className='text-2xl uppercase font-black'>Gayka</h1>
          <p className='text-gray-500 leading-3'>сервис, который слышит</p>
        </div>
      </div>
      {/* right side */}
      <div className='flex gap-2'>
        <Button variant='outline' size='lg_btn'>
          <User/>
          Пользователь
        </Button>
        <div>
          <Button className='group relative'>
            <b>520 р</b>
            <span className='w-[1px] h-full bg-black'/>
            <div className='flex items-center gap-1'>
              <ShoppingCart/>
              <b>3</b>
            </div>
            </Button>
        </div>
      </div>
      </Container>
    </header>
  )
}

