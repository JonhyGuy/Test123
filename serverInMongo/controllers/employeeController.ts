import { Request, Response } from 'express';
const Employee = require('../models/employee')
class EmployeeController{
  
  public async EmployeesList( req:Request, res: Response){
    const employee = await Employee.find();
    res.json(employee);
  }

  public async CreateEmployee ( req:Request, res:Response){
    const employee = new Employee(req.body);
    await employee.save();
    res.json({'Status': 'Employee Created'});
  }

  public async UpdateEmployee ( req:Request, res:Response){
    const { _id } = req.params;
    const employee = {
      _id: req.body._id,
      userId: req.body.userId,
      name: req.body.name,
      cellphone: req.body.cellphone,
      address: req.body.address,
      secondaryCellphone: req.body.secondaryCellphone,
      driversLicense: req.body.driversLicense,
      typeLicense: req.body.typeLicense,
      licenseDueDate: req.body.licenseDueDate,
      phychophysicistTest: req.body.phychophysicistTest,
      testDate: req.body.testDate,
      testExpirationDate: req.body.testExpirationDate,
      licenseDocument: req.body.licenseDocument,
      ifeDocument: req.body.ifeDocument,
      ssDocument: req.body.ssDocument,
      photo: req.body.photo,
      infonavit: req.body.infonavit,
      salary: req.body.salary
    }
    await Employee.findByIdAndUpdate(_id, {$set:employee},{new: true})
    res.json({'Status': 'Employee Updated'})
  }

  public async DeleteEmployee ( req:Request, res:Response){
    await Employee.findByIdAndRemove(req.params._id);
    res.json({'Status': 'Employee Deleted'})
  }

}


export const employeeController = new EmployeeController