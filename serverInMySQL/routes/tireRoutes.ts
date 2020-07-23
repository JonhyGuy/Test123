import {Router} from 'express';
import { config } from 'process';

import {TireController} from '../controllers/tireController';

class TireRoutes{

  public router: Router = Router();

  constructor(){
    this.config();
  }

  config(){
    // Tires
    // Tires List Component
    
    // Get all tires
    this.router.get('/tires', TireController.ListTires);

    // Delete a tire
    this.router.delete('/tires/:id',TireController.deleteTire);

    // Tires edit Component
    // Create a Tire
    this.router.post('/tires/add',TireController.createTire);

    // Update a Tire
    this.router.put('/tires/edit/:id', TireController.updateTire);

  }
}

const tireRouter = new TireRoutes;
export default tireRouter.router;