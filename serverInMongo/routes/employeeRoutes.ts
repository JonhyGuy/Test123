import {Router} from 'express';
import { config } from 'process';
import {employeeController} from '../controllers/employeeController';

class BoxRoutes{

  public router: Router = Router();

  constructor(){
    this.config();
  }

  config(){
    // CAJAS
    this.router.get('/employees',employeeController.EmployeesList);
    this.router.delete('/employees/:_id',employeeController.DeleteEmployee);
    this.router.post('/employees/add',employeeController.CreateEmployee);

    this.router.put('/employees/edit/:_id',employeeController.UpdateEmployee);

  }
}

const boxRouter = new BoxRoutes;
export default boxRouter.router;