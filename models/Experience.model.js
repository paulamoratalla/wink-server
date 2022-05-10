const { Schema, model } = require("mongoose");

const experienceSchema = new Schema(
    {
        date: {
            type: Date
        },
        place: {
            type: String,
        },
        price: {
            type: Number
        },
        lovers: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }],
    },
    {
        timestamps: true,
    }
);

const Experience = model("Experience", experienceSchema);
module.exports = Experience;