"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Style.css";

export default function Footer() {
  const pathName = usePathname();
  return (
    <div className="border-t border-gray-800 md:flex md:items-center justify-between p-10 text-gray-400 text-sm">
      <div>
        <ul className="flex list-none my-1 gap-3 px-6 justify-center">
          <Link href="/" className={pathName === "/" ? "text-sky-300" : ""}>
            Home
          </Link>
          <Link
            href="/about"
            className={pathName === "/about" ? "text-sky-300" : ""}
          >
            About
          </Link>
          <Link
            href="/articles"
            className={pathName === "/articles" ? "text-sky-300" : ""}
          >
            Articles
          </Link>
          <Link
            href="/projects"
            className={pathName === "/projects" ? "text-sky-300" : ""}
          >
            Projects
          </Link>
        </ul>
      </div>
      <div className="text-xs mt-4 md:mt-0 text-center">
        &copy; 2023 Kumar Priyanshu. All Rights Reserved.
      </div>
    </div>
  );
}
