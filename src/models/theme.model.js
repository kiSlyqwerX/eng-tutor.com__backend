import { Schema, model } from "mongoose";

const themeSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    context: {
        type: String,
        default: null
    }

}, {
    timestamps: true
})



const ThemeModel = model("themes", themeSchema)

export {ThemeModel}