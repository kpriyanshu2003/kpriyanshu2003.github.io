import Left from "./Left";
import Right from "./Right";

export default function Main() {
  return (
    <div>
      <div className="md:mt-10 md:mx-8">
        <div className="md:flex md:justify-between md:items-start">
          <div className="md:w-[50%]">
            <Left />
          </div>
          <div className="md:w-[40%] md:flex md:justify-center">
            <Right />
          </div>
        </div>
      </div>
    </div>
  );
}
