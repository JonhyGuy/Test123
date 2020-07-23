import { Request, Response } from 'express';
const Tire = require('../models/tire')
class TireController{
  
  public async TiresList( req:Request, res: Response){
    const tire = await Tire.find();
    res.json(tire);
  }

  public async CreateTire ( req:Request, res:Response){
    const tire = new Tire(req.body);
    await tire.save();
    res.json({'Status': 'Tire Created'});
  }

  public async UpdateTire ( req:Request, res:Response){
    const { _id } = req.params;
    const tire = {
      _id:  req.body._id,
      boxId: req.body.boxId,
      truckId: req.body.truckId,
      serialNumber: req.body.serialNumber,
      position: req.body.position,
      mileage: req.body.mileage
    }
    await Tire.findByIdAndUpdate(_id, {$set:tire},{new: true})
    res.json({'Status': 'Tire Updated'})
  }

  public async DeleteTire ( req:Request, res:Response){
    await Tire.findByIdAndRemove(req.params._id);
    res.json({'Status': 'Tire Deleted'})
  }

}


export const tireController = new TireController