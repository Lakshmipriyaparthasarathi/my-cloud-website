import React, { useEffect, useState } from 'react';
import './GameBoard.css';

const EMOJIS = ['🐶', '🐱', '🦊', '🐼', '🐵', '🐸', '🐤', '🦁'];

const shuffleArray = (array) => {
  const duplicated = [...array, ...array];
  return duplicated
    .sort(() => Math.random() - 0.5)
    .map((emoji, index) => ({ id: index, emoji, flipped: false, matched: false }));
};

const GameBoard = () => {
  const [cards, setCards] = useState(shuffleArray(EMOJIS));
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [moves, setMoves] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    if (firstCard && secondCard) {
      setDisabled(true);
      if (firstCard.emoji === secondCard.emoji) {
        setCards((prev) =>
          prev.map((card) =>
            card.emoji === firstCard.emoji ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, flipped: false }
                : card
            )
          );
          resetTurn();
        }, 1000);
      }
      setMoves((m) => m + 1);
    }
  }, [firstCard, secondCard]);

  useEffect(() => {
    if (cards.every((card) => card.matched)) {
      setGameWon(true);
    }
  }, [cards]);

  const handleCardClick = (card) => {
    if (disabled || card.flipped || card.matched) return;

    setCards((prev) =>
      prev.map((c) =>
        c.id === card.id ? { ...c, flipped: true } : c
      )
    );

    if (!firstCard) {
      setFirstCard(card);
    } else {
      setSecondCard(card);
    }
  };

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  };

  const restartGame = () => {
    setCards(shuffleArray(EMOJIS));
    setMoves(0);
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
    setGameWon(false);
  };

  return (
    <div className="game-container">
      <h1>🎯 Emoji MatchUp</h1>
      <p className="moves">Moves: {moves}</p>

      {!gameWon ? (
        <div className="card-grid">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`card ${card.flipped || card.matched ? 'flipped' : ''} ${card.matched ? 'matched' : ''}`}
              onClick={() => handleCardClick(card)}
            >
              {card.flipped || card.matched ? card.emoji : '❓'}
            </div>
          ))}
        </div>
      ) : (
        <div className="win-message">
          <h2>🎉 You Win!</h2>
          <p>Great memory! 💡</p>
        </div>
      )}

      <button className="restart-btn" onClick={restartGame}>Restart Game</button>
    </div>
  );
};

export default GameBoard;