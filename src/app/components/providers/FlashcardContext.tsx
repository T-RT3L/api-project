import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getDefinitions, getTerms, giveAll, storeFlashcards } from '../../utility/firestoreFunctions';

interface MyProviderProps {
  children: ReactNode; // ReactNode is the correct type for children
}
interface FlashcardContextType {
  flashcards: string[]; // Adjust the type based on your data structure
  addWord: (word: string, definition: any) => void;
  deleteWord: (index: number) => void;
  definitions: string[]; // Example: a map of words to definitions
}
const FlashcardsContext = createContext<FlashcardContextType | undefined>(undefined);
export const FlashcardsContextProvider = ({ children }: MyProviderProps) => {
  const [flashcards, SetCards] = useState(['']);
  const [definitions, SetDefinitions] = useState(['']);
  useEffect(() => {
    const fetchFromFirestore = async () => {
      const terms = (await getTerms()) as string[];
      const def = (await getDefinitions()) as string[];

      if (terms.length != 0 && terms != undefined) {
        SetCards(terms);
        SetDefinitions(def);
      } else {
        SetCards([]);
        SetDefinitions([]);
      }
    };
    fetchFromFirestore();
  }, []);
  const addWord = (word: string, definition: any) => {
    var newArr: string[] = [];
    var toArray: string[] = flashcards as string[];
    if (!toArray.includes(word)) {
      toArray.unshift(word);
      for (var i in toArray) {
        newArr.push(toArray[i]);
      }
      SetCards(newArr);
    }
    var newArr2 = definitions;
    if (!newArr2.includes(definition)) {
      newArr2.unshift(definition);
      SetDefinitions(newArr2);
    }
    storeFlashcards(newArr, newArr2);
  };
  const deleteWord = (index: number) => {
    var newArr = flashcards.filter((ele, ind) => ind != index);
    var newArr2 = definitions.filter((ele, ind) => ind != index);
    SetCards(newArr);
    SetDefinitions(newArr2);
    storeFlashcards(newArr, newArr2);
  };
  const value: FlashcardContextType = {
    flashcards,
    addWord,
    deleteWord,
    definitions,
  };
  return <FlashcardsContext.Provider value={value}>{children}</FlashcardsContext.Provider>;
};
export const useFlashcardContexts = () => {
  const context = useContext(FlashcardsContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};
