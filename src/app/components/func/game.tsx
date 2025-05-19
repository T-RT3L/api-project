'use client';
import React from 'react';
import PlayCard from './PlayCard';
import GameInfo from './GameInfo';
import GameInfoProvider from '../providers/GameInfoProvider';

const Game = () => {
  return (
    <div className="h-fit relative flex flex-col">
      <GameInfoProvider>
        <GameInfo />
        <PlayCard />
      </GameInfoProvider>
    </div>
  );
};

export default Game;
