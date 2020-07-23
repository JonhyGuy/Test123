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
exports.maintenanceController = void 0;
const Maintenance = require('../models/maintenance');
class MaintenanceController {
    MaintenancesList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const maintenance = yield Maintenance.find();
            res.json(maintenance);
        });
    }
    CreateMaintenance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const maintenance = new Maintenance(req.body);
            yield maintenance.save();
            res.json({ 'Status': 'Maintenance Created' });
        });
    }
    UpdateMaintenance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = req.params;
            const maintenance = {
                _id: req.body._id,
                truckId: req.body.truckId,
                boxId: req.body.boxId,
                mechanic: req.body.mechanic,
                endDate: req.body.endDate,
                reasons: req.body.reasons,
                comments: req.body.comments,
                starDate: req.body.starDate
            };
            yield Maintenance.findByIdAndUpdate(_id, { $set: maintenance }, { new: true });
            res.json({ 'Status': 'Maintenance Updated' });
        });
    }
    DeleteMaintenance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Maintenance.findByIdAndRemove(req.params._id);
            res.json({ 'Status': 'Maintenance Deleted' });
        });
    }
}
exports.maintenanceController = new MaintenanceController;
