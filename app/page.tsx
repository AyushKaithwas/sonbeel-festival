import { IncrViewer } from "@/actions/incrViewer";
import { Container } from "@/components/ui-self/container/container";
import { H1 } from "@/components/ui-self/heading";
import { Gallery } from "@/components/ui-self/sections/gallery";
import { Hero } from "@/components/ui-self/sections/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const viewers = await IncrViewer();

  return (
    <Container className="px-0 ">
      {/* Hero section */}
      <Hero heroText="Embrace Nature's Symphony at Son Beel Utsav 2024" />

      {/* About section */}
      <div className="my-10 flex w-full flex-col items-center bg-card px-3 py-20 text-center">
        <H1>DIVE INTO THE DELIGHTS OF SON BEEL</H1>
        <p className="text-secondary">
          Son Beel Festival brings a tapestry of culture to life!
        </p>
      </div>

      {/* Mid section */}
      <div className="flex h-[20rem] w-full items-center justify-center bg-[url('/images/mid-section-bg.png')] bg-cover bg-fixed bg-center bg-no-repeat  text-center">
        <h1 className="text-lg text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] md:text-2xl">
          Son Beel Festival - Celebrating Nature, Culture, and Community. Join
          the revelry!
        </h1>
      </div>

      {/* Updates section */}
      <div className="flex w-full flex-col items-center justify-center gap-10 p-10">
        <H1 className="text-center">UPDATES</H1>
        <div className="flex gap-20 text-center">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/images/photography-contest-thumnail.png"
              alt="logo"
              width={200}
              height={200}
              className="w-40 cursor-pointer "
            />
            <p>Photography Contest</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/images/invited-guests-thumbnail.png"
              alt="logo"
              width={200}
              height={200}
              className="w-40 cursor-pointer "
            />
            <p>Invited Guests</p>
          </div>
        </div>
      </div>

      {/* Gallery section */}
      <Link href="/gallery">
        <Gallery />
      </Link>

      <h1 className="text-2xl font-medium text-primary">
        {"Visitors: " + viewers}
      </h1>
    </Container>
  );
}
