import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { Main, QuestionText, OptionsContainer, Confirm } from "../../styles/styles";
import questions from "../../data/questions";

const Question = () => {
  const [score, setScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    };

    const nextQuestion = currentQuestion + 1;
    
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    };
  };
    
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  
  return (
    <Main data-aos="fade-in">
      <QuestionText>
        <h1>
          {questions[currentQuestion].questionText}
        </h1>
      </QuestionText>
      
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