import { Container } from "@/components/ui-self/container/container";
import { H1 } from "@/components/ui-self/heading";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AboutInfo {
  name: string;
  desc: string;
  imagePath: string;
  width: string;
}

interface About {
  [key: string]: AboutInfo;
}

const about: About = {
  sonbeel: {
    name: "SONBEEL",
    desc: "Shonbil is one of the largest lakes in southern Assam in India. This freshwater lake is situated in the Karimganj district, state of Assam.",
    imagePath: "sonbeel.png",
    width: "w-[40rem]",
  },
  aus: {
    name: "ASSAM UNIVERSITY, SILCHAR",
    desc: "Assam University is a collegiate central public university located at Silchar, Assam, India. It was founded in the year 1994 by the provisions of an act enacted by the Parliament of India. Air Chief Marshal Arup Raha is the Chancellor, the Governor of Assam is the Chief Rector and the President of India is acting as the Visitor of the university. The university has sixteen schools which offer Humanities, Languages, Environmental Sciences, Information Sciences, Life Sciences, Physical Sciences, Social Sciences, Law, Technology and Management Studies.",
    imagePath: "aus.jpeg",
    width: "w-[40rem]",
  },
  sonbeelutsav: {
    name: "SONBEEL UTSAV",
    desc: `
Assam University, in collaboration with stakeholders, is extending its hand to effectively promote tourism, raise awareness for wetland conservation, and position the wetland as a significant destination on the tourism map of our country. This effort is accompanied by a grand celebration and expression of gratitude towards the wetland, achieved through the organization of the Son Beel Utsav, 2024.
`,
    imagePath: "sonbeel-utsav.png",
    width: "md:w-[30rem] w-[20rem]",
  },
};

export default function Page({ params }: { params: { slug: string } }) {
  if (!about.hasOwnProperty(params.slug)) return <div>Page not found</div>;
  return (
    <Container className="items-center md:flex-row md:justify-evenly">
      <div className="mb-5 flex flex-col gap-2 md:w-[40rem]">
        <H1>{"ABOUT " + about[params.slug].name}</H1>
        <p className="text-secondary">{about[params.slug].desc}</p>

        {params.slug == "sonbeelutsav" && (
          <p className="pl-5 text-primary">
            The specific objectives of Son Beel Utsav
            <br /> - Promotion of Tourism and Economic Impact
            <br />
            - Raising Voice for Wetland Conservation
            <br />- Placing Wetland on the Tourism Map
            <br />
          </p>
        )}
      </div>
      <Image
        src={`/images/about/${about[params.slug].imagePath}`}
        alt={about[params.slug].name}
        width={900}
        height={900}
        className={cn(
          "rounded-xl transition duration-300 ease-in-out hover:scale-110 hover:transform",
          about[params.slug].width,
        )}
      />
    </Container>
  );
}
