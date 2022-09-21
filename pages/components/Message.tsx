import { useState, useEffect } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Main, Title, JumpScare } from "../../styles/message";

interface Props {
  ResetQuiz(): void;
}


const Message = ({ ResetQuiz }: Props) => {
  const [hasTimeElapsed, setHasTimeElapsed] = useState<boolean>(true);
  
  useEffect(() => {
    const EventHasTimeElapsed = () => {
      setTimeout(() => {
        setHasTimeElapsed(hasTimeElapsed === true ? false : true);
      }, 40000);
      //}, 1000);
    };
    
    const EventBackToHome = () => {
      setTimeout(() => {
        setHasTimeElapsed(hasTimeElapsed === false ? true : false);
        ResetQuiz();
      }, 41000);
      //}, 2000);
    };
    
    EventHasTimeElapsed();
    EventBackToHome();
    clearTimeout(EventBackToHome, EventHasTimeElapsed);
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
        <JumpScare>
          <Image
            src="/public/image/cat.png"
            alt="jumping cat"
            height="5vh"
            width="5vw"
          />
        </JumpScare>
      )}
    </Main>
  );
};

export default Message;