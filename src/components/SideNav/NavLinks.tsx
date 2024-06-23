"use client";

import { usePathname } from "next/navigation";
import type { NavLinkProps } from "./NavLink";
import NavLink from "./NavLink";
import { NavLinkType } from "@/types/NavLinkType";

const links: NavLinkType[] = [
  {
    name: "Home",
    linkTo: "/",
    icon: "house",
  },
  {
    name: "Works",
    linkTo: "/works",
    icon: "laptop",
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col grow gap-2">
      {links.map((link) => (
        <a href={link.linkTo} key={link.linkTo}>
          <NavLink
            isActive={pathname == link.linkTo}
            icon={link.icon}
            name={link.name}
            key={link.linkTo}
          />
        </a>
      ))}
      {pathname}
    </div>
  );
}
