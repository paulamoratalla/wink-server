const { Schema, model } = require("mongoose");

const paymentSchema = new Schema(
    {
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Experience',
        },
        buyer: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
);

const Payment = model("Payment", paymentSchema);
module.exports = Payment;