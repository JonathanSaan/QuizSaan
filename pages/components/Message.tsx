import Typewriter from "typewriter-effect";
import { Main, Title } from "../../styles/message";


const Message = () => {
  return (
    <Main data-aos="fade-in">
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
    </Main>
  );
};

export default Message;