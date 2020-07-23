"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const truckController_1 = require("../controllers/truckController");
class TruckRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // trucks
        // trucks List Component
        // Get all trucks
        this.router.get('/trucks', truckController_1.truckController.ListTrcks);
        // Delete a box
        this.router.delete('/trucks/:id', truckController_1.truckController.deleteTruck);
        // trucks edit Component
        // Create a Box
        this.router.post('/trucks/add', truckController_1.truckController.createTruck);
        // Update a Box
        this.router.put('/trucks/edit/:id', truckController_1.truckController.updateTruck);
    }
}
const truckRouter = new TruckRoutes;
exports.default = truckRouter.router;
