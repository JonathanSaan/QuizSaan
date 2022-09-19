import AOS from "aos";
import "aos/dist/aos.css";

import { Main, Title } from "../../styles/gameover";

interface Props {
  score: number;
  ResetQuiz(): void;
}


const End = ({ score, ResetQuiz }: Props) => {
  
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