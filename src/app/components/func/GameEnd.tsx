import React from 'react';
import { useGameInfoContext } from '../providers/GameInfoProvider';

const GameEnd = () => {
  const { cq, stats, Reset } = useGameInfoContext();
  return (
    <div className="md:w-3/4 rounded-t-2xl translate-y-1/2 w-full mx-auto border mt-10">
      <div className="pb-15 mt-5">
        <div className="text-center text-2xl font-mono">Stats</div>
        <div className="mx-4 flex flex-col font-mono gap-4 mt-10 pb-10">
          <p>Total Question: {cq + 1}</p>
          <p>Correct Answers: {stats}</p>
          <p>Percentage: {Math.round((stats / (cq + 1)) * 100)} %</p>
        </div>
        <button
          onClick={() => Reset()}
          className="absolute hover:cursor-pointer border-t w-full text-center hover:[&>*]:-translate-y-1 hover:h-17 hover:-translate-y-1/8 font-sans h-15 transition-all duration-75 bg-violet-950/20"
        >
          <div className="transition-all duration-75 text-xl">Restart</div>
        </button>
      </div>
    </div>
  );
};

export default GameEnd;
