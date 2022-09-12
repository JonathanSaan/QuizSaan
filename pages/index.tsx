import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Container, Main } from "../styles/home";


const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>QuizSaan</title>
        <meta name="description" content="A Quiz made with NextJs by JonathanSaan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1>
          Quiz
        </h1>
        <button>
          Start
        </button>
      </Main>
      
    </Container>
  );
};

export default Home
