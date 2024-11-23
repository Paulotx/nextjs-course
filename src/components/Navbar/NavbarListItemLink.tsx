import Link from "next/link";

import { cn } from "@/helpers/cn";
import { NavbarListItemLinkProps } from "./types";
import { NavbarListItem } from "./NavbarListItem";

export const NavbarListItemLink = ({ href, children, className, ...props }: NavbarListItemLinkProps) => {
  return (
    <NavbarListItem className={cn('p-0', className)}>
      <Link href={href} className="flex gap-2 items-center rounded-lg w-full p-2" {...props}>
        {children}
      </Link>
    </NavbarListItem>
  );
};