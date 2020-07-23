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
        // CAJAS
        this.router.get('/maintenances', maintenanceController_1.maintenanceController.MaintenancesList);
        this.router.delete('/maintenances/:_id', maintenanceController_1.maintenanceController.DeleteMaintenance);
        this.router.post('/maintenances/add', maintenanceController_1.maintenanceController.CreateMaintenance);
        this.router.put('/maintenances/edit/:_id', maintenanceController_1.maintenanceController.UpdateMaintenance);
    }
}
const maintenanceRouter = new MaintenanceRoutes;
exports.default = maintenanceRouter.router;
