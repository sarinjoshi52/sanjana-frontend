"use client";

import { useState } from "react";
import { ExternalLink, Globe, Save } from "lucide-react";
import SidebarToggle from "@/components/editor/SidebarToggle";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEditorStore } from "@/lib/editor-store";

export default function Header() {
  const [published, setPublished] = useState(false);
  const [saved, setSaved] = useState(false);
  const saveDrafts = useEditorStore((state) => state.saveDrafts);
  const publishDrafts = useEditorStore((state) => state.publish);

  function handleSave() {
    saveDrafts();
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2000);
  }

  function handlePublish() {
    publishDrafts();
    setPublished(true);
    window.setTimeout(() => setPublished(false), 2000);
  }

  return (
    <header className="flex flex-row p-5 justify-between items-center border border-black/10">
      <div className="flex flex-row gap-5 items-center">
        <SidebarToggle />
        <Link href={"/"} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 hover:bg-transparent hover:shadow-lg rounded-lg"
          >
            <ExternalLink />
            View Website
          </Button>
        </Link>
      </div>

      <div className="flex flex-row gap-5">
        <Button
          variant="outline"
          size="lg"
          className="flex items-center gap-2 hover:bg-transparent hover:shadow-lg rounded-lg"
          onClick={handleSave}
        >
          <Save />
          {saved ? "Saved" : "Save Changes"}
        </Button>
        <Button
          variant="default"
          size="lg"
          className="flex items-center gap-2 hover:shadow-lg text-white font-bold rounded-lg"
          onClick={handlePublish}
        >
          <Globe />
          {published ? "Published" : "Publish"}
        </Button>
      </div>
    </header>
  );
}
