import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getDefinitions, getTerms, giveAll, storeFlashcards } from '../../utility/firestoreFunctions';

const FlashcardsContext = createContext(undefined);
export const FlashcardsContextProvider: React.FC = ({ children }) => {
    const [flashcards, SetCards] = useState([]);
    const [definitions, SetDefinitions] = useState([]);
    useEffect(() => {
        const fetchFromFirestore = async () => {
            const terms = await getTerms();
            const def = await getDefinitions();

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
    const addWord = (word, definition) => {
        word = word[0];
        var newArr = [];
        var toArray = flashcards;
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
    const deleteWord = (index) => {
        var newArr = flashcards.filter((ele, ind) => ind != index);
        var newArr2 = definitions.filter((ele, ind) => ind != index);
        SetCards(newArr);
        SetDefinitions(newArr2);
        storeFlashcards(newArr, newArr2);
    };
    return (
        <FlashcardsContext.Provider value={{ flashcards, addWord, deleteWord, definitions }}>
            {children}
        </FlashcardsContext.Provider>
    );
};
export const useFlashcardContexts = () => {
    const context = useContext(FlashcardsContext);
    return context;
};
