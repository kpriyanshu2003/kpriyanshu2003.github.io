import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "./components/Main";

type HeaderProp = {
  title: { uno: string; dos: string; tres: string };
  subtitle: string;
  size: string;
};

export default function Home() {
  const data: HeaderProp = {
    title: {
      uno: "Things",
      dos: "I've made",
      tres: "trying to put my dent in the universe.",
    },
    subtitle:
      "I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.",
    size: "md:text-5xl",
  };
  return (
    <div className="bg-[#0d1117]">
      <div className="md:border md:mx-24 bg-[#161b22] border-gray-800">
        <NavBar />
        <div className="md:mx-24 md:my-16 my-8">
          <div className="mx-5">
            <Header {...data} />
          </div>
          <Main />
        </div>
        <Footer />
      </div>
    </div>
  );
}
