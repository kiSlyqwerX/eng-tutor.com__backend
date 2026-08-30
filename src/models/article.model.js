import { Schema, model } from "mongoose";

const articleSchema = new Schema({

    theme: {
        type: Object,
        required: true
    },

    title: {
        type: String,
        required: true

    },

    content: {
        type: String,
        required: true

    },

    slug: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true

    },

    timeToRead: {
        type: Number,
        required: true

    }

}, {
    timestamps: true
})



const ArticleModel = model("article", articleSchema)

export {ArticleModel}