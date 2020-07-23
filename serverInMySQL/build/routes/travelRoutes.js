"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const travelController_1 = require("../controllers/travelController");
class TravelRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // Travel
        // Travel List Component
        // Get all travel
        this.router.get('/travel', travelController_1.travelController.ListTravel);
        // Delete a travel
        this.router.delete('/travel/:id', travelController_1.travelController.deleteTravel);
        // Travel edit Component
        // Create a travel
        this.router.post('/travel/add', travelController_1.travelController.createTravel);
        // Update a Travel
        this.router.put('/travel/edit/:id', travelController_1.travelController.updateTravel);
    }
}
const travelRouter = new TravelRoutes;
exports.default = travelRouter.router;
