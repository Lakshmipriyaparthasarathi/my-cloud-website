import React, { useState, useEffect } from 'react';
import './PuzzleRoom.css';

const questions = [
    { question: "What color is the sky on a clear day?", answer: "Blue" },
    { question: "How many legs does a spider have?", answer: "Eight" },
    { question: "Which fruit is red and often given to teachers?", answer: "Apple" },
    { question: "What do bees make that is sweet?", answer: "Honey" },
    { question: "What do you wear on your feet to go outside?", answer: "Shoes" },
    { question: "Which animal says 'meow'?", answer: "Cat" },
    { question: "What do you use to brush your teeth?", answer: "Toothbrush" },
    { question: "What do you call frozen water?", answer: "Ice" },
    { question: 'What runs but never walks?', answer: 'Water' },
    { question: 'What has hands but can’t clap?', answer: 'Clock' },
    { question: 'What can fill a room but takes up no space?', answer: 'Light' },
    { question: 'What comes down but never goes up?', answer: 'Rain' },
    { question: 'What has a neck but no head?', answer: 'Bottle' },
    { question: 'What gets wetter the more it dries?', answer: 'Towel' },
    { question: 'What has one eye but can’t see?', answer: 'Needle' },
    { question: 'What has legs but doesn’t walk?', answer: 'Table' },
    { question: 'What can’t be used until it’s broken?', answer: 'Egg' },
    { question: 'What goes up but never comes down?', answer: 'Age' },
    { question: 'What has a face and two hands but no arms or legs?', answer: 'Clock' },
    { question: 'What has cities but no houses, forests but no trees, and rivers but no water?', answer: 'Map' },
    { question: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?', answer: 'Echo' },
  ];

function PuzzleRoom({ username, age }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setFeedback(`⏰ Time's up! Correct answer: ${currentQuestion.answer}`);
          setTimeout(() => nextQuestion(), 2000);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex]);

  const handleSubmit = () => {
    if (userAnswer.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setFeedback('✅ Correct!');
      setTimeout(() => nextQuestion(), 1500);
    } else {
      setFeedback('❌ Try again!');
    }
    setUserAnswer('');
  };

  const handleSkip = () => {
    setFeedback(`⏭️ Skipped! Correct answer: ${currentQuestion.answer}`);
    setTimeout(() => nextQuestion(), 2000);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => {
      const next = prevIndex + 1;
      return next < questions.length ? next : 0;
    });
    setFeedback('');
    setTimeLeft(30);
  };

  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setFeedback('');
    setTimeLeft(30);
  };

  return (
    <div className="puzzle-room">
      <h2>LET'S PLAY !!</h2>
      <h3>🧠 Puzzle {currentQuestionIndex + 1}</h3>
      <p>{currentQuestion.question}</p>
      <div className="timer">⏳ Time Left: {timeLeft}s</div>

      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Your answer..."
      />
      <div className="controls">
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleSkip}>Skip</button>
        <button onClick={restartGame}>Restart</button>
      </div>
      {feedback && <p className="feedback">{feedback}</p>}
    </div>
  );
}

export default PuzzleRoom;
