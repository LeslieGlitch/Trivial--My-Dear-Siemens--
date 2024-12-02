import QuestionModel from "./model";
import { QuestionInterface } from "./interface";

/// @param doc Document to be stored
export async function storeDocument(doc: QuestionInterface): Promise<boolean> {
    try {
        await QuestionModel.create(doc);
    } catch (error) {
        return false;
    }
    return true;
}

/// @param paramQuestion Search term
export async function findByQuestion(
    paramQuestion: string
): Promise<Array<QuestionInterface> | null> {
    try {
        return await QuestionModel.findOne({ question: paramQuestion });
    } catch (err) {
        console.log(err);
    }
    return [];
}

/// @param paramType Search term
export async function findByType(
    paramType: string
): Promise<QuestionInterface | null> {
    try {
        return await QuestionModel.findOne({ type: paramType });
    } catch (err) {
        console.log(err);
    }
    return null;
}

/// @param paramDifficulty Search term
export async function findByDifficulty(
    paramDifficulty: string
): Promise<Array<QuestionInterface> | null> {
    try {
        return await QuestionModel.findOne({ difficulty: paramDifficulty });
    } catch (err) {
        console.log(err);
    }
    return [];
}

/// @param paramCategory Search term
export async function findByCategory(
    paramCategory: string
): Promise<Array<QuestionInterface> | null> {
    try {
        return await QuestionModel.findOne({ category: paramCategory });
    } catch (err) {
        console.log(err);
    }
    return [];
}

/// @param paramQuestion Search term
/// @param newData Document to be emplaced
export async function updateByQuestion(
    paramQuestion: string,
    newData: QuestionInterface
): Promise<boolean> {
    try {
        await QuestionModel.updateOne({ question: paramQuestion }, newData);
        return true;
    } catch (err) {
        console.log(err);
    }
    return false;
}

/// @param paramQuestion Search term
export async function deleteByQuestion(
    paramQuestion: string
): Promise<boolean> {
    try {
        await QuestionModel.deleteOne({ question: paramQuestion });
        return true;
    } catch (err) {
        console.log(err);
    }
    return false;
}
