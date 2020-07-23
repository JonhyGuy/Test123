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
exports.travelController = void 0;
const Travel = require('../models/travel');
class TravelController {
    TravelList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const travel = yield Travel.find();
            res.json(travel);
        });
    }
    CreateTravel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const travel = new Travel(req.body);
            yield travel.save();
            res.json({ 'Status': 'Travel Created' });
        });
    }
    UpdateTravel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = req.params;
            const travel = {
                _id: req.body._id,
                operatorId: req.body.operatorId,
                boxId: req.body.boxId,
                truckId: req.body.truckId,
                origin: req.body.origin,
                destination: req.body.destination,
                comments: req.body.comments,
                loadingTime: req.body.loadingTime,
                downloadTime: req.body.downloadTime,
                arriveTime: req.body.arriveTime,
                arriveCustomerTime: req.body.arriveCustomerTime
            };
            yield Travel.findByIdAndUpdate(_id, { $set: travel }, { new: true });
            res.json({ 'Status': 'Travel Updated' });
        });
    }
    DeleteTravel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Travel.findByIdAndRemove(req.params._id);
            res.json({ 'Status': 'Travel Deleted' });
        });
    }
}
exports.travelController = new TravelController;
