import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

type HeaderProp = {
  title: { uno: string; dos: string; tres: string };
  subtitle: string;
  size: string;
};

export default function Header(props: HeaderProp) {
  return (
    <div className="my-5 mb-10">
      <div
        className={`text-white ${poppins.className} ${props.size} text-3xl leading-snug md:leading-snug`}
      >
        {props.title.uno}{" "}
        <span className="text-transparent bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text">
          {props.title.dos}
        </span>{" "}
        {props.title.tres}
      </div>
      <div className="text-gray-400 mt-3">{props.subtitle}</div>
    </div>
  );
}
