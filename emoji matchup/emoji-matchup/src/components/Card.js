import React from 'react';

const Card = ({ emoji, isFlipped, onClick, isMatched }) => {
  return (
    <div
      className={`card ${isFlipped || isMatched ? 'flipped' : ''}`}
      onClick={onClick}
    >
      {isFlipped || isMatched ? emoji : '❓'}
    </div>
  );
};

export default Card;