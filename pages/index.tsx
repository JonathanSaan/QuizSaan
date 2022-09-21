import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Home from "./components/Home";
import Question from "./components/Question";
import GameOver from "./components/GameOver";
import Message from "./components/Message";
import { Container } from "../styles/home";


const PrincipalContainer: NextPage = () => {
  const [quizState, dispatch] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [showEnd, setShowEnd] = useState<boolean>(false);
  const [afterFourMinutes, setAfterFourMinutes] = useState<boolean>(false);
  
  
  const StartQuiz = () => {
    dispatch(quizState + 1);
  };
  
  const AddOneScore = () => {
    setScore(score + 1);
  };
  
  const HandleShowScore = () => {
    setShowEnd(showEnd === false ? true : false);
  };
  
  const ResetQuiz = () => {
    dispatch(quizState - 1);
    setShowEnd(showEnd === true ? false : true);
    setAfterFourMinutes(afterFourMinutes === true);
    setScore(0);
  };
  
  const EventAfterFourMinutes = () => {
    const timeout = setTimeout(() => {
      setAfterFourMinutes(afterFourMinutes === true ? false : true);
    }, 24000);
    //}, 3000);
    
    return timeout;
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
          {showEnd ? (
            <>
              {afterFourMinutes ? (
                <Message ResetQuiz={ResetQuiz} />
              ) : (
                <GameOver score={score} ResetQuiz={ResetQuiz} EventAfterFourMinutes={EventAfterFourMinutes} />
              )}
            </>
          ) : ( 
            <Question AddOneScore={AddOneScore} HandleShowScore={HandleShowScore} />
          )}
        </>
       )}
    </Container>
  );
};


export default PrincipalContainer;