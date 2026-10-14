"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { cardData } from "@/data/knowledge";

export default function Knowledge() {
  const router = useRouter();
  return (
    <main
      data-aos="fade-in"
      id="knowledge"
      className="flex flex-col gap-10 justify-center"
    >
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-bold text-3xl">Knowledge Services</h1>
        <p className="text-center text-sm text-[#475569] lg:w-1/2 px-5 lg:px-0">
          Serving with knowledge — generating, refining, and applying insights
          to enrich individual and organizational performance across six
          specialized pillars.
        </p>
      </div>

      <div className="flex flex-col px-5 lg:px-0 lg:flex-row lg:flex-wrap items-center justify-center gap-7">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="py-5 rounded-lg hover:shadow-md shadow-none transition-shadow duration-200 border-muted border w-full lg:w-[27%] h-65 lg:h-70 flex flex-col gap-3"
          >
            <CardHeader>
              <div
                className={`flex items-center justify-center p-5 w-12 h-12 rounded-lg`}
                style={{ backgroundColor: `${card.bgcolor}` }}
              >
                <span
                  className={`uppercase font-bold text-xl`}
                  style={{ color: `${card.color}` }}
                >
                  {card.name}
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <h2 className="text-lg font-bold">{card.title}</h2>
              <p className="text-xs text-muted-foreground leading-5">
                {card.description}
              </p>
            </CardContent>

            <div className="flex flex-col gap-5 mt-auto">
              <Separator className="w-[80%]! mx-auto bg-[#F1F5F9]" />

              <CardFooter className="">
                <Button
                  variant="ghost"
                  onClick={() => router.push(`/knowledge/${card.slug}`)}
                  className="hover:scale-102 hover:border hover:border-primary-foreground rounded-lg  transition-all duration-300 flex w-full justify-between text-primary-foreground text-xs font-bold"
                >
                  {card.cta}
                  <ArrowRight className="w-4 h-4 hover:translate-x-1  transition-all duration-300" />
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
