"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employeeController_1 = require("../controllers/employeeController");
class BoxRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // CAJAS
        this.router.get('/employees', employeeController_1.employeeController.EmployeesList);
        this.router.delete('/employees/:_id', employeeController_1.employeeController.DeleteEmployee);
        this.router.post('/employees/add', employeeController_1.employeeController.CreateEmployee);
        this.router.put('/employees/edit/:_id', employeeController_1.employeeController.UpdateEmployee);
    }
}
const boxRouter = new BoxRoutes;
exports.default = boxRouter.router;
