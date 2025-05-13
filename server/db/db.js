import mongoose from "mongoose";

const connectToDb = () => {
    mongoose.connect(process.env.DB_CONNECT).then(() => {
        console.log("Connected to database");
    }).catch((err) => {
        console.log("Error while connecting database:", err);
    })
}

export default connectToDb;