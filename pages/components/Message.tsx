import { useState, useEffect } from "react";
import Image from "next/image";
import { Howl } from "howler";
import Typewriter from "typewriter-effect";
import { Main, Title, JumpScare } from "../../styles/message";

interface Props {
  quizState: number;
  setQuizState: any;
  showEnd: boolean;
  setShowEnd: any;
}

const Message = ({ quizState, setQuizState, showEnd, setShowEnd }: Props) => {
  const [hasTimeElapsed, setHasTimeElapsed] = useState<boolean>(true);
  const sound = new Howl({
    src: ["/audio/cat.mp3"],
    html5: true,
  });

  useEffect(() => {
    const EventHasTimeElapsed = setTimeout(() => {
      setHasTimeElapsed(hasTimeElapsed === true ? false : true);
      sound.play();
    }, 39500);

    const EventBackToHome = setTimeout(() => {
      setHasTimeElapsed(hasTimeElapsed === false ? true : false);
      setQuizState(quizState - 1);
      setShowEnd(showEnd === false ? true : false);
    }, 40500);

    return () => {
      clearTimeout(EventHasTimeElapsed);
      clearTimeout(EventBackToHome);
    };
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
                "Hello?",
                "Is there someone else?",
                "...",
                "I know you are there.",
                "Answer me!",
                "Now!",
                "...",
                "Okay...",
                "You will regret.",
              ],
            }}
          />
        </Title>
      ) : (
        <JumpScare>
          <Image
            src="/image/cat.png"
            alt="jumping cat"
            height="70em"
            width="70em"
          />
        </JumpScare>
      )}
    </Main>
  );
};

export default Message;
