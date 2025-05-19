import React, { createContext, ReactNode, useContext, useState } from 'react';
interface MyProviderProps {
  children: ReactNode; // ReactNode is the correct type for children
}
interface GameContextType {
  cq: number;
  stats: number;
  updateCQ: (v: number) => void;
  updateStats: (v: number) => void;
  gameEnd: boolean;
  updateEndState: (v: boolean) => void;
  hasChanged: boolean;
  Reset: () => void;
}

const GameInfoContext = createContext<GameContextType | undefined>(undefined);
export const GameInfoProvider = ({ children }: MyProviderProps) => {
  const [cq, SetCQ] = useState(0);
  const [gameEnd, SetGameEnd] = useState(false);
  const [stats, SetStats] = useState(0);
  const [hasChanged, SethasChanged] = useState(false);
  const updateCQ = (v: number) => {
    SetCQ(v);
    SethasChanged(true);
  };
  const updateStats = (v: number) => {
    SetStats(v);
  };
  const updateEndState = (v: boolean) => {
    SetGameEnd(v);
  };
  const Reset = () => {
    SethasChanged(false);
    SetStats(0);
    SetCQ(0);
    SetGameEnd(false);
  };
  const value = {
    cq,
    stats,
    updateCQ,
    updateStats,
    gameEnd,
    updateEndState,
    hasChanged,
    Reset,
  };
  return <GameInfoContext value={value}>{children}</GameInfoContext>;
};
export const useGameInfoContext = () => {
  const context = useContext(GameInfoContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};

export default GameInfoProvider;
