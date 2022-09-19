import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Main, Title, Image } from "../../styles/message";


const Message = () => {
  const [hasTimeElapsed, setHasTimeElapsed] = useState<boolean>(true);
  
  useEffect(() => {
   const timeout = setTimeout(() => {
     setHasTimeElapsed(hasTimeElapsed === false);
   }, 40500);
  }, []);
 
  
  return (
    <Main data-aos="fade-in">
      {hasTimeElapsed ? (
        <Title>
          <Typewriter
            options={{
              autoStart: true,
              delay: 100,
              deleteSpeed: 100,
              loop: false,
              strings: [
                'Hello?',
                'Is there someone else?',
                '...',
                'I know you are there.',
                'Answer me!',
                'Now!',
                '...',
                'Okay...',
                'You will regret.',
              ],
            }}
          />
        </Title>
      ) : (
        <Image />
      )}
    </Main>
  );
};

export default Message;