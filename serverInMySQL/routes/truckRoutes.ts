import {Router} from 'express';
import { config } from 'process';

import {truckController} from '../controllers/truckController';

class TruckRoutes{

  public router: Router = Router();

  constructor(){
    this.config();
  }

  config(){
    // trucks
    // trucks List Component
    // Get all trucks
    this.router.get('/trucks', truckController.ListTrcks);
    // Delete a box
    this.router.delete('/trucks/:id',truckController.deleteTruck);

    // trucks edit Component
    // Create a Box
    this.router.post('/trucks/add',truckController.createTruck);

    // Update a Box
    this.router.put('/trucks/edit/:id', truckController.updateTruck);
  }
}

const truckRouter = new TruckRoutes;
export default truckRouter.router;