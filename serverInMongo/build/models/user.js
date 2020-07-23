"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
    _id: Number,
    username: String,
    email: String,
    password: String
});
module.exports = mongoose.model('User', UserSchema);
