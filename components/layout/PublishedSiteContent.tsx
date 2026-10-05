"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, type ReactNode } from "react";
import {
  editorStorageKeys,
  readPublishedSiteData,
  type PublishedSiteData,
} from "@/lib/editor-storage";
import { sitePages } from "@/lib/site-pages";

const FUNCTIONAL_SELECTOR =
  "a, button, input, textarea, select, option, label, form, nav, summary, [role='button'], [role='tab'], [role='link'], [role='menuitem'], [role='checkbox'], [role='switch'], [role='combobox'], [role='textbox']";

function nodePath(root: HTMLElement, element: HTMLElement) {
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

function applySectionOrder(root: HTMLElement, order: string[]) {
  const sections = Array.from(
    root.querySelectorAll<HTMLElement>("[data-editor-section]")
  ).filter((section) => section.dataset.editorLocked !== "true");
  const sectionById = new Map(
    sections.map((section) => [section.dataset.editorSection!, section])
  );
  const ordered = [
    ...order.map((id) => sectionById.get(id)).filter((item): item is HTMLElement => !!item),
    ...sections.filter((section) => !order.includes(section.dataset.editorSection!)),
  ];

  if (!ordered.length) return;
  const parent = ordered[0].parentElement;
  if (parent && ordered.every((section) => section.parentElement === parent)) {
    ordered.forEach((section) => parent.appendChild(section));
  }
}

function applySidebarFields(
  root: HTMLElement,
  pageId: string,
  fieldsByPage: PublishedSiteData["fields"]
) {
  const sections = Array.from(
    root.querySelectorAll<HTMLElement>("[data-editor-section]")
  );

  for (const section of sections) {
    const sectionId = section.dataset.editorSection;
    if (!sectionId) continue;
    const storagePage =
      section.dataset.editorLocked === "true" ? "shared" : pageId;
    const stored = fieldsByPage[storagePage] ?? {};
    const elements = [section, ...Array.from(section.querySelectorAll<HTMLElement>("*"))];

    for (const element of elements) {
      const path = nodePath(section, element);
      if (path === null) continue;
      const tag = element.tagName.toLowerCase();
      const fieldValues: Array<[string, (value: string) => void]> = [];

      if (element instanceof HTMLInputElement) {
        fieldValues.push(["value", (value) => { element.value = value; }]);
        fieldValues.push(["placeholder", (value) => { element.placeholder = value; }]);
        fieldValues.push(["checked", (value) => { element.checked = value === "true"; }]);
      } else if (element instanceof HTMLTextAreaElement) {
        fieldValues.push(["value", (value) => { element.value = value; }]);
        fieldValues.push(["placeholder", (value) => { element.placeholder = value; }]);
      } else if (element instanceof HTMLSelectElement) {
        fieldValues.push(["value", (value) => { element.value = value; }]);
      } else if (
        !element.closest("svg, script, style") &&
        !Array.from(element.childNodes).some((node) => node.nodeType === Node.ELEMENT_NODE) &&
        element.textContent?.trim()
      ) {
        fieldValues.push(["text", (value) => { element.textContent = value; }]);
      }

      for (const [kind, setValue] of fieldValues) {
        const fieldId = `${sectionId}:${path}:${kind}`;
        const storedValue = stored[`${sectionId}:${fieldId}`];
        if (storedValue !== undefined) setValue(storedValue);
      }
    }
  }
}

function applyInlineTextDrafts(
  root: HTMLElement,
  pageId: string,
  textDrafts: PublishedSiteData["texts"]
) {
  const pageSections = Array.from(
    root.querySelectorAll<HTMLElement>("[data-editor-section]")
  ).filter((section) => section.dataset.editorLocked !== "true");

  for (const section of pageSections) {
    const sectionId = section.dataset.editorSection;
    if (!sectionId) continue;
    applyTextWithinScope(
      section,
      `${pageId}:${sectionId}:`,
      textDrafts,
      (element) => !element.closest(FUNCTIONAL_SELECTOR)
    );
  }

  const sharedScopes = Array.from(
    root.querySelectorAll<HTMLElement>("[data-inline-scope]")
  );
  for (const scope of sharedScopes) {
    const scopeName = scope.dataset.inlineScope;
    if (!scopeName) continue;
    applyTextWithinScope(scope, `${scopeName}:`, textDrafts);
  }
}

function applyTextWithinScope(
  scope: HTMLElement,
  prefix: string,
  drafts: PublishedSiteData["texts"],
  shouldApply: (element: HTMLElement) => boolean = () => true
) {
  const elements = Array.from(scope.querySelectorAll<HTMLElement>("*"));
  for (const element of elements) {
    if (
      !shouldApply(element) ||
      element.closest("svg, script, style") ||
      ["INPUT", "TEXTAREA", "SELECT"].includes(element.tagName) ||
      Array.from(element.childNodes).some((node) => node.nodeType === Node.ELEMENT_NODE) ||
      !element.textContent?.trim()
    ) {
      continue;
    }

    const path = nodePath(scope, element);
    if (path === null) continue;
    const value = drafts[`${prefix}${path}`];
    if (value !== undefined) element.textContent = value;
  }
}

export default function PublishedSiteContent({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const applyPublishedContent = useCallback(() => {
    const root = document.querySelector<HTMLElement>("[data-published-site]");
    if (!root) return;

    const pageId = sitePages.find((page) => page.path === pathname)?.id;
    if (!pageId) return;
    const data = readPublishedSiteData();

    applySectionOrder(root, data.order[pageId] ?? []);
    applySidebarFields(root, pageId, data.fields);
    applyInlineTextDrafts(root, pageId, data.texts);
  }, [pathname]);

  useEffect(() => {
    applyPublishedContent();
    const handleStorage = (event: StorageEvent) => {
      if (event.key === editorStorageKeys.publishedSite) applyPublishedContent();
    };
    window.addEventListener("sanjana-published-site-updated", applyPublishedContent);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("sanjana-published-site-updated", applyPublishedContent);
      window.removeEventListener("storage", handleStorage);
    };
  }, [applyPublishedContent]);

  return <div data-published-site>{children}</div>;
}
