const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    code: {
        type: Number,
    },
    isCodeConfirmed: {
      type: Boolean,
      default: false,
    },
    vaccinated:{
        type: Boolean,
        required: true,
    },
    userType: {
        type: String,
        enum: ['temporary', 'permanent'],
        default: 'temporary',
    },
    password: {
      type: String,
      required: true,
      default: "PasSWord"
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
    removeAt: {
        type: Date,
        default: () => new Date(Date.now() + 10000),
    },
});

const User = mongoose.model('user', UserSchema);
module.exports = User;
