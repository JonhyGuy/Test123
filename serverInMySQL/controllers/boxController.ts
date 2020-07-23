import { Request, Response} from 'express';
const Box = require('../models/box');
import pool from '../databases/mysql';
class boxController{


  public async ListBoxes (req :Request, res:Response){
    const box = await pool.query('SELECT * FROM Box');
    res.json( box );
    
  }
  public async BoxesList( req:Request, res: Response){
    const box = await Box.find();
    res.json(box);
  }

  public async createBox (req :Request, res:Response): Promise<void> {
    const box = new Box(req.body);
    await box.save();
    await pool.query('INSERT INTO Box set ?', [req.body]);
    res.json({message: 'Box created'});
  }


  public async deleteBox (req :Request, res:Response){
    const { _id } = req.params;
    await pool.query('DELETE FROM Box WHERE _id = ?',[_id]);
    await Box.findByIdAndRemove(req.params._id);    
    res.json({message: 'Box where '+ _id +' delete'});
  }

  public async updateBox (req :Request, res:Response){
    const { _id } = req.params;
    const box = {
      _id: req.body._id,
      model: req.body.model,
      type: req.body.type,
      km:req.body.km,
      serialNumber: req.body.serialNumber,
      brand: req.body.brand
    } 
    await pool.query('UPDATE Box set ? WHERE _id = ?',[req.body,_id]);
    await Box.findByIdAndUpdate(_id, {$set:box},{new: true})
    res.json({message: 'Box where '+ _id +' update'});
  }

}
export const BoxController = new boxController();