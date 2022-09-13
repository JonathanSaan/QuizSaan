import { Main } from "../../styles/home";

interface Props {
  Quiz(): bool;
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