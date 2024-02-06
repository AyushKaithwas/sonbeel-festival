import { Navbar } from "@/components/ui-self/navbar";
import { Gallery } from "@/components/ui-self/sections/gallery";
import { Hero } from "@/components/ui-self/sections/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="flex py-10 px-10 justify-between items-center">
        <Image
          src="/images/son-beel-utsav-logo.png"
          alt="logo"
          width={200}
          height={200}
          className="cursor-pointer w-20 "
        />
        <Navbar />
      </div>
      <Hero heroText="Embrace Nature's Symphony at Son Beel Utsav 2024" />
      <div className="flex flex-col w-full items-center py-20 my-10 bg-card text-center px-3">
        <h1 className="text-primary font-extrabold md:text-3xl text-xl">
          DIVE INTO THE DELIGHTS OF SON BEEL
        </h1>
        <p className="text-secondary">
          Son Beel Festival brings a tapestry of culture to life!
        </p>
      </div>

      <div className="">
        <div className="h-[20rem] items-center justify-center flex md:p-24 p-10 text-center bg-[url('/images/mid-section-bg.png')] bg-center  bg-fixed bg-no-repeat bg-cover">
          <h1 className="text-white md:text-2xl text-lg drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            Son Beel Festival - Celebrating Nature, Culture, and Community. Join
            the revelry!
          </h1>
        </div>
      </div>

      <div className="flex flex-col w-full items-center py-20 md:my-10 gap-20">
        <h1 className="text-primary font-extrabold text-3xl">UPDATES</h1>
        <div className="flex gap-20 px-10 text-center">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/images/photography-contest-thumnail.png"
              alt="logo"
              width={200}
              height={200}
              className="cursor-pointer w-40 "
            />
            <p>Photography Contest</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/images/invited-guests-thumbnail.png"
              alt="logo"
              width={200}
              height={200}
              className="cursor-pointer w-40 "
            />
            <p>Invited Guests</p>
          </div>
        </div>
      </div>

      <Gallery />
    </div>
  );
}
