import { Request, Response} from 'express';

import pool from '../databases/mysql';
class RegisterController{

  public async createUser (req :Request, res:Response): Promise<void> {
    await pool.query('INSERT INTO Users set ?', [req.body])
    res.json({message: 'User created'});
    
  }
}
export const registerController = new RegisterController();