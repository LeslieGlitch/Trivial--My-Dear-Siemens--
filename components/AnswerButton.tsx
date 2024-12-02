'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation'
import { useRouter, NextRouter } from 'next/router';

const MAX_STRIKES = 3;

const AnswerButton = ({
    param = 0,
    answer = "",
    correct_ans = "",
}) => {
    useEffect(() => {
        // Attach event handlers here
        let handleClick = (evt: Event) => {

        };

        // Attach event listener
        document.addEventListener("Click", handleClick);

        // Cleanup
        return () => {
            // Remove event listener on component unmount
            document.removeEventListener("Click", handleClick);
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    let paramObject = {
        progress: Math.floor(param / 8),
        strikes: Math.floor((param % 8) / 2),
        questionsGotten: param % 2,
    }

    return (
        <button type="button" id="Click" onClick={() => clickAns(answer, correct_ans, paramObject)} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <p className="ml-4"> {answer} </p>
        </button>
    );
};

export default AnswerButton;

function clickAns(answer: string, correct_ans: string, params: {progress: number, strikes: number}) {
    if (answer == correct_ans) {
        correctAnswer(params.progress, params.strikes);
    } else {
        incorrectAnswer(params.progress, params.strikes);
    }
}

function correctAnswer(progress: number, strikes: number) {
    // increment progress counter
    progress += 1;
    let params = (progress * 8) + ((strikes % 4) * 2) + 1;
    redirect("/trivia/play/" + params)
}

function incorrectAnswer(progress: number, strikes: number) {
    // increment strikes counter
    strikes += 1;
    if (strikes > MAX_STRIKES || progress == 0) {
        // game over
        strikes = 0;
        progress = 0
    }
    let params = (progress * 8) + (strikes * 2) + 1;
    redirect("/trivia/play/" + params)
}

