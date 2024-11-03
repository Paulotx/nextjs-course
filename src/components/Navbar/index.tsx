import { HomeIcon, GamepadIcon, FaceHappyIcon, RouteIcon, PrizeIcon } from '@/components';

export const Navbar = () => {

  return (
    <nav className="flex flex-col h-screen gap-4 bg-slate-900 border-r border-indigo-400/40 hover:border-indigo-400/80 w-72 p-2 text-slate-300">
      <div className="p-2">
        <img 
          src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png" alt="logo" 
          className="max-w-full"
        />
      </div>
      
      <ul className="flex-grow my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className="flex gap-2 items-center my-2 rounded-lg bg-slate-transparent p-2 hover:bg-slate-800 cursor-pointer hover:text-slate-100">
          <HomeIcon className='w-4 h-4' />Home
        </li>
        <li className="flex gap-2 items-center my-2 rounded-lg bg-slate-transparent p-2 hover:bg-slate-800 cursor-pointer hover:text-slate-100">
          <GamepadIcon className='w-4 h-4' />Games
        </li>
        <li className="flex gap-2 items-center my-2 rounded-lg bg-slate-transparent p-2 hover:bg-slate-800 cursor-pointer hover:text-slate-100">
          <PrizeIcon className='w-4 h-4' />Top 10
        </li>
        <li className="flex gap-2 items-center my-2 rounded-lg bg-slate-transparent p-2 hover:bg-slate-800 cursor-pointer hover:text-slate-100">
          <RouteIcon className='w-4 h-4' />Walkthroughs
        </li>
      </ul>
      <ul className="my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className="flex gap-2 items-center my-2 rounded-lg bg-slate-transparent p-2 hover:bg-slate-800 cursor-pointer hover:text-slate-100">
          <FaceHappyIcon className='w-4 h-4' />User
        </li>
      </ul>
    </nav>
  )
}
