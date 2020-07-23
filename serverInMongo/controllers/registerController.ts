import { Request, Response } from 'express';
const User = require('../models/user')
class RegisterController{
  
  public async CreateUser ( req:Request, res:Response){
    const user = new User(req.body);
    await user.save();
    res.json({'Status': 'User Created'});
  }

}


export const registerController = new RegisterController