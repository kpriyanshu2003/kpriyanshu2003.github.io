import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Image from "next/image";
import Avatar from "@/resources/avatar.jpg";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

type HeaderProp = {
  title: { uno: string; dos: string; tres: string };
  subtitle: string;
  size: string;
  lineHeight: string;
};

export default function Left() {
  const data: HeaderProp = {
    title: {
      uno: "I'm",
      dos: "Kumar Priyanshu",
      tres: "I live in India, where I build the future",
    },
    subtitle: "",
    size: "md:text-5xl",
    lineHeight: "",
  };
  return (
    <div className="text-gray-400 mx-4">
      <Image src={Avatar} alt="Avatar" className="md:hidden rounded-xl" />
      <Header {...data} />
      <div className="mt-10 text-sm">
        <div className="hover:text-white transition-colors delay-100 my-8 leading-loose">
          I&apos;ve loved making things for as long as I can remember, and wrote
          my first program when I was in the 5th grade, just two weeks after I
          received my first personal computer, that I taught myself to type on.
        </div>
        <div className="hover:text-white transition-colors delay-100 my-8 leading-loose">
          The only thing I loved more than play as a kid was computers. When I
          was 12, I wrote the first code which was the damn basic calculator
          with html, css & javascript. Counted up for a moment what i could ever
          imagine was code code & code. I was passionate enough to solve my
          daily life problems by just wring some amount code which again started
          off, by building a simple to-do application.
        </div>
        <div className="hover:text-white transition-colors delay-100 my-8 leading-loose">
          Since Adobe Flash was a complete innovation, alongside with CSS 1.0
          and HTML 4.01 as standards of the current web I&apos;ve been
          passionate about web. For over a decade I had many opportunities to
          work in a vast spectrum of what let me gather a significant amount of
          various experience. Working for companies and individuals around the
          globe I met and learnt from amazing and ambitious people.
        </div>
      </div>
    </div>
  );
}
