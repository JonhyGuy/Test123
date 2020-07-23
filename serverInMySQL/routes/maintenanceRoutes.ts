import {Router} from 'express';
import { config } from 'process';

import {maintenanceController} from '../controllers/maintenanceController';

class MaintenanceRoutes{

  public router: Router = Router();

  constructor(){
    this.config();
  }

  config(){
    // maintenances
    // maintenances List Component
    // Get all maintenances
    this.router.get('/maintenances', maintenanceController.ListMaintenances);
    // Delete a box
    this.router.delete('/maintenances/:id',maintenanceController.deleteMaintenace);

    // maintenances edit Component
    // Create a Box
    this.router.post('/maintenances/add',maintenanceController.createMaintenance);

    // Update a Box
    this.router.put('/maintenances/edit/:id', maintenanceController.updateMaintenace);
  }
}

const maintenaceRouter = new MaintenanceRoutes;
export default maintenaceRouter.router;