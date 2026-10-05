"use client";

import { useEffect, useMemo, useState } from "react";
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
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ArrowLeft, GripVertical } from "lucide-react";
import PageSelect from "@/components/editor/PageSelect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sidebar, SidebarHeader } from "@/components/ui/sidebar";
import { Textarea } from "@/components/ui/textarea";
import type { SitePageId } from "@/lib/site-pages";

const ORDER_STORAGE_KEY = "sanjana-editor-section-order";
const FIELD_STORAGE_KEY = "sanjana-editor-section-fields";

type EditorSection = {
  id: string;
  label: string;
  element: HTMLElement;
  fixed: boolean;
};

type EditorField = {
  id: string;
  label: string;
  value: string;
  kind: "text" | "placeholder" | "value" | "checked";
  element: HTMLElement;
};

function readStorage<T extends object>(key: string, fallback: T): T {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(key) ?? "{}");
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return value as T;
    }
  } catch {
    // An unreadable local draft is treated as an empty draft.
  }
  return fallback;
}

function elementPath(root: HTMLElement, element: HTMLElement) {
  const path: number[] = [];
  let current: Node = element;

  while (current !== root) {
    const parent = current.parentNode;
    if (!parent) return null;
    path.unshift(Array.prototype.indexOf.call(parent.childNodes, current));
    current = parent;
  }

  return path.join(".");
}

function createFields(page: SitePageId, section: EditorSection): EditorField[] {
  const elements = [
    section.element,
    ...Array.from(section.element.querySelectorAll<HTMLElement>("*")),
  ];
  const fields: EditorField[] = [];
  let textNumber = 0;

  function addField(element: HTMLElement, kind: EditorField["kind"], value: string) {
    const path = elementPath(section.element, element);
    if (path === null) return;

    const tagName = element.tagName.toLowerCase();
    const label =
      element.dataset.editorFieldLabel ??
      (kind === "placeholder"
        ? "Placeholder"
        : kind === "value"
          ? "Default value"
          : kind === "checked"
            ? "Checked"
            : ["h1", "h2", "h3", "h4"].includes(tagName)
              ? "Heading"
              : tagName === "button"
                ? "Button label"
                : `Text ${++textNumber}`);
    fields.push({
      id: `${section.id}:${path}:${kind}`,
      label,
      value,
      kind,
      element,
    });
  }

  for (const element of elements) {
    if (element.closest("svg, script, style")) continue;

    if (element instanceof HTMLInputElement) {
      if (element.placeholder) addField(element, "placeholder", element.placeholder);
      if (element.type === "checkbox" || element.type === "radio") {
        addField(element, "checked", String(element.checked));
      } else {
        addField(element, "value", element.value);
      }
      continue;
    }

    if (element instanceof HTMLTextAreaElement) {
      addField(element, "placeholder", element.placeholder);
      addField(element, "value", element.value);
      continue;
    }

    if (element instanceof HTMLSelectElement) {
      addField(element, "value", element.value);
      continue;
    }

    const hasElementChild = Array.from(element.childNodes).some(
      (node) => node.nodeType === Node.ELEMENT_NODE
    );
    if (hasElementChild || !element.textContent?.trim()) continue;
    addField(element, "text", element.innerText);
  }

  const stored =
    readStorage<Record<string, Record<string, string>>>(FIELD_STORAGE_KEY, {})[
      page
    ] ?? {};
  for (const field of fields) {
    const storedValue = stored[`${section.id}:${field.id}`];
    if (storedValue !== undefined) {
      updateFieldElement(field, storedValue);
      field.value = storedValue;
    }
  }

  return fields;
}

function updateFieldElement(field: EditorField, value: string) {
  if (field.kind === "text") {
    field.element.textContent = value;
    if (field.element.dataset.inlineEditKey) {
      field.element.dispatchEvent(new Event("input", { bubbles: true }));
    }
  } else if (field.kind === "placeholder") {
    field.element.setAttribute("placeholder", value);
  } else if (field.kind === "checked" && field.element instanceof HTMLInputElement) {
    field.element.checked = value === "true";
  } else if (field.kind === "value") {
    if (
      field.element instanceof HTMLInputElement ||
      field.element instanceof HTMLTextAreaElement ||
      field.element instanceof HTMLSelectElement
    ) {
      field.element.value = value;
    }
  }
}

function rebuildOrder(
  sections: EditorSection[],
  orderedMovable: EditorSection[]
) {
  const firstMovableIndex = sections.findIndex((section) => !section.fixed);
  if (firstMovableIndex < 0) return sections;
  const movableCount = sections.filter((section) => !section.fixed).length;

  return [
    ...sections.slice(0, firstMovableIndex),
    ...orderedMovable,
    ...sections.slice(firstMovableIndex + movableCount),
  ];
}

function SortableSection({
  section,
  selected,
  onSelect,
}: {
  section: EditorSection;
  selected: boolean;
  onSelect: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: section.id });

  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={`flex items-center rounded-md border ${
        isDragging ? "z-10 opacity-60" : ""
      } ${selected ? "border-primary bg-muted" : "border-transparent"}`}
    >
      <button
        type="button"
        onClick={onSelect}
        className="min-w-0 flex-1 px-3 py-2 text-left text-sm hover:text-primary-foreground"
      >
        <span className="block truncate">{section.label}</span>
      </button>
      <button
        type="button"
        aria-label={`Reorder ${section.label}`}
        className="cursor-grab px-2 py-2 text-muted-foreground active:cursor-grabbing"
        {...attributes}
        {...listeners}
      >
        <GripVertical className="size-4" />
      </button>
    </li>
  );
}

