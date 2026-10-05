export type EditorSection = {
  id: string;
  label: string;
  element: HTMLElement;
  fixed: boolean;
  navigationItemId?: string;
};

export type EditorField = {
  id: string;
  label: string;
  value: string;
  kind: "text" | "placeholder" | "value" | "checked";
  element: HTMLElement;
};
