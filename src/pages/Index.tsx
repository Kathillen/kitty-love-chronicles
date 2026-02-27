import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import LoveCounter from "@/components/LoveCounter";
import LoveTimeline from "@/components/LoveTimeline";
import LoveQuiz from "@/components/LoveQuiz";
import QuizResult from "@/components/QuizResult";
import FinalMessage from "@/components/FinalMessage";

const Index = () => {
  const [quizScore, setQuizScore] = useState<number | null>(null);

  return (
    <div className="relative overflow-x-hidden">
      <FloatingHearts />
      <LoveCounter />
      <LoveTimeline />
      {quizScore === null ? (
        <LoveQuiz onFinish={setQuizScore} />
      ) : (
        <QuizResult score={quizScore} />
      )}
      <FinalMessage />
    </div>
  );
};

export default Index;
