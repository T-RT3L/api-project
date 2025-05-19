import React from 'react';
import { useGameInfoContext } from '../providers/GameInfoProvider';

const GameInfo = () => {
  const { cq, stats, hasChanged, updateEndState } = useGameInfoContext();
  return (
    <div className="bg-slate-950 w-3/4  md:w-1/2 absolute  left-0 top-0 p-5 md:rounded-b-4xl rounded-br-4xl md:translate-x-1/2 border-1 border-blue-950 border-t-0">
      <div className="flex flex-row justify-between sm:mx-10 mx-1 font-mono">
        <div>{cq == 0 ? 0 : stats} correct</div>
        <div>{cq == 0 ? 0 : Math.round((stats / cq) * 100)} %</div>
      </div>
    </div>
  );
};

export default GameInfo;
