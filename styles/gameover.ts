import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 7vh;
  
  @media(max-width: 768px) {
    font-size: 2em;
  }
`;