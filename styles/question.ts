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
  margin: 0 0 17vh 0;
  max-width: 25em;

  @media(max-width: 768px) {
    font-size: 2em;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  button {
    border: 1px solid gray;
    margin: .5vh 0;
    padding: 1em 2em;
    min-width: 40vw;
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
    }
  }
`;