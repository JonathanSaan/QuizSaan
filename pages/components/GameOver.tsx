import { useEffect } from "react";
import { Main, Title } from "../../styles/gameover";

interface Props {
  EventAfterFourMinutes(): void;
  score: number;
  ResetQuiz(): void;
}


const GameOver = ({ EventAfterFourMinutes, score, ResetQuiz }: Props) => {
  useEffect(() => {
    const timeout = EventAfterFourMinutes();
    return () => clearTimeout(timeout);
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

export default GameOver;