import { Request, Response } from 'express';
const Travel = require('../models/travel')
class TravelController{
  
  public async TravelList( req:Request, res: Response){
    const travel = await Travel.find();
    res.json(travel);
  }

  public async CreateTravel ( req:Request, res:Response){
    const travel = new Travel(req.body);
    await travel.save();
    res.json({'Status': 'Travel Created'});
  }

  public async UpdateTravel ( req:Request, res:Response){
    const { _id } = req.params;
    const travel = {
      _id: req.body._id,
      operatorId: req.body.operatorId,
      boxId: req.body.boxId,
      truckId: req.body.truckId,
      origin: req.body.origin,
      destination: req.body.destination,
      comments: req.body.comments,
      loadingTime: req.body.loadingTime,
      downloadTime: req.body.downloadTime,
      arriveTime: req.body.arriveTime,
      arriveCustomerTime: req.body.arriveCustomerTime
    }
    await Travel.findByIdAndUpdate(_id, {$set:travel},{new: true})
    res.json({'Status': 'Travel Updated'})
  }

  public async DeleteTravel ( req:Request, res:Response){
    await Travel.findByIdAndRemove(req.params._id);
    res.json({'Status': 'Travel Deleted'})
  }

}


export const travelController = new TravelController