import { create } from "zustand";
import {
  defaultNavigationItems,
  publishEditorDrafts,
  readEditorDrafts,
  writeEditorDrafts,
  type EditorDrafts,
  type NavigationItem,
} from "@/lib/editor-storage";

type EditorStore = EditorDrafts & {
  hydrated: boolean;
  hydrate: () => void;
  setText: (key: string, value: string) => void;
  setField: (page: string, key: string, value: string) => void;
  setOrder: (page: string, order: string[]) => void;
  setNavigation: (items: NavigationItem[]) => void;
  saveDrafts: () => void;
  publish: () => void;
};

const emptyDrafts: EditorDrafts = {
  texts: {},
  fields: {},
  order: {},
  navigation: defaultNavigationItems,
};

function persistDrafts(drafts: EditorDrafts) {
  writeEditorDrafts(drafts);
}

export const useEditorStore = create<EditorStore>((set, get) => ({
  ...emptyDrafts,
  hydrated: false,

  hydrate: () => {
    if (get().hydrated || typeof window === "undefined") return;
    set({ ...readEditorDrafts(), hydrated: true });
  },

  setText: (key, value) => {
    const current = get();
    const drafts = { ...current, texts: { ...current.texts, [key]: value } };
    persistDrafts(drafts);
    set({ texts: drafts.texts });
  },

  setField: (page, key, value) => {
    const current = get();
    const pageFields = { ...(current.fields[page] ?? {}), [key]: value };
    const fields = { ...current.fields, [page]: pageFields };
    persistDrafts({ ...current, fields });
    set({ fields });
  },

  setOrder: (page, order) => {
    const current = get();
    const orders = { ...current.order, [page]: order };
    persistDrafts({ ...current, order: orders });
    set({ order: orders });
  },

  setNavigation: (navigation) => {
    const current = get();
    persistDrafts({ ...current, navigation });
    set({ navigation });
  },

  saveDrafts: () => {
    const { texts, fields, order, navigation } = get();
    persistDrafts({ texts, fields, order, navigation });
  },

  publish: () => {
    const { texts, fields, order, navigation } = get();
    publishEditorDrafts({ texts, fields, order, navigation });
  },
}));
