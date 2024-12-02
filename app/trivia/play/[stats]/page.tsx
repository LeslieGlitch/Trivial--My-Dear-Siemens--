"use server";

import { deleteByQuestion, findByDifficulty, findByType } from "../../../../mongoose/question/services";
import { QuestionInterface } from "@/mongoose/question/interface";
import getQuestions from "../../../../middleware/getQuestions";
import dbConnect from "../../../../middleware/db-connect";
import AnswerButton from "@/components/AnswerButton";

let progress = 0;
let strikes = 0;
let questionsGotten = 0;

export default async function Play({
  params,
}: {
  params: Promise<{ stats: number }>
}) {

  // parse stats into separate variables
  const param = await params;
  progress = Math.floor(param.stats / 8);
  strikes = Math.floor((param.stats % 8) / 2);
  questionsGotten = param.stats % 2;

  // load items into database only if not done yet
  if (questionsGotten == 0) {
    // connect to database
    await dbConnect();

    // load the database with questions
    const paramURL = "amount=50&type=multiple";
    await getQuestions(paramURL);
  }

  // add a new question to database to replace current one
  getQuestions("amount=1&type=multiple");

  // QnA's are formatted with HTML encoding, he is a library to decode
  var he = require('he');

  // determine difficulty setting based on current progress
  let difficulty = "easy";
  if (progress > 5) {
    difficulty = "medium";
  }
  if (progress > 10) {
    difficulty = "hard";
  }

  // get questions from database and assign variables
  let questionItem = await findByDifficulty(difficulty);

  // load dummy question if null
  if (questionItem == null) {
    questionItem = {
      type: "multiple",
      difficulty: "easy",
      category: "meta",
      question: "What is the answer to this question?",
      correct_answer: "This one!",
      incorrect_answers: [
        "Not me!",
        "Bad choice",
        "Nuh-uh!",
      ],
    }
  }

  // delete entry from database to prevent duplicates
  deleteByQuestion(questionItem.question);

  // shuffle answers so user does not know which is correct
  let ansArr: string[] = [
    he.decode(questionItem.correct_answer),
    he.decode(questionItem.incorrect_answers[0]),
    he.decode(questionItem.incorrect_answers[1]),
    he.decode(questionItem.incorrect_answers[2]),
  ]
  shuffle(ansArr);

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
                  <AnswerButton param={param.stats} answer={ansArr[0]} correct_ans={he.decode(questionItem.correct_answer)}></AnswerButton>
                  <AnswerButton param={param.stats} answer={ansArr[1]} correct_ans={he.decode(questionItem.correct_answer)}></AnswerButton>
                  <AnswerButton param={param.stats} answer={ansArr[2]} correct_ans={he.decode(questionItem.correct_answer)}></AnswerButton>
                  <AnswerButton param={param.stats} answer={ansArr[3]} correct_ans={he.decode(questionItem.correct_answer)}></AnswerButton>
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

// shuffles an array of strings
function shuffle(array: string[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}
