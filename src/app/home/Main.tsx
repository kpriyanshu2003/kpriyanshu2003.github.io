import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Avatar from "@/resources/avatar.jpg";
import Link from "next/link";
import Header from "@/components/Header";

type HeaderProp = {
  title: { uno: string; dos: string; tres: string };
  subtitle: string;
  size: string;
};

export default function Main() {
  const data: HeaderProp = {
    title: {
      uno: "Full Stack",
      dos: "Web Developer",
      tres: "and designer",
    },
    subtitle:
      "I'm Priyanshu, a software developed based in India. I'm currently focusing on full stack web development.",
    size: "md:text-6xl",
  };
  return (
    <div>
      <div className="mt-10 mx-5">
        <Image
          src={Avatar}
          alt="profileImage"
          width={120}
          className="rounded-full"
        />
        <div className="md:w-[80%] w-full">
          <Header {...data} />
          <div className="flex gap-5 items-center mt-5">
            <Link href="https://github.com/kpriyanshu2003">
              <BsGithub className="text-gray-400 text-2xl hover:text-white" />
            </Link>
            <Link href="https://www.linkedin.com/in/kpriyanshu2003">
              <BsLinkedin className="text-gray-400 text-2xl hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
