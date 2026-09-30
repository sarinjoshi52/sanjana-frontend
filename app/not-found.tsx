import Link from "next/link";
import { ArrowRight, BookOpen, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#f7f8f5] px-5 py-12 text-[#0c263f] sm:px-8 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-40 -top-48 h-[34rem] w-[34rem] rounded-full bg-[#e4efeb] blur-3xl" />
        <div className="absolute -bottom-64 -left-36 h-[32rem] w-[32rem] rounded-full bg-[#f3ead2]/70 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#0c263f_0.7px,transparent_0.7px)] bg-size-[18px_18px]" />
      </div>

      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6">
        <div className="relative z-10 max-w-xl">
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#0c263f]/75 transition hover:text-[#2b9d8f]"
          >
            <span className="grid size-9 place-items-center rounded-full border border-[#0c263f]/15 bg-white/70">
              <BookOpen size={17} strokeWidth={1.8} />
            </span>
            SAÑJÑĀNĀ DEVELOPMENT
          </Link>

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#2b9d8f]">
            A little off the map
          </p>
          <div className="relative mb-1">
            <span
              aria-hidden="true"
              className="select-none font-serif text-[8rem] font-semibold leading-[0.85] tracking-[-0.09em] text-[#0c263f] sm:text-[10rem]"
            >
              404
            </span>
            {/* <span aria-hidden="true" className="absolute -right-1 top-0 font-serif text-[8rem] font-semibold leading-[0.85] tracking-[-0.09em] text-[#e9c56a]/70 blur-[1px] sm:right-4 sm:text-[10rem]">
              404
            </span> */}
          </div>
          <h1 className="mt-8 max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
            This page took a detour.
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 text-[#475569]">
            The link may have moved, or the page may no longer be here. Let's
            get you back to something worth discovering.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 rounded-full bg-[#0c263f] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0c263f]/10 transition hover:-translate-y-0.5 hover:bg-[#17405b]"
            >
              Back to home
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/knowledge"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-[#0c263f] transition hover:bg-white/80"
            >
              Explore knowledge
            </Link>
          </div>
          <p className="mt-10 text-xs font-medium tracking-wide text-[#64748b]">
            LOST IS JUST ANOTHER PLACE TO BEGIN.
          </p>
        </div>

        <div
          aria-hidden="true"
          className="relative mx-auto aspect-square w-full max-w-[550px]"
        >
          <div className="absolute inset-[9%] rounded-full border border-[#0c263f]/10" />
          <div className="absolute inset-[18%] rounded-full border border-dashed border-[#0c263f]/15" />
          <div className="absolute inset-[28%] rounded-full bg-white/70 shadow-[0_30px_100px_-40px_rgba(12,38,63,0.28)] backdrop-blur-sm" />

          <div className="absolute left-[10%] top-[23%] grid size-12 place-items-center rounded-2xl bg-[#e9c56a] text-[#0c263f] shadow-lg shadow-[#e9c56a]/30 sm:size-14">
            <Compass size={25} strokeWidth={1.6} />
          </div>
          <div className="absolute right-[11%] top-[31%] size-3 rounded-full bg-[#2b9d8f] shadow-[0_0_0_8px_rgba(43,157,143,0.12)]" />
          <div className="absolute bottom-[18%] left-[23%] size-2.5 rounded-full bg-[#e9c56a] shadow-[0_0_0_7px_rgba(233,197,106,0.2)]" />

          <svg
            viewBox="0 0 500 500"
            className="absolute inset-0 h-full w-full"
            fill="none"
          >
            <path
              d="M87 300c44-88 85-105 132-52 34 39 52 42 91 7 36-32 66-37 104-5"
              stroke="#2b9d8f"
              strokeWidth="2"
              strokeDasharray="5 8"
              opacity=".55"
            />
            <path
              d="M250 63c103 0 187 84 187 187"
              stroke="#0c263f"
              strokeWidth="1"
              opacity=".08"
            />
            <path
              d="M250 437c-103 0-187-84-187-187"
              stroke="#0c263f"
              strokeWidth="1"
              opacity=".08"
            />
            <circle cx="250" cy="250" r="101" fill="#0c263f" />
            <circle cx="250" cy="250" r="101" fill="url(#glow)" />
            <path d="M202 185h80l32 32v100H202V185Z" fill="#F7F8F5" />
            <path d="M282 185v34h32" stroke="#2b9d8f" strokeWidth="3" />
            <path
              d="M220 240h76M220 258h56M220 276h66"
              stroke="#0c263f"
              strokeWidth="4"
              strokeLinecap="round"
              opacity=".22"
            />
            <path
              d="m267 303 17 17 36-42"
              stroke="#2b9d8f"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="250"
              cy="250"
              r="117"
              stroke="#e9c56a"
              strokeWidth="1.5"
              strokeDasharray="2 9"
              opacity=".65"
            />
            <defs>
              <radialGradient
                id="glow"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="translate(250 165) rotate(90) scale(186)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2b9d8f" stopOpacity=".25" />
                <stop offset="1" stopColor="#0c263f" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>

          <div className="absolute bottom-[13%] right-[8%] rounded-full border border-[#0c263f]/10 bg-white/80 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-[#0c263f]/60 shadow-sm backdrop-blur-sm">
            FIELD NOTE / 04
          </div>
          <div className="absolute left-[18%] top-[58%] h-px w-12 rotate-[-35deg] bg-[#0c263f]/20" />
        </div>
      </section>
    </main>
  );
}
