import { Container } from "@/components/ui-self/container/container";
import { H1 } from "@/components/ui-self/heading";

const messages = [
  {
    id: "vc",
    title: "Vice Chancellor's message",
    content: "---",
  },
  {
    id: "director",
    title: "Director's message",
    content: "---",
  },
  {
    id: "convener",
    title: "Converner's message",
    content: "---",
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
            className="w-[30] scroll-mb-10 scroll-mt-20 rounded-xl bg-card px-5 py-5 drop-shadow-lg md:w-[60rem] md:scroll-mb-20 md:scroll-mt-20 md:px-10 md:py-10"
          >
            <H1>{message.title}</H1>
            <p className="p-2 italic md:pl-10">
              - &quot;{message.content}&quot;
            </p>
          </section>
        );
      })}
    </Container>
  );
}
