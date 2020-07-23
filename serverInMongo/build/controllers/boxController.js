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
exports.boxController = void 0;
const Box = require('../models/box');
class BoxController {
    BoxesList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const box = yield Box.find();
            res.json(box);
        });
    }
    CreateBox(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const box = new Box(req.body);
            yield box.save();
            res.json({ 'Status': 'Box Created' });
        });
    }
    UpdateBox(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = req.params;
            const box = {
                _id: req.body._id,
                model: req.body.model,
                type: req.body.type,
                km: req.body.km,
                serialNumber: req.body.serialNumber,
                brand: req.body.brand
            };
            yield Box.findByIdAndUpdate(_id, { $set: box }, { new: true });
            res.json({ 'Status': 'Box Updated' });
        });
    }
    DeleteBox(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Box.findByIdAndRemove(req.params._id);
            res.json({ 'Status': 'Box Deleted' });
        });
    }
}
exports.boxController = new BoxController;
