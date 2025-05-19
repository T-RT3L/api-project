import React from 'react';
import { useFlashcardContexts } from '../providers/FlashcardContext';
import { VscDiffAdded } from 'react-icons/vsc';

const CardInfo = (props: { term: string; pos: String; definition: Array<String> }) => {
  const { addWord } = useFlashcardContexts();
  return (
    <div className="w-full min-h-60 h-fit border-1 py-4 px-6 rounded-2xl transition-all duration-700 relative">
      <div className="absolute right-0 mx-4">
        <button
          className="flex-row flex gap-2 hover:cursor-pointer"
          onClick={() => {
            addWord(props.term, props.definition);
          }}
        >
          <VscDiffAdded size={30} />
        </button>
      </div>

      <div className="mx-auto w-fit font-mono flex flex-col capitalize">
        <strong className="text-4xl">{props.term}</strong>
        <i>{props.pos}</i>
      </div>

      <div className="flex flex-col gap-5 h-8/12 mt-4 break-normal font-sans">
        <p className="text-xl underline underline-offset-4 decoration-1">Definition: </p>
        <div className="font-sans flex flex-col gap-2">
          {props.definition.map((value, index) => {
            return (
              <div className="text-blue-500" key={index}>
                {index + 1 + ' : ' + value}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
