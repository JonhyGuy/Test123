import {Router} from 'express';
import { config } from 'process';
import {tireController} from '../controllers/tireController';

class TireRoutes{

  public router: Router = Router();

  constructor(){
    this.config();
  }

  config(){
    // CAJAS
    this.router.get('/tires',tireController.TiresList);
    this.router.delete('/tires/:_id',tireController.DeleteTire);
    this.router.post('/tires/add',tireController.CreateTire);

    this.router.put('/tires/edit/:_id',tireController.UpdateTire);

  }
}

const tireRouter = new TireRoutes;
export default tireRouter.router;