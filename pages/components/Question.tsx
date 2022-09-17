import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import End from "./GameOver";
import questions from "../../data/questions";
import { Main, Title, OptionsContainer } from "../../styles/question";

interface Props {
  HandleScore(): void;
}


const Question = ({ HandleScore }: Props) => {
  const [score, setScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    };

    const nextQuestion = currentQuestion + 1;
    
    if (nextQuestion < questions.length) {
      return setCurrentQuestion(nextQuestion);
    };
    
    HandleScore();
  };
    
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  
  return (
    <Main data-aos="fade-in">
      <Title>
        {questions[currentQuestion].questionText}
      </Title>
      
      <OptionsContainer>
        {questions[currentQuestion].answerOptions.map((option, index) => (
          <button
            onClick={() => handleAnswer(option.isCorrect)}
            key={index}
          >
            {option.answerText}
          </button>
        ))}
      </OptionsContainer>
    </Main>
  );
};

export default Question;