//import { Main } from "../../styles/styles";
import { Main, Title } from "../../styles/home";

interface Props {
  StartQuiz(): void;
}


const Home = ({ StartQuiz }: Props) => {
  return (
    <Main>
      <Title>
        Quiz
      </Title>
      <button onClick={StartQuiz}>
        Start
      </button>
    </Main>
  );
};

export default Home;