import { Schema } from "mongoose";
import { QuestionInterface } from "./interface";

export const QuestionSchema = new Schema<QuestionInterface>({
    type: {
        type: "String",
        required: true,
    },
    difficulty: {
        type: "String",
        required: true,
    },
    category: {
        type: "String",
        required: true,
    },
    question: {
        type: "String",
        required: true,
    },
    correct_answer: {
        type: "String",
        required: true,
    },
    incorrect_answers: {
        type: ["String"],
        required: true,
    },
});
