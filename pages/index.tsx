import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Home from "./components/Home";
import Question from "./components/Question";
import End from "./components/GameOver";
import { Container } from "../styles/home";


const PrincipalContainer: NextPage = () => {
  const [showScore, setShowScore] = useState<boolean>(false);
  const [quizState, dispatch] = useState<number>(1);
  
  const HandleScore = () => {
    setShowScore(showScore === false ? true : false)
  }
  
  const StartQuiz = () => {
    dispatch(quizState + 1);
  };
  
  return (
    <Container>
      <Head>
        <title>QuizSaan</title>
        <meta name="description" content="A Quiz made with NextJs by JonathanSaan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
      {quizState === 1 ? (
        <Home StartQuiz={StartQuiz} />
       ) : (
        <>
          {showScore ? (
            <End/>
          ) : ( 
            <Question HandleScore={HandleScore} />
          )}
        </>
       )}
    </Container>
  );
};

export default PrincipalContainer;