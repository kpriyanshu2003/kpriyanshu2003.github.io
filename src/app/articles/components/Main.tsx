import ArticleData from "@/data/articles.json";
import Article from "@/components/Article";
import ArticleMobile from "@/components/ArticleMobile";
import Link from "next/link";

export default function Main() {
  return (
    <div className="text-white md:border-l border-gray-800">
      <div className="hidden md:block">
        {ArticleData.map((e) => {
          return (
            <Link href={e.articleLink} key={e.id}>
              <Article {...e} />
            </Link>
          );
        })}
      </div>
      <div className="md:hidden">
        {" "}
        {ArticleData.map((e) => {
          return (
            <Link href={e.articleLink} key={e.id}>
              <ArticleMobile {...e} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
