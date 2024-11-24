import mongoose, { model } from "mongoose";
import { QuestionInterface } from "./interface";
import { QuestionSchema } from "./schema";

export default mongoose.models.Question ||
    model<QuestionInterface>("Question", QuestionSchema);
