import {Router} from 'express';
import { config } from 'process';

import {employeeController} from '../controllers/employeeController';

class EmployeeRoutes{

  public router: Router = Router();

  constructor(){
    this.config();
  }

  config(){
    // Employees
    // Employees List Component
    // Get all Employees
    this.router.get('/employees', employeeController.ListEmployees);
    // Delete a employee
    this.router.delete('/employees/:id',employeeController.deleteEmployee);

    // Employees edit Component
    // Create a employee
    this.router.post('/employees/add',employeeController.createEmployee);

    // Update a employee
    this.router.put('/employees/edit/:id', employeeController.updateEmployee);
  }
}

const employeeRouter = new EmployeeRoutes;
export default employeeRouter.router;