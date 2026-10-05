export type HomePageSection =
  | {
      id: "hero";
      type: "hero";
      eyebrow: string;
      title: string;
      description: string;
    }
  | { id: "overview"; type: "overview" }
  | { id: "who-we-are"; type: "who-we-are" }
  | { id: "organization"; type: "organization" }
  | { id: "resources"; type: "resources" };

// This list controls which sections appear and the order they appear in.
export const homePageSections: HomePageSection[] = [
  {
    id: "hero",
    type: "hero",
    eyebrow: "Institution Knowledge Leadership",
    title: "Advancing Transformative Perspectives, Power & Potential",
    description:
      "SañJñāNā Development Pvt. Ltd. aims to strengthen institutions, knowledge, and leadership through crystallized and evidence-based knowledge services for sustained developmental impact.",
  },
  { id: "overview", type: "overview" },
  { id: "who-we-are", type: "who-we-are" },
  { id: "organization", type: "organization" },
  { id: "resources", type: "resources" },
];
