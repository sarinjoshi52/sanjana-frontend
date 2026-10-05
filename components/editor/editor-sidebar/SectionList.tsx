"use client";

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import SortableSection from "./SortableSection";
import type { EditorSection } from "./types";

export default function SectionList({
  sections,
  selectedId,
  onSelect,
  onDragEnd,
}: {
  sections: EditorSection[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onDragEnd: (event: DragEndEvent) => void;
}) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );
  const pageSections = sections.filter((section) => !section.navigationItemId);

  return (
    <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
      <div className="mb-3 flex items-center justify-between px-1">
        <h3 className="text-sm font-semibold text-[#0c263f]">Page sections</h3>
        <span className="rounded-full bg-[#e4efeb] px-2 py-0.5 text-[10px] font-semibold text-[#176b63]">
          {pageSections.length}
        </span>
      </div>
      <div className="mb-4 rounded-xl border border-[#2b9d8f]/15 bg-[#F1FDFA] p-3.5">
        <p className="text-xs leading-relaxed text-[#0c263f]/75">
          Drag rows to reorder. Shared site chrome stays fixed. Select a section
          to edit its contents.
        </p>
      </div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={onDragEnd}
      >
        <SortableContext
          items={sections
            .filter((section) => !section.fixed)
            .map((section) => section.id)}
          strategy={verticalListSortingStrategy}
        >
          <ul className="flex flex-col gap-1">
            {pageSections.map((section) =>
              section.fixed ? (
                <li key={section.id}>
                  <Button
                    type="button"
                    onClick={() => onSelect(section.id)}
                    variant="ghost"
                    className="h-auto w-full justify-start gap-2 rounded-md border px-3 py-2 text-left text-base hover:border-primary-foreground hover:bg-[#F1FDFA] hover:text-primary-foreground"
                  >
                    <Lock className="size-4 shrink-0" aria-hidden="true" />
                    {section.label}
                  </Button>
                </li>
              ) : (
                <SortableSection
                  key={section.id}
                  section={section}
                  selected={section.id === selectedId}
                  onSelect={() => onSelect(section.id)}
                />
              )
            )}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  );
}
