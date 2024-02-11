import Link from "next/link";

export function Footer({
  className,
  visitors,
}: {
  className?: string;
  visitors: number;
}) {
  console.log(visitors);
  return (
    <footer className="flex w-full items-center justify-around gap-10 bg-slate-100 py-10">
      <h1>
        Created by{" "}
        <Link
          className="font-bold hover:text-primary"
          href="https://www.linkedin.com/in/ayush1kaithwas/"
          target="_blank"
        >
          Ayush Kaithwas
        </Link>
      </h1>

      <h1 className="">{visitors} people viewed this website so far.</h1>
    </footer>
  );
}
