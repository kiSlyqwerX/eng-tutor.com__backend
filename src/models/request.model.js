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
        type: Array
    },
    comment: {
        type: String
    }
})

const Requests = model("orders", requestSchema)

export {Requests}