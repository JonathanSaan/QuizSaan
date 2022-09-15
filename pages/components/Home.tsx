import { Main } from "../../styles/styles";

interface Props {
  Quiz(): void;
}


const Home = ({ Quiz }: Props) => {
  return (
    <Main>
      <h1>
        Quiz
      </h1>
      <button onClick={Quiz}>
        Start
      </button>
    </Main>
  );
};

export default Home;