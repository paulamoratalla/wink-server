const { Schema, model } = require("mongoose");
const dateSchema = new Schema(
    {
        date: {
            type: Date
        },
        time: {
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
const Personality = model("Date", dateSchema);