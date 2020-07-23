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
exports.indexController = void 0;

const mysql_1 = __importDefault(require("../databases/mysql"));
class IndexController {
    index(req, res) {
        res.json({ text: 'login' });
    }
    ListBoxes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const box = yield mysql_1.default.query('SELECT * FROM Box');
            res.json(box);
        });
    }
    createBox(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield mysql_1.default.query('INSERT INTO Box set ?', [req.body]);
            res.json({ message: 'Box created' });
        });
    }
    deleteBox(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield mysql_1.default.query('DELETE FROM Box WHERE id = ?', [id]);
            res.json({ message: 'Box where ' + id + ' delete' });
        });
    }
    updateBox(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield mysql_1.default.query('UPDATE Box set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Box where ' + id + ' update' });
        });
    }
}
exports.indexController = new IndexController();
