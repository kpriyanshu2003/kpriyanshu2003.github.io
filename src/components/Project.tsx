import Image from "next/image";
import { BiLink, BiLogoGithub } from "react-icons/bi";
import Link from "next/link";

type ProjectInputData = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubRepo: string;
  hostingUrl: string;
  techStack: string[];
};

export default function Project(props: ProjectInputData) {
  return (
    <div className="border-b border-gray-500 md:border-none mx-4 md:mx-0">
      <div className="m-4 rounded-xl p-6 hover:bg-[#0d1117] transition">
        <div className="flex items-center gap-4">
          <Image
            src={props.imageUrl}
            alt={props.title}
            width={40}
            height={40}
            className="rounded-full "
          />
          <div>{props.title}</div>
        </div>
        <div className="text-gray-400 my-2 text-sm py-2">
          {props.description.length > 75
            ? props.description.substring(0, 70) + "..."
            : props.description}
        </div>
        <div className="flex items-center gap-3 my-2 py-2">
          {props.techStack.map((e) => {
            return (
              <span key={e} className="font-mono text-sm text-sky-200">
                {e}
              </span>
            );
          })}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={props.hostingUrl}
            className="flex items-center gap-1 text-xs border border-gray-500 rounded-full py-2 px-3 hover:bg-blue-300 hover:text-black"
          >
            <BiLink className="text-base" />
            View Project
          </Link>
          <Link href={props.githubRepo} className="hover:text-blue-300">
            <BiLogoGithub className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
