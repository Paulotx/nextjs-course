import Image from 'next/image';

import { cn } from '@/helpers/cn';
import { NavbarProps } from './types';
import { NavbarList } from './NavbarList';
import { NavbarListItemLink } from './NavbarListItemLink';

import { HomeIcon, GamepadIcon, FaceHappyIcon, RouteIcon, PrizeIcon } from '@/components';

export const Navbar = ({className, ...props}: NavbarProps) => {
  return (
    <nav 
      className={cn("fixed top-0 left-0 flex flex-col h-screen bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300", className)} 
      {...props}
    >
      <div className="flex items-center justify-center pt-4">
        <Image 
          width={112}
          height={32}
          src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png" alt="logo" 
        />
      </div>
      
      <NavbarList className="flex-grow">
        <NavbarListItemLink href="/">
          <HomeIcon className='w-4 h-4' />Home
        </NavbarListItemLink>

        <NavbarListItemLink href="/games">
          <GamepadIcon className='w-4 h-4' />Games
        </NavbarListItemLink>

        <NavbarListItemLink href="/top-10">
          <PrizeIcon className='w-4 h-4' />Top 10
        </NavbarListItemLink>

        <NavbarListItemLink href="/walkthroughs">
          <RouteIcon className='w-4 h-4' />Walkthroughs
        </NavbarListItemLink>
      </NavbarList>

      <NavbarList>
        <NavbarListItemLink href="/user">
          <FaceHappyIcon className='w-4 h-4' />User
        </NavbarListItemLink>
      </NavbarList>
    </nav>
  )
}
