"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // Boxes
        // Boxes List Component
        // Get all Boxes
        this.router.get('/boxes', indexController_1.indexController.ListBoxes);
        // Delete a box
        this.router.delete('/boxes/:id', indexController_1.indexController.deleteBox);
        // Boxes edit Component
        // Create a Box
        this.router.post('/boxes/add', indexController_1.indexController.createBox);
        // Update a Box
        this.router.put('/boxes/edit/:id', indexController_1.indexController.updateBox);
        // LLANTAS
        this.router.get('/tires', (req, res) => {
            res.send("Estas en lista de llantas");
        });
        this.router.get('/tires/add', (req, res) => {
            res.send("Estas en agregar llanta");
        });
        this.router.get('/tires/edit/:id', (req, res) => {
            res.send("Estas en editar llanta ");
        });
        // EMPLEADOS
        this.router.get('paysheet/employees', (req, res) => {
            res.send("Estas en lista de empleados");
        });
        this.router.get('paysheet/employees/add', (req, res) => {
            res.send("Estas en agregar empleado");
        });
        this.router.get('paysheet/employees/edit/:id', (req, res) => {
            res.send("Estas en editar empleado");
        });
    }
}
const indexRouter = new IndexRoutes;
exports.default = indexRouter.router;
