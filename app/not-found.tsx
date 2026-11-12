import { ArrowLeft, SearchX } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      aria-labelledby="not-found-title"
      className="flex min-h-svh w-full items-center justify-center overflow-hidden px-5 py-10"
    >
      <section className="flex flex-col gap-5 items-center justify-center">
        <div className="flex items-center justify-center p-5 bg-[#E3F4EC] rounded-xl">
          <SearchX className="text-primary-foreground w-7 h-7" />
        </div>
        <div className="flex flex-col items-center ">
          <p className="font-outfit font-bold text-[48px] text-primary">
            404 — Page not found
          </p>
          <p className="font-outfit text-base w-[80%] text-center text-muted-foreground">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
        <Link
          href={"/"}
          className="bg-primary-foreground text-white hover:bg-primary rounded-full cursor-pointer flex items-center px-3 gap-2 py-3"
        >
          <ArrowLeft /> Back Home
        </Link>
      </section>
    </main>
  );
}
