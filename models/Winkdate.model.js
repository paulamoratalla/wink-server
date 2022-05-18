const { Schema, model } = require("mongoose");

const winkdateSchema = new Schema(
    {
        boughtExperiences: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        date: {
            type: Date
        },
        matches: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
);

const Winkdate = model("Winkdate", winkdateSchema);
module.exports = Winkdate;