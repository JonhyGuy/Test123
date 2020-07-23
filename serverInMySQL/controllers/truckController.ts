import { Request, Response} from 'express';

import pool from '../databases/mysql';
class TruckController{

  public async ListTrcks (req :Request, res:Response){
    const truck = await pool.query('SELECT * FROM Trucks');
    res.json(truck);
  }

  public async createTruck (req :Request, res:Response): Promise<void> {
    await pool.query('INSERT INTO Trucks set ?', [req.body])
    res.json({message: 'Truck created'});
    
  }

  public async deleteTruck (req :Request, res:Response){
    const { id } = req.params;
    await pool.query('DELETE FROM Trucks WHERE id = ?',[id])    
    res.json({message: 'Truck where '+ id +' delete'});
  }
  public async updateTruck (req :Request, res:Response){
    const { id } = req.params;
    await pool.query('UPDATE Trucks set ? WHERE id = ?',[req.body,id]);
    res.json({message: 'Trucks where '+ id +' update'});
  }


}
export const truckController = new TruckController();