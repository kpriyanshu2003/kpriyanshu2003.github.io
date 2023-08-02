import NavBar from "@/components/NavBar";
import Main from "@/app/home/Main";
import ArticleSnap from "@/app/home/ArticleSnap";
import Contact from "./home/Contact";
import Experience from "./home/Experience";
import Footer from "@/components/Footer";
import TopLoadingBar from "@/components/TopLoadingBar";

export default function Home() {
  return (
    <div className="bg-gray-950">
      <div className="md:border md:mx-24 bg-[#161b22] border-gray-800">
        <NavBar />
        <TopLoadingBar />
        <div className="md:mx-24 md:my-16 my-8">
          <Main />
          <div className="md:flex md:items-start md:justify-between my-16 md:my-10">
            <div className="md:w-[550px]">
              <ArticleSnap />
            </div>
            <div className="md:w-[500px] md:mx-0 mx-5">
              <Contact />
              <Experience />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
