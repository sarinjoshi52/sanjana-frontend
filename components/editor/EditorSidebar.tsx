"use client";

import { useEffect, useMemo, useState } from "react";
import type { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { Sidebar } from "@/components/ui/sidebar";
import type { NavigationItem } from "@/lib/editor-storage";
import { useEditorStore } from "@/lib/editor-store";
import type { SitePageId } from "@/lib/site-pages";
import EditorSidebarHeader from "./editor-sidebar/EditorSidebarHeader";
import {
  createFields,
  rebuildOrder,
  updateFieldElement,
} from "./editor-sidebar/editor-fields";
import SectionList from "./editor-sidebar/SectionList";
import SelectedSectionPanel from "./editor-sidebar/SelectedSectionPanel";
import type { EditorField, EditorSection } from "./editor-sidebar/types";

export default function EditorSidebar({ page }: { page: SitePageId }) {
  const [sections, setSections] = useState<EditorSection[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [fields, setFields] = useState<EditorField[]>([]);
  const navigationItems = useEditorStore((state) => state.navigation);
  const hydrate = useEditorStore((state) => state.hydrate);
  const setFieldDraft = useEditorStore((state) => state.setField);
  const setSectionOrder = useEditorStore((state) => state.setOrder);
  const setNavigationDraft = useEditorStore((state) => state.setNavigation);

  useEffect(() => {
    hydrate();
    const preview = document.querySelector<HTMLElement>(
      "[data-editor-preview]"
    );
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
    const savedOrder = useEditorStore.getState().order[page] ?? [];
    const orderedMovable = [
      ...savedOrder
        .map((id) => movable.find((section) => section.id === id))
        .filter((section): section is EditorSection => Boolean(section)),
      ...movable.filter((section) => !savedOrder.includes(section.id)),
    ];

    if (orderedMovable.length > 0) {
      const parent = orderedMovable[0].element.parentElement;
      if (
        parent &&
        orderedMovable.every(
          (section) => section.element.parentElement === parent
        )
      ) {
        orderedMovable.forEach((section) => parent.appendChild(section.element));
      }
    }

    const savedFields = useEditorStore.getState().fields;
    for (const section of found) createFields(page, section, savedFields);

    const savedNavigation = useEditorStore.getState().navigation;
    const headerElement = found.find(
      (section) => section.id === "site-header"
    )?.element;
    const navigationSections = headerElement
      ? savedNavigation.map((item) => ({
          id: `navigation-${item.id}`,
          label: `Navigation: ${item.name}`,
          element: headerElement,
          fixed: true,
          navigationItemId: item.id,
        }))
      : [];

    setSections(
      rebuildOrder([...found, ...navigationSections], orderedMovable)
    );
    setSelectedId(null);
    setFields([]);
  }, [hydrate, page]);

  const selectedSection = useMemo(
    () => sections.find((section) => section.id === selectedId) ?? null,
    [sections, selectedId]
  );
  const selectedNavigationItem = navigationItems.find(
    (item) => item.id === selectedSection?.navigationItemId
  );

  useEffect(() => {
    setFields(
      selectedSection
        ? createFields(page, selectedSection, useEditorStore.getState().fields)
        : []
    );
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
    if (
      !parent ||
      !ordered.every((section) => section.element.parentElement === parent)
    ) {
      return;
    }

    ordered.forEach((section) => parent.appendChild(section.element));
    setSections((current) => rebuildOrder(current, ordered));
    setSectionOrder(page, ordered.map((section) => section.id));
  }

  function handleFieldChange(field: EditorField, value: string) {
    updateFieldElement(field, value);
    setFields((current) =>
      current.map((item) => (item.id === field.id ? { ...item, value } : item))
    );

    const storagePage = selectedSection?.fixed ? "shared" : page;
    setFieldDraft(storagePage, `${selectedId}:${field.id}`, value);
  }

  function saveNavigation(items: NavigationItem[]) {
    setNavigationDraft(items);
    const headerElement = sections.find(
      (section) => section.id === "site-header"
    )?.element;
    if (!headerElement) return;

    const pageSections = sections.filter(
      (section) => !section.navigationItemId
    );
    const navigationSections = items.map((item) => ({
      id: `navigation-${item.id}`,
      label: `Navigation: ${item.name}`,
      element: headerElement,
      fixed: true,
      navigationItemId: item.id,
    }));
    setSections([...pageSections, ...navigationSections]);
  }

  function updateNavigationItem(
    id: string,
    updates: Partial<NavigationItem>
  ) {
    saveNavigation(
      navigationItems.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      )
    );
  }

  function addNavigationItem() {
    const id = `menu-${Date.now()}`;
    const item = { id, name: "New link", href: "/" };
    saveNavigation([...navigationItems, item]);
    setSelectedId(`navigation-${id}`);
  }

  function removeNavigationItem(id: string) {
    saveNavigation(navigationItems.filter((item) => item.id !== id));
    setSelectedId("site-header");
  }

  return (
    <Sidebar className="shrink-0 border-r border-[#0c263f]/10 bg-[#f7f8f5]">
      <EditorSidebarHeader page={page} />
      {selectedSection ? (
        <SelectedSectionPanel
          selectedSection={selectedSection}
          selectedNavigationItem={selectedNavigationItem}
          sections={sections}
          navigationItems={navigationItems}
          fields={fields}
          onBack={() =>
            setSelectedId(
              selectedSection.navigationItemId ? "site-header" : null
            )
          }
          onSelectSection={setSelectedId}
          onUpdateNavigationItem={updateNavigationItem}
          onRemoveNavigationItem={removeNavigationItem}
          onAddNavigationItem={addNavigationItem}
          onFieldChange={handleFieldChange}
        />
      ) : (
        <SectionList
          sections={sections}
          selectedId={selectedId}
          onSelect={setSelectedId}
          onDragEnd={handleDragEnd}
        />
      )}
    </Sidebar>
  );
}
