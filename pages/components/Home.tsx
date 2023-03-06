import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { Main, Title } from "../../styles/home";

interface Props {
  StartQuiz(): void;
}

const Home = ({ StartQuiz }: Props) => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <Main data-aos="fade-in">
      <Title>Quiz</Title>
      <button onClick={StartQuiz}>Start</button>
    </Main>
  );
};

export default Home;
