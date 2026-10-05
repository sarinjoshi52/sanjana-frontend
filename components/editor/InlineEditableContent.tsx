"use client";

import {
  useEffect,
  useRef,
  type FormEvent,
  type ReactNode,
} from "react";
import type { SitePageId } from "@/lib/site-pages";

const DRAFT_STORAGE_KEY = "sanjana-editor-text-drafts";
const FUNCTIONAL_CONTENT_SELECTOR =
  "a, button, input, textarea, select, option, label, form, nav, summary, [role='button'], [role='tab'], [role='link'], [role='menuitem'], [role='checkbox'], [role='switch'], [role='combobox'], [role='textbox']";

type TextDrafts = Record<string, string>;

function readDrafts(): TextDrafts {
  try {
    const value: unknown = JSON.parse(
      localStorage.getItem(DRAFT_STORAGE_KEY) ?? "{}"
    );
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return value as TextDrafts;
    }
  } catch {
    // Start with an empty draft if saved browser data is unreadable.
  }
  return {};
}

function getElementPath(scope: HTMLElement, element: HTMLElement) {
  const path: number[] = [];
  let current: Node = element;

  while (current !== scope) {
    const parent = current.parentNode;
    if (!parent) return null;
    path.unshift(Array.prototype.indexOf.call(parent.childNodes, current));
    current = parent;
  }

  return path.join(".");
}

function getScope(element: HTMLElement, root: HTMLElement) {
  const section = element.closest<HTMLElement>("[data-editor-section]");
  if (section && section.dataset.editorLocked !== "true") {
    return {
      scope: section,
      keyPrefix: `${root.dataset.page}:${section.dataset.editorSection}:`,
    };
  }

  const scope = element.closest<HTMLElement>("[data-inline-scope]") ?? root;
  const scopeName = scope.dataset.inlineScope ?? "page";
  const pageSpecific = scopeName === "page" ? `${root.dataset.page}:` : "";

  return { scope, keyPrefix: `${pageSpecific}${scopeName}:` };
}

export default function InlineEditableContent({
  children,
  page,
}: {
  children: ReactNode;
  page: SitePageId;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    root.dataset.page = page;
    const drafts = readDrafts();

    for (const element of root.querySelectorAll<HTMLElement>("*")) {
      if (element.closest(FUNCTIONAL_CONTENT_SELECTOR)) {
        delete element.dataset.inlineEditKey;
        delete element.dataset.inlineEditable;
        element.removeAttribute("contenteditable");
        continue;
      }

      if (
        element.closest("svg") ||
        ["SCRIPT", "STYLE", "INPUT", "TEXTAREA", "SELECT"].includes(
          element.tagName
        )
      ) {
        continue;
      }

      const hasElementChild = Array.from(element.childNodes).some(
        (node) => node.nodeType === Node.ELEMENT_NODE
      );
      if (hasElementChild || !element.textContent?.trim()) continue;

      const { scope, keyPrefix } = getScope(element, root);
      const path = getElementPath(scope, element);
      if (path === null) continue;

      const draftKey = `${keyPrefix}${path}`;
      element.dataset.inlineEditKey = draftKey;
      element.dataset.inlineEditable = "true";
      element.contentEditable = "true";
      element.spellcheck = true;

      if (drafts[draftKey] !== undefined) {
        element.textContent = drafts[draftKey];
      }
    }
  }, [page]);

  function saveEditedText(event: FormEvent<HTMLDivElement>) {
    const element = (event.target as HTMLElement).closest<HTMLElement>(
      "[data-inline-edit-key]"
    );
    const key = element?.dataset.inlineEditKey;
    if (!element || !key) return;

    const drafts = readDrafts();
    drafts[key] = element.innerText;
    localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(drafts));
  }

  return (
    <div ref={rootRef} onInput={saveEditedText}>
      {children}
    </div>
  );
}
