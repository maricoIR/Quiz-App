import Image from "next/image";
import background from "@/images/bg.jpg";

const Result = (props) => {
  const reset = () => {
    props.setScore(0);
    props.setCurrentQuestion(0);
    props.setDone(false);
    props.setAnswers([]);
  };
  return (
    <div className="w-[670px] bg-white rounded-[10px] pb-5">
      <div className="w-full flex items-center justify-center relative rounded-[10px]">
        <span className="text-3xl text-white font-medium absolute left-1/2 bottom-1/2 translate-x-[-50%] translate-y-[50%] z-[50]">
          Quiz App
        </span>
        <Image
          src={background}
          className="w-full rounded-tr-[10px] rounded-tl-[10px]"
        />
        <div className="w-full h-full absolute bg-overlay rounded-tr-[10px] rounded-tl-[10px]"></div>
      </div>
      <div className="w-full flex flex-col items-center gap-5 justify-center mt-5 mb-10">
        <span className="font-medium text-3xl text-slate-700">
          {props.score} / 10
        </span>
        <span className="font-medium text-[17px] text-slate-700">
          You have earned{" "}
          <span className="font-medium text-[17px] text-blue-600">
            {props.score}{" "}
          </span>
          points of total{" "}
          <span className="font-medium text-[17px] text-blue-600">10 </span>
          points.
        </span>
      </div>
      <div className="w-full flex items-center justify-center">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full bg-white border border-blue-600 py-3 px-12 text-blue-600 font-medium"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Result;
