"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const maintenanceController_1 = require("../controllers/maintenanceController");
class MaintenanceRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // maintenances
        // maintenances List Component
        // Get all maintenances
        this.router.get('/maintenances', maintenanceController_1.maintenanceController.ListMaintenances);
        // Delete a box
        this.router.delete('/maintenances/:id', maintenanceController_1.maintenanceController.deleteMaintenace);
        // maintenances edit Component
        // Create a Box
        this.router.post('/maintenances/add', maintenanceController_1.maintenanceController.createMaintenance);
        // Update a Box
        this.router.put('/maintenances/edit/:id', maintenanceController_1.maintenanceController.updateMaintenace);
    }
}
const maintenaceRouter = new MaintenanceRoutes;
exports.default = maintenaceRouter.router;
