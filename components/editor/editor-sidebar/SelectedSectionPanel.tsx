"use client";

import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { NavigationItem } from "@/lib/editor-storage";
import { sitePages } from "@/lib/site-pages";
import type { EditorField, EditorSection } from "./types";

type Props = {
  selectedSection: EditorSection;
  selectedNavigationItem?: NavigationItem;
  sections: EditorSection[];
  navigationItems: NavigationItem[];
  fields: EditorField[];
  onBack: () => void;
  onSelectSection: (id: string) => void;
  onUpdateNavigationItem: (
    id: string,
    updates: Partial<NavigationItem>
  ) => void;
  onRemoveNavigationItem: (id: string) => void;
  onAddNavigationItem: () => void;
  onFieldChange: (field: EditorField, value: string) => void;
};

function SectionCard({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-[#2b9d8f]/15 bg-white p-3.5 shadow-sm">
      <p className="mb-1 text-[10px] font-bold tracking-[0.14em] text-[#19766d] uppercase">
        {eyebrow}
      </p>
      <h3 className="text-base font-semibold text-[#0c263f]">{title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-[#64748b]">
        {description}
      </p>
    </div>
  );
}

export default function SelectedSectionPanel({
  selectedSection,
  selectedNavigationItem,
  sections,
  navigationItems,
  fields,
  onBack,
  onSelectSection,
  onUpdateNavigationItem,
  onRemoveNavigationItem,
  onAddNavigationItem,
  onFieldChange,
}: Props) {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4 py-4">
      <Button
        type="button"
        variant="ghost"
        className="w-fit px-2 text-[#0c263f] hover:bg-transparent hover:text-[#19766d]"
        onClick={onBack}
      >
        <ArrowLeft className="size-4" />
        All sections
      </Button>

      {selectedNavigationItem ? (
        <>
          <SectionCard
            eyebrow="Navigation link"
            title={selectedSection.label}
            description="Set the menu label and the page it opens."
          />
          <Label className="flex flex-col gap-2 text-sm text-[#0c263f]">
            <span className="font-semibold">Menu label</span>
            <Input
              value={selectedNavigationItem.name}
              onChange={(event) =>
                onUpdateNavigationItem(selectedNavigationItem.id, {
                  name: event.target.value,
                })
              }
              className="h-10 rounded-lg border-[#dce3e6] bg-white text-sm text-[#0c263f] focus-visible:border-[#2b9d8f] focus-visible:ring-[#2b9d8f]/20"
            />
          </Label>
          <Label className="flex flex-col gap-2 text-sm text-[#0c263f]">
            <span className="font-semibold">Link to page</span>
            <Select
              items={sitePages.map(({ label, path }) => ({
                label,
                value: path,
              }))}
              value={selectedNavigationItem.href}
              onValueChange={(value) => {
                if (value) {
                  onUpdateNavigationItem(selectedNavigationItem.id, {
                    href: value,
                  });
                }
              }}
            >
              <SelectTrigger
                aria-label="Link to page"
                className="h-10 rounded-lg border-[#dce3e6] bg-[#f7f8f5] text-sm text-[#0c263f] shadow-sm hover:border-[#2b9d8f]/50 focus-visible:border-[#2b9d8f] focus-visible:ring-[#2b9d8f]/20"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sitePages.map((sitePage) => (
                  <SelectItem key={sitePage.id} value={sitePage.path}>
                    {sitePage.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Label>
          <Button
            type="button"
            variant="destructive"
            className="mt-1 w-fit"
            onClick={() => onRemoveNavigationItem(selectedNavigationItem.id)}
          >
            <Trash2 className="size-4" />
            Remove link
          </Button>
        </>
      ) : selectedSection.id === "site-header" ? (
        <>
          <SectionCard
            eyebrow="Shared site area"
            title="Site header"
            description="Manage the links shown in the navigation menu."
          />
          <div className="flex flex-col gap-1 rounded-xl border border-[#0c263f]/10 bg-white p-2 shadow-sm">
            {sections
              .filter((section) => section.navigationItemId)
              .map((section) => (
                <Button
                  key={section.id}
                  type="button"
                  onClick={() => onSelectSection(section.id)}
                  variant="ghost"
                  className="h-auto justify-start rounded-lg px-3 py-2.5 text-left text-sm text-[#0c263f] hover:bg-[#F1FDFA] hover:text-[#176b63]"
                >
                  {section.label.replace("Navigation: ", "")}
                </Button>
              ))}
            {navigationItems.length === 0 && (
              <p className="px-3 py-2 text-xs text-muted-foreground">
                No navigation links yet.
              </p>
            )}
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={onAddNavigationItem}
          >
            <Plus className="size-4" />
            Add navigation link
          </Button>
        </>
      ) : (
        <>
          <SectionCard
            eyebrow="Editing section"
            title={selectedSection.label}
            description="Edit text and control labels in this section."
          />
          <div className="flex flex-col gap-3">
            {fields.map((field) => (
              <Label
                key={field.id}
                className="flex flex-col gap-2 text-sm text-[#0c263f]"
              >
                <span className="font-semibold">{field.label}</span>
                {field.kind === "checked" ? (
                  <input
                    type="checkbox"
                    checked={field.value === "true"}
                    onChange={(event) =>
                      onFieldChange(field, String(event.target.checked))
                    }
                    className="size-4 accent-[#19766d]"
                  />
                ) : field.kind === "text" ? (
                  <Textarea
                    value={field.value}
                    onChange={(event) => onFieldChange(field, event.target.value)}
                    className="min-h-24 rounded-lg border-[#dce3e6] bg-white text-sm focus-visible:border-[#2b9d8f] focus-visible:ring-[#2b9d8f]/20"
                  />
                ) : (
                  <Input
                    value={field.value}
                    onChange={(event) => onFieldChange(field, event.target.value)}
                    className="h-10 rounded-lg border-[#dce3e6] bg-white text-sm focus-visible:border-[#2b9d8f] focus-visible:ring-[#2b9d8f]/20"
                  />
                )}
              </Label>
            ))}
            {fields.length === 0 && (
              <p className="text-xs text-muted-foreground">
                This section has no editable text fields.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
