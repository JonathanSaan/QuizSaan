import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  
  @media(max-height: 500px) {
    min-height: 20em;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-family: monospace;
  font-size: 5vh;
  color: red;
  margin: auto 0;
  
  @media(max-width: 768px) {
    font-size: 7vw;
  }
`;

export const JumpScare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  
  img {
    animation: mymove 1s 1;
    background: red;
  }
  
  @keyframes mymove {
    0% {height: 5vh; width: 5vw;}
    100% {height: 100vh; width: 100vw;}
  }
`;
  