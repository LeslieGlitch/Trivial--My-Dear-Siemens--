import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { storeDocument } from "../mongoose/question/services";
import { QuestionInterface } from "@/mongoose/question/interface";

type responseItemType = {
    response_code: number;
    results: QuestionInterface[];
}

async function getQuestions(paramURL: string): Promise<Array<QuestionInterface> | null> {
    const baseURL = "https://opentdb.com/api.php?";
    const url = baseURL + paramURL;
    let data;
    const response = await fetch(url);
    data = (await response.json()) as responseItemType;
    var docs = data.results as QuestionInterface[];
    for (let i=0; i<docs.length; i++) {
        storeDocument(docs[i]);
    }
    return data.results;
}
export default getQuestions;
