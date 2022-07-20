import { useState } from "react";
import Head from "next/head";
import Quiz from "@/components/Quiz/Quiz";
import Result from "@/components/Result/Result";
import Layout from "@/containers/Layout/Layout";

export default function Home() {
  const [done, setDone] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  return (
    <>
      <Head>
        <title>Quiz Application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <Layout>
        {done ? (
          <Result
            score={score}
            setScore={setScore}
            setDone={setDone}
            setCurrentQuestion={setCurrentQuestion}
            setAnswers={setAnswers}
          />
        ) : (
          <Quiz
            setDone={setDone}
            setScore={setScore}
            score={score}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            answers={answers}
            setAnswers={setAnswers}
          />
        )}
      </Layout>
    </>
  );
}
