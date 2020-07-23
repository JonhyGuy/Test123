"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const { Schema } = mongoose;
const TireSchema = new Schema({
    _id: Number,
    boxId: Number,
    truckId: Number,
    serialNumber: String,
    position: String,
    mileage: Number
});
module.exports = mongoose.model('Tire', TireSchema);
