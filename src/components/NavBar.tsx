"use client";

import Image from "next/image";
import BMC from "@/resources/bmc-logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Style.css";

export default function NavBar() {
  const pathName = usePathname();
  return (
    <div className="sticky top-0 backdrop-blur-sm md:px-16 px-4 z-10 py-5">
      <div className="flex items-center justify-between">
        <div className="md:block hidden"> </div>
        <ul className="flex list-none rounded-full bg-[#0d1117] text-gray-400 text-sm border border-[#21262d] my-1 gap-3 px-6">
          <Link
            href="/"
            className={pathName === "/" ? "gradient-border text-sky-300" : ""}
          >
            <li className="p-3">Home</li>
          </Link>
          <Link
            href="/about"
            className={
              pathName === "/about" ? "gradient-border text-sky-300" : ""
            }
          >
            <li className="p-3">About</li>
          </Link>
          <Link
            href="/articles"
            className={
              pathName === "/articles" ? "gradient-border text-sky-300" : ""
            }
          >
            <li className="p-3">Articles</li>
          </Link>
          <Link
            href="/projects"
            className={
              pathName === "/projects" ? "gradient-border text-sky-300" : ""
            }
          >
            <li className="p-3">Projects</li>
          </Link>
        </ul>
        <Link href="https://www.buymeacoffee.com/kpriyanshu">
          <Image
            src={BMC}
            alt="Buy Me a Coffee Logo"
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
}
