import {Router} from 'express';
import { config } from 'process';

import {travelController} from '../controllers/travelController';

class TravelRoutes{

  public router: Router = Router();

  constructor(){
    this.config();
  }

  config(){
    // Travel
    // Travel List Component

    // Get all travel
    this.router.get('/travel', travelController.ListTravel);

    // Delete a travel
    this.router.delete('/travel/:id',travelController.deleteTravel);

    // Travel edit Component
    // Create a travel
    this.router.post('/travel/add',travelController.createTravel);

    // Update a Travel
    this.router.put('/travel/edit/:id', travelController.updateTravel);

  }
}

const travelRouter = new TravelRoutes;
export default travelRouter.router;