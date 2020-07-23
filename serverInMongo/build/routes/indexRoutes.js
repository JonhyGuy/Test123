"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var indexController_1 = require("../controllers/indexController");
var IndexRoutes = /** @class */ (function () {
    function IndexRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    IndexRoutes.prototype.config = function () {
        // CAJAS
        this.router.get('/boxes', indexController_1.indexController.BoxesList);
        this.router.delete('/boxes/:_id', indexController_1.indexController.DeleteBox);
        this.router.post('/boxes/add', indexController_1.indexController.CreateBox);
        this.router.put('/boxes/edit/:_id', indexController_1.indexController.UpdateBox);
        // LLANTAS
        this.router.get('/tires', function (req, res) {
            res.send("Estas en lista de llantas");
        });
        this.router.get('/tires/add', function (req, res) {
            res.send("Estas en agregar llanta");
        });
        this.router.get('/tires/edit/:id', function (req, res) {
            res.send("Estas en editar llanta ");
        });
        // EMPLEADOS
        this.router.get('/api/paysheet/employees', function (req, res) {
            res.send("Estas en lista de empleados");
        });
        this.router.get('/api/paysheet/employees/add', function (req, res) {
            res.send("Estas en agregar empleado");
        });
        this.router.get('/api/paysheet/employees/edit/:id', function (req, res) {
            res.send("Estas en editar empleado");
        });
    };
    return IndexRoutes;
}());
var indexRouter = new IndexRoutes;
exports.default = indexRouter.router;
