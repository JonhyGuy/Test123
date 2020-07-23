import {Router} from 'express';
import { config } from 'process';
import {truckController} from '../controllers/truckController';

class TruckRoutes{

  public router: Router = Router();

  constructor(){
    this.config();
  }

  config(){
    // CAJAS
    this.router.get('/trucks',truckController.TrucksList);
    this.router.delete('/trucks/:_id',truckController.DeleteTruck);
    this.router.post('/trucks/add',truckController.CreateTruck);

    this.router.put('/trucks/edit/:_id',truckController.UpdateTruck);

  }
}

const truckRouter = new TruckRoutes;
export default truckRouter.router;