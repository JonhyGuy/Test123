import {Router} from 'express';
import { config } from 'process';
import {travelController} from '../controllers/travelController';

class TravelRoutes{

  public router: Router = Router();

  constructor(){
    this.config();
  }

  config(){
    // CAJAS
    this.router.get('/travels',travelController.TravelList);
    this.router.delete('/travels/:_id',travelController.DeleteTravel);
    this.router.post('/travels/add',travelController.CreateTravel);

    this.router.put('/travels/edit/:_id',travelController.UpdateTravel);

  }
}

const travelRouter = new TravelRoutes;
export default travelRouter.router;