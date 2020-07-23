"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registerController_1 = require("../controllers/registerController");
class RegisterRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/register', registerController_1.registerController.createUser);
    }
}
const registerRouter = new RegisterRoutes;
exports.default = registerRouter.router;
