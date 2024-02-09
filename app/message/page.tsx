import { Container } from "@/components/ui-self/container/container";
import { H1 } from "@/components/ui-self/heading";

const messages = [
  {
    id: "vc",
    title: "Vice Chancellor's message",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "director",
    title: "Director's message",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    id: "convener",
    title: "Converner's message",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
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
