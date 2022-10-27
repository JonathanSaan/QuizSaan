import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Home from "./components/Home";
import Question from "./components/Question";
import GameOver from "./components/GameOver";
import Message from "./components/Message";
import { Container } from "../styles/home";


const PrincipalContainer: NextPage = () => {
  const [quizState, setQuizState] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [showEnd, setShowEnd] = useState<boolean>(true);
  const [afterFourMinutes, setAfterFourMinutes] = useState<boolean>(false);
  
  
  const StartQuiz = () => {
    setQuizState(quizState + 1);
  };
  
  const AddOneScore = () => {
    setScore(score + 1);
  };
  
  const HandleShowScore = () => {
    setShowEnd(showEnd === false ? true : false);
    setAfterFourMinutes(afterFourMinutes === true ? false : true);
  };
  
  const ResetQuiz = () => {
    setQuizState(quizState - 1);
    setShowEnd(showEnd === false ? true : false);
    setAfterFourMinutes(afterFourMinutes === false ? true : false);
    setScore(0);
  };
  
  const EventAfterFourMinutes = () => {
    const timeout = setTimeout(() => {
      setAfterFourMinutes(afterFourMinutes === true ? false : true);
      setScore(0);
    }, 240000);
    return timeout;
  };
  
  return (
    <Container>
      <Head>
        <title>QuizSaan</title>
        <meta name="description" content="A Quiz made with NextJs by JonathanSaan" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="quiz, html, javascript, internet, sport, philosopher, philosophy, anatomy, hack, hacking" />
        <meta name="author" content="JonathanSaan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {quizState === 1 ? (
        <Home StartQuiz={StartQuiz} />
       ) : (
        <>
          {showEnd ? (
            <Question AddOneScore={AddOneScore} HandleShowScore={HandleShowScore} />
          ) : ( 
            <>
              {afterFourMinutes ? (
                <GameOver score={score} ResetQuiz={ResetQuiz} EventAfterFourMinutes={EventAfterFourMinutes} />
              ) : (
                <Message quizState={quizState} setQuizState={setQuizState} setShowEnd={setShowEnd} showEnd={showEnd} />
              )}
            </>
          )}
        </>
       )}
    </Container>
  );
};


export default PrincipalContainer;