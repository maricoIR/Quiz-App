import background from "@/images/bg.jpg";
import Image from "next/image";

const Quiz = () => {
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
      <div className="w-full flex items-center justify-center mt-5 mb-10">
        <span className="font-medium text-[17px] text-slate-700">
          Who is the current most popular Youtuber ?
        </span>
      </div>
      <div className="flex items-center justify-between w-[80%] mx-auto mb-5">
        <span className="border border-slate-300 hover:border-slate-400 hover:bg-slate-200 transition-all duration-200 font-medium text-slate-700 shadow-sm rounded-md cursor-pointer bg-white flex items-center justify-center w-[250px] py-2">
          Dijay Aligator
        </span>
        <span className="border border-slate-300 hover:border-slate-400 hover:bg-slate-200 transition-all duration-200 font-medium text-slate-700 shadow-sm rounded-md cursor-pointer bg-white flex items-center justify-center w-[250px] py-2">
          Dijay Aligator
        </span>
      </div>
      <div className="flex items-center justify-between w-[80%] mx-auto">
        <span className="border border-slate-300 hover:border-slate-400 hover:bg-slate-200 transition-all duration-200 font-medium text-slate-700 shadow-sm rounded-md cursor-pointer bg-white flex items-center justify-center w-[250px] py-2">
          Dijay Aligator
        </span>
        <span className="border border-slate-300 hover:border-slate-400 hover:bg-slate-200 transition-all duration-200 font-medium text-slate-700 shadow-sm rounded-md cursor-pointer bg-white flex items-center justify-center w-[250px] py-2">
          Dijay Aligator
        </span>
      </div>
      <div className="flex items-center justify-center w-full mt-8 mb-3">
        <button
          type="button"
          className="rounded-full bg-slate-600 py-3 px-12 text-white font-medium"
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default Quiz;
