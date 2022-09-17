import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { Main, Title } from "../../styles/gameover";


const End = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  
  return (
    <Main data-aos="fade-in">
      <Title>
        End The Game
      </Title>
    </Main>
  );
};

export default End;