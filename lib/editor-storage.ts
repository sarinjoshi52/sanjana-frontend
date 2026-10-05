export const editorStorageKeys = {
  textDrafts: "sanjana-editor-text-drafts",
  fieldDrafts: "sanjana-editor-section-fields",
  sectionOrder: "sanjana-editor-section-order",
  navigationDrafts: "sanjana-editor-navigation-drafts",
  publishedSite: "sanjana-published-site-data",
} as const;

export type NavigationItem = {
  id: string;
  name: string;
  href: string;
};

export const defaultNavigationItems: NavigationItem[] = [
  { id: "about", name: "About", href: "/" },
  { id: "knowledge", name: "Knowledge Service", href: "/knowledge" },
  { id: "projects", name: "Projects", href: "/project" },
  { id: "publications", name: "Publications", href: "/publications" },
  { id: "knowledge-bank", name: "Knowledge Bank", href: "/knowledge-bank" },
  { id: "contact", name: "Contact", href: "/contact" },
];

export type PublishedSiteData = {
  texts: Record<string, string>;
  fields: Record<string, Record<string, string>>;
  order: Record<string, string[]>;
  navigation: NavigationItem[];
};

export type EditorDrafts = PublishedSiteData;

function readJson<T>(key: string, fallback: T): T {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(key) ?? "null");
    return parsed && typeof parsed === "object" ? (parsed as T) : fallback;
  } catch {
    return fallback;
  }
}

export function readPublishedSiteData(): PublishedSiteData {
  const saved = readJson<Partial<PublishedSiteData>>(
    editorStorageKeys.publishedSite,
    {}
  );
  return {
    ...saved,
    texts: saved.texts ?? {},
    fields: saved.fields ?? {},
    order: saved.order ?? {},
    navigation: saved.navigation ?? defaultNavigationItems,
  };
}

export function readNavigationDrafts(): NavigationItem[] {
  const value = readJson<unknown>(editorStorageKeys.navigationDrafts, null);
  return Array.isArray(value) ? (value as NavigationItem[]) : defaultNavigationItems;
}

export function readEditorDrafts(): EditorDrafts {
  return {
    texts: readJson(editorStorageKeys.textDrafts, {}),
    fields: readJson(editorStorageKeys.fieldDrafts, {}),
    order: readJson(editorStorageKeys.sectionOrder, {}),
    navigation: readNavigationDrafts(),
  };
}

export function writeEditorDrafts(drafts: EditorDrafts) {
  localStorage.setItem(editorStorageKeys.textDrafts, JSON.stringify(drafts.texts));
  localStorage.setItem(editorStorageKeys.fieldDrafts, JSON.stringify(drafts.fields));
  localStorage.setItem(editorStorageKeys.sectionOrder, JSON.stringify(drafts.order));
  localStorage.setItem(
    editorStorageKeys.navigationDrafts,
    JSON.stringify(drafts.navigation)
  );
}

export function publishEditorDrafts(drafts = readEditorDrafts()) {
  localStorage.setItem(editorStorageKeys.publishedSite, JSON.stringify(drafts));
  window.dispatchEvent(new Event("sanjana-published-site-updated"));
}
