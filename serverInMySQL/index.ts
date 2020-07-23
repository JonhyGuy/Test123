import express, {Application} from  'express';
import morgan from 'morgan';
import cors from 'cors';

import boxRoutes from './routes/boxRoutes';
import tireRoutes from './routes/tireRoutes';
import truckRoutes from './routes/truckRoutes';
import travelRoutes from './routes/travelRoutes';
import employeeRoutes from './routes/employeeRoutes';
import maintenanceRoutes from './routes/maintenanceRoutes';
import registerRoutes from './routes/registerRoutes';

import './databases/mongo';

class Server {

  public app:Application;

  constructor(){
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set('port', process.env.PORT || 3000);
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:false}));
  }

  routes(): void {
    // Auth

    this.app.use('/api/auth', registerRoutes);

    // Workshop

    this.app.use('/api/workshop', boxRoutes);
    this.app.use('/api/workshop', tireRoutes);
    this.app.use('/api/workshop', truckRoutes);
    this.app.use('/api/workshop', maintenanceRoutes);
    
    // Travel

    this.app.use('/api/travel', travelRoutes);
    
    // Paysheet

    this.app.use('/api/paysheet', employeeRoutes);
  }

  start(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log('Server on port ', this.app.get('port'));
    });
  }
}
const server = new Server();

server.start();