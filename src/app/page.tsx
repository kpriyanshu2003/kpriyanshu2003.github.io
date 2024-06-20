import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/ui/Button";
import { v4 as uuid } from "uuid";
import url from "@/constants/url.json";
import { getJSON } from "@/actions/json";
import { redirect } from "next/navigation";
import social from "@/constants/social.json";

export default async function Home() {
  return (
    <div className="bg-black text-white min-h-screen grid place-items-center">
      <div className="w-full">
        <div className="grid place-items-center">
          <Image
            src="https://avatars.githubusercontent.com/u/109672617"
            height={180}
            width={180}
            alt="profile_pic"
            className="rounded-full md:scale-100 scale-90"
          />
          <div className="my-5 text-center">
            <div className="text-lg md:text-2xl font-semibold">
              Kumar Priyanshu
            </div>
            <div className="text-sm md:text-lg mt-2 font-light">
              Full Stack Web Developer
            </div>
          </div>
        </div>
        <div className="my-10">
          <div className="text-center text-xl">Socials</div>
          {social.map((i) => (
            <div key={uuid()}>
              <div className="flex justify-center m-4" key={uuid()}>
                <Button className="w-full md:w-1/2 p-4 rounded-xl bg-gradient-to-r  from-[#005c97] to-[#363795] hover:from-white hover:to-white hover:text-black text-white">
                  <Link href={i.url}>{i.name}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="my-10">
          <div className="text-center text-xl">Projects</div>
          {url.map((i) => (
            <div className="flex justify-center m-4" key={uuid()}>
              <Button className="w-full md:w-1/2 p-4 rounded-xl bg-gradient-to-r  from-[#005c97] to-[#363795] hover:from-white hover:to-white hover:text-black text-white">
                <Link href={i.url}>{i.name}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
