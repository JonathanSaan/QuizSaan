import styled from "styled-components";

export const Container = styled.div`
  padding: 0 1em;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  
  button {
    border: 1px solid gray;
    padding: 1em 2em;
  }
  
  button:hover {
    transition: 300ms;
    filter: Brightness(1.4);
  }
  
  button:active {
    transform: scale(0.96);
  }
`;

export const Title = styled.h1`
  font-size: 7vh;
  margin: 0 0 17vh 0;
  
  @media(max-width: 768px) {
    font-size: 3em;
  }
`;