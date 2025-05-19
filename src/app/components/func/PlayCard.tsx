'use client';
import React, { useEffect, useState } from 'react';
import { getDefinitions, getTerms } from '../../utility/firestoreFunctions';
import { GrCaretNext } from 'react-icons/gr';
import { BiShow } from 'react-icons/bi';
import { Suspense } from 'react';
import { CircularProgress } from '@mui/material';
import Loading from './Loading';
import { useGameInfoContext } from '../providers/GameInfoProvider';
import GameEnd from './GameEnd';
const PlayCard = () => {
  const { cq, stats, updateCQ, updateStats, gameEnd, updateEndState } = useGameInfoContext();
  const [Clientterms, SetTerms] = useState(['term']);
  const [Clientdefinitions, SetDefinitions] = useState([]);
  var currentWord = Clientterms[cq];
  var currentDef = Clientdefinitions[cq];
  const [cardHideClass, SetCardHideClass] = useState('opacity-0 transition-discrete duration-700`');
  useEffect(() => {
    const fetchFromFirestore = async () => {
      const terms = await getTerms();
      const def = await getDefinitions();
      console.log(terms, def);
      if (terms.length != 0 && terms != undefined) {
        SetTerms(terms);
        SetDefinitions(def);
      }
    };
    fetchFromFirestore();
  }, []);
  const next = () => {
    SetCardHideClass('opacity-0 transition-none');
    if (cq == Clientterms.length - 1) {
      updateEndState(true);
    } else {
      updateCQ((cq + 1) % Clientterms.length);
    }
  };
  const check = () => {
    SetCardHideClass('opacity-100 transition-discrete duration-700 ease-out');
  };
  const correct = () => {
    updateStats(stats + 1);
    next();
  };
  console.log(gameEnd);
  return (
    <>
      {gameEnd ? (
        <GameEnd />
      ) : (
        <div className="translate-y-1/2 h-fit md:w-3/4 w-full relative border rounded-2xl pt-4 mx-auto text-wrap bg-[#221E5A]/30 font-mono min-h-80 ">
          <div className="border-t-1 rounded-tl-4xl rounded-tr-sm border-l-2 border-r-2  absolute h-12 top-0 translate-x-1/2 w-1/2 -translate-y-full transition-all duration-300 hover:h-15">
            <div className="translate-y-1/2 text-center transition-all duration-300">{cq + 1}</div>
          </div>

          <div className="absolute right-0 flex flex-row justify-between w-full px-6 ">
            <button
              className="hover:[&>*]:-translate-y-1  hover:cursor-pointer"
              onClick={() => {
                check();
              }}
            >
              <BiShow size={24} className="transition-all duration-300" />
            </button>
            <button
              className="hover:[&>*]:-translate-y-1  hover:cursor-pointer"
              onClick={() => {
                next();
              }}
            >
              <GrCaretNext size={24} className="transition-all duration-300" />
            </button>
          </div>

          <div className="w-fit mx-auto">
            <strong className="text-4xl capitalize">{currentWord == undefined ? <Loading /> : currentWord}</strong>
          </div>
          <div className="mt-10 mx-5 flex flex-col gap-4">
            <h1 className="text-2xl">Definitions: </h1>
            <div className=" md:text-md text-sm pb-20 ">
              <div className="bg-slate-800 rounded-2xl p-4 flex flex-col gap-4">
                {currentDef == undefined && currentDef != [] ? (
                  <Loading />
                ) : (
                  currentDef.map((val, i) => {
                    if (i <= 4) {
                      return (
                        <p className={cardHideClass} key={i}>
                          {i + ' : ' + val}
                        </p>
                      );
                    }
                  })
                )}
              </div>
            </div>
          </div>
          <div className="absolute w-full flex flex-row bottom-0 border-t-1 h-15 ">
            <button
              onClick={() => next()}
              className="w-full border-r-1 hover:cursor-pointer hover:bg-red-950/20 transition-all duration-75 hover:underline underline-offset-6 decoration-1  hover:border-0 hover:text-2xl hover:[&>*]:-translate-y-2 hover:px-20"
            >
              <div>Wrong</div>
            </button>
            <button
              onClick={() => correct()}
              className="w-full border-l-1 hover:cursor-pointer hover:bg-green-900/20 transition-all duration-75 hover:underline underline-offset-6 decoration-1 hover:px-20  hover:border-0 hover:text-2xl hover:[&>*]:-translate-y-2"
            >
              <div>Right</div>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PlayCard;
