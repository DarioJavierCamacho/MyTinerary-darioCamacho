import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Slide } from "./Slide";

export function CarouselTail() {
  return (
    <Carousel className="rounded-xl" loop="true" autoplay="true">
      <div className="relative h-full w-full" >
        <Slide index={0}/>
      </div>
      <div className="relative h-full w-full" >
        <Slide index={1}/>
      </div>
      <div className="relative h-full w-full" >
        <Slide index={2}/>
      </div>
    </Carousel>
  );
}