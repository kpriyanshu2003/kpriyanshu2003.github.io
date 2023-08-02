import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="bg-gray-950">
      <div className="md:border md:mx-24 bg-[#161b22] border-gray-800">
        <NavBar />
        <div className="md:mx-24 md:my-16 mb-8">
          <Main />
        </div>
        <Footer />
      </div>
    </div>
  );
}
