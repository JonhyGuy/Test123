"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tireController = void 0;
const Tire = require('../models/tire');
class TireController {
    TiresList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tire = yield Tire.find();
            res.json(tire);
        });
    }
    CreateTire(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tire = new Tire(req.body);
            yield tire.save();
            res.json({ 'Status': 'Tire Created' });
        });
    }
    UpdateTire(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = req.params;
            const tire = {
                _id: req.body._id,
                boxId: req.body.boxId,
                truckId: req.body.truckId,
                serialNumber: req.body.serialNumber,
                position: req.body.position,
                mileage: req.body.mileage
            };
            yield Tire.findByIdAndUpdate(_id, { $set: tire }, { new: true });
            res.json({ 'Status': 'Tire Updated' });
        });
    }
    DeleteTire(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Tire.findByIdAndRemove(req.params._id);
            res.json({ 'Status': 'Tire Deleted' });
        });
    }
}
exports.tireController = new TireController;
