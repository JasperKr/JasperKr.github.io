import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel"

const infos = [
  "Rhodium engine",
  "my Custom raytracer",
  "Rhodium engine",
  "Rhodium engine",
  "Rhodium engine",
  "an older attempt at a custom raytracer",
  "my Vulkan renderer",
]

const descriptions = [
  "The bistro scene rendered with Rhodium engine.",
  "The sponza scene raytraced with a custom raytracer.",
  '"After the rain" scene rendered with Rhodium engine.',
  "The sponza scene rendered with Rhodium engine.\nThe floor is a medium-roughness mirror, showcasing GGX specular highlights.", 
  "A cloud scene rendered with Rhodium engine.",
  "A cornell box scene rendered with an older attempt at a custom raytracer.",
  "The sponza scene with albedo maps rendered with my Vulkan renderer.",
]

export function ImageCarousel() {
  return (
    <Carousel className="w-full max-w-4xl">
      <CarouselContent>
        {Array.from({ length: 7 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-2">
              <p> Made with {infos[index]}</p>
              <img
                src={"assets/images/" + (index + 1) + ".png"}
                alt={descriptions[index]}
                className="w-full h-full object-cover rounded-lg"
              />
              <p className="text-m">{descriptions[index]}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious /> 
      <CarouselNext />
    </Carousel>
  )
}
