import ProjectData from "@/data/projects.json";
import Project from "@/components/Project";

export default function Main() {
  return (
    <div className="text-white grid grid-flow-row md:grid-cols-3 grid-cols-1">
      {ProjectData.map((e) => {
        return <Project {...e} key={e.id} />;
      })}
    </div>
  );
}
