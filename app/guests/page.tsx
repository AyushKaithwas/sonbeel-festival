import { Container } from "@/components/ui-self/container/container";
import { invitedGuests } from "./guests";
import Image from "next/image";
import { H1 } from "@/components/ui-self/heading";

export default function Page() {
  return (
    <Container>
      <H1 className="text-center">Guests</H1>
      {invitedGuests.map((guest) => {
        return (
          <div
            className="flex h-[14rem] w-[50rem] items-center justify-start gap-10 rounded-3xl border border-primary px-10"
            key={guest.name}
          >
            <Image
              src={guest.pic ? guest.pic : "/images/guest/default.jpg"}
              alt={guest.name}
              width={200}
              height={200}
              className="w-[10rem] rounded-3xl"
            />
            <div>
              <h1 className="text-2xl font-semibold text-secondary">
                {guest.name}
              </h1>

              {guest.url && (
                <a
                  className="hover:text-primary"
                  href={guest.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              )}
            </div>
          </div>
        );
      })}
    </Container>
  );
}
