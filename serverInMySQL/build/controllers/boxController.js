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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxController = void 0;
const Box = require('../models/box');
const mysql_1 = __importDefault(require("../databases/mysql"));
class boxController {
    ListBoxes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const box = yield mysql_1.default.query('SELECT * FROM Box');
            res.json(box);
        });
    }
    BoxesList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const box = yield Box.find();
            res.json(box);
        });
    }
    createBox(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const box = new Box(req.body);
            yield box.save();
            yield mysql_1.default.query('INSERT INTO Box set ?', [req.body]);
            res.json({ message: 'Box created' });
        });
    }
    deleteBox(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = req.params;
            yield mysql_1.default.query('DELETE FROM Box WHERE _id = ?', [_id]);
            yield Box.findByIdAndRemove(req.params._id);
            res.json({ message: 'Box where ' + _id + ' delete' });
        });
    }
    updateBox(req, res) {
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
            yield mysql_1.default.query('UPDATE Box set ? WHERE _id = ?', [req.body, _id]);
            yield Box.findByIdAndUpdate(_id, { $set: box }, { new: true });
            res.json({ message: 'Box where ' + _id + ' update' });
        });
    }
}
exports.BoxController = new boxController();
