import { PenLine } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";

export default function FloatButton() {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="default"
            className="fixed bottom-6 right-6 z-50 rounded-full border border-white py-5 shadow-lg ring ring-[#0c263f]"
          >
            <Link href="/editor">
              <PenLine />
            </Link>
          </Button>
        }
      />
      <TooltipContent>
        <p>Open Editor</p>
      </TooltipContent>
    </Tooltip>
  );
}
