"use strict";
const mongoose = require('mongoose');
const { Schema } = mongoose;
const BoxSchema = new Schema({
    _id: Number,
    model: String,
    type: String,
    km: Number,
    serialNumber: String,
    brand: String
});
module.exports = mongoose.model('Box', BoxSchema);
