import Button from "@/ui/Button";
import Link from "next/link";
import React from "react";
import url from "@/constants/url.json";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen grid place-items-center">
      <div className="w-screen">
        {url.map((i, index) => (
          <div className="flex justify-center m-4" key={index}>
            <Button className="w-1/2 p-4 rounded-xl bg-gradient-to-r  from-[#005c97] to-[#363795] hover:from-white hover:to-white hover:text-black text-white">
              <Link href={i.url}>{i.name}</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
