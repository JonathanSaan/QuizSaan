import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Home from "./components/Home";
import Question from "./components/Question";
import End from "./components/GameOver";
import Message from "./components/Message";
import { Container } from "../styles/home";


const PrincipalContainer: NextPage = () => {
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [quizState, dispatch] = useState<number>(1);
  
  const StartQuiz = () => {
    dispatch(quizState + 1);
  };
  
  const AddOneScore = () => {
    setScore(score + 1);
  };
  
  const HandleShowScore = () => {
    setShowScore(showScore === false ? true : false);
  };
  
  const ResetQuiz = () => {
    dispatch(quizState - 1);
    setShowScore(showScore === true ? false : true);
    setScore(0);
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
            <End score={score} ResetQuiz={ResetQuiz} />
            
            
          ) : ( 
            <Question AddOneScore={AddOneScore} HandleShowScore={HandleShowScore} />
          )}
        </>
       )}
    </Container>
            //<Message />
  );
};


export default PrincipalContainer;