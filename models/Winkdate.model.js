const { Schema, model } = require("mongoose");

const winkdateSchema = new Schema(
    {
        experience: {
            type: Schema.Types.ObjectId,
            ref: 'Experience',
        },
        date: {
            type: Date
        },
        lover: {
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