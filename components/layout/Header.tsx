"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const menuItems = [
  { name: "About", href: "/" },
  { name: "Knowledge Service", href: "/knowledge" },
  { name: "Projects", href: "/project" },
  { name: "Publications", href: "/publications" },
  { name: "Knowledge Bank", href: "/knowledge-bank" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col overflow-hidden justify-between bg-white px-6 py-5 lg:h-25 lg:flex-row lg:items-center lg:px-30">
      <div className="flex flex-row items-center justify-between gap-3">
        <div className="flex min-w-0 flex-1 flex-row items-center gap-3 sm:gap-5">
          {/* logo */}
          <div
            aria-label="logo"
            className="flex shrink-0 justify-center font-bold bg-primary rounded-md text-secondary text-2xl p-3"
          >
            S
          </div>
          <div className="flex min-w-0 flex-col items-start gap-0.5">
            <h1 className="text-primary! font-bold! text-xl! sm:text-2xl!">
              SañJñāNā
            </h1>
            <span className="uppercase text-primary-foreground text-xs tracking-wider">
              Development Pvt. Ltd.
            </span>
            <span className="text-xs text-muted-foreground font-semibold">
              Institution • Knowledge • Leadership
            </span>
          </div>
        </div>
        <Button
          variant="ghost"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex size-6 shrink-0 p-0"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <Menu className="size-6" />
        </Button>
      </div>
      <nav
        aria-label="Main navigation"
        className={`${
          menuOpen ? "flex" : "hidden"
        } mt-5 border-t border-muted pt-5 lg:mt-0 lg:flex lg:border-0 lg:pt-0`}
      >
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-4 px-2 lg:flex-nowrap lg:gap-5 lg:px-0">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative block pb-2 text-center text-sm font-semibold whitespace-nowrap transition-colors duration-200 hover:text-primary-foreground ${
                    isActive ? "text-primary-foreground" : "text-black"
                  }`}
                >
                  {item.name}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 right-0 h-0.75 bg-primary-foreground transition-opacity duration-100 ease-in ${
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
};

export default Header;
