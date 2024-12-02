"use client";

import React, { useState } from "react";

const [progress, setProgress] = useState(0);
const [strikes, setStrikes] = useState(0);
const [hasDatabase, setHasDatabase] = useState(0);

export default function Trivia() {

  if (hasDatabase == 0) {
    
  }

  // return
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-900 py-6 sm:py-12">
      <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative bg-gray-900 px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <p className="text-3xl text-pink-300">Trivial, My Dear Siemens!!</p>
          <p className="text-md text-cyan-300">A small trivia game using OpenTriviaDB</p>
          <div className="divide-x divide-gray-300/50">
            <div className="divide-y divide-gray-300/50">
              <div className="space-y-4 py-8 text-base leading-7 text-gray-100">
                <p>{he.decode(questionItem.question)} &emsp;</p>
                <ul className="grid">
                  <button type="button" id="Click" onClick={() => clickAns(answer, correct_ans, params)} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <p className="ml-4"> {answer} </p>
                  </button>
                  <button type="button" id="Click" onClick={() => clickAns(answer, correct_ans, params)} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <p className="ml-4"> {answer} </p>
                  </button>
                  <button type="button" id="Click" onClick={() => clickAns(answer, correct_ans, params)} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <p className="ml-4"> {answer} </p>
                  </button>
                  <button type="button" id="Click" onClick={() => clickAns(answer, correct_ans, params)} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <p className="ml-4"> {answer} </p>
                  </button>
                </ul>
                <div className="text-black bg-gradient-to-r from-cyan-400 to-green-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  <p className="ml-4">
                    Score: { progress } <br></br>
                    Strikes: { strikes }
                  </p>
                </div>
                <p className="text-xs">A project by Leslie Wollitz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
