import * as express from 'express';
import { Employee } from '../models/Employee';
import { Address } from '../models/Address';
import { Association } from 'sequelize/types';

export class EmployeeController{
  static store(req: express.Request, res: express.Response){
    
    const { cep_id } = req.params;
    const { name, email, cpf, telephone, cellphone, rg, num_address, comp_address } = req.body;
    Address.findByPk(cep_id).then(address => {
      if (address === null){
        return res.status(400).json({ error : 'Address not found' })
      }
    });

    Employee.create({
      name, email, cpf, telephone, cellphone, rg, cep_id, num_address, comp_address 
    }).then(client => {
      return res.json(client);
    }).catch(error => {
      console.log(error);
    });
  }

  static index(req: express.Request, res: express.Response) {

    Employee.findAll().then(employees => {
      return res.json(employees);
    });
  }

  static show(req: express.Request, res: express.Response){

    const { id } = req.params;
    Employee.findByPk(id, {
      include: [
        {
          association : 'address', 
          attributes: { exclude : ['createdAt', 'updatedAt']}
        },
        
      ],
      attributes: { exclude : ['createdAt', 'updatedAt']}
      
    }).then(employee => {
      if (employee === null) 
        return res.status(404).json({ error : 'User not found'} );

      return res.json(employee);
    }).catch(error => {
      console.log(error);
    });
    
  }
}