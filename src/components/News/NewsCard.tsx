"use client";
import { Carousel, Card } from "@/components/ui/card-carousel";
import { data } from "./NewsContent";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export function NewsCard() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <HeroHighlight className="w-full h-full py-20">
      <div>
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Where Every Match Creates <Highlight>Legends</Highlight>
        </h2>
        <Carousel items={cards} />
      </div>
    </HeroHighlight>
  );
}
