import { useState } from "react";

import End from "./GameOver";
import questions from "../../data/questions";
import { Main, Title, OptionsContainer } from "../../styles/question";

interface Props {
  HandleShowScore(): void;
  AddOneScore(): void;
}


const Question = ({ HandleShowScore, AddOneScore }: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      AddOneScore();
    };

    const nextQuestion = currentQuestion + 1;
    
    if (nextQuestion < questions.length) {
      return setCurrentQuestion(nextQuestion);
    };
    
    HandleShowScore();
  };
  
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