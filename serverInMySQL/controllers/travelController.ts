import { Request, Response} from 'express';

import pool from '../databases/mysql';
class TravelController{


  public async ListTravel (req :Request, res:Response){
    const travel = await pool.query('SELECT * FROM Travel');
    res.json(travel);
  }

  public async createTravel (req :Request, res:Response): Promise<void> {
    await pool.query('INSERT INTO Travel set ?', [req.body])
    res.json({message: 'Travel created'});
    
  }

  public async deleteTravel (req :Request, res:Response){
    const { id } = req.params;
    await pool.query('DELETE FROM Travel WHERE id = ?',[id])    
    res.json({message: 'Travel where id = '+ id +' delete'});
  }
  public async updateTravel (req :Request, res:Response){
    const { id } = req.params;
    await pool.query('UPDATE Travel set ? WHERE id = ?',[req.body,id]);
    res.json({message: 'Travel where id = '+ id +' update'});
  }


}
export const travelController = new TravelController();