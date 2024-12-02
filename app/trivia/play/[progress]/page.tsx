import { findByType } from "../../../../mongoose/question/services";
import { QuestionInterface } from "@/mongoose/question/interface";
import getQuestions from "../../../../middleware/getQuestions";
import dbConnect from "../../../../middleware/db-connect";
import AnswerButton from "@/components/AnswerButton";

export default async function Play(progress = 0) {
  var he = require('he');
  // connect to database
  await dbConnect();

  // load the database with questions
  const paramURL = "amount=1&type=multiple";
  await getQuestions(paramURL);

  // get questions from database and assign variables
  const questionArray = await findByType("multiple");
  if (questionArray == null) {
    return (<p> Question Array null </p>);
  }
  /*
  const thisQuestion = questionArray[0];
  if (thisQuestion == undefined) {
    return (<p> Question Array Element Undefined </p>);
  }
  */
  
  // shuffle answers so user does not know which is correct
  let ansArr: string[] = [
    he.decode(questionArray.correct_answer),
    he.decode(questionArray.incorrect_answers[0]),
    he.decode(questionArray.incorrect_answers[1]),
    he.decode(questionArray.incorrect_answers[2]),
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
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-4 py-8 text-base leading-7 text-gray-100">
              <p>{he.decode(questionArray.question)} &emsp;</p>
              <ul className="grid">
                <AnswerButton progress={progress} answer={ansArr[0]} correct_ans={he.decode(questionArray.correct_answer)}></AnswerButton>
                <AnswerButton progress={progress} answer={ansArr[1]} correct_ans={he.decode(questionArray.correct_answer)}></AnswerButton>
                <AnswerButton progress={progress} answer={ansArr[2]} correct_ans={he.decode(questionArray.correct_answer)}></AnswerButton>
                <AnswerButton progress={progress} answer={ansArr[3]} correct_ans={he.decode(questionArray.correct_answer)}></AnswerButton>
              </ul>
              <p className="text-xs">A project by Leslie Wollitz</p>
            </div>
            <div className="pt-8 text-base font-semibold leading-7">
              <p>
                <a href="localhost:3000/trivia" className="text-sky-500 hover:text-sky-600">Return Home &rarr;</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
