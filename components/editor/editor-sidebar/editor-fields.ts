import type { SitePageId } from "@/lib/site-pages";
import type { EditorField, EditorSection } from "./types";

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

export function createFields(
  page: SitePageId,
  section: EditorSection,
  savedFields: Record<string, Record<string, string>>
): EditorField[] {
  const elements = [
    section.element,
    ...Array.from(section.element.querySelectorAll<HTMLElement>("*")),
  ];
  const fields: EditorField[] = [];
  let textNumber = 0;

  function addField(
    element: HTMLElement,
    kind: EditorField["kind"],
    value: string
  ) {
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
      if (element.placeholder) {
        addField(element, "placeholder", element.placeholder);
      }
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

  const storagePage = section.fixed ? "shared" : page;
  const stored = savedFields[storagePage] ?? {};
  for (const field of fields) {
    const storedValue = stored[`${section.id}:${field.id}`];
    if (storedValue !== undefined) {
      updateFieldElement(field, storedValue);
      field.value = storedValue;
    }
  }

  return fields;
}

export function updateFieldElement(field: EditorField, value: string) {
  if (field.kind === "text") {
    field.element.textContent = value;
    if (field.element.dataset.inlineEditKey) {
      field.element.dispatchEvent(new Event("input", { bubbles: true }));
    }
  } else if (field.kind === "placeholder") {
    field.element.setAttribute("placeholder", value);
  } else if (
    field.kind === "checked" &&
    field.element instanceof HTMLInputElement
  ) {
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

export function rebuildOrder(
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
