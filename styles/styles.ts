import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2em;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  
  h1 {
    font-size: 3em;
    margin: 0 0 17vh 0;
  }
  
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



export const QuestionText = styled.div`
  h1 {
    font-size: 7vh;
  }
  
  @media(max-width: 768px) {
    h1 {
      font-size: 6vw;
    }
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  button {
    margin: .5vh 0;
    min-width: 40vw;
  }
  
  @media(max-width: 768px) {
    button {
      min-width: 60vw;
    }
  }
`;