import React, { useContext } from 'react';
import { VscDiffAdded } from 'react-icons/vsc';
import { FlashcardsContext, useFlashcardContexts } from '../providers/FlashcardContext';
const AddCardButton = (props: { util: Function }) => {
    const { flashcards, addWord, deleteWord } = useFlashcardContexts();
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
