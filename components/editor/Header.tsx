import { ExternalLink, Globe, Save } from "lucide-react";
import SidebarToggle from "@/components/editor/SidebarToggle";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row p-5 justify-between items-center border border-black/10">
      <div className="flex flex-row gap-5 items-center">
        <SidebarToggle />
        <Link href={"/"} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 hover:bg-transparent hover:shadow-lg rounded-lg"
          >
            <ExternalLink />
            View Website
          </Button>
        </Link>
      </div>

      <div className="flex flex-row gap-5">
        <Button
          variant="outline"
          size="lg"
          className="flex items-center gap-2 hover:bg-transparent hover:shadow-lg rounded-lg"
        >
          <Save />
          Save Changes
        </Button>
        <Button
          variant="default"
          size="lg"
          className="flex items-center gap-2 hover:shadow-lg text-white font-bold rounded-lg"
        >
          <Globe />
          Publish
        </Button>
      </div>
    </header>
  );
}
