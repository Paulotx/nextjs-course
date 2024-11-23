import { cn } from "@/helpers/cn";
import { NavbarListItemProps } from "./types";

export const NavbarListItem = ({ children, className, ...props }: NavbarListItemProps) => {
  return (
    <li 
      className={cn("flex gap-2 items-center my-2 rounded-lg bg-slate-transparent p-2 hover:bg-indigo-400/40 cursor-pointer hover:text-slate-100", className)}
      {...props}
    >
      {children}
    </li>
  );
}