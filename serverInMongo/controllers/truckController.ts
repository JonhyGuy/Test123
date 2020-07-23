import { Request, Response } from 'express';
const Truck = require('../models/truck')
class TruckController{
  
  public async TrucksList( req:Request, res: Response){
    const truck = await Truck.find();
    res.json(truck);
  }

  public async CreateTruck ( req:Request, res:Response){
    const truck = new Truck(req.body);
    await truck.save();
    res.json({'Status': 'Box Created'});
  }

  public async UpdateTruck ( req:Request, res:Response){
    const { _id } = req.params;
    const truck = {
      _id: req.body._id,
      model: req.body.model,
      brand: req.body.brand,
      serialNumber: req.body.serialNumber,
      motorNumber: req.body.motorNumber,
      maintenancePeriod: req.body.maintenancePeriod,
      inicialMilage: req.body.inicialMilage,
      milage: req.body.milage,
      circulationCard: req.body.circulationCard,
      airbag: req.body.airbag,
      dock: req.body.dock
    }
    await Truck.findByIdAndUpdate(_id, {$set:truck},{new: true})
    res.json({'Status': 'Truck Updated'})
  }

  public async DeleteTruck ( req:Request, res:Response){
    await Truck.findByIdAndRemove(req.params._id);
    res.json({'Status': 'Truck Deleted'})
  }

}


export const truckController = new TruckController