'use client';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CardInfo from './CardInfo';

const CardLayout = () => {
  const apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
  const [term, setTerm] = useState('Word');
  const [pos, setPos] = useState('POS');
  const [definition, setDefinition] = useState(['']);
  const setAll = (data: { [key: string]: any }) => {
    console.log(typeof data);
    setPos(data['meanings'][0]['partOfSpeech']);
    const a = [];
    for (const b in data['meanings'][0]['definitions']) {
      a.push(data['meanings'][0]['definitions'][b]['definition']);
    }
    setDefinition(a as string[]);
  };
  const searchWord = async (word: string) => {
    try {
      fetch(apiUrl + word).then(async (response) => {
        if (!response.ok) {
          console.log('');
        } else {
          setTerm(word);
          setAll((await response.json())[0]);
        }
      });
    } catch {
      console.log('failed to fetch');
    }
  };
  return (
    <div className="mx-auto md:w-3/4 lg:w-1/2 w-full p-4">
      <div className="text-blue-500 flex-col flex gap-10 mt-10">
        <SearchBar util={searchWord} />
        <CardInfo term={term as string} pos={pos as string} definition={definition as string[]} />
      </div>
    </div>
  );
};

export default CardLayout;
