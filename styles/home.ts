import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  
  h1 {
    margin: 0 0 20vh 0;
  }
  
  button {
    border: 1px solid gray;
    padding: 1em 2em;
  }
`;