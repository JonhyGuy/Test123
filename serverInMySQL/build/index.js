"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const boxRoutes_1 = __importDefault(require("./routes/boxRoutes"));
const tireRoutes_1 = __importDefault(require("./routes/tireRoutes"));
const truckRoutes_1 = __importDefault(require("./routes/truckRoutes"));
const travelRoutes_1 = __importDefault(require("./routes/travelRoutes"));
const employeeRoutes_1 = __importDefault(require("./routes/employeeRoutes"));
const maintenanceRoutes_1 = __importDefault(require("./routes/maintenanceRoutes"));
const registerRoutes_1 = __importDefault(require("./routes/registerRoutes"));
require("./databases/mongo");
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        // Auth
        this.app.use('/api/auth', registerRoutes_1.default);
        // Workshop
        this.app.use('/api/workshop', boxRoutes_1.default);
        this.app.use('/api/workshop', tireRoutes_1.default);
        this.app.use('/api/workshop', truckRoutes_1.default);
        this.app.use('/api/workshop', maintenanceRoutes_1.default);
        // Travel
        this.app.use('/api/travel', travelRoutes_1.default);
        // Paysheet
        this.app.use('/api/paysheet', employeeRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
