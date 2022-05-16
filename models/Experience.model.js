const { Schema, model } = require("mongoose");

const experienceSchema = new Schema(
    {
        name: {
            type: String,
        },
        date: {
            type: Date
        },
        place: {
            type: String,
        },
        price: {
            type: Number
        },
        imageExp: {
            type: String,
            default: "https://i.stack.imgur.com/l60Hf.png",
        },
        descriptionExp: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

const Experience = model("Experience", experienceSchema);
module.exports = Experience;