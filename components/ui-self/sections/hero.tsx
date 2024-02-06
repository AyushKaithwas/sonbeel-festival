import Image from "next/image";

export function Hero({ heroText }: Readonly<{ heroText: string }>) {
  return (
    <div className=" ">
      <main className="h-[40rem] items-center justify-center flex p-24 bg-[url('/images/hero-bg.png')] bg-center  bg-fixed bg-no-repeat bg-cover">
        <h1 className="text-white font-black text-[3rem] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
          {heroText}
        </h1>
      </main>
    </div>
  );
}
