import React from 'react';
import { VscDiffAdded } from 'react-icons/vsc';
import { useFlashcardContexts } from '../providers/FlashcardContext';
const AddCardButton = () => {
  const { flashcards } = useFlashcardContexts();
  return (
    <button
      className="flex-row flex gap-2 hover:cursor-pointer"
      onClick={() => {
        console.log(flashcards);
      }}
    >
      <VscDiffAdded size={30} />
    </button>
  );
};

export default AddCardButton;
