import { Schema, model } from "mongoose";

const requestSchema = new Schema({

    name: {
        type: String,
        require: true
    },
    contact: {
        type: String,
        require: true
    },
    test: {
        type: Array,
        default: null
    },
    comment: {
        type: String,
        default: null
    },
    status: {
        type: String,
        enum: [
            "pending",
            "completed",
            "denied"
        ],
        default: "pending"
    }
})

const Requests = model("requests", requestSchema)

export {Requests}