import {Router} from 'express';
import { config } from 'process';
import {maintenanceController} from '../controllers/maintenanceController';

class MaintenanceRoutes{

  public router: Router = Router();

  constructor(){
    this.config();
  }

  config(){
    // CAJAS
    this.router.get('/maintenances',maintenanceController.MaintenancesList);
    this.router.delete('/maintenances/:_id',maintenanceController.DeleteMaintenance);
    this.router.post('/maintenances/add',maintenanceController.CreateMaintenance);

    this.router.put('/maintenances/edit/:_id',maintenanceController.UpdateMaintenance);

  }
}

const maintenanceRouter = new MaintenanceRoutes;
export default maintenanceRouter.router;