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
