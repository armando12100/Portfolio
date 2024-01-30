import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    number: {type: String},
    message: {type: String},
});

export const EmailModel = mongoose.model("Form", EmailSchema)