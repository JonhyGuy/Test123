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
exports.truckController = void 0;
const mysql_1 = __importDefault(require("../databases/mysql"));
class TruckController {
    ListTrcks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const truck = yield mysql_1.default.query('SELECT * FROM Trucks');
            res.json(truck);
        });
    }
    createTruck(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield mysql_1.default.query('INSERT INTO Trucks set ?', [req.body]);
            res.json({ message: 'Truck created' });
        });
    }
    deleteTruck(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield mysql_1.default.query('DELETE FROM Trucks WHERE id = ?', [id]);
            res.json({ message: 'Truck where ' + id + ' delete' });
        });
    }
    updateTruck(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield mysql_1.default.query('UPDATE Trucks set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Trucks where ' + id + ' update' });
        });
    }
}
exports.truckController = new TruckController();
