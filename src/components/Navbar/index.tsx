export const Navbar = () => {

  return (
    <nav className="flex flex-col h-screen gap-4 bg-slate-900 border-r border-indigo-400/40 hover:border-indigo-400/80 w-72 p-2">
      <div className="p-2">
        <img 
          src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png" alt="logo" 
          className="max-w-full"
        />
      </div>
      
      <ul className="flex-grow my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className="my-2 rounded-lg bg-slate-transparent p-2 hover:bg-slate-800 cursor-pointer">Home</li>
        <li className="my-2 rounded-lg bg-slate-transparent p-2 hover:bg-slate-800 cursor-pointer">Games</li>
        <li className="my-2 rounded-lg bg-slate-transparent p-2 hover:bg-slate-800 cursor-pointer">Top 10</li>
        <li className="my-2 rounded-lg bg-slate-transparent p-2 hover:bg-slate-800 cursor-pointer">Walkthroughs</li>
      </ul>
      <ul className="my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className="my-2 rounded-lg bg-slate-transparent p-2 hover:bg-slate-800 cursor-pointer">User</li>
      </ul>
    </nav>
  )
}
