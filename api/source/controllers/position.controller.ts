import * as express from 'express';
import { Position } from '../models/Position';
import { Employee } from '../models/Employee';
import { where } from 'sequelize/types';

export class PositionController {
   static async store(req: express.Request, res: express.Response){
    
    const { employee_id } = req.params;
    const { name, salary } = req.body;

    const employee: any =  await Employee.findByPk(employee_id).then(employee => {
      if (employee === null)
        return res.status(404).json({error : "Employee not found"});
    })

    //Procura uma position, se não encontrar a cria
    Position.findOrCreate({
      where: { name },
      //Resto dos dados (Caso for criar)
      defaults: { salary }
    }).then( ([position, created]) => {
      employee.addPosition(position);
      return res.json(position);
    });
    
  }
}