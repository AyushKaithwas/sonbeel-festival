import Link from "next/link";

export function Footer({
  className,
  visitors,
}: {
  className?: string;
  visitors: number;
}) {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-1 bg-slate-100 px-2 py-10 text-center md:flex-row md:gap-[15rem]">
      <h1>
        Created by{" "}
        <Link
          className="font-bold text-primary hover:text-secondary"
          href="https://www.linkedin.com/in/ayush1kaithwas/"
          target="_blank"
        >
          Mr. Ayush Kaithwas
        </Link>
        {" and "}
        <span className="font-bold text-primary ">
          Dr. Arnab Paul (CSE, AUS)
        </span>
      </h1>
      <h1 className="font-semibold">©Sonbeel Utsav 2024</h1>
      <h1 className="">{visitors} people have visited this website so far.</h1>
    </footer>
  );
}
