const data = [
  {
    questionText: 'What does HTML stand for?',
    answerOptions: [
      { answerText: 'Hyper Text Markup Language', isCorrect: true },
      { answerText: 'Hyper Text Preprocessor', isCorrect: false },
      { answerText: 'Hyper Text Multiple Language', isCorrect: false },
      { answerText: 'Hyper Tool Multi Language', isCorrect: false },
    ],
  },
  {
    questionText: 'When JavaScript was invented?',
    answerOptions: [
      { answerText: '2007', isCorrect: false },
      { answerText: '1995', isCorrect: true },
      { answerText: '1997', isCorrect: false },
      { answerText: '1999', isCorrect: false },
    ],
  },
  {
    questionText: 'What sport is best known as the ‘king of sports’?',
    answerOptions: [
      { answerText: 'Basketball', isCorrect: false },
      { answerText: 'Soccer', isCorrect: true },
      { answerText: 'Tennis', isCorrect: false },
      { answerText: 'Boxing', isCorrect: false },
    ],
  },
  {
    questionText: 'When the internet was invented?',
    answerOptions: [
      { answerText: '1980', isCorrect: false },
      { answerText: '1985', isCorrect: false },
      { answerText: '1983', isCorrect: true },
      { answerText: '1979', isCorrect: false },
    ],
  },
  {
    questionText:
      'Which country has the most access to internet?',
    answerOptions: [
      { answerText: 'United States', isCorrect: false },
      { answerText: 'Japan', isCorrect: false },
      { answerText: 'China', isCorrect: true },
      { answerText: 'Brazil', isCorrect: false },
    ],
  },
  {
    questionText: 'When did Socrates live?',
    answerOptions: [
      { answerText: '467 - 400 BC', isCorrect: false },
      { answerText: '470 - 398 BC', isCorrect: false },
      { answerText: '468 - 398 BC', isCorrect: false },
      { answerText: '469 - 399 BC', isCorrect: true },
    ],
  },
  {
    questionText: 'How can you reduce the chances of being hacked?',
    answerOptions: [
      { answerText: 'Keep your anti-virus software up to date', isCorrect: false },
      { answerText: 'Install all available updates to your operating system regularly', isCorrect: false },
      { answerText: 'Do not use open WiFi', isCorrect: false },
      { answerText: 'All of the above', isCorrect: true },
    ],
  },
  {
    questionText: 'Who was Philosopher the say the phrase "It is not what happens to you, but how you react to it that matters."?',
    answerOptions: [
      { answerText: 'Marcus Aurelius', isCorrect: false },
      { answerText: 'Seneca', isCorrect: false },
      { answerText: 'Epictetus', isCorrect: true },
      { answerText: 'Socrates', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the total number of bones in an adult human body?',
    answerOptions: [
      { answerText: '200', isCorrect: false },
      { answerText: '206', isCorrect: true },
      { answerText: '202', isCorrect: false },
      { answerText: '209', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the Superman according to Nietzsche?',
    answerOptions: [
      { answerText: 'A philosopher', isCorrect: false },
      { answerText: 'A tall man', isCorrect: false },
      { answerText: 'A man really strong', isCorrect: false },
      { answerText: 'A superior man', isCorrect: true },
    ],
  },
  {
    questionText: 'According to Plato, what is knowledge?',
    answerOptions: [
      { answerText: 'There is no such thing as true knowledge', isCorrect: false },
      { answerText: 'A justified true belief', isCorrect: true },
      { answerText: 'That which can be proven', isCorrect: false },
      { answerText: 'Opinion', isCorrect: false },
    ],
  },
  {
    questionText: 'The allegory of the cave argues what?',
    answerOptions: [
      { answerText: 'We are born with infinite knowledge', isCorrect: false },
      { answerText: 'Perceptions are sources of absolute knowledge', isCorrect: false },
      { answerText: 'There is value in ignorance', isCorrect: false },
      { answerText: 'Our perceptions may not be accurate', isCorrect: true },
    ],
  },
  {
    questionText: 'Which kind of sport involves ascending inclined ice formations?',
    answerOptions: [
      { answerText: 'Diving', isCorrect: false },
      { answerText: 'Ice climbing', isCorrect: true },
      { answerText: 'Wakeboarding', isCorrect: false },
      { answerText: 'Speedway', isCorrect: false },
    ],
  },
  {
    questionText: 'What year did boxing become a legal sport?',
    answerOptions: [
      { answerText: '1901', isCorrect: true },
      { answerText: '1921', isCorrect: false },
      { answerText: '1911', isCorrect: false },
      { answerText: '1931', isCorrect: false },
    ],
  },
  {
    questionText: 'What was the IQ of Ted Kaczynski?',
    answerOptions: [
      { answerText: '169', isCorrect: false },
      { answerText: '170', isCorrect: false },
      { answerText: '180', isCorrect: false },
      { answerText: '167', isCorrect: true },
    ],
  },
  {
    questionText: "What was Sisyphus' punishment for cheating death?",
    answerOptions: [
      { answerText: 'Push a rock up a hill but it would always come back to the same place', isCorrect: true },
      { answerText: 'Everything and everyone he touches will turn to gold', isCorrect: false },
      { answerText: 'To be locked in the darkest place of tartar', isCorrect: false },
      { answerText: 'Having your liver eaten all day by a big eagle', isCorrect: false },
    ],
  },
  {
    questionText: 'Who developed c# programming language?',
    answerOptions: [
      { answerText: 'Rockstar Games', isCorrect: false },
      { answerText: 'Tencent', isCorrect: false },
      { answerText: 'Ubisoft', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: true },
    ],
  },
  {
    questionText: 'Who is the greatest god in mythology?',
    answerOptions: [
      { answerText: 'Poseidon', isCorrect: false },
      { answerText: 'Zeus', isCorrect: true },
      { answerText: 'Apollo', isCorrect: false },
      { answerText: 'Hades', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is the real founder of Microsoft?',
    answerOptions: [
      { answerText: 'Bill Gates and Paul Allen', isCorrect: true },
      { answerText: 'Steve jobs', isCorrect: false },
      { answerText: 'Larry Ellison and Warren Buffett', isCorrect: false },
      { answerText: 'Markus Persson', isCorrect: false },
    ],
  },
  {
    questionText: 'How was Ted Kaczynski known?',
    answerOptions: [
      { answerText: 'A Samurai', isCorrect: false },
      { answerText: 'A Calisthenic', isCorrect: false },
      { answerText: 'A Ninja', isCorrect: false },
      { answerText: 'Unabomber', isCorrect: true },
    ],
  },
];

export default data;