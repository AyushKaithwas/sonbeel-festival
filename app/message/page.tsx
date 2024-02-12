import { Container } from "@/components/ui-self/container/container";
import { H1 } from "@/components/ui-self/heading";
import Image from "next/image";

const messages = [
  {
    id: "vc",
    title: "Vice Chancellor's message",
    content: "Coming soon",
    imageUrl: "/images/message/vc.jpg",
    name: "Prof. Rajive Mohan Pant",
  },
  {
    id: "director",
    title: "Director's message",
    content:
      "Feeling so happy that the dream which I have been nurturing since last three decades, the silent movement which I initiated 30 years back for conservation of and tourism promotion in Sonbeel is now going to be materialized under the initiative of a visionary academic leader Prof. Rajive Mohan Pant, Hon'ble Vice Chancellor of Assam University, Silchar, who believes from the core of his heart that this Sonbeel Utsav will be the Game changer for socio economic development of the People of the locality. Being inspired by the beauty of the water body during his first visit to Sonbeel, he searched me out to  execute this plan. Never and ever I thought of such an initiative from my own institute. I know Sonbeel utsav itself is not going to change the condition of the people but this utsav will show the path to all stakeholders how Sonbeel can bring a change,  I believe. My humble submission to all the stakeholders to grab the opportunity . My sincere thanks to Mr. Angshuman Dey, a personality from Sonbeel area for his all help and my best wishes for the young group of, dedicated and energetic teachers and non-teaching staff of the university who have volunteered themselves as Task Force members of the function. I salute all, who were with me during this three decades long movement for Sonbeel conservation.",
    imageUrl: "/images/message/director.jpeg",
    name: "Prof. Manabendra Dutta Choudhury",
  },
  {
    id: "registrar",
    title: "Registrar's message",
    content: "Coming soon",
    imageUrl: "/images/message/registrar.jpg",
    name: "Dr. Pradosh Kiran Nath",
  },
];

export default function Page() {
  return (
    <Container className="items-center justify-center">
      {messages.map((message) => {
        return (
          <section
            id={message.id}
            key={message.id}
            className="flex w-[20rem] scroll-mb-10 scroll-mt-20 flex-row items-start justify-evenly gap-10 rounded-xl bg-card px-5 py-5 drop-shadow-lg md:w-[80rem] md:scroll-mb-20 md:scroll-mt-20 md:items-center md:px-10 md:py-10"
          >
            <div className="flex w-[12rem] flex-col items-center gap-4 text-center">
              <Image
                src={message.imageUrl}
                alt="logo"
                width={200}
                height={200}
                className="cursor-pointer rounded-full"
              />
              <h2 className=" text-xs">{message.name}</h2>
            </div>
            <div className="w-[40rem]">
              <H1>{message.title}</H1>
              <p className="p-2 italic md:pl-10">
                - &quot;{message.content}&quot;
              </p>
            </div>
          </section>
        );
      })}
    </Container>
  );
}
