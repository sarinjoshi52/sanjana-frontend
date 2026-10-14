"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menuItem, projects } from "@/data/project";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();
  return (
    <main data-aos="fade-in" className="flex flex-col gap-5 px-5 lg:px-30">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Projects & Engagements
        </h1>
        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-0 lg:items-center">
          <span className="text-xs text-muted-foreground">
            Delivering evidence-based knowledge solutions across diverse
            healthcare, corporate, and financial institutions.
          </span>
          <Tabs defaultValue="completed">
            <TabsList className="bg-transparent space-x-2 ">
              {menuItem.map((item, index) => (
                <TabsTrigger
                  value={item.name}
                  key={index}
                  className="bg-muted capitalize cursor-pointer text-xs text-muted-foreground hover:text-muted-foreground data-active:bg-black data-active:text-white data-active:hover:text-white"
                >
                  {item.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <Separator />
      </div>
      <div className="flex flex-col gap-5">
        {projects.map((project) => (
          <Card
            onClick={() => router.push(`project/${project.id}`)}
            className="cursor-pointer rounded-md shadow-none hover:shadow-md border-[#E2E8F0] border flex flex-col gap-5"
            key={project.id}
          >
            <CardHeader className="flex lg:flex-row flex-col gap-3 lg:gap-0 justify-between lg:items-center">
              <h3 className="font-bold text-lg">{project.title}</h3>
              <span className="px-5 py-1 text-xs w-full lg:w-fit font-bold rounded-sm bg-[#F1FDFA] border border-[#9AF6E5] text-primary-foreground">
                {project.organization}
              </span>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <p className="text-muted-foreground text-xs">
                {project.description}
              </p>

              {project.workDone.map((work, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary-foreground" />
                  <p className="text-primary-foreground font-bold text-xs">
                    {work}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
