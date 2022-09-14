import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { Main } from "../../styles/home";


const Question = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  
  return (
    <Main data-aos="fade-in">
      <h1>
        Question 1
      </h1>
      <button>
        answer 1
      </button>
    </Main>
  );
};

export default Question;