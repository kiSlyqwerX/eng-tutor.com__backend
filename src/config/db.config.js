import mongoose from "mongoose";

const DB_URL = process.env.DB_URL

function connectDB() {
    mongoose.connect(DB_URL)
    .then(() => console.log("[connectDB]: Conection success"))
    .catch((err) => console.log("[connectDB]: ", err.message))
}

export {connectDB}