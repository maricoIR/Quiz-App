import background from "@/images/bg.jpg";
import Image from "next/image";
import { data } from "@/data/data";
import { GlobeOutline, LogoGithub } from "react-ionicons";

const Quiz = (props) => {
  const next = () => {
    data[props.currentQuestion + 1]
      ? props.setCurrentQuestion(props.currentQuestion + 1)
      : done();
  };

  const back = () => {
    props.setCurrentQuestion(props.currentQuestion - 1);
  };

  const onAnswer = (id, qid) => {
    if (props.answers.some((item) => item.questionId === qid)) {
      let index = props.answers.findIndex((answer) => answer.questionId == qid);
      if (props.answers[index].isCorrect == true) {
        props.setScore((prevscore) => prevscore - 1);
      }
      props.answers.splice(index, 1);
    }

    let correct =
      data[props.currentQuestion].correctOption.id == parseInt(id)
        ? true
        : false;

    let answer = {
      questionId: qid,
      answerId: id,
      isCorrect: correct,
    };
    props.setAnswers([...props.answers, answer]);
    if (answer.isCorrect == true) {
      props.setScore((prevscore) => prevscore + 1);
    }

    next();
  };

  const done = () => {
    props.setDone(true);
  };

  return (
    <div className="w-[670px] bg-white rounded-[10px] pb-5">
      <div className="w-full flex items-center justify-center relative rounded-[10px]">
        <div className="absolute top-5 left-5 z-[10] flex items-center gap-3">
          <a
            href="https://github.com/maricoIR"
            target="_blank"
            rel="noreferrer"
          >
            <LogoGithub
              color={"#fff"}
              width="25px"
              height="25px"
              cssClasses="cursor-pointer"
            />
          </a>
          <a
            href="https://matinkahrizi.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <GlobeOutline
              color={"#fff"}
              width="25px"
              height="25px"
              cssClasses="cursor-pointer"
            />
          </a>
        </div>
        <span className="text-3xl text-white font-medium absolute left-1/2 bottom-1/2 translate-x-[-50%] translate-y-[50%] z-[50]">
          Quiz App
        </span>
        <Image
          src={background}
          className="w-full rounded-tr-[10px] rounded-tl-[10px]"
          alt="Quiz App"
        />
        <div className="w-full h-full absolute bg-overlay rounded-tr-[10px] rounded-tl-[10px]"></div>
      </div>
      <div className="w-full flex items-center justify-center mt-5 mb-10">
        <span className="font-medium text-[17px] text-slate-700">
          {data[props.currentQuestion].title}
        </span>
      </div>
      <div className="flex items-center flex-wrap gap-5 md:justify-between justify-center w-[80%] mx-auto mb-5">
        {data[props.currentQuestion].options.map((option) => {
          return (
            <span
              key={option.id}
              id={option.id}
              onClick={(e) => onAnswer(e.target.id, option.questionId)}
              className={
                props.answers.some(
                  (item) =>
                    item.questionId == option.questionId &&
                    item.answerId == option.id
                )
                  ? `border border-blue-300 hover:border-slate-400 hover:bg-slate-200 transition-all duration-200 font-medium text-slate-700 shadow-sm rounded-md cursor-pointer bg-blue-100 flex items-center justify-center w-[250px] py-2`
                  : `border border-slate-300 hover:border-slate-400 hover:bg-slate-200 transition-all duration-200 font-medium text-slate-700 shadow-sm rounded-md cursor-pointer bg-white flex items-center justify-center w-[250px] py-2`
              }
            >
              {option.title}
            </span>
          );
        })}
      </div>

      <div className="flex flex-row-reverse gap-5 items-center justify-center w-full mt-8 mb-3">
        <button
          type="button"
          onClick={() => next()}
          className="rounded-full bg-slate-600 py-3 px-12 text-white font-medium"
        >
          Skip
        </button>
        <button
          type="button"
          onClick={() => back()}
          className={
            props.currentQuestion >= 1
              ? `rounded-full bg-white border border-slate-600 py-3 px-12 text-slate-600 font-medium block`
              : `rounded-full bg-white border border-slate-600 py-3 px-12 text-slate-600 font-medium hidden`
          }
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Quiz;
