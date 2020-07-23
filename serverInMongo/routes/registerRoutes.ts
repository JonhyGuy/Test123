import {Router} from 'express';
import { config } from 'process';
import {registerController} from '../controllers/registerController';

class RegisterRoutes{

  public router: Router = Router();

  constructor(){
    this.config();
  }

  config(){
    this.router.post('/register',registerController.CreateUser);

  }
}

const registerRouter = new RegisterRoutes;
export default registerRouter.router;