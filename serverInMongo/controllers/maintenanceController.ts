import { Request, Response } from 'express';
const Maintenance = require('../models/maintenance')
class MaintenanceController{
  
  public async MaintenancesList( req:Request, res: Response){
    const maintenance = await Maintenance.find();
    res.json(maintenance);
  }

  public async CreateMaintenance ( req:Request, res:Response){
    const maintenance = new Maintenance(req.body);
    await maintenance.save();
    res.json({'Status': 'Maintenance Created'});
  }

  public async UpdateMaintenance ( req:Request, res:Response){
    const { _id } = req.params;
    const maintenance = {
      _id: req.body._id,
      truckId: req.body.truckId,
      boxId: req.body.boxId,
      mechanic: req.body.mechanic,
      endDate: req.body.endDate,
      reasons: req.body.reasons,
      comments: req.body.comments,
      starDate: req.body.starDate
    }
    await Maintenance.findByIdAndUpdate(_id, {$set:maintenance},{new: true})
    res.json({'Status': 'Maintenance Updated'})
  }

  public async DeleteMaintenance ( req:Request, res:Response){
    await Maintenance.findByIdAndRemove(req.params._id);
    res.json({'Status': 'Maintenance Deleted'})
  }
}


export const maintenanceController = new MaintenanceController