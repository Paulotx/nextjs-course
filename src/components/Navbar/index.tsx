import { HomeIcon, GamepadIcon, FaceHappyIcon, RouteIcon, PrizeIcon } from '@/components';

import { cn } from '@/helpers/cn';
import Link from 'next/link';

type NavbarProps = React.ComponentProps<'nav'>;
type NavbarListProps = React.ComponentProps<'ul'>;
type NavbarListItemProps = React.ComponentProps<'li'>;
type NavbarListItemLinkProps = React.ComponentProps<typeof Link>;

const NavbarList = ({ children, className, ...props }: NavbarListProps) => {
  return (
    <ul 
      className={cn("my-4 border-t border-indigo-400/20 hover:border-indigo-400/40", className)}
      {...props}
    >
      {children}
    </ul>
  );
}

const NavbarListItem = ({ children, className, ...props }: NavbarListItemProps) => {
  return (
    <li 
      className={cn("flex gap-2 items-center my-2 rounded-lg bg-slate-transparent p-2 hover:bg-indigo-400/40 cursor-pointer hover:text-slate-100", className)}
      {...props}
    >
      {children}
    </li>
  );
}

const NavbarListItemLink = ({ href, children, className, ...props }: NavbarListItemLinkProps) => {
  return (
    <NavbarListItem className={cn('p-0', className)}>
      <Link href={href} className="flex gap-2 items-center rounded-lg w-full p-2" {...props}>
        {children}
      </Link>
    </NavbarListItem>
  );
};

export const Navbar = ({className, ...props}: NavbarProps) => {
  return (
    <nav 
      className={cn("flex flex-col h-screen bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300", className)} 
      {...props}
    >
      <div className="flex items-center justify-center pt-4">
        <img 
          src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png" alt="logo" 
          className="w-auto h-12"
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
