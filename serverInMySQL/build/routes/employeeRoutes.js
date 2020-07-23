"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employeeController_1 = require("../controllers/employeeController");
class EmployeeRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // Employees
        // Employees List Component
        // Get all Employees
        this.router.get('/employees', employeeController_1.employeeController.ListEmployees);
        // Delete a employee
        this.router.delete('/employees/:id', employeeController_1.employeeController.deleteEmployee);
        // Employees edit Component
        // Create a employee
        this.router.post('/employees/add', employeeController_1.employeeController.createEmployee);
        // Update a employee
        this.router.put('/employees/edit/:id', employeeController_1.employeeController.updateEmployee);
    }
}
const employeeRouter = new EmployeeRoutes;
exports.default = employeeRouter.router;
