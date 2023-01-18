const mongoose = require('mongoose')
const FormDataModelSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: {
            values: ["SINGLE", "MARRIED", "UNMARRIED"],
        },
        default: "SINGLE",
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: Number,
        required: true,
    },
    profilePhoto: {
        type: String,
        required: true,
        default: "no photo"
    },
    Date: {
        type: Date,
        default: Date.now,
    },

})

mongoose.model("FormDataModel", FormDataModelSchema);