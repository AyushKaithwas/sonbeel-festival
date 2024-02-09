import { Container } from "@/components/ui-self/container/container";
import Image from "next/image";

export default function Page() {
  return (
    <Container>
      <div>
        <Image
          src="/images/news/1.png"
          alt="Newspaper Snippet"
          width={500}
          height={500}
          className="w-[70rem]"
        />
        <h1 className="text-lg text-primary">
          Dainik Jugasankha (29 January 2024)
        </h1>
      </div>
      <div>
        <Image
          src="/images/news/2.jpg"
          alt="Newspaper Snippet"
          width={2000}
          height={2000}
          className="w-[70rem]"
        />
        <h1 className="text-lg text-primary">
          Tripura Darpan (06 February 2024)
        </h1>
      </div>
    </Container>
  );
}
// hover:transform hover:scale-[200%] transition duration-300 ease-in-out cursor-pointer
