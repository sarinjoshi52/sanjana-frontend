"use client";

import { GripVertical } from "lucide-react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { Button } from "@/components/ui/button";
import type { EditorSection } from "./types";

export default function SortableSection({
  section,
  selected,
  onSelect,
}: {
  section: EditorSection;
  selected: boolean;
  onSelect: () => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: section.id });

  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={`group/section flex items-center rounded-md border ${
        isDragging ? "z-10 opacity-60" : ""
      } ${
        selected
          ? "border-primary bg-muted"
          : "border-transparent hover:border-primary-foreground"
      }`}
    >
      <Button
        type="button"
        onClick={onSelect}
        variant="ghost"
        className="h-auto min-w-0 flex-1 justify-start rounded-md px-3 py-2 text-left text-base group-hover/section:bg-[#F1FDFA] hover:text-primary-foreground"
      >
        <span className="block truncate">{section.label}</span>
      </Button>
      <Button
        type="button"
        aria-label={`Reorder ${section.label}`}
        variant="ghost"
        size="icon"
        className="size-auto cursor-grab rounded-md px-2 py-2 text-muted-foreground group-hover/section:bg-[#F1FDFA] active:cursor-grabbing"
        {...attributes}
        {...listeners}
      >
        <GripVertical className="size-4" />
      </Button>
    </li>
  );
}
