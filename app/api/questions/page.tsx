import type { NextApiRequest, NextApiResponse } from "next";
import internal from "stream";
import { QuestionInterface } from "@/mongoose/question/interface";
import { storeDocument } from "@/mongoose/question/services";

type responseItemType = {
    response_code: number;
    results: QuestionInterface[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<NextApiResponse<QuestionInterface[]> | void> {
    const baseURL = "https://opentdb.com/api.php?";
    const paramURL = "amount=1";
    const url = baseURL + paramURL;
    let data;
    try {
        const response = await fetch(url);
        data = (await response.json()) as responseItemType;
    } catch (err) {
        return res.status(500);
    }
    if (data.response_code != 0) {
        return res.status(500);
    }
    const questions = data.results.map((item) => {
        storeDocument(item);
        return {
            type: item.type,
            difficulty: item.difficulty,
            category: item.category,
            question: item.question,
            correct_answer: item.correct_answer,
            incorrect_answers: item.incorrect_answers,
            
        };
    });
    return res.status(200).json(questions);
}