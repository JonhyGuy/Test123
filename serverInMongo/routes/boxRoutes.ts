import {Router} from 'express';
import { config } from 'process';
import {boxController} from '../controllers/boxController';

class BoxRoutes{

  public router: Router = Router();

  constructor(){
    this.config();
  }

  config(){
    // CAJAS
    this.router.get('/boxes',boxController.BoxesList);
    this.router.delete('/boxes/:_id',boxController.DeleteBox);
    this.router.post('/boxes/add',boxController.CreateBox);

    this.router.put('/boxes/edit/:_id',boxController.UpdateBox);

  }
}

const boxRouter = new BoxRoutes;
export default boxRouter.router;