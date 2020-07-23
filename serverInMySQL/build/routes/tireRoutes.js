"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tireController_1 = require("../controllers/tireController");
class TireRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // Tires
        // Tires List Component
        // Get all tires
        this.router.get('/tires', tireController_1.TireController.ListTires);
        // Delete a tire
        this.router.delete('/tires/:id', tireController_1.TireController.deleteTire);
        // Tires edit Component
        // Create a Tire
        this.router.post('/tires/add', tireController_1.TireController.createTire);
        // Update a Tire
        this.router.put('/tires/edit/:id', tireController_1.TireController.updateTire);
    }
}
const tireRouter = new TireRoutes;
exports.default = tireRouter.router;
