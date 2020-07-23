"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const boxController_1 = require("../controllers/boxController");
class BoxRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // CAJAS
        this.router.get('/boxes', boxController_1.boxController.BoxesList);
        this.router.delete('/boxes/:_id', boxController_1.boxController.DeleteBox);
        this.router.post('/boxes/add', boxController_1.boxController.CreateBox);
        this.router.put('/boxes/edit/:_id', boxController_1.boxController.UpdateBox);
    }
}
const boxRouter = new BoxRoutes;
exports.default = boxRouter.router;
