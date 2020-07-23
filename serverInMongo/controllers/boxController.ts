import { Request, Response } from 'express';
const Box = require('../models/box');
class BoxController{
  
  public async BoxesList( req:Request, res: Response){
    const box = await Box.find();
    res.json(box);
  }

  public async CreateBox ( req:Request, res:Response){
    const box = new Box(req.body);
    await box.save();
    res.json({'Status': 'Box Created'});
  }

  public async UpdateBox ( req:Request, res:Response){
    const { _id } = req.params;
    const box = {
      _id: req.body._id,
      model: req.body.model,
      type: req.body.type,
      km:req.body.km,
      serialNumber: req.body.serialNumber,
      brand:req.body.brand
    }
    await Box.findByIdAndUpdate(_id, {$set:box},{new: true})
    res.json({'Status': 'Box Updated'})
  }

  public async DeleteBox ( req:Request, res:Response){
    await Box.findByIdAndRemove(req.params._id);
    res.json({'Status': 'Box Deleted'})
  }

}


export const boxController = new BoxController