"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Knowledge Service", href: "/knowledge" },
  { name: "Projects", href: "/project" },
  { name: "Publications", href: "/publications" },
  { name: "Knowledge Bank", href: "/knowledge-bank" },
  { name: "Contact", href: "/contact" },
];
export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-row justify-between bg-white px-[5%] md:px-[10%] py-5 border-b border-b-slate-200">
      <Link
        href={"/"}
        aria-label="Company logo"
        className="group flex cursor-pointer flex-col text-start font-heading"
      >
        <span className="text-2xl font-bold text-primary uppercase tracking-wider leading-[95%]">
          Sanjana
        </span>
        <span className="text-base font-extralight text-primary-foreground tracking-wider">
          Developement Pvt. Ltd
        </span>
        <span className="max-h-0 overflow-hidden text-xs leading-5 text-muted-foreground opacity-0 tracking-wider transition-all duration-300 ease-out group-hover:max-h-5 group-hover:opacity-100 group-focus-visible:max-h-5 group-focus-visible:opacity-100">
          Institution • Knowledge • Leadership
        </span>
      </Link>

      <nav aria-label="Main navigation">
        <Drawer open={menuOpen} onOpenChange={setMenuOpen} swipeDirection="up">
          <Button
            variant="ghost"
            className="flex mid:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu aria-hidden="true" />
          </Button>
          <DrawerContent className="m-0 w-full rounded-none rounded-b-2xl">
            <DrawerHeader className="flex-row items-center justify-between px-[10%] py-5 text-left">
              <DrawerTitle className="text-primary">Menu</DrawerTitle>
              <DrawerClose
                aria-label="Close menu"
                className="inline-flex size-9 items-center justify-center rounded-full text-primary focus-visible:outline-2 focus-visible:outline-primary-foreground"
              >
                <X aria-hidden="true" className="size-5" />
              </DrawerClose>
            </DrawerHeader>
            <ul className="flex flex-col gap-1 px-[10%] pb-6 font-outfit">
              {menuItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === item.href
                    : pathname === item.href ||
                      pathname.startsWith(`${item.href}/`);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={`block rounded-md px-3 py-3 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground ${
                        isActive
                          ? "text-primary-foreground"
                          : "text-primary hover:text-primary-foreground/70"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </DrawerContent>
        </Drawer>
        <ul className="hidden mid:flex h-full flex-wrap items-center font-outfit justify-end gap-x-5 gap-y-2">
          {menuItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`group px-1 relative pb-2 text-base font-medium transition-colors focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-foreground ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-primary hover:text-primary-foreground/70"
                  }`}
                >
                  {item.name}
                  <span
                    aria-hidden="true"
                    className={`absolute group-hover:opacity-30 bottom-0 left-0 right-0 h-0.5 bg-primary-foreground transition-opacity duration-100 ease-in ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
