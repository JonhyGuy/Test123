"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeController = void 0;
const Employee = require('../models/employee');
class EmployeeController {
    EmployeesList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield Employee.find();
            res.json(employee);
        });
    }
    CreateEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = new Employee(req.body);
            yield employee.save();
            res.json({ 'Status': 'Employee Created' });
        });
    }
    UpdateEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = req.params;
            const employee = {
                _id: req.body._id,
                userId: req.body.userId,
                name: req.body.name,
                cellphone: req.body.cellphone,
                address: req.body.address,
                secondaryCellphone: req.body.secondaryCellphone,
                driversLicense: req.body.driversLicense,
                typeLicense: req.body.typeLicense,
                licenseDueDate: req.body.licenseDueDate,
                phychophysicistTest: req.body.phychophysicistTest,
                testDate: req.body.testDate,
                testExpirationDate: req.body.testExpirationDate,
                licenseDocument: req.body.licenseDocument,
                ifeDocument: req.body.ifeDocument,
                ssDocument: req.body.ssDocument,
                photo: req.body.photo,
                infonavit: req.body.infonavit,
                salary: req.body.salary
            };
            yield Employee.findByIdAndUpdate(_id, { $set: employee }, { new: true });
            res.json({ 'Status': 'Employee Updated' });
        });
    }
    DeleteEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Employee.findByIdAndRemove(req.params._id);
            res.json({ 'Status': 'Employee Deleted' });
        });
    }
}
exports.employeeController = new EmployeeController;
