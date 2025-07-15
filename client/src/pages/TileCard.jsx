import React from 'react';
import './TileCard.css';

export const TileCard = ({ tile, onClick }) => {
  return (
    <div
      className={`flip-card ${tile.isFlipped || tile.isMatched ? 'flipped' : ''}`}
      onClick={() => {
        if (!tile.isFlipped && !tile.isMatched) {
          onClick(tile.id);
        }
      }}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          ❓
        </div>
        <div className="flip-card-back">
          {tile.symbol}
        </div>
      </div>
    </div>
  );
};
