import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { storeDocument } from "../mongoose/question/services";

async function dbConnect(): Promise<any | String> {
    const mongoServer = await MongoMemoryServer.create();
    const MONGOIO_URI = mongoServer.getUri();
    await mongoose.disconnect();

    let db = await mongoose . connect(MONGOIO_URI, {
        dbName: "Question"
    });
}
export default dbConnect;
