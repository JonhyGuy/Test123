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
exports.maintenanceController = void 0;
const mysql_1 = __importDefault(require("../databases/mysql"));
class MaintenanceController {
    index(req, res) {
        res.json({ text: 'login' });
    }
    ListMaintenances(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const maintenance = yield mysql_1.default.query('SELECT * FROM Maintenance');
            res.json(maintenance);
        });
    }
    createMaintenance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield mysql_1.default.query('INSERT INTO Maintenance set ?', [req.body]);
            res.json({ message: 'Maintenance created' });
        });
    }
    deleteMaintenace(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield mysql_1.default.query('DELETE FROM Maintenance WHERE id = ?', [id]);
            res.json({ message: 'Maintenace where ' + id + ' delete' });
        });
    }
    updateMaintenace(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield mysql_1.default.query('UPDATE Maintenance set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Maintenace where ' + id + ' update' });
        });
    }
}
exports.maintenanceController = new MaintenanceController();
