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
        // CAJAS
        this.router.get('/tires', tireController_1.tireController.TiresList);
        this.router.delete('/tires/:_id', tireController_1.tireController.DeleteTire);
        this.router.post('/tires/add', tireController_1.tireController.CreateTire);
        this.router.put('/tires/edit/:_id', tireController_1.tireController.UpdateTire);
    }
}
const tireRouter = new TireRoutes;
exports.default = tireRouter.router;
