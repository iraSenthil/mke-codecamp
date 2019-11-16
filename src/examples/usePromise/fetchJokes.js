function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const jokes = [
  {
    question: "Did you get a haircut?",
    answer: "No, I got them all cut!"
  },
  {
    question: "Why couldn't the bicycle stand up by itself?",
    answer: "It was two tired."
  },
  {
    question: "Dad, can you put my shoes on?",
    answer: "No, I don't think they'll fit me."
  },
  {
    question: "What's brown and sticky?",
    answer: "A stick"
  }
];

export default function fetchJokes() {
  return sleep(3000).then(() => {
    const random = getRandomInt(4);
    return jokes[random];
  });
}
