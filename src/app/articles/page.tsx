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
      uno: "Writing on",
      dos: "software development,",
      tres: "and open-source industry",
    },
    subtitle:
      "All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.",
    size: "md:text-5xl",
  };
  return (
    <div className="bg-[#0d1117]">
      <div className="md:border md:mx-24 bg-[#161b22] border-gray-800">
        <NavBar />
        <div className="md:mx-24 md:my-16 my-8 mx-4">
          <div className="md:w-[80%]">
            <Header {...data} />
          </div>
          <Main />
        </div>
        <Footer />
      </div>
    </div>
  );
}
