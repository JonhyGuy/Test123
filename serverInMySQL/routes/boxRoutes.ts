import {Router} from 'express';
import { config } from 'process';

import {BoxController} from '../controllers/boxController';

class BoxRoutes{

  public router: Router = Router();

  constructor(){
    this.config();
  }

  config(){
    // Boxes
    // Boxes List Component
    // Get all Boxes
    this.router.get('/boxes', BoxController.ListBoxes);
    this.router.get('/boxess', BoxController.BoxesList);
    // Delete a box
    this.router.delete('/boxes/:_id',BoxController.deleteBox);

    // Boxes edit Component
    // Create a Box
    this.router.post('/boxes/add',BoxController.createBox);
    

    // Update a Box
    this.router.put('/boxes/edit/:_id', BoxController.updateBox);
  }
}

const boxRouter = new BoxRoutes;
export default boxRouter.router;