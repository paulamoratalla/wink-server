const { Schema, model } = require("mongoose");

const testSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        questions: {
            question1: {
                answer1: {
                    type: Boolean
                },
                answer2: {
                    type: Boolean
                },
                answer3: {
                    type: Boolean
                },
            },
            question2: {
                answer1: {
                    type: Boolean
                },
                answer2: {
                    type: Boolean
                },
                answer3: {
                    type: Boolean
                },
            },
            question3: {
                answer1: {
                    type: Boolean
                },
                answer2: {
                    type: Boolean
                },
                answer3: {
                    type: Boolean
                },
            },
            question4: {
                answer1: {
                    type: Boolean
                },
                answer2: {
                    type: Boolean
                },
                answer3: {
                    type: Boolean
                },
            },
            question5: {
                answer1: {
                    type: Boolean
                },
                answer2: {
                    type: Boolean
                },
                answer3: {
                    type: Boolean
                },
            },
            question6: {
                answer1: {
                    type: Boolean
                },
                answer2: {
                    type: Boolean
                },
                answer3: {
                    type: Boolean
                },
            },
        }
    },
    {
        timestamps: true,
    }
);

const Test = model("Test", testSchema);
module.exports = Test;