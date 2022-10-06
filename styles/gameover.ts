import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  
  h2 {
    text-align: center;
  }
  
  button {
    border: 1px solid #808080ff;
    margin: 27vh 0 0;
    padding: 1em 2em;
    min-height: 4em;
    min-width: 5em;
  }
  
  button:hover {
    transition: 300ms;
    filter: Brightness(1.4);
  }
  
  button:active {
    transform: scale(0.96);
  }
  
  @media(max-height: 500px) {
    min-height: 20em;
    
    button {
      margin: 25vh 0 0;
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 7vh;
  margin: 17vh 0 5vh 0;
  
  @media(max-width: 768px) {
    font-size: 2em;
  }
`;
