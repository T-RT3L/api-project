import React, { createContext, useContext, useState } from 'react';

const GameInfoContext = createContext(undefined);
export const GameInfoProvider: React.FC = ({ children }) => {
  const [cq, SetCQ] = useState(0);
  const [gameEnd, SetGameEnd] = useState(false);
  const [stats, SetStats] = useState(0);
  const [hasChanged, SethasChanged] = useState(false);
  const updateCQ = (v) => {
    SetCQ(v);
    SethasChanged(true);
  };
  const updateStats = (v) => {
    SetStats(v);
  };
  const updateEndState = (v) => {
    SetGameEnd(v);
  };
  const Reset = () => {
    SethasChanged(false);
    SetStats(0);
    SetCQ(0);
    SetGameEnd(false);
  };
  return (
    <GameInfoContext value={{ cq, stats, updateCQ, updateStats, gameEnd, updateEndState, hasChanged, Reset }}>
      {children}
    </GameInfoContext>
  );
};
export const useGameInfoContext = () => {
  const context = useContext(GameInfoContext);
  return context;
};

export default GameInfoProvider;
