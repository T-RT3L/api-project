'use client';
import React from 'react';
import { MdCancel } from 'react-icons/md';
import { useFlashcardContexts } from '../providers/FlashcardContext';
const CardArray = () => {
  const { flashcards, deleteWord } = useFlashcardContexts();
  return (
    <div className="absolute w-7/8 mx-auto h-fit px-4 py-4 border-x-1 rounded-t-2xl border-t-1 border-cyan-950 text-blue-500">
      <div className="grid grid-cols-6">
        {flashcards.map((value: string, index: number) => {
          return (
            <div
              key={index}
              className="mx-2 my-1 text-center font-serif rounded-2xl border p-1 capitalize text-sm flex flex-row gap-2 justify-center"
            >
              <div>{value}</div>
              <button
                className="hover:cursor-pointer"
                onClick={() => {
                  deleteWord(index);
                }}
              >
                <MdCancel size={15} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardArray;
