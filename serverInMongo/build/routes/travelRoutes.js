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
        // CAJAS
        this.router.get('/travels', travelController_1.travelController.TravelList);
        this.router.delete('/travels/:_id', travelController_1.travelController.DeleteTravel);
        this.router.post('/travels/add', travelController_1.travelController.CreateTravel);
        this.router.put('/travels/edit/:_id', travelController_1.travelController.UpdateTravel);
    }
}
const travelRouter = new TravelRoutes;
exports.default = travelRouter.router;