export default function EditorSidebar({ page }: { page: SitePageId }) {
  const [sections, setSections] = useState<EditorSection[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [fields, setFields] = useState<EditorField[]>([]);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  useEffect(() => {
    const preview = document.querySelector<HTMLElement>("[data-editor-preview]");
    if (!preview) return;

    const found = Array.from(
      preview.querySelectorAll<HTMLElement>("[data-editor-section]")
    ).map((element) => ({
      id: element.dataset.editorSection!,
      label: element.dataset.editorLabel ?? "Untitled section",
      element,
      fixed: element.dataset.editorLocked === "true",
    }));
    const movable = found.filter((section) => !section.fixed);
    const savedOrders = readStorage<Record<string, string[]>>(
      ORDER_STORAGE_KEY,
      {}
    );
    const savedOrder = savedOrders[page] ?? [];
    const orderedMovable = [
      ...savedOrder
        .map((id) => movable.find((section) => section.id === id))
        .filter((section): section is EditorSection => Boolean(section)),
      ...movable.filter((section) => !savedOrder.includes(section.id)),
    ];

    if (orderedMovable.length > 0) {
      const parent = orderedMovable[0].element.parentElement;
      if (parent && orderedMovable.every((section) => section.element.parentElement === parent)) {
        orderedMovable.forEach((section) => parent.appendChild(section.element));
      }
    }

    for (const section of found) {
      createFields(page, section);
    }

    setSections(rebuildOrder(found, orderedMovable));
    setSelectedId(null);
    setFields([]);
  }, [page]);

  const selectedSection = useMemo(
    () => sections.find((section) => section.id === selectedId) ?? null,
    [sections, selectedId]
  );

  useEffect(() => {
    setFields(selectedSection ? createFields(page, selectedSection) : []);
  }, [page, selectedSection]);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const movable = sections.filter((section) => !section.fixed);
    const oldIndex = movable.findIndex((section) => section.id === active.id);
    const newIndex = movable.findIndex((section) => section.id === over.id);
    if (oldIndex < 0 || newIndex < 0) return;

    const ordered = arrayMove(movable, oldIndex, newIndex);
    const parent = ordered[0]?.element.parentElement;
    if (!parent || !ordered.every((section) => section.element.parentElement === parent)) {
      return;
    }

    ordered.forEach((section) => parent.appendChild(section.element));
    setSections((current) => rebuildOrder(current, ordered));
    const savedOrders = readStorage<Record<string, string[]>>(
      ORDER_STORAGE_KEY,
      {}
    );
    savedOrders[page] = ordered.map((section) => section.id);
    localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(savedOrders));
  }

  function handleFieldChange(field: EditorField, value: string) {
    updateFieldElement(field, value);
    setFields((current) =>
      current.map((item) => (item.id === field.id ? { ...item, value } : item))
    );

    const storedValues = readStorage<Record<string, Record<string, string>>>(
      FIELD_STORAGE_KEY,
      {}
    );
    const pageValues = storedValues[page] ?? {};
    pageValues[`${selectedId}:${field.id}`] = value;
    storedValues[page] = pageValues;
    localStorage.setItem(FIELD_STORAGE_KEY, JSON.stringify(storedValues));
  }

  return (
    <Sidebar className="shrink-0 border-r bg-white">
      <SidebarHeader className="p-5">
        <h2 className="text-sm font-bold">Editor</h2>
        <PageSelect page={page} />
      </SidebarHeader>

      {selectedSection ? (
        <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 pb-5">
          <Button
            type="button"
            variant="ghost"
            className="w-fit px-2"
            onClick={() => setSelectedId(null)}
          >
            <ArrowLeft className="size-4" />
            All sections
          </Button>
          <div>
            <h3 className="text-sm font-bold">{selectedSection.label}</h3>
            <p className="text-xs text-muted-foreground">
              Edit text and control labels in this section.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {fields.map((field) => (
              <label key={field.id} className="flex flex-col gap-1.5 text-xs">
                <span className="font-semibold">
                  {field.label}
                </span>
                {field.kind === "checked" ? (
                  <input
                    type="checkbox"
                    checked={field.value === "true"}
                    onChange={(event) =>
                      handleFieldChange(field, String(event.target.checked))
                    }
                    className="size-4 accent-primary"
                  />
                ) : field.kind === "text" ? (
                  <Textarea
                    value={field.value}
                    onChange={(event) =>
                      handleFieldChange(field, event.target.value)
                    }
                    className="min-h-20 text-xs"
                  />
                ) : (
                  <Input
                    value={field.value}
                    onChange={(event) =>
                      handleFieldChange(field, event.target.value)
                    }
                    className="h-9 text-xs"
                  />
                )}
              </label>
            ))}
            {fields.length === 0 && (
              <p className="text-xs text-muted-foreground">
                This section has no editable text fields.
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-5">
          <p className="mb-2 px-1 text-xs text-muted-foreground">
            Drag page sections to reorder. The shared site chrome stays fixed. Select a section to edit its contents.
          </p>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={sections.filter((section) => !section.fixed).map((section) => section.id)}
              strategy={verticalListSortingStrategy}
            >
              <ul className="flex flex-col gap-1">
                {sections.map((section) =>
                  section.fixed ? (
                    <li key={section.id}>
                      <button
                        type="button"
                        onClick={() => setSelectedId(section.id)}
                        className="w-full rounded-md px-3 py-2 text-left text-sm text-muted-foreground hover:bg-muted"
                      >
                        {section.label}
                      </button>
                    </li>
                  ) : (
                    <SortableSection
                      key={section.id}
                      section={section}
                      selected={section.id === selectedId}
                      onSelect={() => setSelectedId(section.id)}
                    />
                  )
                )}
              </ul>
            </SortableContext>
          </DndContext>
        </div>
      )}
    </Sidebar>
  );
}
