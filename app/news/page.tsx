import { Container } from "@/components/ui-self/container/container";
import Image from "next/image";
import Link from "next/link";

const newsData = [
  {
    title: "The City Standard (15 February 2024)",
    link: "https://balihas.com/%E0%A6%8F%E0%A6%95-%E0%A6%85%E0%A6%A8%E0%A6%A8%E0%A7%8D%E0%A6%AF-%E0%A6%9C%E0%A6%B2%E0%A6%BE%E0%A6%AD%E0%A7%82%E0%A6%AE%E0%A6%BF%E0%A6%95%E0%A7%87-%E0%A6%AA%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A6%9F/",
  },
];

export default function Page() {
  return (
    <Container>
      <h1 className="text-4xl text-primary">News</h1>
      <div>
        <Image
          src="/images/news/news3.jpg"
          alt="Newspaper Snippet"
          width={1200}
          height={1200}
          className="w-[70rem]"
        />
        <h1 className="text-lg text-primary">
          The City Standard (15 February 2024)
        </h1>
      </div>
      <div>
        <Image
          src="/images/news/news1.png"
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
          src="/images/news/news2.jpg"
          alt="Newspaper Snippet"
          width={2000}
          height={2000}
          className="w-[70rem]"
        />
        <h1 className="text-lg text-primary">
          Tripura Darpan (06 February 2024)
        </h1>
      </div>
      <div>
        <Image
          src="/images/news/news4.png"
          alt="Newspaper Snippet"
          width={2000}
          height={2000}
          className="h-auto w-[50rem]"
        />
        <h1 className="text-lg text-primary">
          এক অনন্য জলাভূমিকে পর্যটন মানচিত্রে তুলে আনার উদ্যোগ (
          <Link
            className="text-secondary hover:text-blue-500"
            href="https://balihas.com/%E0%A6%8F%E0%A6%95-%E0%A6%85%E0%A6%A8%E0%A6%A8%E0%A7%8D%E0%A6%AF-%E0%A6%9C%E0%A6%B2%E0%A6%BE%E0%A6%AD%E0%A7%82%E0%A6%AE%E0%A6%BF%E0%A6%95%E0%A7%87-%E0%A6%AA%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A6%9F/"
            target="_blank"
          >
            Click here
          </Link>{" "}
          to read more)
        </h1>
      </div>
      <ul className="flex list-disc flex-col gap-2 md:w-[50rem] ">
        <li>
          <h1 className=" text-xl">
            আর্থসামাজিক ও উন্নয়নের লক্ষ্যে আগামী ২৪ থেকে ২৬ ফেব্রুয়ারি
            অনুষ্ঠিত হতে চলছে শনবিল উৎসব - BTV (
            <Link
              target="_blank"
              className="text-primary hover:text-secondary"
              href="https://www.facebook.com/share/v/1PxiZ8gou1RUEWHS/?mibextid=w8EBqM"
            >
              Click here
            </Link>{" "}
            to watch)
          </h1>
        </li>
        <li>
          <h1 className=" text-xl ">
            আর্থ সামাজিক ও উন্নয়নের লক্ষ্যে আগামী ২৪ থেকে ২৬ ফেব্রুয়ারি
            দেবদ্বারে অনুষ্ঠিত হতে চলেছে শনবিল উৎসব। এক মহোৎসবের সাক্ষী হয়ে
            থাকবে গোটা শনবিল। - BARAK TODAY (
            <Link
              target="_blank"
              className="text-primary hover:text-secondary"
              href="https://www.facebook.com/share/v/W1x11J22PqLVUKQc/?mibextid=qi2Omg"
            >
              Click here
            </Link>{" "}
            to watch)
          </h1>
        </li>
        <li>
          <h1 className=" text-xl ">
            অবশেষে শনবিলকে বিশ্ব মঞ্চে তুলে ধরতে উদ্যোগ নিল সরকার।আগামী ২৪ থেকে
            ২৬ ফেব্রুয়ারি অনুষ্ঠিত হতে চলেছে শনবিল উৎসব। - South Assam (
            <Link
              target="_blank"
              className="text-primary hover:text-secondary"
              href="https://www.facebook.com/share/Pc1at1pgt49gKQkU/?mibextid=w8EBqM"
            >
              Click here
            </Link>{" "}
            to watch)
          </h1>
        </li>
        <li>
          <h1 className=" text-xl ">
            শনবিল উৎসব-- কি বললেন শুনুন - AB News (
            <Link
              target="_blank"
              className="text-primary hover:text-secondary"
              href="https://www.facebook.com/share/v/Z1mpdFZHH5xgZY7c/?mibextid=UVffzb"
            >
              Click here
            </Link>{" "}
            to watch)
          </h1>
        </li>
        <li>
          <h1 className=" text-xl ">
            প্রস্তুতি তুঙ্গে। শনবিলে শুরু হচ্ছে তিনদিন ব্যাপি লোক উৎসব৷ Himanta
            Biswa Sarma Pijush Hazarika Jayanta Mallabaruah - News অবিকল 24x7 (
            <Link
              target="_blank"
              className="text-primary hover:text-secondary"
              href="https://fb.watch/q9ygWxsEeu/?mibextid=2JQ9oc"
            >
              Click here
            </Link>{" "}
            to watch)
          </h1>
        </li>
        <li>
          <h1 className=" text-xl ">
            এশিয়ার দ্বিতীয় বৃহত্তম বিল। সেই শনবিলে এবার &apos;শনবিল&apos; উৎসব।
            দেখুন বার্তালিপির রিপোর্ট। - BartaLipi (
            <Link
              className="text-primary hover:text-secondary"
              href="https://m.facebook.com/story.php?story_fbid=pfbid026PD5UaiRh9T1guAEjFNz7r3m4ZWctFz816YMPchRna9EhVzmmLjyqQHvaCVZ2qz9l&id=100064168958652&sfnsn=wiwspwa&mibextid=RUbZ1f"
              target="_blank"
            >
              Click here
            </Link>{" "}
            to watch)
          </h1>
        </li>
      </ul>
      <hr className="w-screen border border-primary" />
      <h1 className="text-4xl text-primary">Information</h1>
      <div>
        <Image
          src="/images/news/info1.jpeg"
          alt="Information about Festival"
          width={2000}
          height={2000}
          className="w-[70rem]"
        />
        {/* <h1 className="text-lg text-primary">
          Tripura Darpan (06 February 2024)
        </h1> */}
      </div>
    </Container>
  );
}
