export const sitePages = [
  { id: "home", label: "Home", path: "/" },
  { id: "knowledge", label: "Knowledge Services", path: "/knowledge" },
  { id: "project", label: "Projects", path: "/project" },
  { id: "publications", label: "Publications", path: "/publications" },
  { id: "knowledge-bank", label: "Knowledge Bank", path: "/knowledge-bank" },
  { id: "contact", label: "Contact", path: "/contact" },
];

export type SitePageId = (typeof sitePages)[number]["id"];

export function isSitePageId(value: string | undefined): value is SitePageId {
  return sitePages.some((page) => page.id === value);
}
