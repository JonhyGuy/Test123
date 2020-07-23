"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const { Schema } = mongoose;
const TravelSchema = new Schema({
    _id: Number,
    operatorId: Number,
    boxId: Number,
    truckId: Number,
    origin: String,
    destination: String,
    comments: String,
    loadingTime: Date,
    downloadTime: Date,
    arriveTime: Date,
    arriveCustomerTime: Date
});
module.exports = mongoose.model('Travel', TravelSchema);
