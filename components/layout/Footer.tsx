import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Who We Are", href: "#who-we-are-section" },
  { label: "Meet Our Team", href: "#meet-our-team" },
  { label: "Organization", href: "#how-are-we-organized" },
  { label: "Service Principles", href: "#service-principles" },
  { label: "Core Resources", href: "#core-resources" },
];

export default function Footer() {
  return (
    <footer className="flex min-h-[200px] flex-col items-start justify-between gap-8 bg-primary px-[5%] py-8 md:px-[10%] lg:flex-row lg:items-center lg:py-10">
      <div className="flex flex-col gap-2">
        <Link
          href={"/"}
          aria-label="Company logo"
          className="flex cursor-pointer flex-col text-start font-heading"
        >
          <span className="text-2xl font-bold text-white uppercase tracking-wider leading-[95%]">
            Sanjana
          </span>
          <span className="text-base font-extralight text-primary-foreground tracking-wider">
            Developement Pvt. Ltd
          </span>
        </Link>
        <p className="text-muted font-outfit text-sm">
          Strengthening institutions, knowledge, and leadership through <br />
          evidence-based knowledge services.
        </p>
      </div>

      <div className="font-outfit">
        <h2 className="mb-3 text-base! font-semibold! tracking-normal! text-white!">
          Address
        </h2>
        <address className="not-italic text-sm leading-relaxed text-white/80">
          Devtec House, Jyatha,
          <br />
          Kathmandu, Nepal
        </address>
        <p className="mt-3 text-xs text-white/60">
          © 2026 SañJñāNā Development. All rights reserved.
        </p>
      </div>

      <nav aria-label="Quick links" className="font-outfit">
        <h2 className="mb-3 text-base! font-semibold! tracking-normal! text-white!">
          Quick Links
        </h2>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-white/80">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-light-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-green"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
