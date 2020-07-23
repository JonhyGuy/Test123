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
exports.truckController = void 0;
const Truck = require('../models/truck');
class TruckController {
    TrucksList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const truck = yield Truck.find();
            res.json(truck);
        });
    }
    CreateTruck(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const truck = new Truck(req.body);
            yield truck.save();
            res.json({ 'Status': 'Box Created' });
        });
    }
    UpdateTruck(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = req.params;
            const truck = {
                _id: req.body._id,
                model: req.body.model,
                brand: req.body.brand,
                serialNumber: req.body.serialNumber,
                motorNumber: req.body.motorNumber,
                maintenancePeriod: req.body.maintenancePeriod,
                inicialMilage: req.body.inicialMilage,
                milage: req.body.milage,
                circulationCard: req.body.circulationCard,
                airbag: req.body.airbag,
                dock: req.body.dock
            };
            yield Truck.findByIdAndUpdate(_id, { $set: truck }, { new: true });
            res.json({ 'Status': 'Truck Updated' });
        });
    }
    DeleteTruck(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Truck.findByIdAndRemove(req.params._id);
            res.json({ 'Status': 'Truck Deleted' });
        });
    }
}
exports.truckController = new TruckController;
