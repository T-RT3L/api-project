'use client';
import React from 'react';
import CardLayout from './CardLayout';
import CardArray from './CardArray';
import { FlashcardsContextProvider } from '../providers/FlashcardContext';

const Cards = () => {
  return (
    <div className="flex-col flex justify-between h-full">
      <FlashcardsContextProvider>
        <CardLayout />
        <CardArray />
      </FlashcardsContextProvider>
    </div>
  );
};

export default Cards;
