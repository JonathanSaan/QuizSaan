import { useState, useEffect } from "react";

import { Main, Title } from "../../styles/gameover";

interface Props {
  afterFiveMinutes: boolean;
  setAfterFiveMinutes: boolean;
  score: number;
  ResetQuiz(): void;
}


const End = ({ score, afterFiveMinutes, setAfterFiveMinutes, ResetQuiz }: Props) => {
  
  useEffect(() => {
   const timeout = setTimeout(() => {
     setAfterFiveMinutes(afterFiveMinutes === false);
   }, 240000);
  }, []);
  
  return (
    <Main data-aos="fade-in">
      <Title>
        End The Game
      </Title>
      <h2>
        You got {score} out of 20 questions.
      </h2>
      <button onClick={ResetQuiz}>
        Play Again
      </button>
    </Main>
  );
};

export default End;