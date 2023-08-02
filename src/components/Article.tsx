import { AiOutlineArrowRight } from "react-icons/ai";
import { TbMinusVertical } from "react-icons/tb";

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
    <div className="flex items-start text-left w-[80%]  gap-10 relative">
      <div className="text-gray-500 text-sm w-[200px] py-6 px-10">
        {new Date(props.createDate).toDateString()}
      </div>
      <div className="w-[500px] group hover:bg-[#0d1117] transition rounded-xl duration-200 p-6">
        <div className="mb-2 font-medium">{props.title}</div>
        <div className="text-sm text-gray-500">
          {props.content.length > 100
            ? props.content.substring(0, 190) + "..."
            : props.content}
        </div>
        <div className="text-sky-300 flex items-center gap-1  my-2">
          <span>Read Article</span>
          <AiOutlineArrowRight className="text-sm group-hover:translate-x-1 transition  duration-200" />
        </div>
      </div>
    </div>
  );
}
