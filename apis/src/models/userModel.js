const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
        // enum: ['Admin', 'Manager', 'Employee'],
    },
    lastLogin: {
        type: Date,
    },
    fName: {
        type: String,
        required: true,
    },
    lName: {
        type: String,
        required: true,
    },
    dept: {
        type: String,
        required: true,
    },
    doj: {
        type: Date,
        required: true,
    },
    mngrId: {
        type: String,
        required: false,
    },
    seniority: {
        type: String,
        required: true,
    },
    empCode: {
        type: String,
        required: true,
        unique: true,
    },

});

module.exports = mongoose.model('User', userSchema);