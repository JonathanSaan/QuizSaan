import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  
  @media(max-height: 500px) {
    min-height: 30em;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 7vh;
  margin: 0 0 17vh 0;
  max-width: 25em;

  @media(max-width: 768px) {
    font-size: 6vw;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  button {
    border: 1px solid #808080ff;
    margin: .5vh 0;
    padding: 1em 2em;
    min-height: 4em;
    min-width: 45vw;
  }
  
  button:hover {
    transition: 300ms;
    filter: Brightness(1.4);
  }
  
  button:active {
    transform: scale(0.96);
  }
  
  @media(max-width: 768px) {
    button {
      width: 70vw;
      max-width: 75vw;
    }
  }
`;