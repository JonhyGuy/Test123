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
        // Boxes
        // Boxes List Component
        // Get all Boxes
        this.router.get('/boxes', boxController_1.BoxController.ListBoxes);
        this.router.get('/boxess', boxController_1.BoxController.BoxesList);
        // Delete a box
        this.router.delete('/boxes/:_id', boxController_1.BoxController.deleteBox);
        // Boxes edit Component
        // Create a Box
        this.router.post('/boxes/add', boxController_1.BoxController.createBox);
        // Update a Box
        this.router.put('/boxes/edit/:_id', boxController_1.BoxController.updateBox);
    }
}
const boxRouter = new BoxRoutes;
exports.default = boxRouter.router;
