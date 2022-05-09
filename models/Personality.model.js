const { Schema, model } = require("mongoose");
const personalitySchema = new Schema(
    {
        Question1: {
            Answer1: {
                type: Boolean
            },
            Answer2: {
                type: Boolean
            },
            Answer3: {
                type: Boolean
            },
        },
        Question2: {
            Answer1: {
                type: Boolean
            },
            Answer2: {
                type: Boolean
            },
            Answer3: {
                type: Boolean
            },
        },
        Question3: {
            Answer1: {
                type: Boolean
            },
            Answer2: {
                type: Boolean
            },
            Answer3: {
                type: Boolean
            },
        },
        Question4: {
            Answer1: {
                type: Boolean
            },
            Answer2: {
                type: Boolean
            },
            Answer3: {
                type: Boolean
            },
        },
        Question5: {
            Answer1: {
                type: Boolean
            },
            Answer2: {
                type: Boolean
            },
            Answer3: {
                type: Boolean
            },
        },
        Question6: {
            Answer1: {
                type: Boolean
            },
            Answer2: {
                type: Boolean
            },
            Answer3: {
                type: Boolean
            },
        },
    },
    {
        timestamps: true,
    }
);
const Personality = model("Personality", personalitySchema);
module.exports = Personality;