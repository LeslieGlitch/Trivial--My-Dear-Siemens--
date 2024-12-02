'use client';

import { useEffect } from 'react';

const AnswerButton = ({
    progress = 0,
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

    return (
        <button type="button" id="Click" onClick={() => clickAns(answer, correct_ans, progress)} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <p className="ml-4"> {answer} </p>
        </button>
    );
};

export default AnswerButton;

function clickAns(answer: string, correct_ans: string, progress: number) {
    if (answer == correct_ans) {
        correctAnswer(progress);
    } else {
        incorrectAnswer(progress);
    }
}

function correctAnswer(progress: number) {
    console.log("Correct!");
    // increment progress counter
    progress += 1;
    let progressString = progress.toString();
    const newPath = "http://localhost:3000/trivia/play/" + progressString;
    window.location.href = newPath;
}

function incorrectAnswer(progress: number) {
    console.log("Incorrect!");
    window.location.href = "http://localhost:3000/trivia/play/0";
}
