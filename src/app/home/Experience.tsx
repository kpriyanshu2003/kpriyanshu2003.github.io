import Exp from "@/data/experience.json";
import Image from "next/image";
import "@/components/Scrollbar.css";

export default function Experience() {
  return (
    <div className="text-white border border-[#212a36] p-6 rounded-lg w-full mt-6 ">
      <div className="flex items-center gap-3">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
        >
          <path
            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-slate-100/10 stroke-slate-500"
          />
          <path
            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
            className="stroke-slate-500"
          />
        </svg>
        <span>Experience</span>
      </div>
      <div className="overflow-auto mt-5 max-h-[342px]">
        {Exp.map((e) => {
          return (
            <div key={e.key} className="flex items-center py-3">
              <Image
                src={e.imageLink}
                alt={e.name}
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
              <div>
                <div>{e.name}</div>
                <div className="text-gray-400 text-sm">
                  {e.time}+ years of expertise
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="bg-white text-black w-full rounded py-1 font-medium  mt-4 flex items-center justify-center">
        Download CV{" "}
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="h-4 w-4 stroke-slate-900 transition group-hover:stroke-slate-700 group-active:stroke-zinc-900/50"
        >
          <path
            d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  );
}
