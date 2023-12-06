import mongoose from "mongoose";
import connect from "../config/connect";

const connectDatabase = async () => {
    try {
        await mongoose.connect(`${connect.database}`)
        console.log(`MongoDb connected`)
    } catch(err) {
        console.log(err)
    }
};

export default connectDatabase;