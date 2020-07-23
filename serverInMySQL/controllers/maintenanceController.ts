import { Request, Response} from 'express';

import pool from '../databases/mysql';
class MaintenanceController{

  public index( req:Request, res: Response){
    res.json({text : 'login'});
  }

  public async ListMaintenances (req :Request, res:Response){
    const maintenance = await pool.query('SELECT * FROM Maintenance');
    res.json(maintenance);
  }

  public async createMaintenance (req :Request, res:Response): Promise<void> {
    await pool.query('INSERT INTO Maintenance set ?', [req.body])
    res.json({message: 'Maintenance created'});
    
  }

  public async deleteMaintenace (req :Request, res:Response){
    const { id } = req.params;
    await pool.query('DELETE FROM Maintenance WHERE id = ?',[id])    
    res.json({message: 'Maintenace where '+ id +' delete'});
  }
  public async updateMaintenace (req :Request, res:Response){
    const { id } = req.params;
    await pool.query('UPDATE Maintenance set ? WHERE id = ?',[req.body,id]);
    res.json({message: 'Maintenace where '+ id +' update'});
  }


}
export const maintenanceController = new MaintenanceController();