"use client";

import { useCallback, useEffect, useState } from "react";
import ImagePlaceholder from "@/components/common/ImagePlaceholder";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { UseEmblaCarouselType } from "embla-carousel-react";

type Api = UseEmblaCarouselType[1];

export default function TeamCarousel({
  images,
  label,
}: {
  images?: string[];
  label: string;
}) {
  const [api, setApi] = useState<Api>();
  const [selected, setSelected] = useState(0);
  const slides = images && images.length > 0 ? images : [null, null, null];

  const onSelect = useCallback((a: NonNullable<Api>) => {
    setSelected(a.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  return (
    <div className="flex w-full min-w-0 flex-col gap-3">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        className="w-full min-w-0"
        aria-label={`${label} photos`}
      >
        <CarouselContent>
          {slides.map((src, index) => (
            <CarouselItem key={index} className="min-w-0 basis-full">
              <div className="h-62.5 md:h-80">
                {src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={src}
                    alt={`${label} ${index + 1}`}
                    className="h-full w-full rounded-xl object-cover"
                  />
                ) : (
                  <ImagePlaceholder label={`${label} photo ${index + 1}`} />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3 border-0 bg-white shadow-sm" />
        <CarouselNext className="right-3 border-0 bg-white shadow-sm" />
      </Carousel>

      <div className="flex items-center justify-center gap-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={selected === index}
            onClick={() => api?.scrollTo(index)}
            className={`size-1.5 rounded-full transition-colors ${
              selected === index ? "bg-primary-foreground" : "bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
