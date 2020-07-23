import { Request, Response} from 'express';

import pool from '../databases/mysql';
class tireController{


  public async ListTires (req :Request, res:Response){
    const tire = await pool.query('SELECT * FROM Tire');
    res.json(tire);
  }

  public async createTire (req :Request, res:Response): Promise<void> {
    await pool.query('INSERT INTO Tire set ?', [req.body])
    res.json({message: 'Tire created'});
    
  }

  public async deleteTire (req :Request, res:Response){
    const { id } = req.params;
    await pool.query('DELETE FROM Tire WHERE id = ?',[id])    
    res.json({message: 'Tire where id = '+ id +' delete'});
  }
  public async updateTire (req :Request, res:Response){
    const { id } = req.params;
    await pool.query('UPDATE Tire set ? WHERE id = ?',[req.body,id]);
    res.json({message: 'Tire where id = '+ id +' update'});
  }


}
export const TireController = new tireController();