import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import Image from "next/image";
import Avatar from "@/resources/avatar.jpg";
import Link from "next/link";

export default function Right() {
  return (
    <div>
      <Image
        src={Avatar}
        alt="Avatar"
        className="hidden md:block rounded-lg aspect-square grayscale transition-all duration-500 hover:grayscale-0 hover:aspect-long object-cover"
        width={400}
      />
      <div className="py-6 border-b border-[#262930] text-gray-300">
        <Link
          className="flex gap-3 my-3 items-center group"
          href="https://twitter.com/kpriyanshu2003"
        >
          <BsTwitter className="group-hover:text-sky-300 text-gray-500 text-xl" />
          <span className="group-hover:text-sky-300">Follow on Twitter</span>
        </Link>
        <Link
          className="flex gap-3 my-3 items-center group"
          href="https://www.instagram.com/_iampriyanshukumar_/"
        >
          <BsInstagram className="group-hover:text-sky-300 text-gray-500 text-xl" />
          <span className="group-hover:text-sky-300">Follow on Instagram</span>
        </Link>
        <Link
          className="flex gap-3 my-3 items-center group"
          href="https://github.com/kpriyanshu2003"
        >
          <BsGithub className="group-hover:text-sky-300 text-gray-500 text-xl" />
          <span className="group-hover:text-sky-300">Follow on Github</span>
        </Link>
        <Link
          className="flex gap-3 my-3 items-center group"
          href="https://www.linkedin.com/in/kpriyanshu2003/"
        >
          <BsLinkedin className="group-hover:text-sky-300 text-gray-500 text-xl" />
          <span className="group-hover:text-sky-300">Follow on LinkedIn</span>
        </Link>
      </div>
      <Link
        className="flex items-center gap-3 my-5 group text-gray-300"
        href="mailto:priyanshukumar.241@yahoo.com"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-6 w-6 flex-none fill-slate-500 transition group-hover:fill-sky-300 "
        >
          <path
            fillRule="evenodd"
            d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
          ></path>
        </svg>
        <span className="group-hover:text-sky-300 transition">
          priyanshukumar.241@yahoo.com
        </span>
      </Link>
    </div>
  );
}
