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
    margin: 0 0 20vh 0;
  }
  
  button {
    border: 1px solid gray;
    padding: 1em 2em;
  }
  
  button:hover {
    transition: 300ms;
    transform: scale(0.98);
  }
  
  button:active {
    filter: Brightness(0.8);
  }
`;