import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getDefinitions, getTerms, storeFlashcards } from '../../utility/firestoreFunctions';

interface MyProviderProps {
  children: ReactNode; // ReactNode is the correct type for children
}
interface FlashcardContextType {
  flashcards: string[]; // Adjust the type based on your data structure
  addWord: (word: string, definition: string[]) => void;
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
  const addWord = (word: string, definition: string[]) => {
    const newArr: string[] = [];
    const toArray: string[] = flashcards as string[];
    if (!toArray.includes(word)) {
      toArray.unshift(word);
      for (const i in toArray) {
        newArr.push(toArray[i]);
      }
      SetCards(newArr);
    }
    console.log(definition, definitions);
    const newArr2 = definitions;
    newArr2.unshift(definition);
    SetDefinitions(newArr2);
    storeFlashcards(newArr, newArr2);
  };
  const deleteWord = (index: number) => {
    const newArr = flashcards.filter((_ele, ind) => ind != index);
    const newArr2 = definitions.filter((_ele, ind) => ind != index);
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
