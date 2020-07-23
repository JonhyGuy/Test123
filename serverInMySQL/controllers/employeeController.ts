import { Request, Response} from 'express';

import pool from '../databases/mysql';
class EmployeeController{

  public async ListEmployees (req :Request, res:Response){
    const employee = await pool.query('SELECT * FROM Operator');
    res.json(employee);
  }

  public async createEmployee (req :Request, res:Response): Promise<void> {
    await pool.query('INSERT INTO Operator set ?', [req.body])
    res.json({message: 'Employee created'});
    
  }

  public async deleteEmployee (req :Request, res:Response){
    const { id } = req.params;
    await pool.query('DELETE FROM Operator WHERE id = ?',[id])    
    res.json({message: 'Employee where '+ id +' delete'});
  }
  public async updateEmployee (req :Request, res:Response){
    const { id } = req.params;
    await pool.query('UPDATE Operator set ? WHERE id = ?',[req.body,id]);
    res.json({message: 'Employee where '+ id +' update'});
  }


}
export const employeeController = new EmployeeController();