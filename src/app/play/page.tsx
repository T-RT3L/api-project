import React from 'react';
import NavBar from '../components/func/NavBar';
import Game from '../components/func/game';
import GameInfoProvider from '../components/providers/GameInfoProvider';

const page = () => {
  return (
    <div className="w-screen h-screen bg-black box-border m-0 p-0 text-blue-400 overflow-scroll">
      <NavBar />
      <Game />
    </div>
  );
};

export default page;
