import { Schema, model } from "mongoose";

const requestSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
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
}, {
    timestamps: true
})

const RequestModel = model("requests", requestSchema)

export {RequestModel}