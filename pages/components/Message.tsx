import { useEffect } from "react";

import Typewriter from "typewriter-effect";

import AOS from "aos";
import "aos/dist/aos.css";

import { Main, Title } from "../../styles/message";


const Message = () => {
  useEffect(() => {
    //AOS.init({ duration: 2000 });
  }, []);
  //data-aos="fade-in
  return (
    <Main>
      <Title>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            strings=[
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
    </Main>
  );
};

export default Message;