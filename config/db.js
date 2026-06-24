// to stablish the mongodb database connection
import mongoose from "mongoose";

const connectDb = async () => {
    try {
        // connect mongo using uri
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db is connected")
    } catch (error) {
        console.error("db connection error",error)
    }
}

export default connectDb;