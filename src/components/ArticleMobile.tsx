import { TbMinusVertical } from "react-icons/tb";
import { AiOutlineArrowRight } from "react-icons/ai";

type ArticleInputData = {
  id: string;
  title: string;
  content: string;
  createDate: string;
  articleLink: string;
  slug: string;
  author: string;
  cover: string;
  tags: string[];
};

export default function Article(props: ArticleInputData) {
  return (
    <div className="py-6 md:px-4  group hover:bg-[#0d1117] transition rounded-xl duration-200 w-full">
      <div className="text-gray-500 flex items-center">
        <TbMinusVertical className=" text-gray-500 font-bold text-2xl" />
        <span className="text-sm">
          {new Date(props.createDate).toDateString()}
        </span>
      </div>
      <div className="px-2">
        {" "}
        <div className="my-2 font-medium text-lg">{props.title}</div>
        <div className="text-sm text-gray-500">
          {props.content.length > 100
            ? props.content.substring(0, 190) + "..."
            : props.content}
        </div>
      </div>
      <div className="px-2">
        <div className="text-sky-300 flex items-center gap-1  my-2">
          <span>Read Article</span>
          <AiOutlineArrowRight className="text-sm group-hover:translate-x-1 transition  duration-200" />
        </div>
      </div>
    </div>
  );
}
