import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import Home from "./components/Home";
import Question from "./components/Question";
import { Container } from "../styles/home";


const PrincipalContainer: NextPage = () => {
  const [quizState, dispatch] = useState<boolean>(false);
  
  const Quiz = () => {
    dispatch(quizState === false ? true : false);
  };
  
  return (
    <Container>
      <Head>
        <title>QuizSaan</title>
        <meta name="description" content="A Quiz made with NextJs by JonathanSaan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {quizState === false && <Home Quiz={Quiz} />}
      {quizState === true && <Question/>}
      
    </Container>
  );
};

export default PrincipalContainer;