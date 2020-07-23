"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const { Schema } = mongoose;
const EmployeeSchema = new Schema({
    _id: Number,
    userId: Number,
    name: String,
    cellphone: String,
    address: String,
    secondaryCellphone: String,
    driversLicense: String,
    typeLicense: String,
    licenseDueDate: Date,
    phychophysicistTest: String,
    testDate: Date,
    testExpirationDate: Date,
    licenseDocument: String,
    ifeDocument: String,
    ssDocument: String,
    photo: String,
    infonavit: String,
    salary: Number
});
module.exports = mongoose.model('Operator', EmployeeSchema);
