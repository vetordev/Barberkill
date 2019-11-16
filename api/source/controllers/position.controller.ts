import * as express from 'express';
import { Position } from '../models/Position';
import { Employee } from '../models/Employee';

export class PositionController {
   static async store(req: express.Request, res: express.Response){
    
    
    const { employee_id } = req.params;
    const { position, salary } = req.body;

    const employee: any =  await Employee.findByPk(employee_id);

    if (employee === null)
      return res.status(404).json({error : "Employee not found"});
          
    //Procura uma position, se não encontrar a cria
    Position.findOrCreate({
      where: { position },
      //Resto dos dados (Caso for criar)
      defaults: { salary },
      
      
    }).then( ([position, created]) => {      
      employee.addPosition(position);
      return res.json(position);
    });
    
  }

  static index(req: express.Request, res: express.Response){
    
  }
}