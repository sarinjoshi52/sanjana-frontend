"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    name: "About",
    href: "/",
  },
  {
    name: "Knowledge Service",
    href: "/knowledge",
  },
  {
    name: "Projects",
    href: "/project",
  },
  {
    name: "Publications",
    href: "/publications",
  },
  {
    name: "Knowledge Bank",
    href: "/knowledge-bank",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row justify-between px-30 py-5 bg-white h-[100px]">
      <div className="flex flex-row items-center gap-5">
        <div className="flex justify-center font-bold bg-primary rounded-md text-secondary text-2xl p-3">
          S
        </div>
        <div className="flex flex-col items-start gap-0.5">
          <h1 className="text-primary! font-bold! text-2xl!">SañJñāNā</h1>
          <span className="uppercase text-primary-foreground text-xs tracking-wider">
            Development Pvt. Ltd.
          </span>
          <span className="text-xs text-muted-foreground font-semibold">
            Institution • Knowledge • Leadership
          </span>
        </div>
      </div>
      <nav aria-label="Main navigation" className="flex items-center">
        <ul className="flex flex-row items-center gap-5">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative block text-center text-sm font-semibold whitespace-nowrap transition-colors duration-200 hover:text-primary-foreground ${
                    isActive ? "text-primary-foreground" : "text-black"
                  }`}
                >
                  {item.name}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-2 left-0 right-0 h-[3px] bg-primary-foreground transition-opacity ease-in duration-100 ${
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
