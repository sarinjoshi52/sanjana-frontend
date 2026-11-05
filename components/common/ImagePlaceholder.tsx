import { ImageIcon } from "lucide-react";
import { cn } from "cn";

type ImagePlaceholderProps = {
  className?: string;
  label?: string;
};

/** Neutral placeholder shown wherever a real image will be added later. */
export default function ImagePlaceholder({
  className,
  label = "Image placeholder",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex h-full min-h-40 w-full items-center justify-center rounded-xl bg-gray-100 text-gray-400",
        className,
      )}
    >
      <ImageIcon
        aria-hidden="true"
        className="size-1/5 min-h-8 min-w-8 max-h-20 max-w-20"
        strokeWidth={1.5}
      />
    </div>
  );
}
