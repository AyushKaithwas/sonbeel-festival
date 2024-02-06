import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = ["1.png", "2.png", "3.png", "4.png", "5.png"];

export function Gallery() {
  return (
    <div className="flex flex-col w-full items-center py-5 gap-20">
      <h1 className="text-primary font-extrabold text-3xl">GALLERY</h1>
      <Carousel className="">
        <CarouselContent className="">
          {images.map((image) => {
            return (
              <CarouselItem
                key={image}
                className="flex justify-center w-[12rem]"
              >
                <Image
                  src={`/images/gallery-images/${image}`}
                  alt="logo"
                  width={4000}
                  height={2000}
                  className="cursor-pointer w-[55rem] rounded-xl"
                  loading="lazy"
                />
              </CarouselItem>
            );
          })}
          {/* <CarouselItem className="flex justify-center">
            <Image
              src="/images/invited-guests-thumbnail.png"
              alt="logo"
              width={2000}
              height={2000}
              className="cursor-pointer w-[50rem] h-[10rem]"
            />
          </CarouselItem> */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
