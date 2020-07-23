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
        // CAJAS
        this.router.get('/trucks', truckController_1.truckController.TrucksList);
        this.router.delete('/trucks/:_id', truckController_1.truckController.DeleteTruck);
        this.router.post('/trucks/add', truckController_1.truckController.CreateTruck);
        this.router.put('/trucks/edit/:_id', truckController_1.truckController.UpdateTruck);
    }
}
const truckRouter = new TruckRoutes;
exports.default = truckRouter.router;
